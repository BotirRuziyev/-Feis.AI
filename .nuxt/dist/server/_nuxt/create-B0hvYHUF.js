import { _ as __nuxt_component_0 } from "./nuxt-link-DM--a9B3.js";
import { _ as _export_sfc, u as useAuthStore, a as apiFetchGet, k as useRuntimeConfig, c as useApiFetch, h as navigateTo, q as ElForm, s as ElRow, t as ElCol, v as ElFormItem, o as ElInput, C as ElUpload, e as ElButton, D as ElProgress, y as vLoading } from "../server.mjs";
import { mergeProps, useSSRContext, ref, computed, reactive, withCtx, createVNode, createTextVNode, toDisplayString, withDirectives, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
/* empty css              */
import { r as required, f as faceModelImagesCount, n as notification, u as useValidateForm } from "./element.utils-D43vSFwO.js";
/* empty css                */
/* empty css                  */
/* empty css                   */
/* empty css                    */
import "hookable";
import { _ as _imports_0 } from "./virtual_public-jocmKLJ9.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_0$1 } from "./virtual_public-BI7rQlE6.js";
import "ufo";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "@vue/devtools-api";
import "qs";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "@popperjs/core";
import "@ctrl/tinycolor";
import "dayjs";
import "dayjs/plugin/localeData.js";
import "dayjs/plugin/customParseFormat.js";
import "dayjs/plugin/advancedFormat.js";
import "dayjs/plugin/weekOfYear.js";
import "dayjs/plugin/weekYear.js";
import "dayjs/plugin/dayOfYear.js";
import "dayjs/plugin/isSameOrAfter.js";
import "dayjs/plugin/isSameOrBefore.js";
import "async-validator";
import "memoize-one";
import "normalize-wheel-es";
import "@floating-ui/dom";
const _sfc_main$1 = {
  name: "app-button",
  props: ["text", "disabled"],
  setup() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "app-button",
    disabled: $props.disabled
  }, _attrs))}>${ssrInterpolate($props.text)} `);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main = {
  components: {},
  async setup() {
    const store = useAuthStore();
    const runtimeConfig = useRuntimeConfig();
    const { apiUrl } = runtimeConfig.public;
    const progressShow = ref(false);
    const progressPrettyTimer = ref({ secs: 0, mins: 0 });
    const progressPercent = computed(() => {
      const ts = 50 * 60;
      let secs = progressPrettyTimer.value.mins * 60 + progressPrettyTimer.value.secs;
      let percent = (100 - secs / ts * 100).toFixed();
      return percent;
    });
    const res = await apiFetchGet("/face/progressItem");
    if (res.estimatedSec) {
      progressShow.value = true;
      const estimatedSec = res.estimatedSec;
      const timer = (secs) => {
        let timeInSecs;
        let ticker;
        function tick() {
          let secs2 = timeInSecs;
          if (secs2 > 0) {
            timeInSecs--;
          } else {
            clearInterval(ticker);
          }
          let mins = Math.floor(secs2 / 60);
          secs2 %= 60;
          let pretty = mins + ":" + secs2;
          progressPrettyTimer.value.secs = secs2;
          progressPrettyTimer.value.mins = mins;
          console.log({ pretty });
        }
        timeInSecs = secs;
        tick();
        ticker = setInterval();
      };
      timer(estimatedSec);
    }
    const loading = ref(false);
    const updateLoading = ref(false);
    const updateUrl = apiUrl + "/face/uploadFile";
    const on_success = (response, file, fileList) => {
      updateLoading.value = false;
      form.images.push(response.file);
    };
    const on_progress = (event, file, fileList) => {
      updateLoading.value = true;
    };
    const on_error = (err, file, fileList) => {
      updateLoading.value = false;
      notification.error();
    };
    const deleteImage = (image) => {
      form.images.splice(
        form.images.findIndex((v) => v === image),
        1
      );
    };
    const formRules = reactive({
      faceName: [required],
      images: [faceModelImagesCount]
    });
    const formRuleRef = ref();
    const form = reactive({
      id: null,
      faceName: null,
      images: [],
      key: null
    });
    form.key = (Date.now() + Math.random()).toFixed(0).toString();
    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true;
        if (form.id) {
          const { data, error } = await useApiFetch(
            `/face/${form.id}`,
            "PATCH",
            { ...form }
          );
          if (!error.value) {
            await navigateTo({
              name: "myFaces-id",
              params: { id: data.value.id }
            });
          }
        }
        if (!form.id) {
          const { data, error } = await useApiFetch(`/face`, "POST", {
            ...form
          });
          if (!error.value) {
            await navigateTo({
              name: "myFaces-id",
              params: { id: data.value.id }
            });
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
      progressPercent
    };
  }
};
const _imports_1 = publicAssetsURL("/icon/info.svg");
const _imports_2 = publicAssetsURL("/icon/upload-icon.png");
const _imports_3 = publicAssetsURL("/icon/aiGenerator-white.svg");
const _imports_4 = publicAssetsURL("/img/face/c1.png");
const _imports_5 = publicAssetsURL("/img/face/c2.png");
const _imports_6 = publicAssetsURL("/img/face/c3.png");
const _imports_7 = publicAssetsURL("/img/face/n1.png");
const _imports_8 = publicAssetsURL("/img/face/n2.png");
const _imports_9 = publicAssetsURL("/img/face/n3.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_el_form = ElForm;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_form_item = ElFormItem;
  const _component_el_input = ElInput;
  const _component_el_upload = ElUpload;
  const _component_el_button = ElButton;
  const _component_el_progress = ElProgress;
  const _component_app_button = __nuxt_component_9;
  const _directive_loading = vLoading;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "myfaces-create" }, _attrs))}>`);
  if (!$setup.progressShow) {
    _push(`<div element-loading-text="Loading..."><div class="page-head">`);
    _push(ssrRenderComponent(_component_nuxt_link, { class: "back-btn" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}> HOME`);
        } else {
          return [
            createVNode("img", {
              src: _imports_0,
              alt: ""
            }),
            createTextVNode(" HOME")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<h1 class="page-title">Upload your photos to create a new face</h1><p class="page-description"> To get the best results, please upload 5 to 20 high-quality photos and wait for AI to learn your face </p><div class="photo-pload__guidelines"><img${ssrRenderAttr("src", _imports_1)} alt=""> Photo Upload Guidelines </div></div>`);
    _push(ssrRenderComponent(_component_el_form, mergeProps({
      "label-position": "top",
      ref: "formRuleRef",
      model: $setup.form,
      rules: $setup.formRules,
      class: "myfaces-create__form"
    }, ssrGetDirectiveProps(_ctx, _directive_loading, $setup.loading)), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_col, {
                  span: 12,
                  xs: 24
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="bg-grey app-base-padding app-base-border-radius myfaces-create__form__left"${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_el_form_item, {
                        prop: "faceName",
                        label: "Enter a name"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_input, {
                              modelValue: $setup.form.faceName,
                              "onUpdate:modelValue": ($event) => $setup.form.faceName = $event,
                              placeholder: "Mark",
                              size: "large"
                            }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_el_input, {
                                modelValue: $setup.form.faceName,
                                "onUpdate:modelValue": ($event) => $setup.form.faceName = $event,
                                placeholder: "Mark",
                                size: "large"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_el_form_item, {
                        prop: "images",
                        label: ""
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<label class="my-faces-create-el-upload-label"${_scopeId4}><span${_scopeId4}>Upload photos</span><span${_scopeId4}>${ssrInterpolate($setup.form.images.length)}/20</span></label><div style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_el_upload, mergeProps({
                              ref: "uploadRef",
                              drag: "",
                              accept: "image/png, image/jpeg, image/jpg",
                              limit: 20,
                              "on-success": $setup.on_success,
                              "on-progress": $setup.on_progress,
                              "on-error": $setup.on_error,
                              "auto-upload": true,
                              action: $setup.updateUrl,
                              headers: { Authorization: "Bearer " + $setup.store.accessToken },
                              data: { key: $setup.form.key },
                              multiple: true,
                              "show-file-list": false
                            }, ssrGetDirectiveProps(_ctx, _directive_loading, $setup.updateLoading)), {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="my-faces-create-el-upload-body"${_scopeId5}><div class="upload-body__img"${_scopeId5}><img${ssrRenderAttr("src", _imports_2)}${_scopeId5}></div><div class="my-faces-create-el-upload-body-text"${_scopeId5}><span class="app-orange-text my-faces-create-el-upload-body-text-choose-a-file"${_scopeId5}>Choose a file</span><span class="app-grey-text"${_scopeId5}>or drag it here</span><span class="app-grey-text"${_scopeId5}>PNG, JPG, WEBP or HEIC (max. 3MB)</span></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "my-faces-create-el-upload-body" }, [
                                      createVNode("div", { class: "upload-body__img" }, [
                                        createVNode("img", { src: _imports_2 })
                                      ]),
                                      createVNode("div", { class: "my-faces-create-el-upload-body-text" }, [
                                        createVNode("span", { class: "app-orange-text my-faces-create-el-upload-body-text-choose-a-file" }, "Choose a file"),
                                        createVNode("span", { class: "app-grey-text" }, "or drag it here"),
                                        createVNode("span", { class: "app-grey-text" }, "PNG, JPG, WEBP or HEIC (max. 3MB)")
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(`</div><div class="my-faces-create-el-upload-images"${_scopeId4}><!--[-->`);
                            ssrRenderList($setup.form.images, (image) => {
                              _push5(`<div class="my-faces-create-el-upload-image"${_scopeId4}><div class="upload-images"${_scopeId4}><img${ssrRenderAttr("src", image ? image : "/img/face/c1.png")}${_scopeId4}></div></div>`);
                            });
                            _push5(`<!--]--></div>`);
                          } else {
                            return [
                              createVNode("label", { class: "my-faces-create-el-upload-label" }, [
                                createVNode("span", null, "Upload photos"),
                                createVNode("span", null, toDisplayString($setup.form.images.length) + "/20", 1)
                              ]),
                              createVNode("div", { style: { "width": "100%" } }, [
                                withDirectives((openBlock(), createBlock(_component_el_upload, {
                                  ref: "uploadRef",
                                  drag: "",
                                  accept: "image/png, image/jpeg, image/jpg",
                                  limit: 20,
                                  "on-success": $setup.on_success,
                                  "on-progress": $setup.on_progress,
                                  "on-error": $setup.on_error,
                                  "auto-upload": true,
                                  action: $setup.updateUrl,
                                  headers: { Authorization: "Bearer " + $setup.store.accessToken },
                                  data: { key: $setup.form.key },
                                  multiple: true,
                                  "show-file-list": false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "my-faces-create-el-upload-body" }, [
                                      createVNode("div", { class: "upload-body__img" }, [
                                        createVNode("img", { src: _imports_2 })
                                      ]),
                                      createVNode("div", { class: "my-faces-create-el-upload-body-text" }, [
                                        createVNode("span", { class: "app-orange-text my-faces-create-el-upload-body-text-choose-a-file" }, "Choose a file"),
                                        createVNode("span", { class: "app-grey-text" }, "or drag it here"),
                                        createVNode("span", { class: "app-grey-text" }, "PNG, JPG, WEBP or HEIC (max. 3MB)")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["on-success", "on-progress", "on-error", "action", "headers", "data"])), [
                                  [_directive_loading, $setup.updateLoading]
                                ])
                              ]),
                              createVNode("div", { class: "my-faces-create-el-upload-images" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList($setup.form.images, (image) => {
                                  return openBlock(), createBlock("div", {
                                    class: "my-faces-create-el-upload-image",
                                    key: image
                                  }, [
                                    createVNode("div", { class: "upload-images" }, [
                                      createVNode("img", {
                                        src: image ? image : "/img/face/c1.png"
                                      }, null, 8, ["src"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_el_form_item, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          var _a, _b;
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_button, {
                              type: "primary",
                              size: "large",
                              onClick: $setup.submitForm,
                              disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "18px", "height": "18px", "margin-top": "3px" })}"${_scopeId5}> Generate new face `);
                                } else {
                                  return [
                                    createVNode("img", {
                                      src: _imports_3,
                                      style: { "width": "18px", "height": "18px", "margin-top": "3px" }
                                    }),
                                    createTextVNode(" Generate new face ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_el_button, {
                                type: "primary",
                                size: "large",
                                onClick: $setup.submitForm,
                                disabled: !((_b = $setup.store.getUser) == null ? void 0 : _b.facesCount)
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_3,
                                    style: { "width": "18px", "height": "18px", "margin-top": "3px" }
                                  }),
                                  createTextVNode(" Generate new face ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-grey app-base-padding app-base-border-radius myfaces-create__form__left" }, [
                          createVNode(_component_el_form_item, {
                            prop: "faceName",
                            label: "Enter a name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: $setup.form.faceName,
                                "onUpdate:modelValue": ($event) => $setup.form.faceName = $event,
                                placeholder: "Mark",
                                size: "large"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, {
                            prop: "images",
                            label: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { class: "my-faces-create-el-upload-label" }, [
                                createVNode("span", null, "Upload photos"),
                                createVNode("span", null, toDisplayString($setup.form.images.length) + "/20", 1)
                              ]),
                              createVNode("div", { style: { "width": "100%" } }, [
                                withDirectives((openBlock(), createBlock(_component_el_upload, {
                                  ref: "uploadRef",
                                  drag: "",
                                  accept: "image/png, image/jpeg, image/jpg",
                                  limit: 20,
                                  "on-success": $setup.on_success,
                                  "on-progress": $setup.on_progress,
                                  "on-error": $setup.on_error,
                                  "auto-upload": true,
                                  action: $setup.updateUrl,
                                  headers: { Authorization: "Bearer " + $setup.store.accessToken },
                                  data: { key: $setup.form.key },
                                  multiple: true,
                                  "show-file-list": false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "my-faces-create-el-upload-body" }, [
                                      createVNode("div", { class: "upload-body__img" }, [
                                        createVNode("img", { src: _imports_2 })
                                      ]),
                                      createVNode("div", { class: "my-faces-create-el-upload-body-text" }, [
                                        createVNode("span", { class: "app-orange-text my-faces-create-el-upload-body-text-choose-a-file" }, "Choose a file"),
                                        createVNode("span", { class: "app-grey-text" }, "or drag it here"),
                                        createVNode("span", { class: "app-grey-text" }, "PNG, JPG, WEBP or HEIC (max. 3MB)")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["on-success", "on-progress", "on-error", "action", "headers", "data"])), [
                                  [_directive_loading, $setup.updateLoading]
                                ])
                              ]),
                              createVNode("div", { class: "my-faces-create-el-upload-images" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList($setup.form.images, (image) => {
                                  return openBlock(), createBlock("div", {
                                    class: "my-faces-create-el-upload-image",
                                    key: image
                                  }, [
                                    createVNode("div", { class: "upload-images" }, [
                                      createVNode("img", {
                                        src: image ? image : "/img/face/c1.png"
                                      }, null, 8, ["src"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, null, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  size: "large",
                                  onClick: $setup.submitForm,
                                  disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_3,
                                      style: { "width": "18px", "height": "18px", "margin-top": "3px" }
                                    }),
                                    createTextVNode(" Generate new face ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ];
                            }),
                            _: 1
                          })
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_col, {
                  span: 12,
                  xs: 24
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="bg-grey app-base-padding app-base-border-radius myfaces-create__form__right"${_scopeId3}><div class="block-head"${_scopeId3}><h2 class="title"${_scopeId3}><span${_scopeId3}>Photo Upload Guidelines and Requirements</span><span${_scopeId3}>Upload 5 to 20 high-quality photos</span></h2><p class="description"${_scopeId3}> To get the best results, please upload 5 to 20 high-quality photos </p></div><div class="step-list"${_scopeId3}><div class="list-item"${_scopeId3}><span class="step-num"${_scopeId3}>STEP 1</span><span class="step-content"${_scopeId3}>Upload your photos</span></div><div class="list-item"${_scopeId3}><span class="step-num"${_scopeId3}>STEP 1</span><span class="step-content"${_scopeId3}>Wait ~30 min for the AI to learn your face <span class="step-content__warning"${_scopeId3}>*You will receive an email when your face is ready</span></span></div><div class="list-item"${_scopeId3}><span class="step-num"${_scopeId3}>STEP 1</span><span class="step-content"${_scopeId3}>Start generating your AI photos!</span></div></div>`);
                      _push4(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_col, {
                              span: 12,
                              xs: 24,
                              class: "myfaces-create__form-right-card-item"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="bg-black app-base-padding app-base-border-radius"${_scopeId5}><div class="my-faces-create-example-images"${_scopeId5}><div${_scopeId5}><img${ssrRenderAttr("src", _imports_4)}${_scopeId5}></div><div${_scopeId5}><img${ssrRenderAttr("src", _imports_5)}${_scopeId5}></div><div${_scopeId5}><img${ssrRenderAttr("src", _imports_6)}${_scopeId5}></div></div><div class="my-faces-create-example-info"${_scopeId5}><p class="card-item__title"${_scopeId5}>✅ Good Photos</p><span class="card-item__description"${_scopeId5}> Use bright natural lighting, capture multiple angles (front, side, three-quarter), show various expressions, and avoid heavy editing for accuracy. </span></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                      createVNode("div", { class: "my-faces-create-example-images" }, [
                                        createVNode("div", null, [
                                          createVNode("img", { src: _imports_4 })
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("img", { src: _imports_5 })
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("img", { src: _imports_6 })
                                        ])
                                      ]),
                                      createVNode("div", { class: "my-faces-create-example-info" }, [
                                        createVNode("p", { class: "card-item__title" }, "✅ Good Photos"),
                                        createVNode("span", { class: "card-item__description" }, " Use bright natural lighting, capture multiple angles (front, side, three-quarter), show various expressions, and avoid heavy editing for accuracy. ")
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_el_col, {
                              span: 12,
                              xs: 24,
                              class: "myfaces-create__form-right-card-item"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="bg-black app-base-padding app-base-border-radius"${_scopeId5}><div class="my-faces-create-example-images"${_scopeId5}><div${_scopeId5}><img${ssrRenderAttr("src", _imports_7)}${_scopeId5}></div><div${_scopeId5}><img${ssrRenderAttr("src", _imports_8)}${_scopeId5}></div><div${_scopeId5}><img${ssrRenderAttr("src", _imports_9)}${_scopeId5}></div></div><div class="my-faces-create-example-info"${_scopeId5}><p class="card-item__title"${_scopeId5}>🚫 Bad Photos</p><span class="card-item__description"${_scopeId5}> Avoid group photos. Ensure images are sharp, well-lit without shadows, and keep angles natural and straightforward. </span></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                      createVNode("div", { class: "my-faces-create-example-images" }, [
                                        createVNode("div", null, [
                                          createVNode("img", { src: _imports_7 })
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("img", { src: _imports_8 })
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("img", { src: _imports_9 })
                                        ])
                                      ]),
                                      createVNode("div", { class: "my-faces-create-example-info" }, [
                                        createVNode("p", { class: "card-item__title" }, "🚫 Bad Photos"),
                                        createVNode("span", { class: "card-item__description" }, " Avoid group photos. Ensure images are sharp, well-lit without shadows, and keep angles natural and straightforward. ")
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_el_col, {
                                span: 12,
                                xs: 24,
                                class: "myfaces-create__form-right-card-item"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                    createVNode("div", { class: "my-faces-create-example-images" }, [
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_4 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_5 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_6 })
                                      ])
                                    ]),
                                    createVNode("div", { class: "my-faces-create-example-info" }, [
                                      createVNode("p", { class: "card-item__title" }, "✅ Good Photos"),
                                      createVNode("span", { class: "card-item__description" }, " Use bright natural lighting, capture multiple angles (front, side, three-quarter), show various expressions, and avoid heavy editing for accuracy. ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_col, {
                                span: 12,
                                xs: 24,
                                class: "myfaces-create__form-right-card-item"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                    createVNode("div", { class: "my-faces-create-example-images" }, [
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_7 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_8 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_9 })
                                      ])
                                    ]),
                                    createVNode("div", { class: "my-faces-create-example-info" }, [
                                      createVNode("p", { class: "card-item__title" }, "🚫 Bad Photos"),
                                      createVNode("span", { class: "card-item__description" }, " Avoid group photos. Ensure images are sharp, well-lit without shadows, and keep angles natural and straightforward. ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_el_form_item, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          var _a, _b;
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_button, {
                              type: "primary",
                              size: "large",
                              onClick: $setup.submitForm,
                              disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><mask id="mask0_2087_2538" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="19"${_scopeId5}><rect y="0.5" width="18" height="18" fill="#D9D9D9"${_scopeId5}></rect></mask><g mask="url(#mask0_2087_2538)"${_scopeId5}><path d="M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z" fill="white"${_scopeId5}></path></g></svg> Back to upload `);
                                } else {
                                  return [
                                    (openBlock(), createBlock("svg", {
                                      width: "18",
                                      height: "19",
                                      viewBox: "0 0 18 19",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("mask", {
                                        id: "mask0_2087_2538",
                                        style: { "mask-type": "alpha" },
                                        maskUnits: "userSpaceOnUse",
                                        x: "0",
                                        y: "0",
                                        width: "18",
                                        height: "19"
                                      }, [
                                        createVNode("rect", {
                                          y: "0.5",
                                          width: "18",
                                          height: "18",
                                          fill: "#D9D9D9"
                                        })
                                      ]),
                                      createVNode("g", { mask: "url(#mask0_2087_2538)" }, [
                                        createVNode("path", {
                                          d: "M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z",
                                          fill: "white"
                                        })
                                      ])
                                    ])),
                                    createTextVNode(" Back to upload ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_el_button, {
                                type: "primary",
                                size: "large",
                                onClick: $setup.submitForm,
                                disabled: !((_b = $setup.store.getUser) == null ? void 0 : _b.facesCount)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    width: "18",
                                    height: "19",
                                    viewBox: "0 0 18 19",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("mask", {
                                      id: "mask0_2087_2538",
                                      style: { "mask-type": "alpha" },
                                      maskUnits: "userSpaceOnUse",
                                      x: "0",
                                      y: "0",
                                      width: "18",
                                      height: "19"
                                    }, [
                                      createVNode("rect", {
                                        y: "0.5",
                                        width: "18",
                                        height: "18",
                                        fill: "#D9D9D9"
                                      })
                                    ]),
                                    createVNode("g", { mask: "url(#mask0_2087_2538)" }, [
                                      createVNode("path", {
                                        d: "M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z",
                                        fill: "white"
                                      })
                                    ])
                                  ])),
                                  createTextVNode(" Back to upload ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-grey app-base-padding app-base-border-radius myfaces-create__form__right" }, [
                          createVNode("div", { class: "block-head" }, [
                            createVNode("h2", { class: "title" }, [
                              createVNode("span", null, "Photo Upload Guidelines and Requirements"),
                              createVNode("span", null, "Upload 5 to 20 high-quality photos")
                            ]),
                            createVNode("p", { class: "description" }, " To get the best results, please upload 5 to 20 high-quality photos ")
                          ]),
                          createVNode("div", { class: "step-list" }, [
                            createVNode("div", { class: "list-item" }, [
                              createVNode("span", { class: "step-num" }, "STEP 1"),
                              createVNode("span", { class: "step-content" }, "Upload your photos")
                            ]),
                            createVNode("div", { class: "list-item" }, [
                              createVNode("span", { class: "step-num" }, "STEP 1"),
                              createVNode("span", { class: "step-content" }, [
                                createTextVNode("Wait ~30 min for the AI to learn your face "),
                                createVNode("span", { class: "step-content__warning" }, "*You will receive an email when your face is ready")
                              ])
                            ]),
                            createVNode("div", { class: "list-item" }, [
                              createVNode("span", { class: "step-num" }, "STEP 1"),
                              createVNode("span", { class: "step-content" }, "Start generating your AI photos!")
                            ])
                          ]),
                          createVNode(_component_el_row, { gutter: 15 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_col, {
                                span: 12,
                                xs: 24,
                                class: "myfaces-create__form-right-card-item"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                    createVNode("div", { class: "my-faces-create-example-images" }, [
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_4 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_5 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_6 })
                                      ])
                                    ]),
                                    createVNode("div", { class: "my-faces-create-example-info" }, [
                                      createVNode("p", { class: "card-item__title" }, "✅ Good Photos"),
                                      createVNode("span", { class: "card-item__description" }, " Use bright natural lighting, capture multiple angles (front, side, three-quarter), show various expressions, and avoid heavy editing for accuracy. ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_col, {
                                span: 12,
                                xs: 24,
                                class: "myfaces-create__form-right-card-item"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                    createVNode("div", { class: "my-faces-create-example-images" }, [
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_7 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_8 })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("img", { src: _imports_9 })
                                      ])
                                    ]),
                                    createVNode("div", { class: "my-faces-create-example-info" }, [
                                      createVNode("p", { class: "card-item__title" }, "🚫 Bad Photos"),
                                      createVNode("span", { class: "card-item__description" }, " Avoid group photos. Ensure images are sharp, well-lit without shadows, and keep angles natural and straightforward. ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, null, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  size: "large",
                                  onClick: $setup.submitForm,
                                  disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      width: "18",
                                      height: "19",
                                      viewBox: "0 0 18 19",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("mask", {
                                        id: "mask0_2087_2538",
                                        style: { "mask-type": "alpha" },
                                        maskUnits: "userSpaceOnUse",
                                        x: "0",
                                        y: "0",
                                        width: "18",
                                        height: "19"
                                      }, [
                                        createVNode("rect", {
                                          y: "0.5",
                                          width: "18",
                                          height: "18",
                                          fill: "#D9D9D9"
                                        })
                                      ]),
                                      createVNode("g", { mask: "url(#mask0_2087_2538)" }, [
                                        createVNode("path", {
                                          d: "M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z",
                                          fill: "white"
                                        })
                                      ])
                                    ])),
                                    createTextVNode(" Back to upload ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ];
                            }),
                            _: 1
                          })
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_el_col, {
                    span: 12,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-grey app-base-padding app-base-border-radius myfaces-create__form__left" }, [
                        createVNode(_component_el_form_item, {
                          prop: "faceName",
                          label: "Enter a name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: $setup.form.faceName,
                              "onUpdate:modelValue": ($event) => $setup.form.faceName = $event,
                              placeholder: "Mark",
                              size: "large"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, {
                          prop: "images",
                          label: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("label", { class: "my-faces-create-el-upload-label" }, [
                              createVNode("span", null, "Upload photos"),
                              createVNode("span", null, toDisplayString($setup.form.images.length) + "/20", 1)
                            ]),
                            createVNode("div", { style: { "width": "100%" } }, [
                              withDirectives((openBlock(), createBlock(_component_el_upload, {
                                ref: "uploadRef",
                                drag: "",
                                accept: "image/png, image/jpeg, image/jpg",
                                limit: 20,
                                "on-success": $setup.on_success,
                                "on-progress": $setup.on_progress,
                                "on-error": $setup.on_error,
                                "auto-upload": true,
                                action: $setup.updateUrl,
                                headers: { Authorization: "Bearer " + $setup.store.accessToken },
                                data: { key: $setup.form.key },
                                multiple: true,
                                "show-file-list": false
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "my-faces-create-el-upload-body" }, [
                                    createVNode("div", { class: "upload-body__img" }, [
                                      createVNode("img", { src: _imports_2 })
                                    ]),
                                    createVNode("div", { class: "my-faces-create-el-upload-body-text" }, [
                                      createVNode("span", { class: "app-orange-text my-faces-create-el-upload-body-text-choose-a-file" }, "Choose a file"),
                                      createVNode("span", { class: "app-grey-text" }, "or drag it here"),
                                      createVNode("span", { class: "app-grey-text" }, "PNG, JPG, WEBP or HEIC (max. 3MB)")
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["on-success", "on-progress", "on-error", "action", "headers", "data"])), [
                                [_directive_loading, $setup.updateLoading]
                              ])
                            ]),
                            createVNode("div", { class: "my-faces-create-el-upload-images" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList($setup.form.images, (image) => {
                                return openBlock(), createBlock("div", {
                                  class: "my-faces-create-el-upload-image",
                                  key: image
                                }, [
                                  createVNode("div", { class: "upload-images" }, [
                                    createVNode("img", {
                                      src: image ? image : "/img/face/c1.png"
                                    }, null, 8, ["src"])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(_component_el_button, {
                                type: "primary",
                                size: "large",
                                onClick: $setup.submitForm,
                                disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_3,
                                    style: { "width": "18px", "height": "18px", "margin-top": "3px" }
                                  }),
                                  createTextVNode(" Generate new face ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ];
                          }),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    span: 12,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-grey app-base-padding app-base-border-radius myfaces-create__form__right" }, [
                        createVNode("div", { class: "block-head" }, [
                          createVNode("h2", { class: "title" }, [
                            createVNode("span", null, "Photo Upload Guidelines and Requirements"),
                            createVNode("span", null, "Upload 5 to 20 high-quality photos")
                          ]),
                          createVNode("p", { class: "description" }, " To get the best results, please upload 5 to 20 high-quality photos ")
                        ]),
                        createVNode("div", { class: "step-list" }, [
                          createVNode("div", { class: "list-item" }, [
                            createVNode("span", { class: "step-num" }, "STEP 1"),
                            createVNode("span", { class: "step-content" }, "Upload your photos")
                          ]),
                          createVNode("div", { class: "list-item" }, [
                            createVNode("span", { class: "step-num" }, "STEP 1"),
                            createVNode("span", { class: "step-content" }, [
                              createTextVNode("Wait ~30 min for the AI to learn your face "),
                              createVNode("span", { class: "step-content__warning" }, "*You will receive an email when your face is ready")
                            ])
                          ]),
                          createVNode("div", { class: "list-item" }, [
                            createVNode("span", { class: "step-num" }, "STEP 1"),
                            createVNode("span", { class: "step-content" }, "Start generating your AI photos!")
                          ])
                        ]),
                        createVNode(_component_el_row, { gutter: 15 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_col, {
                              span: 12,
                              xs: 24,
                              class: "myfaces-create__form-right-card-item"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                  createVNode("div", { class: "my-faces-create-example-images" }, [
                                    createVNode("div", null, [
                                      createVNode("img", { src: _imports_4 })
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("img", { src: _imports_5 })
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("img", { src: _imports_6 })
                                    ])
                                  ]),
                                  createVNode("div", { class: "my-faces-create-example-info" }, [
                                    createVNode("p", { class: "card-item__title" }, "✅ Good Photos"),
                                    createVNode("span", { class: "card-item__description" }, " Use bright natural lighting, capture multiple angles (front, side, three-quarter), show various expressions, and avoid heavy editing for accuracy. ")
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_col, {
                              span: 12,
                              xs: 24,
                              class: "myfaces-create__form-right-card-item"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                  createVNode("div", { class: "my-faces-create-example-images" }, [
                                    createVNode("div", null, [
                                      createVNode("img", { src: _imports_7 })
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("img", { src: _imports_8 })
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("img", { src: _imports_9 })
                                    ])
                                  ]),
                                  createVNode("div", { class: "my-faces-create-example-info" }, [
                                    createVNode("p", { class: "card-item__title" }, "🚫 Bad Photos"),
                                    createVNode("span", { class: "card-item__description" }, " Avoid group photos. Ensure images are sharp, well-lit without shadows, and keep angles natural and straightforward. ")
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(_component_el_button, {
                                type: "primary",
                                size: "large",
                                onClick: $setup.submitForm,
                                disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    width: "18",
                                    height: "19",
                                    viewBox: "0 0 18 19",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("mask", {
                                      id: "mask0_2087_2538",
                                      style: { "mask-type": "alpha" },
                                      maskUnits: "userSpaceOnUse",
                                      x: "0",
                                      y: "0",
                                      width: "18",
                                      height: "19"
                                    }, [
                                      createVNode("rect", {
                                        y: "0.5",
                                        width: "18",
                                        height: "18",
                                        fill: "#D9D9D9"
                                      })
                                    ]),
                                    createVNode("g", { mask: "url(#mask0_2087_2538)" }, [
                                      createVNode("path", {
                                        d: "M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z",
                                        fill: "white"
                                      })
                                    ])
                                  ])),
                                  createTextVNode(" Back to upload ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ];
                          }),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_el_row, { gutter: 15 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, {
                  span: 12,
                  xs: 24
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-grey app-base-padding app-base-border-radius myfaces-create__form__left" }, [
                      createVNode(_component_el_form_item, {
                        prop: "faceName",
                        label: "Enter a name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: $setup.form.faceName,
                            "onUpdate:modelValue": ($event) => $setup.form.faceName = $event,
                            placeholder: "Mark",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        prop: "images",
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("label", { class: "my-faces-create-el-upload-label" }, [
                            createVNode("span", null, "Upload photos"),
                            createVNode("span", null, toDisplayString($setup.form.images.length) + "/20", 1)
                          ]),
                          createVNode("div", { style: { "width": "100%" } }, [
                            withDirectives((openBlock(), createBlock(_component_el_upload, {
                              ref: "uploadRef",
                              drag: "",
                              accept: "image/png, image/jpeg, image/jpg",
                              limit: 20,
                              "on-success": $setup.on_success,
                              "on-progress": $setup.on_progress,
                              "on-error": $setup.on_error,
                              "auto-upload": true,
                              action: $setup.updateUrl,
                              headers: { Authorization: "Bearer " + $setup.store.accessToken },
                              data: { key: $setup.form.key },
                              multiple: true,
                              "show-file-list": false
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "my-faces-create-el-upload-body" }, [
                                  createVNode("div", { class: "upload-body__img" }, [
                                    createVNode("img", { src: _imports_2 })
                                  ]),
                                  createVNode("div", { class: "my-faces-create-el-upload-body-text" }, [
                                    createVNode("span", { class: "app-orange-text my-faces-create-el-upload-body-text-choose-a-file" }, "Choose a file"),
                                    createVNode("span", { class: "app-grey-text" }, "or drag it here"),
                                    createVNode("span", { class: "app-grey-text" }, "PNG, JPG, WEBP or HEIC (max. 3MB)")
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["on-success", "on-progress", "on-error", "action", "headers", "data"])), [
                              [_directive_loading, $setup.updateLoading]
                            ])
                          ]),
                          createVNode("div", { class: "my-faces-create-el-upload-images" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($setup.form.images, (image) => {
                              return openBlock(), createBlock("div", {
                                class: "my-faces-create-el-upload-image",
                                key: image
                              }, [
                                createVNode("div", { class: "upload-images" }, [
                                  createVNode("img", {
                                    src: image ? image : "/img/face/c1.png"
                                  }, null, 8, ["src"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(_component_el_button, {
                              type: "primary",
                              size: "large",
                              onClick: $setup.submitForm,
                              disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_3,
                                  style: { "width": "18px", "height": "18px", "margin-top": "3px" }
                                }),
                                createTextVNode(" Generate new face ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ];
                        }),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  span: 12,
                  xs: 24
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-grey app-base-padding app-base-border-radius myfaces-create__form__right" }, [
                      createVNode("div", { class: "block-head" }, [
                        createVNode("h2", { class: "title" }, [
                          createVNode("span", null, "Photo Upload Guidelines and Requirements"),
                          createVNode("span", null, "Upload 5 to 20 high-quality photos")
                        ]),
                        createVNode("p", { class: "description" }, " To get the best results, please upload 5 to 20 high-quality photos ")
                      ]),
                      createVNode("div", { class: "step-list" }, [
                        createVNode("div", { class: "list-item" }, [
                          createVNode("span", { class: "step-num" }, "STEP 1"),
                          createVNode("span", { class: "step-content" }, "Upload your photos")
                        ]),
                        createVNode("div", { class: "list-item" }, [
                          createVNode("span", { class: "step-num" }, "STEP 1"),
                          createVNode("span", { class: "step-content" }, [
                            createTextVNode("Wait ~30 min for the AI to learn your face "),
                            createVNode("span", { class: "step-content__warning" }, "*You will receive an email when your face is ready")
                          ])
                        ]),
                        createVNode("div", { class: "list-item" }, [
                          createVNode("span", { class: "step-num" }, "STEP 1"),
                          createVNode("span", { class: "step-content" }, "Start generating your AI photos!")
                        ])
                      ]),
                      createVNode(_component_el_row, { gutter: 15 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_col, {
                            span: 12,
                            xs: 24,
                            class: "myfaces-create__form-right-card-item"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                createVNode("div", { class: "my-faces-create-example-images" }, [
                                  createVNode("div", null, [
                                    createVNode("img", { src: _imports_4 })
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("img", { src: _imports_5 })
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("img", { src: _imports_6 })
                                  ])
                                ]),
                                createVNode("div", { class: "my-faces-create-example-info" }, [
                                  createVNode("p", { class: "card-item__title" }, "✅ Good Photos"),
                                  createVNode("span", { class: "card-item__description" }, " Use bright natural lighting, capture multiple angles (front, side, three-quarter), show various expressions, and avoid heavy editing for accuracy. ")
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_col, {
                            span: 12,
                            xs: 24,
                            class: "myfaces-create__form-right-card-item"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "bg-black app-base-padding app-base-border-radius" }, [
                                createVNode("div", { class: "my-faces-create-example-images" }, [
                                  createVNode("div", null, [
                                    createVNode("img", { src: _imports_7 })
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("img", { src: _imports_8 })
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("img", { src: _imports_9 })
                                  ])
                                ]),
                                createVNode("div", { class: "my-faces-create-example-info" }, [
                                  createVNode("p", { class: "card-item__title" }, "🚫 Bad Photos"),
                                  createVNode("span", { class: "card-item__description" }, " Avoid group photos. Ensure images are sharp, well-lit without shadows, and keep angles natural and straightforward. ")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(_component_el_button, {
                              type: "primary",
                              size: "large",
                              onClick: $setup.submitForm,
                              disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.facesCount)
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  width: "18",
                                  height: "19",
                                  viewBox: "0 0 18 19",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("mask", {
                                    id: "mask0_2087_2538",
                                    style: { "mask-type": "alpha" },
                                    maskUnits: "userSpaceOnUse",
                                    x: "0",
                                    y: "0",
                                    width: "18",
                                    height: "19"
                                  }, [
                                    createVNode("rect", {
                                      y: "0.5",
                                      width: "18",
                                      height: "18",
                                      fill: "#D9D9D9"
                                    })
                                  ]),
                                  createVNode("g", { mask: "url(#mask0_2087_2538)" }, [
                                    createVNode("path", {
                                      d: "M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z",
                                      fill: "white"
                                    })
                                  ])
                                ])),
                                createTextVNode(" Back to upload ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ];
                        }),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.progressShow) {
    _push(`<div class="myFaces-create-progress-block"><div class="myFaces-create-progress-block-body app-base-border-radius app-base-padding"><div class="myFaces-create-progress-block-body-progress">`);
    _push(ssrRenderComponent(_component_el_progress, {
      type: "circle",
      percentage: $setup.progressPercent,
      "stroke-width": 12,
      width: 280,
      indeterminate: true
    }, {
      default: withCtx(({ percentage }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="loading-percentage"${_scopeId}>${ssrInterpolate(percentage)} <span${_scopeId}>%</span></div><div class="loading-time"${_scopeId}>Estimated time</div><div class="loading-time"${_scopeId}>${ssrInterpolate($setup.progressPrettyTimer.secs)} s / ${ssrInterpolate($setup.progressPrettyTimer.mins)} min </div>`);
        } else {
          return [
            createVNode("div", { class: "loading-percentage" }, [
              createTextVNode(toDisplayString(percentage) + " ", 1),
              createVNode("span", null, "%")
            ]),
            createVNode("div", { class: "loading-time" }, "Estimated time"),
            createVNode("div", { class: "loading-time" }, toDisplayString($setup.progressPrettyTimer.secs) + " s / " + toDisplayString($setup.progressPrettyTimer.mins) + " min ", 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="myFaces-create-progress-block-body-info"><button class="close-btn"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_375_10374" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23"><rect width="23" height="23" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_375_10374)"><path d="M4.22398 20.212L2.78906 18.7771L10.4147 11.1514L2.78906 3.52574L4.22398 2.09082L11.8497 9.7165L19.4753 2.09082L20.9103 3.52574L13.2846 11.1514L20.9103 18.7771L19.4753 20.212L11.8497 12.5863L4.22398 20.212Z" fill="#818181"></path></g></svg></button><h1 class="title">AI Model is generating</h1><p class="description"> You can dismiss this screen while processing is in progress </p>`);
    _push(ssrRenderComponent(_component_app_button, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="icon"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}></span> Notify me when ready`);
        } else {
          return [
            createVNode("span", { class: "icon" }, [
              createVNode("img", {
                src: _imports_0$1,
                alt: ""
              })
            ]),
            createTextVNode(" Notify me when ready")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myFaces/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  create as default
};
//# sourceMappingURL=create-B0hvYHUF.js.map
