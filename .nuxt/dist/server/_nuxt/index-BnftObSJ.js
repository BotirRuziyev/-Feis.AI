import { u as useAuthStore, m as useRoute, f as useRouter, a as apiFetchGet, c as useApiFetch, _ as _export_sfc, E as ElTable, b as ElTableColumn, o as ElInput, p as ElDialog, q as ElForm, s as ElRow, t as ElCol, v as ElFormItem, w as ElSwitch } from "../server.mjs";
import { _ as __nuxt_component_3 } from "./el-table-column-DhVRXC8V.js";
/* empty css              */
/* empty css                     */
/* empty css                    */
/* empty css                  */
import { r as required, e as emailRule, u as useValidateForm, a as resetForm, n as notification } from "./element.utils-D43vSFwO.js";
/* empty css                */
import { ref, reactive, resolveComponent, withCtx, openBlock, createBlock, createVNode, withKeys, useSSRContext } from "vue";
import { P as PaginationResult } from "./pagination.result-CyiXrpld.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "cookie-es";
import "ohash";
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
    const store = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    const searchResult = ref(new PaginationResult());
    const searchForm = ref({
      offset: 0,
      limit: 20,
      fullName: null,
      isActive: null,
      role: null,
      email: null,
      phone: null
    });
    searchForm.value.offset = route.query.offset || 0;
    searchForm.value.limit = route.query.limit || 20;
    searchForm.value.fullName = route.query.fullName || null;
    searchForm.value.email = route.query.email || null;
    if (route.query.isActive === "true") {
      searchForm.value.isActive = true;
    } else if (route.query.isActive === "false") {
      searchForm.value.isActive = false;
    }
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet(
        "/user",
        searchForm.value
      );
      router.push({
        path: route.path,
        query: { ...searchForm.value }
      });
    };
    const onSearchFormChange = async () => {
      await getList(searchForm.value);
    };
    const onSearchFormChangePagination = (params) => {
      searchForm.value.offset = params.offset;
      searchForm.value.limit = params.limit;
      onSearchFormChange();
    };
    getList(searchForm.value);
    const deleteItem = async (item) => {
      const { error } = await useApiFetch(
        `/user/${item.id}`,
        "DELETE",
        {},
        {
          async onResponse({ request, response, options }) {
            if (response.ok) {
              notification.deleted();
            } else {
              notification.error("Удаление запрещено!");
            }
          },
          async onRequestError({ request, options, error: error2 }) {
            notification.error();
          }
        },
        false
      );
      if (!error.value) {
        searchResult.value.items.splice(
          searchResult.value.items.findIndex((v) => v.id === item.id),
          1
        );
      }
    };
    const formRules = reactive({
      email: [required, emailRule],
      firstname: [required],
      lastname: [required]
    });
    const formRuleRef = ref();
    const form = reactive({
      id: null,
      isActive: true,
      email: null,
      password: null,
      firstname: null,
      lastname: null
    });
    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        if (form.id) {
          const { data, error } = await useApiFetch(
            `/user/${form.id}`,
            "PATCH",
            { ...form }
          );
          if (!error.value) {
            searchResult.value.items.splice(
              searchResult.value.items.findIndex((v) => v.id === data.value.id),
              1,
              { ...data.value }
            );
          }
        }
        if (!form.id) {
          const { data, error } = await useApiFetch(
            `/user`,
            "POST",
            { ...form }
          );
          if (!error.value) {
            searchResult.value.items.push({ ...data.value });
          }
        }
        closeModal();
      }
    };
    const modal = ref(false);
    const openModal = (item) => {
      resetForm(formRuleRef.value);
      if (item) {
        for (let key in item) {
          form[key] = item[key];
        }
      } else {
        form.id = null;
        for (let key in form) {
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
      submitForm
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_table = ElTable;
  const _component_el_table_column = ElTableColumn;
  const _component_el_input = ElInput;
  const _component_buttons_table = resolveComponent("buttons-table");
  const _component_app_pagination = __nuxt_component_3;
  const _component_el_dialog = ElDialog;
  const _component_el_form = ElForm;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_form_item = ElFormItem;
  const _component_el_switch = ElSwitch;
  const _component_button_save = resolveComponent("button-save");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_el_table, {
    data: $setup.searchResult.items,
    border: "",
    style: { "width": "100%", "margin-top": "15px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "id",
          label: "ID",
          width: "60px"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          label: "Active",
          align: "center",
          "min-width": "110px"
        }, {
          default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (row.isActive) {
                _push3(`<span${_scopeId2}>Yes</span>`);
              } else {
                _push3(`<span${_scopeId2}>No</span>`);
              }
            } else {
              return [
                row.isActive ? (openBlock(), createBlock("span", { key: 0 }, "Yes")) : (openBlock(), createBlock("span", { key: 1 }, "No"))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "fullName",
          label: "Name",
          "min-width": "180px"
        }, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_input, {
                modelValue: $setup.searchForm.fullName,
                "onUpdate:modelValue": ($event) => $setup.searchForm.fullName = $event,
                placeholder: "Name",
                clearable: "",
                onClear: $setup.onSearchFormChange,
                onInput: $setup.onSearchFormChange
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_input, {
                  modelValue: $setup.searchForm.fullName,
                  "onUpdate:modelValue": ($event) => $setup.searchForm.fullName = $event,
                  placeholder: "Name",
                  clearable: "",
                  onClear: $setup.onSearchFormChange,
                  onInput: $setup.onSearchFormChange
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onInput"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "email",
          label: "E-mail",
          "min-width": "150px"
        }, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_input, {
                modelValue: $setup.searchForm.email,
                "onUpdate:modelValue": ($event) => $setup.searchForm.email = $event,
                placeholder: "E-mail",
                clearable: "",
                onClear: $setup.onSearchFormChange,
                onInput: $setup.onSearchFormChange
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_input, {
                  modelValue: $setup.searchForm.email,
                  "onUpdate:modelValue": ($event) => $setup.searchForm.email = $event,
                  placeholder: "E-mail",
                  clearable: "",
                  onClear: $setup.onSearchFormChange,
                  onInput: $setup.onSearchFormChange
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onInput"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "createdAt",
          label: "Created At",
          width: "150"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "action",
          label: "---",
          width: "118px"
        }, {
          default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_buttons_table, {
                "show-edit": true,
                "show-delete": true,
                onClickEdit: ($event) => $setup.openModal(row),
                onClickDelete: ($event) => $setup.deleteItem(row)
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_buttons_table, {
                  "show-edit": true,
                  "show-delete": true,
                  onClickEdit: ($event) => $setup.openModal(row),
                  onClickDelete: ($event) => $setup.deleteItem(row)
                }, null, 8, ["onClickEdit", "onClickDelete"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_table_column, {
            prop: "id",
            label: "ID",
            width: "60px"
          }),
          createVNode(_component_el_table_column, {
            label: "Active",
            align: "center",
            "min-width": "110px"
          }, {
            default: withCtx(({ row }) => [
              row.isActive ? (openBlock(), createBlock("span", { key: 0 }, "Yes")) : (openBlock(), createBlock("span", { key: 1 }, "No"))
            ]),
            _: 1
          }),
          createVNode(_component_el_table_column, {
            prop: "fullName",
            label: "Name",
            "min-width": "180px"
          }, {
            header: withCtx(() => [
              createVNode(_component_el_input, {
                modelValue: $setup.searchForm.fullName,
                "onUpdate:modelValue": ($event) => $setup.searchForm.fullName = $event,
                placeholder: "Name",
                clearable: "",
                onClear: $setup.onSearchFormChange,
                onInput: $setup.onSearchFormChange
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onInput"])
            ]),
            _: 1
          }),
          createVNode(_component_el_table_column, {
            prop: "email",
            label: "E-mail",
            "min-width": "150px"
          }, {
            header: withCtx(() => [
              createVNode(_component_el_input, {
                modelValue: $setup.searchForm.email,
                "onUpdate:modelValue": ($event) => $setup.searchForm.email = $event,
                placeholder: "E-mail",
                clearable: "",
                onClear: $setup.onSearchFormChange,
                onInput: $setup.onSearchFormChange
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onInput"])
            ]),
            _: 1
          }),
          createVNode(_component_el_table_column, {
            prop: "createdAt",
            label: "Created At",
            width: "150"
          }),
          createVNode(_component_el_table_column, {
            prop: "action",
            label: "---",
            width: "118px"
          }, {
            default: withCtx(({ row }) => [
              createVNode(_component_buttons_table, {
                "show-edit": true,
                "show-delete": true,
                onClickEdit: ($event) => $setup.openModal(row),
                onClickDelete: ($event) => $setup.deleteItem(row)
              }, null, 8, ["onClickEdit", "onClickDelete"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_app_pagination, {
    params: $setup.searchResult,
    onChange: $setup.onSearchFormChangePagination
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_dialog, {
    modelValue: $setup.modal,
    "onUpdate:modelValue": ($event) => $setup.modal = $event,
    title: "User",
    width: "600",
    center: "",
    "align-center": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_form, {
          "label-position": "top",
          ref: "formRuleRef",
          model: $setup.form,
          rules: $setup.formRules,
          onKeyup: $setup.submitForm
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_col, {
                      span: 24,
                      xs: 24
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            prop: "isActive",
                            label: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_switch, {
                                  modelValue: $setup.form.isActive,
                                  "onUpdate:modelValue": ($event) => $setup.form.isActive = $event,
                                  "active-text": "Active"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_switch, {
                                    modelValue: $setup.form.isActive,
                                    "onUpdate:modelValue": ($event) => $setup.form.isActive = $event,
                                    "active-text": "Active"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_form_item, {
                              prop: "isActive",
                              label: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_switch, {
                                  modelValue: $setup.form.isActive,
                                  "onUpdate:modelValue": ($event) => $setup.form.isActive = $event,
                                  "active-text": "Active"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
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
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            prop: "firstname",
                            label: "First name"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $setup.form.firstname,
                                  "onUpdate:modelValue": ($event) => $setup.form.firstname = $event,
                                  placeholder: "First name"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $setup.form.firstname,
                                    "onUpdate:modelValue": ($event) => $setup.form.firstname = $event,
                                    placeholder: "First name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_form_item, {
                              prop: "firstname",
                              label: "First name"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $setup.form.firstname,
                                  "onUpdate:modelValue": ($event) => $setup.form.firstname = $event,
                                  placeholder: "First name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
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
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            prop: "lastname",
                            label: "Last name"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $setup.form.lastname,
                                  "onUpdate:modelValue": ($event) => $setup.form.lastname = $event,
                                  placeholder: "Last name"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $setup.form.lastname,
                                    "onUpdate:modelValue": ($event) => $setup.form.lastname = $event,
                                    placeholder: "Last name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_form_item, {
                              prop: "lastname",
                              label: "Last name"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $setup.form.lastname,
                                  "onUpdate:modelValue": ($event) => $setup.form.lastname = $event,
                                  placeholder: "Last name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_col, {
                        span: 24,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            prop: "isActive",
                            label: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_switch, {
                                modelValue: $setup.form.isActive,
                                "onUpdate:modelValue": ($event) => $setup.form.isActive = $event,
                                "active-text": "Active"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 12,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            prop: "firstname",
                            label: "First name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: $setup.form.firstname,
                                "onUpdate:modelValue": ($event) => $setup.form.firstname = $event,
                                placeholder: "First name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 12,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            prop: "lastname",
                            label: "Last name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: $setup.form.lastname,
                                "onUpdate:modelValue": ($event) => $setup.form.lastname = $event,
                                placeholder: "Last name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            prop: "email",
                            label: "E-mail"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $setup.form.email,
                                  "onUpdate:modelValue": ($event) => $setup.form.email = $event,
                                  placeholder: "E-mail"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $setup.form.email,
                                    "onUpdate:modelValue": ($event) => $setup.form.email = $event,
                                    placeholder: "E-mail"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_form_item, {
                              prop: "email",
                              label: "E-mail"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $setup.form.email,
                                  "onUpdate:modelValue": ($event) => $setup.form.email = $event,
                                  placeholder: "E-mail"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
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
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            prop: "password",
                            label: "Password"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $setup.form.password,
                                  "onUpdate:modelValue": ($event) => $setup.form.password = $event,
                                  placeholder: "Password",
                                  "show-password": ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $setup.form.password,
                                    "onUpdate:modelValue": ($event) => $setup.form.password = $event,
                                    placeholder: "Password",
                                    "show-password": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_form_item, {
                              prop: "password",
                              label: "Password"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $setup.form.password,
                                  "onUpdate:modelValue": ($event) => $setup.form.password = $event,
                                  placeholder: "Password",
                                  "show-password": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_col, {
                        span: 12,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            prop: "email",
                            label: "E-mail"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: $setup.form.email,
                                "onUpdate:modelValue": ($event) => $setup.form.email = $event,
                                placeholder: "E-mail"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 12,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            prop: "password",
                            label: "Password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: $setup.form.password,
                                "onUpdate:modelValue": ($event) => $setup.form.password = $event,
                                placeholder: "Password",
                                "show-password": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_form_item, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex-center-row w-100"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_button_save, { onClick: $setup.submitForm }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex-center-row w-100" }, [
                        createVNode(_component_button_save, { onClick: $setup.submitForm }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_row, { gutter: 15 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, {
                      span: 24,
                      xs: 24
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          prop: "isActive",
                          label: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_switch, {
                              modelValue: $setup.form.isActive,
                              "onUpdate:modelValue": ($event) => $setup.form.isActive = $event,
                              "active-text": "Active"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          prop: "firstname",
                          label: "First name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: $setup.form.firstname,
                              "onUpdate:modelValue": ($event) => $setup.form.firstname = $event,
                              placeholder: "First name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          prop: "lastname",
                          label: "Last name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: $setup.form.lastname,
                              "onUpdate:modelValue": ($event) => $setup.form.lastname = $event,
                              placeholder: "Last name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_row, { gutter: 15 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          prop: "email",
                          label: "E-mail"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: $setup.form.email,
                              "onUpdate:modelValue": ($event) => $setup.form.email = $event,
                              placeholder: "E-mail"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          prop: "password",
                          label: "Password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: $setup.form.password,
                              "onUpdate:modelValue": ($event) => $setup.form.password = $event,
                              placeholder: "Password",
                              "show-password": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-center-row w-100" }, [
                      createVNode(_component_button_save, { onClick: $setup.submitForm }, null, 8, ["onClick"])
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
          createVNode(_component_el_form, {
            "label-position": "top",
            ref: "formRuleRef",
            model: $setup.form,
            rules: $setup.formRules,
            onKeyup: withKeys($setup.submitForm, ["enter"])
          }, {
            default: withCtx(() => [
              createVNode(_component_el_row, { gutter: 15 }, {
                default: withCtx(() => [
                  createVNode(_component_el_col, {
                    span: 24,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        prop: "isActive",
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: $setup.form.isActive,
                            "onUpdate:modelValue": ($event) => $setup.form.isActive = $event,
                            "active-text": "Active"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    span: 12,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        prop: "firstname",
                        label: "First name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: $setup.form.firstname,
                            "onUpdate:modelValue": ($event) => $setup.form.firstname = $event,
                            placeholder: "First name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    span: 12,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        prop: "lastname",
                        label: "Last name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: $setup.form.lastname,
                            "onUpdate:modelValue": ($event) => $setup.form.lastname = $event,
                            placeholder: "Last name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_row, { gutter: 15 }, {
                default: withCtx(() => [
                  createVNode(_component_el_col, {
                    span: 12,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        prop: "email",
                        label: "E-mail"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: $setup.form.email,
                            "onUpdate:modelValue": ($event) => $setup.form.email = $event,
                            placeholder: "E-mail"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    span: 12,
                    xs: 24
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        prop: "password",
                        label: "Password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: $setup.form.password,
                            "onUpdate:modelValue": ($event) => $setup.form.password = $event,
                            placeholder: "Password",
                            "show-password": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex-center-row w-100" }, [
                    createVNode(_component_button_save, { onClick: $setup.submitForm }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules", "onKeyup"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BnftObSJ.js.map
