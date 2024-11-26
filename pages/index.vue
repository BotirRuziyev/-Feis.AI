<template>
  <div class="ai-generator">
    <div class="page-head">
      <nuxt-link class="back-btn"
        ><img src="/icon/chevron_back.svg" alt="" /> HOME</nuxt-link
      >
      <h1 class="page-title">Generate any AI Photo with your text prompt</h1>
      <p class="page-description">
        You can upgrade or cancel subsription plan at any time.
        <button class="upgrade" v-if="!form.includeYourPhotos">UPGRADE</button>
      </p>
    </div>
    <el-form
      class="ai-generation-form app-base-border-radius app-base-padding"
      v-loading="loading"
      label-position="top"
      ref="formRuleRef"
      :model="form"
      :rules="formRules"
    >
      <el-row :gutter="15">
        <el-col :span="12" :xs="24">
          <div class="choose-your_face">
            <div class="choose-your_face-head">
              <div class="label">
                <span>Choose your face</span>
              </div>
              <div
                class="el-form-item__label"
                v-if="form.includeYourPhotos"
                prop="face"
              >
                <nuxt-link
                  class="el-form-item__label-add-new-face-btn"
                  :to="{ name: 'myFaces-create' }"
                >
                  + ADD NEW FACE
                </nuxt-link>
              </div>
            </div>
            <div class="choose-your-face-in">
              <div class="created-face" v-if="form.includeYourPhotos">
                <div class="created-face__in">
                  <img
                    class="created-face__img"
                    src="/img/out-0-43.png"
                    alt=""
                  />
                </div>
                Vlad
              </div>
              <div class="none">
                <div class="none-in choose-your-face-btn">
                  <img class="none-img" src="/icon/none.svg" alt="" />
                  <img
                    v-if="!form.includeYourPhotos"
                    class="check_circel"
                    src="/icon/check_circle.svg"
                    alt=""
                  />
                </div>
                None
              </div>
              <div class="new-add" v-if="!form.includeYourPhotos">
                <div class="new-add__in choose-your-face-btn">
                  <img class="add-img" src="/icon/add.svg" alt="" />
                </div>
                Upgrade to add new
              </div>
            </div>
          </div>
          <div class="form-head">
            <label class="label">Enter a prompt</label>
            <button class="try-random">
              <img src="/icon/draw.svg" alt="" /> TRY RANDOM
            </button>
          </div>
          <el-form-item prop="prompt">
            <el-input
              size="large"
              v-model="form.prompt"
              type="textarea"
              :rows="10"
              placeholder="I want to be depicted in a vibrant urban setting, standing confidently on a bustling street filled with colorful shops and cafes."
            />
            <span class="can-written">0/150</span>
          </el-form-item>
          <el-form-item
            prop="aspectRatio"
            label="Choose an aspect ratio"
            class="aspect-ratio"
          >
            <el-radio-group v-model="form.aspectRatio" size="large">
              <el-radio-button label="1:1" value="1:1" size="large" />
              <el-radio-button label="16:9" value="16:9" size="large" />
              <el-radio-button label="3:4" value="3:4" size="large" />
              <el-radio-button label="9:16" value="9:16" size="large" />
            </el-radio-group>
          </el-form-item>
          <el-form-item
            v-if="form.includeYourPhotos"
            prop="loraScale"
            label="Choose face replacement ratio"
            class="replacement_ratio"
          >
            <div style="width: 100%; position: relative">
              <span style="position: absolute; left: 0; bottom: -20px"
                >80%</span
              >
              <el-slider
                ref="sliderRef"
                size="large"
                :show-tooltip="true"
                placement="bottom"
                tooltip-class="ai-generation-form-tooltip-class"
                v-model="form.loraScale"
                :step="1"
                :min="80"
                :max="120"
                :disabled="!form.face"
              />
              <span style="position: absolute; right: 0; bottom: -20px"
                >120%</span
              >
            </div>
          </el-form-item>
          <div class="form-botttom">
            <span class="free-credits">You have 5 free credits</span>
            <el-button
              @click="submitForm"
              type="primary"
              size="large"
              :disabled="!store.getUser?.generationsCount"
            >
              <img src="/icon/aiGenerator.svg" alt="" />
              Generate for 1 credit
            </el-button>
          </div>
        </el-col>
        <el-col :span="12" :xs="24">
          <div class="not-available">
            <div class="not-available__in">
              <div class="head">
                <img src="/icon/lock.svg" alt="" />
                NOT AVAILABLE ON FREE PLAN
              </div>
              <div class="title">
                Upgrade your subscription plan to generate personalized images
              </div>
              <p class="description">
                Upgrade to upload your own photos, generate personalized images,
                and enjoy watermark-free downloads with full licensing rights
              </p>
              <button class="subscription-plan__btn">
                Change subscription plan
              </button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <div class="yourai-generated-image" v-if="form.includeYourPhotos">
      <div class="head">
        <div class="title">Your AI-Generated Image</div>
        <p class="description">Generated a few seconds ago</p>
      </div>
      <div class="yourai-generated-image__card">
        <div class="card-item">
          <img class="card-img" src="/image.png" alt="" />
          <button class="download-btn">
            <img src="/icon/download.svg" alt="" />
          </button>
        </div>
        <div class="card-item">
          <img class="card-img" src="/image.png" alt="" />
          <button class="download-btn">
            <img src="/icon/download.svg" alt="" />
          </button>
        </div>
        <div class="card-item">
          <img class="card-img" src="/image.png" alt="" />
          <button class="download-btn">
            <img src="/icon/download.svg" alt="" />
          </button>
        </div>
        <div class="card-item">
          <img class="card-img" src="/image.png" alt="" />
          <button class="download-btn">
            <img src="/icon/download.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="generated-with">
        <div class="generated-with__head">
          <div class="left-block">Generated with the prompt</div>
          <button class="copy-btn">
            <img src="/icon/content_copy.svg" alt="" /> COPY
          </button>
        </div>
        <p class="description">
          Highly detailed and realistic portrait of an astronaut standing in the
          middle of a dense tropical jungle, wearing a full space suit with a
          helmet, surrounded by vibrant green foliage, tall trees, and tropical
          plants. The atmosphere is humid with a soft, diffused light filtering
          through the leaves, creating a cinematic and slightly mysterious mood.
          The setting contrasts the advanced technology of the space suit with
          the natural beauty of the jungle, highlighting a fusion of exploration
          and nature.
        </p>
        <div class="generated-with__bottom">
          <div class="item">Ratio 1:1</div>
          <div class="item">80% face replacement ratio</div>
        </div>
      </div>
      <div class="your-face">
        <div class="avatar">
          <img src="/img/out-0-43.png" alt="" />
        </div>
        <div class="name">Vlad</div>
        <div class="your-face__text">
          <nuxt-link to="/" class="your-face__link"
            >Use this face again</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from "~/composables/stores/useAuthStore";
