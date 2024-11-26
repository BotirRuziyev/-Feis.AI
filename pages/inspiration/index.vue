<template>
  <div >

    <h1>Inspiration</h1>

    <div class="app-base-border-radius app-base-margin-top-bottom" style="width: 100%"/>

    <div class="masonry">
      <div v-for="item in images" class="mItem">
        <div class="mItem-body">
          <img :src="item.img" alt=""/>
          <div class="mItem-body-info">

            <a :href="item.img" download>Download</a>
            <span @click="copyPrompt(item.prompt)">Copy prompt</span>

<!--            <div v-if="item?.face?.id">-->
<!--              <img style="width: 40px;height: 40px;border-radius: 50%" :src="item?.face?.coverImageUrl">-->
<!--              {{ item?.face?.faceName }}-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { useAuthStore } from '~/composables/stores/useAuthStore';
import {apiFetchGet, useApiFetch} from '#imports';
import {ref, reactive} from 'vue';
import {SearchForm} from '~/model/search.form';
import {PaginationResult} from '~/model/pagination.result';
import { copyText } from 'vue3-clipboard'

definePageMeta({  });

export default {
  components: {},
  setup() {
    const store = useAuthStore();
    const runtimeConfig = useRuntimeConfig()

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<SearchForm>(new SearchForm());

    const getList = async (params: SearchForm) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet<PaginationResult>('/faceImageGeneration/exampleList', searchForm.value);
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

    const copyPrompt = (str: string) => {
      copyText(str, undefined, (error: any, event: any) => {
        if (error) {
          console.log(error)
        } else {
          console.log(str, event)
        }
      })
    }


    return {
      store,
      searchForm,
      searchResult,
      getList,
      images,
      copyPrompt,
    };
  },
};
</script>

<style lang="scss">

.mItem-body {
  position: relative;
  width: 100%;
}
.mItem-body-info {
  width: 100%;
  position: absolute;
  z-index: 9999;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 7px;
}

img {
  width: 100%;
}

.masonry {
  column-count: 3;
  column-gap: 16px;
}

.masonry .mItem {
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  width: 100%;
}

@media (max-width: 1199px) {
  .masonry {
    column-count: 3;
  }
}

@media (max-width: 991px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 767px) {
  .masonry {
    column-count: 1;
  }
}

</style>
