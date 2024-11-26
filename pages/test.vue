<template>
  <div >
    <nuxt-link :to="{ name: 'myFaces-create' }"> Create model </nuxt-link> <br>
    <h1 >faces page</h1>

<!--    <nuxt-link :to="{ name: 'myFiles-id', params: { id: item.id }}" v-for="item in searchResult.items">-->
<!--      <p>prompt: {{ item.prompt }}</p>-->
<!--      <p>aspectRatio: {{ item.aspectRatio }}</p>-->
<!--      <p>loraScale: {{ item.loraScale }}</p>-->
<!--      <img style="width: 100%;max-width: 300px" :src="item.images[0]">-->

<!--    </nuxt-link>-->

<!--    <pre>{{ searchResult }}</pre>-->

    <button @click="addItem">Add</button>


<!--    <div id="mas-grid" class="grid" ref="masonry">-->
<!--      <div class="grid-item"></div>-->
<!--      <div v-for="item in items" class="grid-item" :class="item.classes" />-->
<!--    </div>-->

    <div class="grid-wrapper">
      <div>
        <img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
      </div>
      <div class="tall">
        <img src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
      </div>
      <div class="wide">
        <img src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
      </div>

      <div class="tall">
        <img src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80" alt="" />
      </div>
      <div class="big">
        <img src="https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=564&amp;q=80" alt="" />
      </div>
      <div class="wide">
        <img src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
      <div class="big">
        <img src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="" />
      </div>
      <div class="tall">
        <img src="https://images.unsplash.com/photo-1588453862014-cd1a9ad06a12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1574798834926-b39501d8eda2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80" alt="" />
      </div>
      <div class="wide">
        <img src="https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80" alt="" />
      </div>
      <div class="wide">
        <img src="https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
      <div class="wide">
        <img src="https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
      <div class="big">
        <img src="https://images.unsplash.com/photo-1527928159272-7d012024eb74?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1433446787703-42d5bf446876?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
      </div>
      <div class="big">
        <img src="https://images.unsplash.com/photo-1541187714594-731deadcd16a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="" />
      </div>
      <div class="tall">
        <img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1421930866250-aa0594cea05c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1355&amp;q=80" alt="" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1493306454986-c8877a09cbeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1381&amp;q=80" alt="" />
      </div>
      <div class="wide">
        <img src="https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
      </div>
    </div>

<!--    <pre>{{ items }}</pre>-->

  </div>
</template>

<script lang="ts">
import { useAuthStore } from '~/composables/stores/useAuthStore';
import {apiFetchGet, useApiFetch} from '#imports';
import {ref, reactive} from 'vue';
import {SearchForm} from '~/model/search.form';
import {PaginationResult} from '~/model/pagination.result';

import Masonry from 'masonry-layout'

const ITEM_CLASSES = ['grid-item--width2 grid-item--height2', 'grid-item--width2', 'grid-item--height2']

const randomInt = (min = 1, max = ITEM_CLASSES.length) => Math.floor(Math.random() * (max - min) + min)

const randItemClass = () => ITEM_CLASSES[randomInt()]

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
      searchResult.value = await apiFetchGet<PaginationResult>('/faceImageGeneration', searchForm.value);
    };

    getList(searchForm.value);

    const items = ref<any>([])
    const addItem = () => {
      items.value.push({ classes: randItemClass() })
    }
    const layout = () => {
      const e = document.getElementById('mas-grid')
      // this.$refs.masonry
      const masonry = new Masonry(e, {
        itemSelector: '.grid-item',
        columnWidth: '50%',
        percentPosition: true,
      })
    }

    return {
      store,
      searchForm,
      searchResult,
      getList,

      items,
      addItem,
      layout,

    };
  },
};
</script>

<style lang="scss">

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  display: inline-block;
}

///* Main CSS */
.grid-wrapper > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-wrapper > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}
.grid-wrapper .wide {
  grid-column: span 2;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}


</style>
