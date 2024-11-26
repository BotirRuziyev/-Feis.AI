<template>
  <div class="myfaces-create">
    <div v-if="!progressShow" element-loading-text="Loading...">
      <div class="page-head">
        <nuxt-link class="back-btn"
          ><img src="/icon/chevron_back.svg" alt="" /> HOME</nuxt-link
        >
        <h1 class="page-title">Upload your photos to create a new face</h1>
        <p class="page-description">
          To get the best results, please upload 5 to 20 high-quality photos and
          wait for AI to learn your face
        </p>
        <div class="photo-pload__guidelines">
          <img src="/icon/info.svg" alt="" />
          Photo Upload Guidelines
        </div>
      </div>

      <el-form
        v-loading="loading"
        label-position="top"
        ref="formRuleRef"
        :model="form"
        :rules="formRules"
        class="myfaces-create__form"
      >
        <el-row :gutter="15">
          <el-col :span="12" :xs="24">
            <div
              class="bg-grey app-base-padding app-base-border-radius myfaces-create__form__left"
            >
              <el-form-item prop="faceName" label="Enter a name">
                <el-input
                  v-model="form.faceName"
                  placeholder="Mark"
                  size="large"
                />
              </el-form-item>

              <el-form-item prop="images" label="">
                <label class="my-faces-create-el-upload-label">
                  <span>Upload photos</span>
                  <span>{{ form.images.length }}/20</span>
                </label>

                <div style="width: 100%">
                  <el-upload
                    ref="uploadRef"
                    v-loading="updateLoading"
                    drag
                    accept="image/png, image/jpeg, image/jpg"
                    :limit="20"
                    :on-success="on_success"
                    :on-progress="on_progress"
                    :on-error="on_error"
                    :auto-upload="true"
                    :action="updateUrl"
                    :headers="{ Authorization: 'Bearer ' + store.accessToken }"
                    :data="{ key: form.key }"
                    :multiple="true"
                    :show-file-list="false"
                  >
                    <div class="my-faces-create-el-upload-body">
                      <div class="upload-body__img">
                        <img src="/icon/upload-icon.png" />
                      </div>
                      <div class="my-faces-create-el-upload-body-text">
                        <span
                          class="app-orange-text my-faces-create-el-upload-body-text-choose-a-file"
                          >Choose a file</span
                        >
                        <span class="app-grey-text">or drag it here</span>
                        <!-- <br /> -->
                        <span class="app-grey-text"
                          >PNG, JPG, WEBP or HEIC (max. 3MB)</span
                        >
                      </div>
                    </div>
                  </el-upload>
                </div>

                <div class="my-faces-create-el-upload-images">
                  <div
                    v-for="image in form.images"
                    class="my-faces-create-el-upload-image"
                    :key="image"
                  >
                    <!--                  <span @click="deleteImage(image)" class="my-faces-create-el-upload-image-delete-btn">-->
                    <!--                    D-->
                    <!--                  </span>-->
                    <div class="upload-images">
                      <img :src="image ? image : '/img/face/c1.png'" />
                    </div>
                  </div>
                </div>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  size="large"
                  @click="submitForm"
                  :disabled="!store.getUser?.facesCount"
                >
                  <img
                    src="/icon/aiGenerator-white.svg"
                    style="width: 18px; height: 18px; margin-top: 3px"
                  />
                  Generate new face
                </el-button>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12" :xs="24">
            <div
              class="bg-grey app-base-padding app-base-border-radius myfaces-create__form__right"
            >
              <div class="block-head">
                <h2 class="title">
                  <span>Photo Upload Guidelines and Requirements</span>
                  <span>Upload 5 to 20 high-quality photos</span>
                </h2>
                <p class="description">
                  To get the best results, please upload 5 to 20 high-quality
                  photos
                </p>
              </div>
              <div class="step-list">
                <div class="list-item">
                  <span class="step-num">STEP 1</span>
                  <span class="step-content">Upload your photos</span>
                </div>
                <div class="list-item">
                  <span class="step-num">STEP 1</span>
                  <span class="step-content"
                    >Wait ~30 min for the AI to learn your face
                    <span class="step-content__warning"
                      >*You will receive an email when your face is ready</span
                    ></span
                  >
                </div>
                <div class="list-item">
                  <span class="step-num">STEP 1</span>
                  <span class="step-content"
                    >Start generating your AI photos!</span
                  >
                </div>
              </div>
              <el-row :gutter="15">
                <el-col
                  :span="12"
                  :xs="24"
                  class="myfaces-create__form-right-card-item"
                >
                  <div class="bg-black app-base-padding app-base-border-radius">
                    <div class="my-faces-create-example-images">
                      <div><img src="/img/face/c1.png" /></div>
                      <div><img src="/img/face/c2.png" /></div>
                      <div><img src="/img/face/c3.png" /></div>
                    </div>
                    <div class="my-faces-create-example-info">
                      <p class="card-item__title">✅ Good Photos</p>
                      <span class="card-item__description">
                        Use bright natural lighting, capture multiple angles
                        (front, side, three-quarter), show various expressions,
                        and avoid heavy editing for accuracy.
                      </span>
                    </div>
                  </div>
                </el-col>
                <el-col
                  :span="12"
                  :xs="24"
                  class="myfaces-create__form-right-card-item"
                >
                  <div class="bg-black app-base-padding app-base-border-radius">
                    <div class="my-faces-create-example-images">
                      <div><img src="/img/face/n1.png" /></div>
                      <div><img src="/img/face/n2.png" /></div>
                      <div><img src="/img/face/n3.png" /></div>
                    </div>
                    <div class="my-faces-create-example-info">
                      <p class="card-item__title">🚫 Bad Photos</p>
                      <span class="card-item__description">
                        Avoid group photos. Ensure images are sharp, well-lit
                        without shadows, and keep angles natural and
                        straightforward.
                      </span>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-form-item>
                <el-button
                  type="primary"
                  size="large"
                  @click="submitForm"
                  :disabled="!store.getUser?.facesCount"
                >
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_2087_2538"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="19"
                    >
                      <rect y="0.5" width="18" height="18" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2087_2538)">
                      <path
                        d="M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z"
                        fill="white"
                      />
                    </g>
                  </svg>

                  Back to upload
                </el-button>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div v-if="progressShow" class="myFaces-create-progress-block">
      <div
        class="myFaces-create-progress-block-body app-base-border-radius app-base-padding"
      >
        <div class="myFaces-create-progress-block-body-progress">
          <el-progress
            type="circle"
            :percentage="progressPercent"
            :stroke-width="12"
            :width="280"
            :indeterminate="true"
          >
            <template #default="{ percentage }">
              <div class="loading-percentage">
                {{ percentage }} <span>%</span>
              </div>
              <div class="loading-time">Estimated time</div>
              <div class="loading-time">
                {{ progressPrettyTimer.secs }} s /
                {{ progressPrettyTimer.mins }} min
              </div>
            </template>
          </el-progress>
        </div>
        <div class="myFaces-create-progress-block-body-info">
          <button class="close-btn">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_375_10374"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="23"
                height="23"
              >
                <rect width="23" height="23" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_375_10374)">
                <path
                  d="M4.22398 20.212L2.78906 18.7771L10.4147 11.1514L2.78906 3.52574L4.22398 2.09082L11.8497 9.7165L19.4753 2.09082L20.9103 3.52574L13.2846 11.1514L20.9103 18.7771L19.4753 20.212L11.8497 12.5863L4.22398 20.212Z"
                  fill="#818181"
                />
              </g>
            </svg>
          </button>
          <h1 class="title">AI Model is generating</h1>
          <p class="description">
            You can dismiss this screen while processing is in progress
          </p>
          <app-button
            ><span class="icon">
              <img src="/notifications.svg" alt="" />
            </span>
            Notify me when ready</app-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from "~/composables/stores/useAuthStore";