import { SearchForm } from "~/model/search.form";
import { apiFetchGet, useApiFetch } from "~/composables/useApiFetch";
import { PaginationResult } from "~/model/pagination.result";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { required, useValidateForm } from "~/utils/element.utils";

definePageMeta({});

export default {
  async setup() {
    const loading = ref(false);
    const r = useRouter();
    const route = useRoute();

    const store = useAuthStore();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });

    const faceItems = ref<Array<any>>([]);
    const getList = async () => {
      const data = await apiFetchGet<PaginationResult>("/face", {
        offset: 0,
        limit: 50000,
        min: true,
        trainingStatus: "Completed",
      });
      faceItems.value = data.items;
    };

    await getList();

    const formRules = reactive<FormRules>({
      prompt: [required],
    });
    const formRuleRef = ref<FormInstance>();
    const form = reactive<any>({
      includeYourPhotos: false,
      loraScale: 90,
      aspectRatio: "16:9", //  '1:1' | '16:9' | '3:4' | '9:16'
      prompt: null,
      face: null,
    });

    const d_face = route?.query?.face || null;
    if (d_face) {
      form.includeYourPhotos = true;
      form.face = Number(d_face);
    }

    const changeIncludeYourPhotos = () => {
      if (!form.includeYourPhotos) {
        form.face = null;
      }
    };

    const result = ref<any>(null);
    result.value = null;
    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true;

        if (!form.id) {
          const { data, error } = await useApiFetch<any>(
            `/faceImageGeneration`,
            "POST",
            { ...form },
          );
          if (!error.value) {
            result.value = data.value;
            console.log({ data });
            await store.getUserApi();

            // await navigateTo({ name: 'myFiles-id', params: { id: data.value.id }})
          }
        }

        loading.value = false;
      }
    };

    const changeFace = (faceId: string) => {
      if (form.includeYourPhotos) {
        form.face = faceId;
      }
    };

    return {
      result,
      store,
      isMounted,

      faceItems,

      loading,
      formRules,
      form,
      formRuleRef,
      submitForm,
      changeFace,

      changeIncludeYourPhotos,

      r,
    };
  },
};
</script>

