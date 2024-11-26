<template>
  <div >
    <h1>Contact support</h1>

    <el-row :gutter="15">

      <el-col :span="12" :xs="24">
        <div class="contact-support">

          <div>
            <a href="tel:++199999999999">Call: +1 999 9999-99-99</a>
            <a href="mailto:mail@mail.com">Email: mail@mail.com</a>
          </div>

          <el-form
            class="  "
            v-loading="loading"
            label-position="top"
            ref="formRuleRef"
            :model="form"
            :rules="formRules">

            <el-form-item prop="message" label="Describe your issue">
              <el-input
                size="large"
                v-model="form.message"
                type="textarea"
                :rows="7"
                placeholder="Briefly describe your issue here..."
              />
            </el-form-item>

            <el-col :span="12" :xs="24">
              <p>
                You will receive an answer via the email you used during registration
                Send message
              </p>
              <el-button @click="submitForm" type="primary" size="large" >Save</el-button>
            </el-col>

          </el-form>


        </div>

      </el-col>

    </el-row>

  </div>
</template>

<script lang="ts">

import {reactive, ref} from "vue";
import type {FormInstance, FormRules} from "element-plus";
import {required, useValidateForm} from "~/utils/element.utils";
import {useApiFetch} from "~/composables/useApiFetch";

definePageMeta({  });

export default {
  setup() {
    const loading = ref(false)
    const formRules = reactive<FormRules>({
      message: [required],
    });
    const formRuleRef = ref<FormInstance>();
    const form = reactive<any>({
      message: null,
    });

    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true

        if (!form.id) {
          const {data, error} = await useApiFetch<any>(`/contactSupport`, 'POST', {...form});
          if (!error.value) {

          }
        }

        loading.value = false
      }
    }

    return {
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

.contact-support {

  .el-textarea {
    background-color: var(--app-grey)!important;
  }
}

</style>
