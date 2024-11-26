<template>
  <div class="grid" id="mas-grid">
    <div class="grid-sizer"></div>
    <div class="gutter-sizer"></div>
    <div v-for="item in images" class="grid-item">
      <img :src="item.img"/>
      <div class="mItem-body-info">
        <h1>id: {{ item.id }}</h1>
        <a :href="item.img" download>Download</a>
        <span @click="copyPrompt(item.prompt)">Copy prompt</span>
        <div v-if="item?.face?.id">
          <img style="width: 40px;height: 40px;border-radius: 50%" :src="item?.face?.coverImageUrl">
          {{ item?.face?.faceName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Masonry from "masonry-layout";
import { copyText } from 'vue3-clipboard'

export default {
  props: ['images'],
  setup() {

    const masonryInit = () => {
      const e = document.getElementById('mas-grid')
      console.log({e})
      const masonry = new Masonry(e, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        horizontalOrder: true, // new!
        percentPosition: true,
        
      })
    }

    onMounted(() => {
      setTimeout(() => {
        masonryInit()
      }, 1000)
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
      copyPrompt,
    }
  }
}
</script>

<style lang="scss">
.grid {
  //max-width: 1200px;
}
.grid:after {
  content: '';
  display: block;
  clear: both;
}
.gutter-sizer {
  width: 2%;
  //width: 15px;
}
.grid-item, .grid-sizer {
  width: 23.5%;
}
.grid-item {
  position: relative;
  float: left;
  counter-increment: item;
  margin-bottom: 30px;
  border-radius: 30px;
}

@media only screen and (max-width: 1200px) {
  .grid-item, .grid-sizer {
    width: 32%;
  }
}
@media only screen and (max-width: 900px) {
  .grid-item, .grid-sizer {
    width: 49%;
  }
}
@media only screen and (max-width: 600px) {
  .grid-item, .grid-sizer {
    width: 100%;
  }
}

//////////////////////////////////////


.mItem-body-info {
  width: 100%;
  position: absolute;
  z-index: 99;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 7px;
}



</style>
