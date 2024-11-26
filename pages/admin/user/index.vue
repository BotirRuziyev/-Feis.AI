<template>
  <div>
<!--    <button-create @click="openModal(null)"/>-->

    <el-table :data="searchResult.items" border style="width: 100%; margin-top: 15px">
      <el-table-column prop="id" label="ID" width="60px" />
      <el-table-column label="Active" align="center" min-width="110px">
        <template #default="{ row }">
          <span v-if="row.isActive">Yes</span>
          <span v-else>No</span>
        </template>
      </el-table-column>
      <el-table-column prop="fullName" label="Name" min-width="180px">
        <template #header="">
          <el-input
            v-model="searchForm.fullName"
            placeholder="Name"
            clearable
            @clear="onSearchFormChange"
            @input="onSearchFormChange"
          />
        </template>
      </el-table-column>
      <el-table-column prop="email" label="E-mail" min-width="150px">
        <template #header="">
          <el-input
            v-model="searchForm.email"
            placeholder="E-mail"
            clearable
            @clear="onSearchFormChange"
            @input="onSearchFormChange"
          />
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="Created At" width="150" />
      <el-table-column prop="action" label="---" width="118px">
        <template #default="{ row }">
          <buttons-table
            :show-edit="true"
            :show-delete="true"
            @clickEdit="openModal(row)"
            @clickDelete="deleteItem(row)"
          />
        </template>
      </el-table-column>
    </el-table>
    <app-pagination :params="searchResult" @change="onSearchFormChangePagination"/>

    <el-dialog
      v-model="modal"
      title="User"
      width="600"
      center
      align-center>
      <el-form
        label-position="top"
        ref="formRuleRef"
        :model="form"
        :rules="formRules"
        @keyup.enter="submitForm">

        <el-row :gutter="15">
          <el-col :span="24" :xs="24">
            <el-form-item prop="isActive" label="">
              <el-switch v-model="form.isActive" active-text="Active"/>
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item prop="firstname" label="First name">
              <el-input v-model="form.firstname" placeholder="First name" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item prop="lastname" label="Last name">
              <el-input v-model="form.lastname" placeholder="Last name" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="15">
          <el-col :span="12" :xs="24">
            <el-form-item prop="email" label="E-mail">
              <el-input v-model="form.email" placeholder="E-mail" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item prop="password" label="Password">
              <el-input v-model="form.password" placeholder="Password" show-password/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <div class="flex-center-row w-100">
            <button-save @click="submitForm" />
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script lang="ts">
import { apiFetchGet, useApiFetch, useRouter } from '#imports';
import { reactive, ref } from 'vue';
import {
  emailRule,
  notification,
  required,
  resetForm,
  useValidateForm,
} from '~/utils/element.utils';
import { SearchForm } from '~/model/search.form';
import { PaginationResult } from '~/model/pagination.result';
import { useAuthStore } from '~/composables/stores/useAuthStore';
import { useRoute } from '#app';
import type { FormInstance, FormRules } from 'element-plus';

definePageMeta({
  menu: {
    sort: 100,
    title: 'Users',
    icon: 'fa-solid fa-circle',
  },
  // isAdmin: true,
  // permission: 'User.list',
  // parent: 'settings',
  // breadcrumb: ['Настройки системы'],
});

export default {
  async setup() {
    const store = useAuthStore();

    const route = useRoute();
    const router = useRouter();

    const searchResult = ref<PaginationResult>(new PaginationResult());
    const searchForm = ref<any>({
      offset: 0,
      limit: 20,
      fullName: null,
      isActive: null,
      role: null,
      email: null,
      phone: null,
    });

    searchForm.value.offset = route.query.offset || 0;
    searchForm.value.limit = route.query.limit || 20;
    searchForm.value.fullName = route.query.fullName || null;
    searchForm.value.email = route.query.email || null;

    if (route.query.isActive === 'true') {
      searchForm.value.isActive = true;
    } else if (route.query.isActive === 'false') {
      searchForm.value.isActive = false;
    }

    const getList = async (params: SearchForm) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet<PaginationResult>(
        '/user',
        searchForm.value,
      );
      router.push({
        path: route.path,
        query: { ...searchForm.value },
      });
    };

    const onSearchFormChange = async () => {
      await getList(searchForm.value);
    };
    const onSearchFormChangePagination = (params: any) => {
      searchForm.value.offset = params.offset;
      searchForm.value.limit = params.limit;
      onSearchFormChange();
    };

    getList(searchForm.value);

    const deleteItem = async (item: any) => {
      const { error } = await useApiFetch(
        `/user/${item.id}`,
        'DELETE',
        {},
        {
          async onResponse({ request, response, options }: any) {
            if (response.ok) {
              notification.deleted();
            } else {
              notification.error('Удаление запрещено!');
            }
          },
          async onRequestError({ request, options, error }: any) {
            notification.error();
          },
        },
        false,
      );
      if (!error.value) {
        searchResult.value.items.splice(
          searchResult.value.items.findIndex((v) => v.id === item.id),
          1,
        );
      }
    };

    const formRules = reactive<FormRules>({
      email: [required, emailRule],
      firstname: [required],
      lastname: [required],
    });
    const formRuleRef = ref<FormInstance>();
    const form = reactive<any>({
      id: null,
      isActive: true,
      email: null,
      password: null,
      firstname: null,
      lastname: null,
    });

    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        if (form.id) {
          const { data, error } = await useApiFetch<any>(
            `/user/${form.id}`,
            'PATCH',
            { ...form },
          );

          if (!error.value) {
            searchResult.value.items.splice(
              searchResult.value.items.findIndex((v) => v.id === data.value.id),
              1,
              { ...data.value },
            );
          }
        }

        if (!form.id) {
          const { data, error } = await useApiFetch<any>(
            `/user`,
            'POST',
            { ...form },
          );
          if (!error.value) {
            searchResult.value.items.push({ ...data.value });
          }
        }

        closeModal();
      }
    };

    const modal = ref(false);

    const openModal = (item: any) => {
      resetForm(formRuleRef.value);

      if (item) {
        for (let key in item) {
          // @ts-ignore
          form[key] = item[key];
        }
      } else {
        form.id = null;
        for (let key in form) {
          // @ts-ignore
          form[key] = null;
        }
      }

      modal.value = true;
    };

    const closeModal = () => {
      modal.value = false;
    };

    return {
      store,

      searchResult,
      searchForm,
      getList,
      onSearchFormChange,
      onSearchFormChangePagination,

      deleteItem,

      modal,
      openModal,
      closeModal,

      formRules,
      form,
      formRuleRef,
      submitForm,

    };
  },
};
</script>

<style lang="scss"></style>
