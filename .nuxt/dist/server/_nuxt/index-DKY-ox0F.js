import { _ as __nuxt_component_0 } from "./nuxt-link-DM--a9B3.js";
import { f as useRouter, m as useRoute, u as useAuthStore, a as apiFetchGet, c as useApiFetch, _ as _export_sfc, q as ElForm, s as ElRow, t as ElCol, v as ElFormItem, o as ElInput, z as ElRadioGroup, A as ElRadioButton, B as ElSlider, e as ElButton, y as vLoading } from "../server.mjs";
/* empty css              */
import { r as required, u as useValidateForm } from "./element.utils-D43vSFwO.js";
/* empty css                */
/* empty css                  */
/* empty css                    */
/* empty css                   */
/* empty css                    */
import { ref, reactive, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-jocmKLJ9.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_1$1 } from "./virtual_public-CRrnQEcK.js";
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
const _sfc_main = {
  async setup() {
    var _a;
    const loading = ref(false);
    const r = useRouter();
    const route = useRoute();
    const store = useAuthStore();
    const isMounted = ref(false);
    const faceItems = ref([]);
    const getList = async () => {
      const data = await apiFetchGet("/face", {
        offset: 0,
        limit: 5e4,
        min: true,
        trainingStatus: "Completed"
      });
      faceItems.value = data.items;
    };
    await getList();
    const formRules = reactive({
      prompt: [required]
    });
    const formRuleRef = ref();
    const form = reactive({
      includeYourPhotos: false,
      loraScale: 90,
      aspectRatio: "16:9",
      //  '1:1' | '16:9' | '3:4' | '9:16'
      prompt: null,
      face: null
    });
    const d_face = ((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.face) || null;
    if (d_face) {
      form.includeYourPhotos = true;
      form.face = Number(d_face);
    }
    const changeIncludeYourPhotos = () => {
      if (!form.includeYourPhotos) {
        form.face = null;
      }
    };
    const result = ref(null);
    result.value = null;
    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true;
        if (!form.id) {
          const { data, error } = await useApiFetch(
            `/faceImageGeneration`,
            "POST",
            { ...form }
          );
          if (!error.value) {
            result.value = data.value;
            console.log({ data });
            await store.getUserApi();
          }
        }
        loading.value = false;
      }
    };
    const changeFace = (faceId) => {
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
      r
    };
  }
};
const _imports_1 = publicAssetsURL("/img/out-0-43.png");
const _imports_2 = publicAssetsURL("/icon/none.svg");
const _imports_3 = publicAssetsURL("/icon/check_circle.svg");
const _imports_4 = publicAssetsURL("/icon/add.svg");
const _imports_5 = publicAssetsURL("/icon/draw.svg");
const _imports_7 = publicAssetsURL("/icon/lock.svg");
const _imports_8 = publicAssetsURL("/image.png");
const _imports_9 = publicAssetsURL("/icon/download.svg");
const _imports_10 = publicAssetsURL("/icon/content_copy.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_el_form = ElForm;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_form_item = ElFormItem;
  const _component_el_input = ElInput;
  const _component_el_radio_group = ElRadioGroup;
  const _component_el_radio_button = ElRadioButton;
  const _component_el_slider = ElSlider;
  const _component_el_button = ElButton;
  const _directive_loading = vLoading;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ai-generator" }, _attrs))}><div class="page-head">`);
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
  _push(`<h1 class="page-title">Generate any AI Photo with your text prompt</h1><p class="page-description"> You can upgrade or cancel subsription plan at any time. `);
  if (!$setup.form.includeYourPhotos) {
    _push(`<button class="upgrade">UPGRADE</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</p></div>`);
  _push(ssrRenderComponent(_component_el_form, mergeProps({
    class: "ai-generation-form app-base-border-radius app-base-padding",
    "label-position": "top",
    ref: "formRuleRef",
    model: $setup.form,
    rules: $setup.formRules
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
                  var _a, _b;
                  if (_push4) {
                    _push4(`<div class="choose-your_face"${_scopeId3}><div class="choose-your_face-head"${_scopeId3}><div class="label"${_scopeId3}><span${_scopeId3}>Choose your face</span></div>`);
                    if ($setup.form.includeYourPhotos) {
                      _push4(`<div class="el-form-item__label" prop="face"${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_nuxt_link, {
                        class: "el-form-item__label-add-new-face-btn",
                        to: { name: "myFaces-create" }
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(` + ADD NEW FACE `);
                          } else {
                            return [
                              createTextVNode(" + ADD NEW FACE ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="choose-your-face-in"${_scopeId3}>`);
                    if ($setup.form.includeYourPhotos) {
                      _push4(`<div class="created-face"${_scopeId3}><div class="created-face__in"${_scopeId3}><img class="created-face__img"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId3}></div> Vlad </div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`<div class="none"${_scopeId3}><div class="none-in choose-your-face-btn"${_scopeId3}><img class="none-img"${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId3}>`);
                    if (!$setup.form.includeYourPhotos) {
                      _push4(`<img class="check_circel"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId3}>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div> None </div>`);
                    if (!$setup.form.includeYourPhotos) {
                      _push4(`<div class="new-add"${_scopeId3}><div class="new-add__in choose-your-face-btn"${_scopeId3}><img class="add-img"${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId3}></div> Upgrade to add new </div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div></div><div class="form-head"${_scopeId3}><label class="label"${_scopeId3}>Enter a prompt</label><button class="try-random"${_scopeId3}><img${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId3}> TRY RANDOM </button></div>`);
                    _push4(ssrRenderComponent(_component_el_form_item, { prop: "prompt" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_input, {
                            size: "large",
                            modelValue: $setup.form.prompt,
                            "onUpdate:modelValue": ($event) => $setup.form.prompt = $event,
                            type: "textarea",
                            rows: 10,
                            placeholder: "I want to be depicted in a vibrant urban setting, standing confidently on a bustling street filled with colorful shops and cafes."
                          }, null, _parent5, _scopeId4));
                          _push5(`<span class="can-written"${_scopeId4}>0/150</span>`);
                        } else {
                          return [
                            createVNode(_component_el_input, {
                              size: "large",
                              modelValue: $setup.form.prompt,
                              "onUpdate:modelValue": ($event) => $setup.form.prompt = $event,
                              type: "textarea",
                              rows: 10,
                              placeholder: "I want to be depicted in a vibrant urban setting, standing confidently on a bustling street filled with colorful shops and cafes."
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("span", { class: "can-written" }, "0/150")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_el_form_item, {
                      prop: "aspectRatio",
                      label: "Choose an aspect ratio",
                      class: "aspect-ratio"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_radio_group, {
                            modelValue: $setup.form.aspectRatio,
                            "onUpdate:modelValue": ($event) => $setup.form.aspectRatio = $event,
                            size: "large"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_radio_button, {
                                  label: "1:1",
                                  value: "1:1",
                                  size: "large"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_el_radio_button, {
                                  label: "16:9",
                                  value: "16:9",
                                  size: "large"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_el_radio_button, {
                                  label: "3:4",
                                  value: "3:4",
                                  size: "large"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_el_radio_button, {
                                  label: "9:16",
                                  value: "9:16",
                                  size: "large"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_radio_button, {
                                    label: "1:1",
                                    value: "1:1",
                                    size: "large"
                                  }),
                                  createVNode(_component_el_radio_button, {
                                    label: "16:9",
                                    value: "16:9",
                                    size: "large"
                                  }),
                                  createVNode(_component_el_radio_button, {
                                    label: "3:4",
                                    value: "3:4",
                                    size: "large"
                                  }),
                                  createVNode(_component_el_radio_button, {
                                    label: "9:16",
                                    value: "9:16",
                                    size: "large"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_radio_group, {
                              modelValue: $setup.form.aspectRatio,
                              "onUpdate:modelValue": ($event) => $setup.form.aspectRatio = $event,
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_radio_button, {
                                  label: "1:1",
                                  value: "1:1",
                                  size: "large"
                                }),
                                createVNode(_component_el_radio_button, {
                                  label: "16:9",
                                  value: "16:9",
                                  size: "large"
                                }),
                                createVNode(_component_el_radio_button, {
                                  label: "3:4",
                                  value: "3:4",
                                  size: "large"
                                }),
                                createVNode(_component_el_radio_button, {
                                  label: "9:16",
                                  value: "9:16",
                                  size: "large"
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    if ($setup.form.includeYourPhotos) {
                      _push4(ssrRenderComponent(_component_el_form_item, {
                        prop: "loraScale",
                        label: "Choose face replacement ratio",
                        class: "replacement_ratio"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<div style="${ssrRenderStyle({ "width": "100%", "position": "relative" })}"${_scopeId4}><span style="${ssrRenderStyle({ "position": "absolute", "left": "0", "bottom": "-20px" })}"${_scopeId4}>80%</span>`);
                            _push5(ssrRenderComponent(_component_el_slider, {
                              ref: "sliderRef",
                              size: "large",
                              "show-tooltip": true,
                              placement: "bottom",
                              "tooltip-class": "ai-generation-form-tooltip-class",
                              modelValue: $setup.form.loraScale,
                              "onUpdate:modelValue": ($event) => $setup.form.loraScale = $event,
                              step: 1,
                              min: 80,
                              max: 120,
                              disabled: !$setup.form.face
                            }, null, _parent5, _scopeId4));
                            _push5(`<span style="${ssrRenderStyle({ "position": "absolute", "right": "0", "bottom": "-20px" })}"${_scopeId4}>120%</span></div>`);
                          } else {
                            return [
                              createVNode("div", { style: { "width": "100%", "position": "relative" } }, [
                                createVNode("span", { style: { "position": "absolute", "left": "0", "bottom": "-20px" } }, "80%"),
                                createVNode(_component_el_slider, {
                                  ref: "sliderRef",
                                  size: "large",
                                  "show-tooltip": true,
                                  placement: "bottom",
                                  "tooltip-class": "ai-generation-form-tooltip-class",
                                  modelValue: $setup.form.loraScale,
                                  "onUpdate:modelValue": ($event) => $setup.form.loraScale = $event,
                                  step: 1,
                                  min: 80,
                                  max: 120,
                                  disabled: !$setup.form.face
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                createVNode("span", { style: { "position": "absolute", "right": "0", "bottom": "-20px" } }, "120%")
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`<div class="form-botttom"${_scopeId3}><span class="free-credits"${_scopeId3}>You have 5 free credits</span>`);
                    _push4(ssrRenderComponent(_component_el_button, {
                      onClick: $setup.submitForm,
                      type: "primary",
                      size: "large",
                      disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.generationsCount)
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId4}> Generate for 1 credit `);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_1$1,
                              alt: ""
                            }),
                            createTextVNode(" Generate for 1 credit ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "choose-your_face" }, [
                        createVNode("div", { class: "choose-your_face-head" }, [
                          createVNode("div", { class: "label" }, [
                            createVNode("span", null, "Choose your face")
                          ]),
                          $setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "el-form-item__label",
                            prop: "face"
                          }, [
                            createVNode(_component_nuxt_link, {
                              class: "el-form-item__label-add-new-face-btn",
                              to: { name: "myFaces-create" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" + ADD NEW FACE ")
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "choose-your-face-in" }, [
                          $setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "created-face"
                          }, [
                            createVNode("div", { class: "created-face__in" }, [
                              createVNode("img", {
                                class: "created-face__img",
                                src: _imports_1,
                                alt: ""
                              })
                            ]),
                            createTextVNode(" Vlad ")
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "none" }, [
                            createVNode("div", { class: "none-in choose-your-face-btn" }, [
                              createVNode("img", {
                                class: "none-img",
                                src: _imports_2,
                                alt: ""
                              }),
                              !$setup.form.includeYourPhotos ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "check_circel",
                                src: _imports_3,
                                alt: ""
                              })) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" None ")
                          ]),
                          !$setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "new-add"
                          }, [
                            createVNode("div", { class: "new-add__in choose-your-face-btn" }, [
                              createVNode("img", {
                                class: "add-img",
                                src: _imports_4,
                                alt: ""
                              })
                            ]),
                            createTextVNode(" Upgrade to add new ")
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "form-head" }, [
                        createVNode("label", { class: "label" }, "Enter a prompt"),
                        createVNode("button", { class: "try-random" }, [
                          createVNode("img", {
                            src: _imports_5,
                            alt: ""
                          }),
                          createTextVNode(" TRY RANDOM ")
                        ])
                      ]),
                      createVNode(_component_el_form_item, { prop: "prompt" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            size: "large",
                            modelValue: $setup.form.prompt,
                            "onUpdate:modelValue": ($event) => $setup.form.prompt = $event,
                            type: "textarea",
                            rows: 10,
                            placeholder: "I want to be depicted in a vibrant urban setting, standing confidently on a bustling street filled with colorful shops and cafes."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "can-written" }, "0/150")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        prop: "aspectRatio",
                        label: "Choose an aspect ratio",
                        class: "aspect-ratio"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_group, {
                            modelValue: $setup.form.aspectRatio,
                            "onUpdate:modelValue": ($event) => $setup.form.aspectRatio = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio_button, {
                                label: "1:1",
                                value: "1:1",
                                size: "large"
                              }),
                              createVNode(_component_el_radio_button, {
                                label: "16:9",
                                value: "16:9",
                                size: "large"
                              }),
                              createVNode(_component_el_radio_button, {
                                label: "3:4",
                                value: "3:4",
                                size: "large"
                              }),
                              createVNode(_component_el_radio_button, {
                                label: "9:16",
                                value: "9:16",
                                size: "large"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      $setup.form.includeYourPhotos ? (openBlock(), createBlock(_component_el_form_item, {
                        key: 0,
                        prop: "loraScale",
                        label: "Choose face replacement ratio",
                        class: "replacement_ratio"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "width": "100%", "position": "relative" } }, [
                            createVNode("span", { style: { "position": "absolute", "left": "0", "bottom": "-20px" } }, "80%"),
                            createVNode(_component_el_slider, {
                              ref: "sliderRef",
                              size: "large",
                              "show-tooltip": true,
                              placement: "bottom",
                              "tooltip-class": "ai-generation-form-tooltip-class",
                              modelValue: $setup.form.loraScale,
                              "onUpdate:modelValue": ($event) => $setup.form.loraScale = $event,
                              step: 1,
                              min: 80,
                              max: 120,
                              disabled: !$setup.form.face
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                            createVNode("span", { style: { "position": "absolute", "right": "0", "bottom": "-20px" } }, "120%")
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", { class: "form-botttom" }, [
                        createVNode("span", { class: "free-credits" }, "You have 5 free credits"),
                        createVNode(_component_el_button, {
                          onClick: $setup.submitForm,
                          type: "primary",
                          size: "large",
                          disabled: !((_b = $setup.store.getUser) == null ? void 0 : _b.generationsCount)
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_1$1,
                              alt: ""
                            }),
                            createTextVNode(" Generate for 1 credit ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "disabled"])
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
                    _push4(`<div class="not-available"${_scopeId3}><div class="not-available__in"${_scopeId3}><div class="head"${_scopeId3}><img${ssrRenderAttr("src", _imports_7)} alt=""${_scopeId3}> NOT AVAILABLE ON FREE PLAN </div><div class="title"${_scopeId3}> Upgrade your subscription plan to generate personalized images </div><p class="description"${_scopeId3}> Upgrade to upload your own photos, generate personalized images, and enjoy watermark-free downloads with full licensing rights </p><button class="subscription-plan__btn"${_scopeId3}> Change subscription plan </button></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "not-available" }, [
                        createVNode("div", { class: "not-available__in" }, [
                          createVNode("div", { class: "head" }, [
                            createVNode("img", {
                              src: _imports_7,
                              alt: ""
                            }),
                            createTextVNode(" NOT AVAILABLE ON FREE PLAN ")
                          ]),
                          createVNode("div", { class: "title" }, " Upgrade your subscription plan to generate personalized images "),
                          createVNode("p", { class: "description" }, " Upgrade to upload your own photos, generate personalized images, and enjoy watermark-free downloads with full licensing rights "),
                          createVNode("button", { class: "subscription-plan__btn" }, " Change subscription plan ")
                        ])
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
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode("div", { class: "choose-your_face" }, [
                        createVNode("div", { class: "choose-your_face-head" }, [
                          createVNode("div", { class: "label" }, [
                            createVNode("span", null, "Choose your face")
                          ]),
                          $setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "el-form-item__label",
                            prop: "face"
                          }, [
                            createVNode(_component_nuxt_link, {
                              class: "el-form-item__label-add-new-face-btn",
                              to: { name: "myFaces-create" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" + ADD NEW FACE ")
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "choose-your-face-in" }, [
                          $setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "created-face"
                          }, [
                            createVNode("div", { class: "created-face__in" }, [
                              createVNode("img", {
                                class: "created-face__img",
                                src: _imports_1,
                                alt: ""
                              })
                            ]),
                            createTextVNode(" Vlad ")
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "none" }, [
                            createVNode("div", { class: "none-in choose-your-face-btn" }, [
                              createVNode("img", {
                                class: "none-img",
                                src: _imports_2,
                                alt: ""
                              }),
                              !$setup.form.includeYourPhotos ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "check_circel",
                                src: _imports_3,
                                alt: ""
                              })) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" None ")
                          ]),
                          !$setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "new-add"
                          }, [
                            createVNode("div", { class: "new-add__in choose-your-face-btn" }, [
                              createVNode("img", {
                                class: "add-img",
                                src: _imports_4,
                                alt: ""
                              })
                            ]),
                            createTextVNode(" Upgrade to add new ")
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "form-head" }, [
                        createVNode("label", { class: "label" }, "Enter a prompt"),
                        createVNode("button", { class: "try-random" }, [
                          createVNode("img", {
                            src: _imports_5,
                            alt: ""
                          }),
                          createTextVNode(" TRY RANDOM ")
                        ])
                      ]),
                      createVNode(_component_el_form_item, { prop: "prompt" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            size: "large",
                            modelValue: $setup.form.prompt,
                            "onUpdate:modelValue": ($event) => $setup.form.prompt = $event,
                            type: "textarea",
                            rows: 10,
                            placeholder: "I want to be depicted in a vibrant urban setting, standing confidently on a bustling street filled with colorful shops and cafes."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "can-written" }, "0/150")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        prop: "aspectRatio",
                        label: "Choose an aspect ratio",
                        class: "aspect-ratio"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_group, {
                            modelValue: $setup.form.aspectRatio,
                            "onUpdate:modelValue": ($event) => $setup.form.aspectRatio = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio_button, {
                                label: "1:1",
                                value: "1:1",
                                size: "large"
                              }),
                              createVNode(_component_el_radio_button, {
                                label: "16:9",
                                value: "16:9",
                                size: "large"
                              }),
                              createVNode(_component_el_radio_button, {
                                label: "3:4",
                                value: "3:4",
                                size: "large"
                              }),
                              createVNode(_component_el_radio_button, {
                                label: "9:16",
                                value: "9:16",
                                size: "large"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      $setup.form.includeYourPhotos ? (openBlock(), createBlock(_component_el_form_item, {
                        key: 0,
                        prop: "loraScale",
                        label: "Choose face replacement ratio",
                        class: "replacement_ratio"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "width": "100%", "position": "relative" } }, [
                            createVNode("span", { style: { "position": "absolute", "left": "0", "bottom": "-20px" } }, "80%"),
                            createVNode(_component_el_slider, {
                              ref: "sliderRef",
                              size: "large",
                              "show-tooltip": true,
                              placement: "bottom",
                              "tooltip-class": "ai-generation-form-tooltip-class",
                              modelValue: $setup.form.loraScale,
                              "onUpdate:modelValue": ($event) => $setup.form.loraScale = $event,
                              step: 1,
                              min: 80,
                              max: 120,
                              disabled: !$setup.form.face
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                            createVNode("span", { style: { "position": "absolute", "right": "0", "bottom": "-20px" } }, "120%")
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", { class: "form-botttom" }, [
                        createVNode("span", { class: "free-credits" }, "You have 5 free credits"),
                        createVNode(_component_el_button, {
                          onClick: $setup.submitForm,
                          type: "primary",
                          size: "large",
                          disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.generationsCount)
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_1$1,
                              alt: ""
                            }),
                            createTextVNode(" Generate for 1 credit ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "disabled"])
                      ])
                    ];
                  }),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  span: 12,
                  xs: 24
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "not-available" }, [
                      createVNode("div", { class: "not-available__in" }, [
                        createVNode("div", { class: "head" }, [
                          createVNode("img", {
                            src: _imports_7,
                            alt: ""
                          }),
                          createTextVNode(" NOT AVAILABLE ON FREE PLAN ")
                        ]),
                        createVNode("div", { class: "title" }, " Upgrade your subscription plan to generate personalized images "),
                        createVNode("p", { class: "description" }, " Upgrade to upload your own photos, generate personalized images, and enjoy watermark-free downloads with full licensing rights "),
                        createVNode("button", { class: "subscription-plan__btn" }, " Change subscription plan ")
                      ])
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
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "choose-your_face" }, [
                      createVNode("div", { class: "choose-your_face-head" }, [
                        createVNode("div", { class: "label" }, [
                          createVNode("span", null, "Choose your face")
                        ]),
                        $setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "el-form-item__label",
                          prop: "face"
                        }, [
                          createVNode(_component_nuxt_link, {
                            class: "el-form-item__label-add-new-face-btn",
                            to: { name: "myFaces-create" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" + ADD NEW FACE ")
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "choose-your-face-in" }, [
                        $setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "created-face"
                        }, [
                          createVNode("div", { class: "created-face__in" }, [
                            createVNode("img", {
                              class: "created-face__img",
                              src: _imports_1,
                              alt: ""
                            })
                          ]),
                          createTextVNode(" Vlad ")
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "none" }, [
                          createVNode("div", { class: "none-in choose-your-face-btn" }, [
                            createVNode("img", {
                              class: "none-img",
                              src: _imports_2,
                              alt: ""
                            }),
                            !$setup.form.includeYourPhotos ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "check_circel",
                              src: _imports_3,
                              alt: ""
                            })) : createCommentVNode("", true)
                          ]),
                          createTextVNode(" None ")
                        ]),
                        !$setup.form.includeYourPhotos ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "new-add"
                        }, [
                          createVNode("div", { class: "new-add__in choose-your-face-btn" }, [
                            createVNode("img", {
                              class: "add-img",
                              src: _imports_4,
                              alt: ""
                            })
                          ]),
                          createTextVNode(" Upgrade to add new ")
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "form-head" }, [
                      createVNode("label", { class: "label" }, "Enter a prompt"),
                      createVNode("button", { class: "try-random" }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: ""
                        }),
                        createTextVNode(" TRY RANDOM ")
                      ])
                    ]),
                    createVNode(_component_el_form_item, { prop: "prompt" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          size: "large",
                          modelValue: $setup.form.prompt,
                          "onUpdate:modelValue": ($event) => $setup.form.prompt = $event,
                          type: "textarea",
                          rows: 10,
                          placeholder: "I want to be depicted in a vibrant urban setting, standing confidently on a bustling street filled with colorful shops and cafes."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", { class: "can-written" }, "0/150")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "aspectRatio",
                      label: "Choose an aspect ratio",
                      class: "aspect-ratio"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio_group, {
                          modelValue: $setup.form.aspectRatio,
                          "onUpdate:modelValue": ($event) => $setup.form.aspectRatio = $event,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio_button, {
                              label: "1:1",
                              value: "1:1",
                              size: "large"
                            }),
                            createVNode(_component_el_radio_button, {
                              label: "16:9",
                              value: "16:9",
                              size: "large"
                            }),
                            createVNode(_component_el_radio_button, {
                              label: "3:4",
                              value: "3:4",
                              size: "large"
                            }),
                            createVNode(_component_el_radio_button, {
                              label: "9:16",
                              value: "9:16",
                              size: "large"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    $setup.form.includeYourPhotos ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      prop: "loraScale",
                      label: "Choose face replacement ratio",
                      class: "replacement_ratio"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "width": "100%", "position": "relative" } }, [
                          createVNode("span", { style: { "position": "absolute", "left": "0", "bottom": "-20px" } }, "80%"),
                          createVNode(_component_el_slider, {
                            ref: "sliderRef",
                            size: "large",
                            "show-tooltip": true,
                            placement: "bottom",
                            "tooltip-class": "ai-generation-form-tooltip-class",
                            modelValue: $setup.form.loraScale,
                            "onUpdate:modelValue": ($event) => $setup.form.loraScale = $event,
                            step: 1,
                            min: 80,
                            max: 120,
                            disabled: !$setup.form.face
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode("span", { style: { "position": "absolute", "right": "0", "bottom": "-20px" } }, "120%")
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode("div", { class: "form-botttom" }, [
                      createVNode("span", { class: "free-credits" }, "You have 5 free credits"),
                      createVNode(_component_el_button, {
                        onClick: $setup.submitForm,
                        type: "primary",
                        size: "large",
                        disabled: !((_a = $setup.store.getUser) == null ? void 0 : _a.generationsCount)
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$1,
                            alt: ""
                          }),
                          createTextVNode(" Generate for 1 credit ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"])
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_el_col, {
                span: 12,
                xs: 24
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "not-available" }, [
                    createVNode("div", { class: "not-available__in" }, [
                      createVNode("div", { class: "head" }, [
                        createVNode("img", {
                          src: _imports_7,
                          alt: ""
                        }),
                        createTextVNode(" NOT AVAILABLE ON FREE PLAN ")
                      ]),
                      createVNode("div", { class: "title" }, " Upgrade your subscription plan to generate personalized images "),
                      createVNode("p", { class: "description" }, " Upgrade to upload your own photos, generate personalized images, and enjoy watermark-free downloads with full licensing rights "),
                      createVNode("button", { class: "subscription-plan__btn" }, " Change subscription plan ")
                    ])
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
  if ($setup.form.includeYourPhotos) {
    _push(`<div class="yourai-generated-image"><div class="head"><div class="title">Your AI-Generated Image</div><p class="description">Generated a few seconds ago</p></div><div class="yourai-generated-image__card"><div class="card-item"><img class="card-img"${ssrRenderAttr("src", _imports_8)} alt=""><button class="download-btn"><img${ssrRenderAttr("src", _imports_9)} alt=""></button></div><div class="card-item"><img class="card-img"${ssrRenderAttr("src", _imports_8)} alt=""><button class="download-btn"><img${ssrRenderAttr("src", _imports_9)} alt=""></button></div><div class="card-item"><img class="card-img"${ssrRenderAttr("src", _imports_8)} alt=""><button class="download-btn"><img${ssrRenderAttr("src", _imports_9)} alt=""></button></div><div class="card-item"><img class="card-img"${ssrRenderAttr("src", _imports_8)} alt=""><button class="download-btn"><img${ssrRenderAttr("src", _imports_9)} alt=""></button></div></div><div class="generated-with"><div class="generated-with__head"><div class="left-block">Generated with the prompt</div><button class="copy-btn"><img${ssrRenderAttr("src", _imports_10)} alt=""> COPY </button></div><p class="description"> Highly detailed and realistic portrait of an astronaut standing in the middle of a dense tropical jungle, wearing a full space suit with a helmet, surrounded by vibrant green foliage, tall trees, and tropical plants. The atmosphere is humid with a soft, diffused light filtering through the leaves, creating a cinematic and slightly mysterious mood. The setting contrasts the advanced technology of the space suit with the natural beauty of the jungle, highlighting a fusion of exploration and nature. </p><div class="generated-with__bottom"><div class="item">Ratio 1:1</div><div class="item">80% face replacement ratio</div></div></div><div class="your-face"><div class="avatar"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="name">Vlad</div><div class="your-face__text">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/",
      class: "your-face__link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Use this face again`);
        } else {
          return [
            createTextVNode("Use this face again")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DKY-ox0F.js.map
