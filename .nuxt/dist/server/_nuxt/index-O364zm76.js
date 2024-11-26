import { u as useAuthStore, c as useApiFetch, _ as _export_sfc, s as ElRow, t as ElCol, q as ElForm, v as ElFormItem, F as ElCheckbox, e as ElButton, y as vLoading } from "../server.mjs";
/* empty css              */
/* empty css                */
import { u as useValidateForm } from "./element.utils-D43vSFwO.js";
/* empty css                     */
/* empty css                   */
/* empty css                    */
import { ref, reactive, withCtx, mergeProps, createTextVNode, createVNode, withDirectives, openBlock, createBlock, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
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
  components: {},
  setup() {
    const store = useAuthStore();
    const loading = ref(false);
    const formRules = reactive({});
    const formRuleRef = ref();
    const form = reactive({
      finishedTrainingNotifyViaEmail: store.getUser.finishedTrainingNotifyViaEmail,
      finishedTrainingNotifyViaPush: store.getUser.finishedTrainingNotifyViaPush,
      finishedGeneratingNotifyViaEmail: store.getUser.finishedGeneratingNotifyViaEmail,
      finishedGeneratingNotifyViaPush: store.getUser.finishedGeneratingNotifyViaPush
    });
    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true;
        const { data, error } = await useApiFetch(`/user/updateUserSettings`, "PATCH", { ...form });
        if (!error.value) ;
        await store.getUserApi();
        loading.value = false;
      }
    };
    return {
      store,
      loading,
      formRules,
      form,
      formRuleRef,
      submitForm
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_form = ElForm;
  const _component_el_form_item = ElFormItem;
  const _component_el_checkbox = ElCheckbox;
  const _component_el_button = ElButton;
  const _directive_loading = vLoading;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Notifications settings</h1><div class="app-base-border-radius app-base-margin-top-bottom" style="${ssrRenderStyle({ "width": "100%" })}"></div>`);
  _push(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          xs: 24
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_form, mergeProps({
                class: "",
                "label-position": "top",
                ref: "formRuleRef",
                model: $setup.form,
                rules: $setup.formRules
              }, ssrGetDirectiveProps(_ctx, _directive_loading, $setup.loading)), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_form_item, {
                      prop: "message",
                      label: "Notify me when the AI Face Finished training"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_checkbox, {
                            modelValue: $setup.form.finishedTrainingNotifyViaEmail,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaEmail = $event
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Notify via email`);
                              } else {
                                return [
                                  createTextVNode("Notify via email")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_checkbox, {
                            modelValue: $setup.form.finishedTrainingNotifyViaPush,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaPush = $event
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Push notifications`);
                              } else {
                                return [
                                  createTextVNode("Push notifications")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_checkbox, {
                              modelValue: $setup.form.finishedTrainingNotifyViaEmail,
                              "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaEmail = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Notify via email")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_el_checkbox, {
                              modelValue: $setup.form.finishedTrainingNotifyViaPush,
                              "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaPush = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Push notifications")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_el_form_item, {
                      prop: "message",
                      label: "Notify me when Image Finished generating"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_checkbox, {
                            modelValue: $setup.form.finishedGeneratingNotifyViaEmail,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaEmail = $event
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Notify via email`);
                              } else {
                                return [
                                  createTextVNode("Notify via email")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_checkbox, {
                            modelValue: $setup.form.finishedGeneratingNotifyViaPush,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaPush = $event
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Push notifications`);
                              } else {
                                return [
                                  createTextVNode("Push notifications")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_checkbox, {
                              modelValue: $setup.form.finishedGeneratingNotifyViaEmail,
                              "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaEmail = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Notify via email")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_el_checkbox, {
                              modelValue: $setup.form.finishedGeneratingNotifyViaPush,
                              "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaPush = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Push notifications")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_button, {
                            onClick: $setup.submitForm,
                            type: "primary",
                            size: "large"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Save`);
                              } else {
                                return [
                                  createTextVNode("Save")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_button, {
                              onClick: $setup.submitForm,
                              type: "primary",
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_form_item, {
                        prop: "message",
                        label: "Notify me when the AI Face Finished training"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_checkbox, {
                            modelValue: $setup.form.finishedTrainingNotifyViaEmail,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaEmail = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Notify via email")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_el_checkbox, {
                            modelValue: $setup.form.finishedTrainingNotifyViaPush,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaPush = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Push notifications")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        prop: "message",
                        label: "Notify me when Image Finished generating"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_checkbox, {
                            modelValue: $setup.form.finishedGeneratingNotifyViaEmail,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaEmail = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Notify via email")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_el_checkbox, {
                            modelValue: $setup.form.finishedGeneratingNotifyViaPush,
                            "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaPush = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Push notifications")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 12,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            onClick: $setup.submitForm,
                            type: "primary",
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                withDirectives((openBlock(), createBlock(_component_el_form, {
                  class: "",
                  "label-position": "top",
                  ref: "formRuleRef",
                  model: $setup.form,
                  rules: $setup.formRules
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, {
                      prop: "message",
                      label: "Notify me when the AI Face Finished training"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_checkbox, {
                          modelValue: $setup.form.finishedTrainingNotifyViaEmail,
                          "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaEmail = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Notify via email")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_el_checkbox, {
                          modelValue: $setup.form.finishedTrainingNotifyViaPush,
                          "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaPush = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Push notifications")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "message",
                      label: "Notify me when Image Finished generating"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_checkbox, {
                          modelValue: $setup.form.finishedGeneratingNotifyViaEmail,
                          "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaEmail = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Notify via email")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_el_checkbox, {
                          modelValue: $setup.form.finishedGeneratingNotifyViaPush,
                          "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaPush = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Push notifications")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          onClick: $setup.submitForm,
                          type: "primary",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "rules"])), [
                  [_directive_loading, $setup.loading]
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_col, {
            span: 12,
            xs: 24
          }, {
            default: withCtx(() => [
              withDirectives((openBlock(), createBlock(_component_el_form, {
                class: "",
                "label-position": "top",
                ref: "formRuleRef",
                model: $setup.form,
                rules: $setup.formRules
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    prop: "message",
                    label: "Notify me when the AI Face Finished training"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_checkbox, {
                        modelValue: $setup.form.finishedTrainingNotifyViaEmail,
                        "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaEmail = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Notify via email")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_el_checkbox, {
                        modelValue: $setup.form.finishedTrainingNotifyViaPush,
                        "onUpdate:modelValue": ($event) => $setup.form.finishedTrainingNotifyViaPush = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Push notifications")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    prop: "message",
                    label: "Notify me when Image Finished generating"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_checkbox, {
                        modelValue: $setup.form.finishedGeneratingNotifyViaEmail,
                        "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaEmail = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Notify via email")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_el_checkbox, {
                        modelValue: $setup.form.finishedGeneratingNotifyViaPush,
                        "onUpdate:modelValue": ($event) => $setup.form.finishedGeneratingNotifyViaPush = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Push notifications")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    span: 12,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_button, {
                        onClick: $setup.submitForm,
                        type: "primary",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Save")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model", "rules"])), [
                [_directive_loading, $setup.loading]
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/notificationsSettings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-O364zm76.js.map
