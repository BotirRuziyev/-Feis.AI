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
      <el-table-column prop="face.id" label="Face">
        <template #default="{ row }">
          <div v-if="row?.face?.id">
            Face name: {{ row?.face?.faceName }}<br>
            Face id: {{ row?.face?.id }}
          </div>
          <span v-else>
            No Face
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="user.email" label="User"/>
      <el-table-column prop="prompt" label="prompt"/>
      <el-table-column prop="status" label="triggeredPrompt" />
      <el-table-column prop="createdAt" label="createdAt"/>
      <el-table-column prop="example" label="Example">
        <template #default="{ row }">
          <el-button @click="setExample(row.id)" type="success">
            <span v-if="row.example">Yes</span>
            <span v-else>Set example</span>
          </el-button>
        </template>
      </el-table-column>
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
    sort: 3,
    title: 'Face image generation',
    icon: 'fa-solid fa-circle',
  },
});

export default {
  setup() {
    const store = useAuthStore();

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<SearchForm|any>(new SearchForm());
    searchForm.value.admin = true

    const getList = async (params: SearchForm) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet<PaginationResult>('/faceImageGeneration', searchForm.value);
    };

    getList(searchForm.value);

    const setExample = async (id: string|number) => {
      const {data, error} = await useApiFetch<any>(`/faceImageGeneration/example/${id}`, 'PATCH', {});

      if (!error.value) {
        searchResult.value.items.splice(
          searchResult.value.items.findIndex(v => v.id === data.value.id),
          1,
          {...data.value}
        )
      }
    }

    return {
      store,

      searchForm,
      searchResult,
      getList,
      setExample,

    };
  },
};
</script>

<style lang="scss">

</style>