import { apiFetchGet, useApiFetch } from "#imports";
import { ref, reactive } from "vue";
import { SearchForm } from "~/model/search.form";
import { PaginationResult } from "~/model/pagination.result";
import type { FormInstance, FormRules } from "element-plus";
import {
  emailRule,
  faceModelImagesCount,
  notification,
  required,
  resetForm,
  useValidateForm,
} from "~/utils/element.utils";
import type { UploadInstance } from "element-plus";

definePageMeta({});

export default {
  components: {},
  async setup() {
    const store = useAuthStore();
    const runtimeConfig = useRuntimeConfig();
    const { apiUrl } = runtimeConfig.public;

    const progressShow = ref<boolean>(false);
    const progressPrettyTimer = ref<any>({ secs: 0, mins: 0 });
    const progressPercent = computed(() => {
      let res = 100;
      const ts = 50 * 60;
      let secs =
        progressPrettyTimer.value.mins * 60 + progressPrettyTimer.value.secs;

      let percent = (100 - (secs / ts) * 100).toFixed();

      return percent;
    });

    const res = await apiFetchGet<any>("/face/progressItem");
    if (res.estimatedSec) {
      progressShow.value = true;
      const estimatedSec = res.estimatedSec;

      const timer = (secs: number) => {
        let timeInSecs: any;
        let ticker: any;

        function tick() {
          let secs = timeInSecs;
          if (secs > 0) {
            timeInSecs--;
          } else {
            clearInterval(ticker);
          }

          let mins = Math.floor(secs / 60);
          secs %= 60;
          // let pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
          let pretty = mins + ":" + secs;

          progressPrettyTimer.value.secs = secs;
          progressPrettyTimer.value.mins = mins;

          console.log({ pretty });
        }

        timeInSecs = secs;
        tick();
        ticker = setInterval(() => tick(), 1000);
      };

      timer(estimatedSec);
    }

    const loading = ref(false);
    const updateLoading = ref(false);
    const updateUrl = apiUrl + "/face/uploadFile";

    const on_success = (response: any, file: any, fileList: any) => {
      updateLoading.value = false;
      form.images.push(response.file);
    };
    const on_progress = (event: any, file: any, fileList: any) => {
      updateLoading.value = true;
    };
    const on_error = (err: any, file: any, fileList: any) => {
      updateLoading.value = false;
      notification.error();
    };
    const deleteImage = (image: string) => {
      form.images.splice(
        form.images.findIndex((v: string) => v === image),
        1,
      );
    };

    const formRules = reactive<FormRules>({
      faceName: [required],
      images: [faceModelImagesCount],
    });
    const formRuleRef = ref<FormInstance>();
    const form = reactive<any>({
      id: null,
      faceName: null,
      images: [],
      key: null,
    });
    form.key = (Date.now() + Math.random()).toFixed(0).toString();

    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true;

        if (form.id) {
          const { data, error } = await useApiFetch<any>(
            `/face/${form.id}`,
            "PATCH",
            { ...form },
          );
          if (!error.value) {
            await navigateTo({
              name: "myFaces-id",
              params: { id: data.value.id },
            });
          }
          // if (!error.value) {
          //   searchResult.value.items.splice(
          //     searchResult.value.items.findIndex(v => v.id === data.value.id),
          //     1,
          //     {...data.value}
          //   )
          // }
        }

        if (!form.id) {
          const { data, error } = await useApiFetch<any>(`/face`, "POST", {
            ...form,
          });
          if (!error.value) {
            await navigateTo({
              name: "myFaces-id",
              params: { id: data.value.id },
            });

            // searchResult.value.items.push({...data.value})
          }
        }

        loading.value = false;
      }
    };

    return {
      store,

      loading,
      formRules,
      form,
      formRuleRef,
      submitForm,

      updateUrl,
      updateLoading,
      on_success,
      on_progress,
      on_error,
      deleteImage,

      progressShow,
      progressPrettyTimer,
      progressPercent,
    };
  },
};
</script>

