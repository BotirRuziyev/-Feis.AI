import { useFetch, useRuntimeConfig } from 'nuxt/app';
// import { notification } from '~/utils/element.utils';
import { useAuthStore } from '~/composables/stores/useAuthStore';
// @ts-ignore
import * as qs from 'qs';


class Notification {
  created() {

  }

  deleted() {

  }

  error() {

  }

}

const notification = new Notification()

export const useApiFetch = async <T>(
  path: string,
  method: string,
  params?: object,
  onEvents?: any,
  showNotify: boolean = true,
) => {
  const runtimeConfig = useRuntimeConfig();
  const { apiUrl } = runtimeConfig.public;

  const store = useAuthStore();

  let body = null;
  const query = null;
  if (method === 'GET') {
    if (params) {
      const queryParams = qs.stringify(params);
      if (!path.includes('?')) {
        path = path + '?';
      }
      path = path + queryParams;
    }
  } else {
    body = params;
  }

  return useFetch<T>(() => apiUrl + path, {
    baseURL: apiUrl,
    method,
    retry: 0,
    cache: false,
    initialCache: false,
    headers: {
      Authorization: `Bearer ${store.getAccessToken}`,
    },
    body,
    // params: query,
    // credentials: 'same-origin',
    // redirect: 'follow', // manual, *follow, error
    // referrer: 'no-referrer', // no-referrer, *client
    async onResponse({ request, response, options }) {
      console.log('=== onResponse')
      if (response.status === 401 && path !== '/user/login') {
        await store.logout();
        return false;
      }

      if (showNotify) {
        if (options.method === 'PATCH' && response.ok) {
          // notification.updated()
        }
        if (options.method === 'POST' && response.ok) {
          notification.created();
        }
        if (options.method === 'DELETE' && response.ok) {
          notification.deleted();
        }

        if (!response.ok) {
          notification.error();
        }
      }
    },
    async onRequestError({ request, options, error }) {
      console.log('=== onRequestError');
      if (showNotify) {
        notification.error();
      }
    },
    ...onEvents,
  });
};

export const apiFetchGet = async <T>(path: string, params?: object) => {
  const store = useAuthStore();
  const runtimeConfig = useRuntimeConfig();
  const { apiUrl } = runtimeConfig.public;

  const queryParams = qs.stringify(params);
  if (!path.includes('?')) {
    path = path + '?';
  }
  path = path + queryParams;

  // @ts-ignore
  return $fetch<T>(apiUrl + path, {
    method: 'GET',
    retry: 0,
    // cache: false,
    // initialCache: false,
    headers: {
      Authorization: `Bearer ${store.getAccessToken}`,
      'cache-control': 'no-cache',
    },
    async onResponse({ response }): Promise<void> {
      if (response.status === 401 && path !== '/user/login') {
        await store.logout();
      }
    },
  });
};

export const useApiDownloadFetch = async <T>(path: string, params?: object) => {
  const runtimeConfig = useRuntimeConfig();
  const { apiUrl } = runtimeConfig.public;

  const store = useAuthStore();
  const queryParams = '?' + qs.stringify(params);

  const onEvents = {};
  return useFetch<T>(() => apiUrl + path + queryParams, {
    baseURL: apiUrl,
    method: 'GET',
    retry: 1,
    cache: undefined,
    initialCache: false,
    headers: {
      Authorization: `Bearer ${store.getAccessToken}`,
    },
    responseType: 'blob',
    // params: params,
    credentials: 'same-origin',
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    async onResponse({ request, response, options }) {},
    async onRequestError({ request, options, error }) {
      notification.error();
    },
    ...onEvents,
  });
};

export const downloadFunc = async (
  path: string,
  form: object,
  fileName: string,
) => {
  const { data } = await useApiDownloadFetch<any>(path, form);
  // {
  //     type: 'application/vnd.ms-excel'
  //   }
  const url = window.URL.createObjectURL(new Blob([data.value]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
};

export const useApiFetchRefreshToken = async <T>(
  path: string,
  method: string,
) => {
  const store = useAuthStore();
  const runtimeConfig = useRuntimeConfig();
  const { apiUrl } = runtimeConfig.public;

  return useFetch<T>(() => apiUrl + path, {
    baseURL: apiUrl,
    method,
    retry: 1,
    cache: undefined,
    initialCache: false,
    headers: {
      Authorization: `Bearer ${store.getRefreshToken}`,
    },
    async onResponse({ response }) {
      if (response.status === 401) {
        await store.logout();
      } else if (!response.ok) {
        notification.error();
      }
    },
    async onRequestError({ request, options, error }) {
      notification.error();
    },
  });
};
