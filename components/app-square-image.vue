<template>
  <div class="my-face-item" :style="{height: height+'px'}" ref="ele" >
    <el-image
      :src="img"
      style="width: 100%;"
      :style="{height: height+'px'}"
      fit="cover"
      loading="eager"/>
<!--    <slot name="error">123</slot>-->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { useElementSize } from '@vueuse/core'
import {ref, reactive, useTemplateRef, onMounted} from 'vue';

export default {
  name: 'app-square-image',
  props: ['img'],
  setup() {
    const height = ref(null)
    const input = useTemplateRef('ele')
    onMounted(() => {
      const e = document.getElementsByClassName('my-face-item')[0]
      height.value = input?.value?.offsetWidth
    })

    return {
      height,
    }
  }
}
</script>

<style lang="scss">
.my-face-item {
  position: relative;
  width: 100%;
  min-height: 100px;
  background: #9f9f87;
  //background: url("/public/face_images/1/3/1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-image__error {
  display: none!important;
}
.el-image {
  background: var(--app-black);
}
</style>