<style lang="scss">
.myFaces-dashboard {
  .dashboard-body {
    background: url("/img/ai-generation-bg.png");
    .myfaces-create {
      .page-head {
        margin-bottom: 20px;
        .page-description {
          display: flex;
          align-items: end;
          justify-content: space-between;
        }
        .photo-pload__guidelines {
          display: none;
          align-items: center;
          gap: 3.5px;
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 10px;
          line-height: 150%;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--gray);
          img {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
.myfaces-create__form {
  .el-button.el-button--primary {
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    padding: 18px 40px;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #fff;
    img {
      width: 17px;
      height: 17px;
    }
  }
  &__left {
    background: var(--field-bg);
    border-radius: 22px;
    padding: 30px;
    border: 0;
    .el-form-item {
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-form-item__label {
        font-family: var(--second-family);
        font-weight: 500;
        font-size: 20px;
        color: #fff;
        margin-bottom: 15px;
        &::before {
          display: none;
        }
      }
      .el-input__wrapper {
        background: var(--black) !important;
        border-radius: 15px;
        padding: 20px 16px;
        box-shadow: none;
        border: 0 !important;
        .el-input__inner {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 18px;
          --el-input-inner-height: 28px !important;
          color: #fff;
        }
      }
      .my-faces-create-el-upload-label {
        margin-bottom: 15px;
        font-family: var(--second-family);
        font-weight: 500;
        font-size: 20px;
        color: #fff;
      }
      .el-upload-dragger {
        padding: 36px;
        border-radius: 12px;
        .my-faces-create-el-upload-body {
          gap: 28px;
          .upload-body__img {
            line-height: 0;
            img {
              line-height: 0;
            }
          }
          .my-faces-create-el-upload-body-text {
            margin-left: 0;
            line-height: 0;
            .my-faces-create-el-upload-body-text-choose-a-file {
              font-family: var(--font-family);
              font-weight: 400;
              font-size: 17px;
              line-height: 30px !important;
              letter-spacing: 0.01em;
              background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .app-grey-text {
              font-family: var(--font-family);
              font-weight: 400;
              font-size: 17px;
              line-height: 30px !important;
              letter-spacing: 0.01em;
              color: var(--placeholder);
              margin: 0;
              &:nth-child(3) {
                display: block;
                font-size: 13px;
                line-height: 19px !important;
              }
            }
          }
        }
      }
    }
  }
  &__right {
    background: var(--field-bg);
    border-radius: 22px;
    padding: 14px 25px;
    border: 0;
    .block-head {
      border-bottom: 1px solid var(--stroke-gray);
      padding-bottom: 15px;
      margin-bottom: 15px;
      .title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 33px;
        color: #fff;
        margin-bottom: 8px;
        span {
          &:nth-child(2) {
            display: none;
          }
        }
      }
      .description {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 155%;
        color: #fff;
      }
    }
    .step-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 30px;
      .list-item {
        display: flex;
        align-items: center;
        gap: 10px;
        .step-num {
          background: var(--dark-gray);
          border-radius: 60px;
          padding: 3.5px 17px;
          white-space: nowrap;
          font-family: var(--second-family);
          font-weight: 600;
          font-size: 14px;
          line-height: 150%;
          letter-spacing: 0.01em;
          color: #fff;
        }
        .step-content {
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 16px;
          line-height: 155%;
          color: #fff;
          &__warning {
            display: block;
            font-weight: 400;
            font-size: 12px;
            color: var(--gray);
          }
        }
      }
    }
    .el-row {
      align-items: stretch;
    }
    .myfaces-create__form-right-card-item {
      .app-base-padding {
        height: 100%;
        padding: 15px 17px 18px;
        border: 0;
        .my-faces-create-example-images {
          margin-bottom: 28px;
          gap: 9px;
        }
        .my-faces-create-example-info {
          .card-item__title {
            font-family: var(--second-family);
            font-weight: 500;
            font-size: 22px;
            color: #fff;
            margin-bottom: 12px;
          }
          .card-item__description {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 14px;
            line-height: 155%;
            color: var(--light-gray);
          }
        }
      }
    }
    .el-button.el-button--primary {
      display: none;
    }
  }
}
.my-faces-create-el-upload-label {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.my-faces-create-el-upload-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  img {
    width: 60px;
    height: 60px;
  }
  .my-faces-create-el-upload-body-text {
    text-align: left;
    margin-left: 5px;
  }
  span {
    margin-right: 5px;
  }
  .my-faces-create-el-upload-body-text-choose-a-file {
    text-decoration: underline;
  }
}
.my-faces-create-el-upload-images {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 6px;
  margin-top: 27px;
  line-height: 0;
  .my-faces-create-el-upload-image {
    position: relative;
    width: 100%;
    max-width: 58px;
    height: auto;
    .upload-images {
      border-radius: 8px;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    .my-faces-create-el-upload-image-delete-btn {
      position: absolute;
      top: 2px;
      right: 2px;
      z-index: 999;
    }
  }
}
.my-faces-create-example-images {
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  div:nth-child(2) {
    margin-left: 3px;
    margin-right: 3px;
  }
  div {
    width: 33.33%;
  }
  img {
    width: 100%;
  }
}

.myFaces-create-progress-block {
  background-image: url("/bg/bg-progress.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  overflow: hidden;
  padding: 16px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
  }
}
.myFaces-create-progress-block-body {
  background: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 45px 50px;
  position: relative;
  gap: 65px;
  z-index: 2;
  backdrop-filter: blur(114px);
  box-shadow:
    -2px -1px 250px 0 rgba(115, 0, 255, 0.2),
    -5px 4px 155px 0 rgba(255, 122, 41, 0.1);
  background: rgba(18, 18, 18, 0.72);
  border-radius: 25px;
  .close-btn {
    cursor: pointer;
    background: transparent;
    border: 0;
    position: absolute;
    top: 17px;
    right: 25px;
    z-index: 3;
  }
}
.myFaces-create-progress-block-body-progress {
  .loading-percentage {
    display: flex;
    align-items: end;
    justify-content: center;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 55px;
    text-align: center;
    color: #fff;
    line-height: 67px;
    margin-bottom: 5px;
    span {
      font-size: 32px;
      letter-spacing: 0.24em;
    }
  }
  .loading-time {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #fff;
    line-height: 19px;
    margin-bottom: 5px;
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
  .el-progress-circle {
    border-radius: 50%;
    box-shadow:
      -40px -36px 195px 0 rgba(151, 71, 255, 0.15),
      50px 34px 65px 0 rgba(255, 122, 41, 0.1);
    svg {
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      margin: -2px 0 0 -2px;
    }
  }
  .el-progress-circle__track {
    fill: var(--field-bg);
    stroke: var(--gray);
    border-radius: 50%;
    box-shadow: none;
  }
  .el-progress-circle__path {
    border-radius: 50%;
    fill: var(--field-bg);
    stroke: #ff804d;
    box-shadow: none;
  }
}
.myFaces-create-progress-block-body-info {
  .title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 45px;
    color: #fff;
    margin-bottom: 15px;
  }
  .description {
    max-width: 318px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 155%;
    color: var(--light-gray);
    margin-bottom: 15px;
  }
  .app-button {
    max-width: 294px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 18px !important;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #fff;
    span {
      line-height: 0;
      img {
        height: 16px;
      }
    }
  }
}
@media (max-width: 768px) {
  .myFaces-dashboard {
    background: url("/bg/ai-generator-dashboard-mobile-bg.png") !important;
    background-size: 100% !important;
    background-position: bottom !important;
    background-repeat: no-repeat !important;
    .dashboard-header {
      width: calc(100% - 32px);
      padding: 16px;
      border-radius: 12px;
      backdrop-filter: blur(15px);
      box-shadow: 0 19px 44px 0 rgba(115, 0, 255, 0.08);
      background: rgba(27, 27, 27, 0.94);
      margin: 0 auto 23px;
      transform: translateY(8px);
    }
    .dashboard-body {
      padding: 0 16px 18px;
      border-radius: 0;
      background: none !important;
      .myfaces-create {
        .page-head {
          border-bottom: 1px solid var(--stroke-gray);
          padding-bottom: 20px;
          margin-bottom: 15px;
          .page-title {
            text-align: left;
            margin-bottom: 10px;
          }
          .page-description {
            font-size: 14px;
            gap: 15px;
            margin-bottom: 21px;
          }
          .photo-pload__guidelines {
            display: flex;
          }
        }
      }
    }
  }
  .myfaces-create__form {
    .el-row {
      gap: 40px;
    }
    &__left {
      padding: 20px 16px;
      .el-form-item {
        margin-bottom: 25px;
        .el-form-item__label {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .el-input__wrapper {
          padding: 18px 16px;
          .el-input__inner {
            --el-input-inner-height: 20px !important;
            font-size: 13px;
          }
        }
        .my-faces-create-el-upload-label {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .el-upload-dragger {
          padding: 24px;
          .my-faces-create-el-upload-body {
            flex-direction: column;
            gap: 8px;
            .upload-body__img {
              img {
                width: 40px;
                height: 40px;
              }
            }
            .my-faces-create-el-upload-body-text {
              line-height: 20px;
              .my-faces-create-el-upload-body-text-choose-a-file {
                font-size: 13px;
                line-height: 28px !important;
              }
              .app-grey-text {
                font-size: 13px;
                line-height: 23px !important;
                &:nth-child(3) {
                  font-size: 11px;
                  line-height: 16px;
                }
              }
            }
          }
        }
        .el-form-item__content {
          width: 100%;
          justify-content: center;
        }
        .el-button.el-button--primary {
          max-width: 310px;
          width: 100%;
          display: flex;
          font-size: 15px;
          padding: 12px !important;
        }
      }
    }
    &__right {
      padding: 0;
      background: transparent;
      .block-head {
        padding-bottom: 0;
        border: 0;
        padding: 0 30px;
        .title {
          font-weight: 600;
          font-size: 22px;
          text-align: center;
          margin-bottom: 16px;
          span {
            &:nth-child(1) {
              display: none;
            }
            &:nth-child(2) {
              display: block;
            }
          }
        }
        .description {
          display: none;
        }
      }
      .step-list {
        display: none;
      }
      .myfaces-create__form-right-card-item {
        .app-base-padding {
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 44px 0 rgba(0, 0, 0, 0.25);
          background: var(--field-bg);
          border-radius: 12px;
          padding: 19px 15px;
          .my-faces-create-example-images {
            gap: 12px;
            order: 2;
            margin-bottom: 0;
          }
          .my-faces-create-example-info {
            order: 1;
            margin-bottom: 22px;
            .card-item__title {
              font-size: 16px;
              margin-bottom: 12px;
            }
            .card-item__description {
              font-size: 14px;
            }
          }
        }
      }
      .el-form-item__content {
        width: 100%;
        justify-content: center;
        margin-top: 16px;
      }
      .el-button.el-button--primary {
        max-width: 191px;
        width: 100%;
        display: flex;
        font-size: 15px;
        padding: 12px !important;
      }
    }
  }
  .myFaces-create-progress-block {
    height: 100vh;
    min-height: 760px;
    background: url("/bg/bg-progress-mobile.png");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    border-radius: 0;
    margin-top: -74px;
    justify-content: end;
    padding: 0;
    &::after {
      display: none;
    }
  }
  .myFaces-create-progress-block-body-progress {
    .el-progress-circle {
      height: 240px !important;
      width: 240px !important;
    }
  }
  .myFaces-create-progress-block-body {
    width: 100%;
    flex-direction: column;
    gap: 107px;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
    border: 0;
    padding: 0;
    .myFaces-create-progress-block-body-info {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      backdrop-filter: blur(114px);
      background: rgba(18, 18, 18, 0.95);
      border-radius: 15px 15px 0 0;
      padding: 45px 16px;
      .title {
        font-size: 28px;
        text-align: center;
        margin-bottom: 10px;
      }
      .description {
        font-size: 14px;
        text-align: center;
        margin-bottom: 10px;
      }
      .app-button {
        max-width: 242px;
        font-size: 15px;
        line-height: 23px;
        letter-spacing: 0.01em;
        padding: 12px 30px !important;
      }
    }
    .close-btn {
      top: 13px;
      right: 13px;
      svg {
        height: 11px;
        width: 11px;
      }
    }
  }
  .my-faces-create-el-upload-images {
    margin-top: 10px;
    .my-faces-create-el-upload-image {
      max-width: 55px;
    }
  }
}
</style>
