<template>
  <div >
    <h1>Notifications settings</h1>
    <div class="app-base-border-radius app-base-margin-top-bottom" style="width: 100%"/>

    <el-row :gutter="15">
      <el-col :span="12" :xs="24">

        <el-form
          class=""
          v-loading="loading"
          label-position="top"
          ref="formRuleRef"
          :model="form"
          :rules="formRules">

          <el-form-item prop="message" label="Notify me when the AI Face Finished training">
            <el-checkbox v-model="form.finishedTrainingNotifyViaEmail">Notify via email</el-checkbox>
            <el-checkbox v-model="form.finishedTrainingNotifyViaPush">Push notifications</el-checkbox>
          </el-form-item>

          <el-form-item prop="message" label="Notify me when Image Finished generating">
            <el-checkbox v-model="form.finishedGeneratingNotifyViaEmail">Notify via email</el-checkbox>
            <el-checkbox v-model="form.finishedGeneratingNotifyViaPush">Push notifications</el-checkbox>
          </el-form-item>

          <el-col :span="12" :xs="24">
            <el-button @click="submitForm" type="primary" size="large" >Save</el-button>
          </el-col>

        </el-form>

      </el-col>
    </el-row>


  </div>
</template>

<script lang="ts">
import { useAuthStore } from '~/composables/stores/useAuthStore';
import {apiFetchGet, required, useApiFetch, useValidateForm} from '#imports';
import {ref, reactive} from 'vue';
import {SearchForm} from '~/model/search.form';
import {PaginationResult} from '~/model/pagination.result';
import type {FormInstance, FormRules} from "element-plus";

definePageMeta({  });

export default {
  components: {},
  setup() {
    const store = useAuthStore();
    const loading = ref(false)

    const formRules = reactive<FormRules>({

    });
    const formRuleRef = ref<FormInstance>();
    const form = reactive<any>({
      finishedTrainingNotifyViaEmail: store.getUser.finishedTrainingNotifyViaEmail,
      finishedTrainingNotifyViaPush: store.getUser.finishedTrainingNotifyViaPush,
      finishedGeneratingNotifyViaEmail: store.getUser.finishedGeneratingNotifyViaEmail,
      finishedGeneratingNotifyViaPush: store.getUser.finishedGeneratingNotifyViaPush
    });

    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true

        const {data, error} = await useApiFetch<any>(`/user/updateUserSettings`, 'PATCH', {...form});
        if (!error.value) {}

        await store.getUserApi()

        loading.value = false
      }
    }

    return {
      store,
      loading,
      formRules,
      form,
      formRuleRef,
      submitForm,

    }
  },
};
</script>

<style lang="scss">

</style>
