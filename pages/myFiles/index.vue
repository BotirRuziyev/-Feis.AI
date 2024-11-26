<template>
  <div >
<!--    v-loading="loading"-->
    <h1 >Files page</h1>

    <div class="app-base-border-radius app-base-margin-top-bottom" style="width: 100%"/>


    <client-only>
      <app-masonry-images :images="images"/>
<!--      <div class="grid" id="mas-grid">-->
<!--        <div class="grid-sizer"></div>-->
<!--        <div class="gutter-sizer"></div>-->
<!--        <div v-for="item in images" class="grid-item">-->
<!--          <img :src="item.img"/>-->
<!--          <div class="mItem-body-info">-->
<!--            <h1>id: {{ item.id }}</h1>-->
<!--            <a :href="item.img" download>Download</a>-->
<!--            <span @click="copyPrompt(item.prompt)">Copy prompt</span>-->
<!--            <div v-if="item?.face?.id">-->
<!--              <img style="width: 40px;height: 40px;border-radius: 50%" :src="item?.face?.coverImageUrl">-->
<!--              {{ item?.face?.faceName }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </client-only>

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
  async setup() {
    const loading = ref<boolean>(false)
    const store = useAuthStore();
    const runtimeConfig = useRuntimeConfig()

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<SearchForm>(new SearchForm());

    const getList = async (params: SearchForm) => {
      // loading.value = true
      searchForm.value = params;
      searchResult.value = await apiFetchGet<PaginationResult>('/faceImageGeneration', searchForm.value);

    };

    getList(searchForm.value);

    const images = computed(() => {
      const res: Array<any> = []
      searchResult.value.items.forEach((v: any) => {

        const face = {
          id: v?.face?.id || null,
          faceName: v?.face?.faceName || null,
          coverImageUrl: v?.face?.coverImageUrl || null,
        }

        v.images.forEach((img: string) => {
          const obj = {
            id: v.id,
            aspectRatio: v.aspectRatio,
            prompt: v.prompt,
            img: img,
            face: face,
          }

          res.push(obj)
        })

      })
      return res
    })

    return {
      loading,
      store,
      searchForm,
      searchResult,
      getList,
      images,
    };
  },
};
</script>

<style lang="scss">

</style>