<style lang="scss">
$face-el-radio-button-size: 140px;
.ai-generator-dashboard {
  .dashboard-body {
    .ai-generator {
      .page-head {
        margin-bottom: 10px;
        .page-title {
          margin-bottom: 0;
        }
        .page-description {
          display: flex;
          align-items: end;
          justify-content: space-between;
        }
      }
    }
  }
}
.scrollbar-flex-content {
  display: flex;
  justify-content: flex-start;
  height: 170px;
}
.face-el-radio-button.disabled {
  //pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: all !important;
}
.face-el-radio-button {
  cursor: pointer;
  border-radius: var(--app-base-border-radius);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  //cursor: pointer;
  margin-right: 8px;
  img {
    width: calc($face-el-radio-button-size - 22px);
    height: calc($face-el-radio-button-size - 22px);
    border-radius: var(--app-base-border-radius);
  }
  span {
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .face-el-radio-button-img {
    position: relative;
    .face-el-radio-button-checked {
      width: 23px;
      height: 23px;
      position: absolute;
      left: 10px;
      bottom: 20px;
      display: none;
    }
  }
  &.checked {
    .face-el-radio-button-checked {
      display: block;
    }
  }
}
.face-el-radio-button-block {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
}
.face-el-radio-button-block-radio {
  width: 100%;
}

.el-form-item__label-add-new-face-btn {
  color: var(--app-grey-text-footer);
  text-decoration: none;
}

.ai-generation-form {
  padding: 0;
  border: 0;
  .label,
  .el-form-item__label {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 20px;
    color: #fff;
  }
  .el-row {
    align-items: stretch;
  }
  .el-col.is-guttered {
    position: relative;
    &:nth-child(1) {
      background: var(--field-bg);
      border-radius: 22px;
      padding: 35px 30px !important;
    }
    .can-written {
      position: absolute;
      bottom: 15px;
      right: 23px;
      z-index: 2;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 10px;
      line-height: 170%;
      color: var(--light-gray);
    }
  }
  .choose-your_face {
    display: none;
    margin-bottom: 15px;
    .choose-your_face-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      .el-form-item__label {
        padding: 0;
        height: auto;
      }
      .el-form-item__label-add-new-face-btn {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 10px;
        line-height: 150%;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        color: var(--gray);
      }
    }
    .choose-your-face-in {
      max-width: 136px;
      display: flex;
      gap: 6px;
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 12px;
      text-align: center;
      color: #fff;
      .choose-your-face-btn,
      .created-face__in {
        width: 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-bottom: 10px;
        overflow: hidden;
        background: var(--black);
        cursor: pointer;
        position: relative;
        .none-img,
        .add-img {
          width: 27px;
          height: 27px;
        }
        .created-face__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .check_circel {
          width: 20px;
          height: 20px;
          position: absolute;
          bottom: 2.5px;
          left: 2.5px;
        }
      }
      .new-add__in {
        background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
      }
    }
  }
  .form-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .try-random {
      display: flex;
      align-items: center;
      gap: 2px;
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: var(--gray);
      background: transparent;
      border: 0;
      cursor: pointer;
      img {
        width: 17px;
        height: 17px;
      }
    }
  }
  .form-botttom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    border-top: 1px solid var(--stroke-gray);
    .el-button.el-button--primary {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: #fff;
      height: auto !important;
      padding: 18px 40px !important;
      span {
        display: flex;
        align-items: center;
        gap: 5px;
        img {
          filter: invert(91%) sepia(92%) saturate(31%) hue-rotate(69deg)
            brightness(108%) contrast(110%);
        }
      }
    }
  }
  .el-input--large {
    border-radius: 15px;
  }
  .el-textarea__inner {
    background: var(--black);
    border-radius: 15px !important;
    padding: 18px 16px;
    resize: none;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 155%;
    color: var(--placeholder);
    &::placeholder {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 155%;
      color: var(--placeholder);
    }
  }
  .aspect-ratio {
    margin-top: 30px;
  }
  .not-available {
    height: 100%;
    border-radius: 22px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/img/not-available-bg.png");
    background-size: cover;
    &__in {
      max-width: 524px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 25px;
      padding: 50px 30px;
      backdrop-filter: blur(114px);
      box-shadow:
        -2px -1px 250px 0 rgba(115, 0, 255, 0.2),
        -5px 4px 155px 0 rgba(255, 122, 41, 0.1);
      background: rgba(18, 18, 18, 0.32);
      .head {
        display: flex;
        align-items: center;
        gap: 2px;
        margin-bottom: 20px;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--gray);
        img {
          width: 17px;
          height: 17px;
        }
      }
      .title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 33px;
        text-align: center;
        color: #fff;
        margin-bottom: 15px;
      }
      .description {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 155%;
        text-align: center;
        color: var(--light-gray);
        margin-bottom: 15px;
      }
      .subscription-plan__btn {
        background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
        border-radius: 60px;
        padding: 18px 40px;
        border: 0;
        cursor: pointer;
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #fff;
      }
    }
  }
  .replacement_ratio {
    min-height: 83px;
    .el-slider__runway.is-disabled {
      .el-slider__bar {
        position: relative;
        background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
        &::after {
          content: "";
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: -10px;
          transform: translateY(-50%);
          background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
        }
      }
      .el-slider__button {
        background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
        border: 0;
      }
    }
  }
}
.yourai-generated-image {
  margin-top: 50px;
  .head {
    padding-bottom: 15px;
    border-bottom: 1px solid var(--dark-gray);
    margin-bottom: 20px;
    .title {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 33px;
      text-align: left;
      color: #fff;
      margin-bottom: 15px;
    }
    .description {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 155%;
      color: var(--light-gray);
    }
  }
  .yourai-generated-image__card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 20px;
    .card-item {
      position: relative;
      border-radius: 10px;
      .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .download-btn {
        width: 40px;
        height: 40px;
        border: 0;
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
  .generated-with {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--stroke-gray);
    margin-bottom: 20px;
    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      .left-block {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 20px;
        line-height: 155%;
        color: #fff;
      }
      .copy-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        border: 0;
        background: transparent;
        cursor: pointer;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--gray);
        img {
          height: 20px;
        }
      }
    }
    .description {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      line-height: 155%;
      color: var(--gray);
      margin-bottom: 20px;
    }
    &__bottom {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      .item {
        background: var(--field-bg);
        padding: 5px 12px;
        border-radius: 60px;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 155%;
        color: #fff;
      }
    }
  }
  .your-face {
    display: flex;
    align-items: center;
    gap: 20px;
    .avatar {
      border-radius: 50%;
      width: 77px;
      height: 77px;
      overflow: hidden img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .name {
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      color: #fff;
    }
    .your-face__text {
      .your-face__link {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        &::after {
          content: "";
          width: 100%;
          height: 1px;
          background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
          position: absolute;
          top: calc(100% + 1px);
          left: 0;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .ai-generator-dashboard {
    background: url("/bg/ai-generator-dashboard-mobile-bg.png") !important;
    background-size: 100% !important;
    background-position: bottom !important;
    background-repeat: no-repeat !important;
    .dashboard-header {
      width: calc(100% - 32px);
      padding: 16px;
      border-radius: 12px;
      box-shadow: 0 19px 44px 0 rgba(115, 0, 255, 0.08);
      background: rgba(27, 27, 27, 0.94);
      margin: 0 auto 23px;
      transform: translateY(8px);
    }
    .dashboard-body {
      padding: 0 16px 18px;
      border-radius: 0;
      background: none !important;
      .ai-generator {
        .page-head {
          border-bottom: 1px solid var(--stroke-gray);
          padding-bottom: 9px;
          margin-bottom: 15px;
          .page-title {
            text-align: left;
            margin-bottom: 10px;
          }
          .page-description {
            font-size: 14px;
            gap: 15px;
            .upgrade {
              font-size: 13px;
              box-shadow: 0 4px 34px 0 rgba(255, 117, 43, 0.2);
              background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
            }
          }
        }
      }
    }
  }
  .ai-generation-form {
    .label,
    .el-form-item__label {
      font-size: 16px !important;
    }
    .form-head {
      margin-bottom: 12px;
      .try-random {
        gap: 2px;
        font-size: 10px;
        letter-spacing: 0.01em;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    .choose-your_face {
      display: block;
    }
    .el-col.is-guttered {
      margin: 0 !important;
      &:nth-child(1) {
        border-radius: 20px !important;
        padding: 19px 16px !important;
      }
      .can-written {
        bottom: 11px;
        right: 17px;
      }
    }
    .not-available {
      display: none;
    }
    .el-textarea__inner {
      min-height: 133px !important;
      max-height: 133px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
    .aspect-ratio {
      margin: 22px 0;
      .el-radio-button {
        .el-radio-button__inner {
          font-size: 14px;
          letter-spacing: 0.05em;
          padding: 7.5px 22px;
        }
      }
    }
    .form-botttom {
      padding-top: 0 !important;
      border: 0;
      .free-credits {
        display: none;
      }
      .el-button.el-button--primary {
        width: 100%;
        font-size: 15px;
        letter-spacing: 0.01em;
        padding: 12px !important;
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  .yourai-generated-image {
    margin-top: 50px;
    .head {
      padding-bottom: 15px;
      margin-bottom: 15px;
      .title {
        font-size: 22px;
        margin-bottom: 10px;
      }
      .description {
        font-size: 10px;
        line-height: 170%;
      }
    }
    .yourai-generated-image__card {
      grid-template-columns: repeat(2, 1fr);
      gap: 13px;
      margin-bottom: 15px;
      .card-item {
        .download-btn {
          width: 18px;
          height: 18px;
          bottom: 8px;
          right: 8px;
        }
      }
    }
    .generated-with {
      padding-bottom: 15px;
      margin-bottom: 15px;
      &__head {
        margin-bottom: 15px;
        .left-block {
          font-size: 14px;
          line-height: 155%;
        }
        .copy-btn {
          gap: 2px;
          font-size: 10px;
          line-height: 150%;
          img {
            height: 12px;
          }
        }
      }
      .description {
        font-size: 14px;
        line-height: 155%;
        margin-bottom: 15px;
      }
    }
    .your-face {
      gap: 14px;
      .avatar {
        width: 66px;
        height: 66px;
      }
      .name {
        font-size: 14px;
      }
      .your-face__text {
        .your-face__link {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
