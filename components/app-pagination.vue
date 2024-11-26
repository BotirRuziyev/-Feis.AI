<template>
  <div style="margin-top: 15px;width: 100%;max-width: 100%">
    <el-pagination
      layout="prev, pager, next, sizes, total"
      :page-sizes="[1, 5, 10, 15, 20, 50, 100]"
      :pager-count="5"
      :page-size="params.limit"
      v-model:currentPage="currentPage"
      :total="params.count"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { ref } from "#imports";
import {SearchForm} from "~/model/search.form";
export default {
  props: {
    params: {
      type: Object,
      required: true,
      default: {
        offset: 0,
        limit: 1,
        total: 0,
      }
    },
  },
  emits: ['change'],
  setup(props: any, { emit }: any) {

    const { params } = toRefs(props)

    const currentPage = ref(1)
    currentPage.value = Math.round(( params.value.offset / params.value.limit ) + 1)

    const changeParams = () => {
      params.value.offset = ( params.value.limit * currentPage.value ) - params.value.limit

      emit('change', new SearchForm(params.value.offset, params.value.limit))
    }

    const handleCurrentChange = (val: number) => {
      changeParams()
    }

    const handleSizeChange = (val: number) => {
      params.value.limit = val
      currentPage.value = 1
      changeParams()
    }

    return {
      currentPage,
      handleSizeChange,
      handleCurrentChange,
    }
  }
}
</script>

<style scoped>

</style>
