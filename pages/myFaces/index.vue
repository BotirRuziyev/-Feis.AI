<template>
  <div >

    <h1>My Faces</h1>

    <p>
      {{ store.getUser?.subscriptionFacesCount - store.getUser?.facesCount }}
      /
      {{ store.getUser?.subscriptionFacesCount }} faces uploaded</p>
<!--    <nuxt-link :to="{ name: 'myFaces-create' }"> Create model </nuxt-link> <br>-->

    <div class="app-base-border-radius app-base-margin-top-bottom" style="width: 100%"/>

    <el-row :gutter="15" >
      <el-col :span="6" :xs="12" >
        <nuxt-link class="my-faces-item" :to="{ name: 'myFaces-create'}">
          <app-square-image>
            <div class="myFaces-create-item-btm">
              <img src="/icon/icon-plus.png">
              <span>Create new face</span>
            </div>
          </app-square-image>
        </nuxt-link>
      </el-col>
      <el-col :span="6" :xs="12" v-for="item in searchResult.items" >
        <nuxt-link class="my-faces-item" :to="{ name: 'index', query: { face: item.id }}">
          <app-square-image :img="item.coverImageUrl"></app-square-image>
          <p>{{ item.faceName }}</p>
          <div v-if="item.generatedCount > 0">
            <span>{{ item.generatedCount }} photos generated</span>
          </div>
          <div v-else-if="item.trainingStatus === 'InProgress'" >
            <span>{{ item.generatedCount }} photos.</span>
          </div>
          <div v-else >
            <span>{{ item.generatedCount }} photos.</span>
            <span class="app-orange-text">Generate</span>
          </div>
          <p>trainingStatus: {{ item.trainingStatus }}</p>
        </nuxt-link>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">
import { useAuthStore } from '~/composables/stores/useAuthStore';
import {apiFetchGet, useApiFetch} from '#imports';
import {ref, reactive, useTemplateRef} from 'vue';
import {SearchForm} from '~/model/search.form';
import {PaginationResult} from '~/model/pagination.result';
import { useElementSize } from '@vueuse/core'

definePageMeta({  });

export default {
  components: {},
  setup() {
    const store = useAuthStore();

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<SearchForm>(new SearchForm());
    searchForm.value.limit = 5000

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

.my-faces-item {
  //background: yellow;
  text-align: center;
  text-decoration: none;
  color: var(--app-white);
  span {
    text-align: center;
    //display: block;
    width: 100%;
    color: var(--app-grey-text-footer);
  }
}
.myFaces-create-item-btm {
  img {
    width: 55px;
    height: 55px;
  }
  width: 100%;
  position: absolute;
  top: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--app-white);
  span {
    color: var(--app-white);
  }
}

</style>
