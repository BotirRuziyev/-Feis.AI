<template>
  <div>

    <el-table
      :data="searchResult.items"
      border
      style="width: 100%; margin-top: 15px">
      <el-table-column type="expand">
        <template #default="{ row }">

          <div style="padding: 5px;">

            <div style="display: flex;flex-wrap: wrap;">
              <div v-for="img in row.images" style="padding: 5px;">
                <el-image
                  style="width: 200px; height: 200px;"
                  :src="img"
                  fit="cover" />
              </div>
            </div>

            <h1>Data</h1>
            <pre>{{ row }}</pre>

          </div>

        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" width="60px"/>
      <el-table-column prop="user.email" label="user"/>
      <el-table-column prop="coverImageUrl" label="coverImageUrl"/>
<!--      <el-table-column prop="customModelPath" label="customModelPath" />-->
      <el-table-column prop="zipFilePath" label="zipFilePath" />
      <el-table-column prop="hardwareType" label="hardwareType" />
      <el-table-column prop="trainingStatus" label="trainingStatus" />
      <el-table-column prop="trainedAt" label="trainedAt" />
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
    sort: 2,
    title: 'Face',
    icon: 'fa-solid fa-circle',
  },
});

export default {
  setup() {
    const store = useAuthStore();

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<SearchForm| any>(new SearchForm());
    searchForm.value.admin = true

    const getList = async (params: SearchForm) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet<PaginationResult>('/face', searchForm.value);
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
