<template>
  <div >
    <h1>Notifications</h1>
    <div class="app-base-border-radius app-base-margin-top-bottom" style="width: 100%"/>

    <div class="notification-item" v-for="item in searchResult.items">
      <h4>{{ item?.data?.title }}</h4>
      <h4>{{ item?.createdAt }}</h4>
      <h4>{{ item?.data?.message }}</h4>
      <pre>{{ item.data }}</pre>
    </div>

<!--    <nuxt-link :to="{ name: 'myFiles-id', params: { id: item.id }}" v-for="item in searchResult.items">-->
<!--      <p>prompt: {{ item.prompt }}</p>-->
<!--      <p>aspectRatio: {{ item.aspectRatio }}</p>-->
<!--      <p>loraScale: {{ item.loraScale }}</p>-->
<!--      <img style="width: 100%;max-width: 300px" :src="item.images[0]">-->
<!--      <pre>{{ item.images[0] }}</pre>-->
<!--    </nuxt-link>-->

  </div>
</template>

<script lang="ts">
import { useAuthStore } from '~/composables/stores/useAuthStore';
import {apiFetchGet, useApiFetch} from '#imports';
import {ref, reactive} from 'vue';
import {SearchForm} from '~/model/search.form';
import {PaginationResult} from '~/model/pagination.result';

definePageMeta({  });

export default {
  components: {},
  setup() {
    const store = useAuthStore();

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<SearchForm>(new SearchForm());
    searchForm.value.limit = 500

    const getList = async (params: SearchForm) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet<PaginationResult>('/notice/app', searchForm.value);
    };

    getList(searchForm.value);

    return {
      store,
      searchForm,
      searchResult,
      getList,
    };
  },
};
</script>

<style lang="scss">

.notification-item {
  background: rgba(27, 27, 27, 1);
  margin-bottom: 15px;
  padding: 15px;
}

</style>
