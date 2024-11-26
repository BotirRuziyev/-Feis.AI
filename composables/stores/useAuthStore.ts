import { navigateTo, useCookie } from 'nuxt/app';
import { defineStore } from 'pinia';
import {
  apiFetchGet,
  useApiFetch,
  useApiFetchRefreshToken,
} from '~/composables/useApiFetch';

type AccessToken = string;
type RefreshToken = string;
declare type LoginResult = {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
};

interface User {
  id: number;
  email: string;
  fullName: string;
  isAdmin: boolean;
  finishedTrainingNotifyViaEmail: boolean;
  finishedTrainingNotifyViaPush: boolean;
  finishedGeneratingNotifyViaEmail: boolean;
  finishedGeneratingNotifyViaPush: boolean;

  subscriptionEndDate: string | Date;
  subscriptionStartDate: string | Date;
  subscriptionFacesCount: number;
  subscriptionGenerationsCount: number;
}

const expires = new Date();
expires.setDate(expires.getDate() + 20);

// https://dev.to/codybontecou/nuxt-3-and-pinia-473k
export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    const user = useCookie<User>('user');
    const accessToken = useCookie<AccessToken>('accessToken');
    const refreshToken = useCookie<RefreshToken>('refreshToken');

    return {
      user: user.value,
      accessToken: accessToken.value,
      refreshToken: refreshToken.value,
    };
  },
  actions: {
    async login(form: object): Promise<{ err: boolean; msg: string }> {
      const res: { err: boolean; msg: string } = { err: false, msg: '' };

      const result = await useApiFetch<LoginResult>(
        '/user/login',
        'POST',
        { ...form },
        null,
        false,
      );
      const { data, error } = result;

      if (error.value) {
        res.err = true;
        res.msg = error.value?.data?.message;
      }
      if (!error.value && data.value) {
        const accessToken = useCookie<AccessToken>('accessToken', {
          expires,
        });
        const refreshToken = useCookie<RefreshToken>('refreshToken', {
          expires,
        });

        this.accessToken = accessToken.value = data.value.accessToken;
        this.refreshToken = refreshToken.value = data.value.refreshToken;

        await this.getUserApi();
        res.err = false;
      }

      return res;
    },
    async logout(): Promise<any> {

      const user = useCookie<User | null>('user');
      const accessToken = useCookie<AccessToken | null>('accessToken');
      const refreshToken = useCookie<RefreshToken | null>('refreshToken');

      refreshToken.value = null;
      accessToken.value = null;
      user.value = null;
      window.location.href = '/signup'
      this.$reset();
      // return navigateTo('/login')
      // window.location.href = '/login';
    },
    async getUserApi() {
      const { data, refresh } = await useApiFetch<any>('/user/current', 'GET');
      if (data.value) {
        const user = useCookie<User>('user');

        const dataObj: User = { ...data.value };

        this.user = user.value = dataObj
      }

      return this.user;
    },
    async updateToken() {
      const { data }: any = await useApiFetchRefreshToken<LoginResult>(
        '/user/refreshToken',
        'PATCH',
      );
      if (data.value) {
        const accessToken = useCookie<AccessToken>('accessToken', {
          expires,
        });
        const refreshToken = useCookie<RefreshToken>('refreshToken', {
          expires,
        });

        this.accessToken = accessToken.value = data.value.accessToken;
        this.refreshToken = refreshToken.value = data.value.refreshToken;

        this.getUserApi();
      }
    },
  },
  getters: {
    getUser: (state) => state.user,
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
  },
});
