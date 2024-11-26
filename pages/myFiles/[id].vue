<template>
  <div v-if="item">

    <h1 >myFile id: {{ id }}</h1>

    <p>prompt: {{ item.prompt }}</p>
    <p>aspectRatio: {{ item.aspectRatio }}</p>
    <p>loraScale: {{ item.loraScale }}</p>
    <img v-for="image in item.images" style="width: 100%" :src="image">
    <pre>{{ item.images[0] }}</pre>
    <pre>{{ item }}</pre>

  </div>
</template>

<script lang="ts">
import { useAuthStore } from '~/composables/stores/useAuthStore';
import {apiFetchGet, useApiFetch} from '#imports';
import {ref, reactive} from 'vue';
import {SearchForm} from '~/model/search.form';
import {PaginationResult} from '~/model/pagination.result';
import type { FormInstance, FormRules } from 'element-plus';
import {
  emailRule,
  notification,
  required,
  resetForm,
  useValidateForm,
} from '~/utils/element.utils';
import type { UploadInstance } from 'element-plus'


definePageMeta({  });

export default {
  components: {},
  setup() {
    const route = useRoute()
    const id = route.params.id

    const store = useAuthStore();

    const item = ref<any>(null);

    const getItem = async () => {
      item.value = await apiFetchGet<PaginationResult>(`/faceImageGeneration/${id}`);
    };

    getItem();


    return {
      id,
      store,
      item,
      getItem,
    };
  },
};
</script>

<style lang="scss">

</style>
