<template>
  <div>

    <el-table
      :data="searchResult.items"
      border
      style="width: 100%; margin-top: 15px">
      <el-table-column type="expand">
        <template #default="{ row }">
          <h1>Response</h1>
          <pre>{{ JSON.parse(row.responseJson) }}</pre>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" width="60px"/>
      <el-table-column prop="user.email" label="User"/>
      <el-table-column prop="face.id" label="Face"/>
      <el-table-column prop="apiCallType" label="apiCallType"/>
      <el-table-column prop="status" label="status" />
      <el-table-column prop="createdAt" label="createdAt"/>
    </el-table>
    <app-pagination :params="searchResult" @change="getList"/>

  </div>
</template>

<script lang="ts">
import {apiFetchGet, useApiFetch} from '#imports';
import {ref} from 'vue';
import {SearchForm} from '~/model/search.form';
import {PaginationResult} from '~/model/pagination.result';
import {useAuthStore} from '~/composables/stores/useAuthStore';

definePageMeta({
  menu: {
    sort: 4,
    title: 'Face Log',
    icon: 'fa-solid fa-circle',
  },
});

export default {
  setup() {
    const store = useAuthStore();

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<SearchForm>(new SearchForm());

    const getList = async (params: SearchForm) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet<PaginationResult>('/faceLog', searchForm.value);
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

</style>
