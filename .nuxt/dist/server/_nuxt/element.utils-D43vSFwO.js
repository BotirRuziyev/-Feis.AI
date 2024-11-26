/* empty css              */
import { x as ElNotification } from "../server.mjs";
const emailRule = {
  validator: (rule, value) => {
    if (value) {
      const res = String(value).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (res) {
        return true;
      }
    }
    return true;
  },
  message: "Email",
  trigger: ["blur", "change"]
};
const required = {
  required: true,
  message: "Required field",
  trigger: ["blur", "change"]
};
const faceModelImagesCount = {
  validator: (rule, value) => {
    if (value.length > 5) {
      return true;
    }
    return false;
  },
  message: "Min image count 5",
  trigger: ["blur", "change"]
};
function resetForm(formEl) {
  if (!formEl) {
    return;
  }
  formEl.resetFields();
}
async function useValidateForm(formEl) {
  if (!formEl) {
    return false;
  }
  return await formEl.validate((valid) => {
    return valid;
  });
}
const OFFSET = 10;
const POSITION = "bottom-right";
const notification = {
  success: (message = "", title = null) => {
    ElNotification({
      title,
      message,
      type: "success",
      offset: OFFSET,
      position: POSITION
    });
  },
  warning: (message = "", title = null) => {
    ElNotification({
      title,
      message,
      type: "warning",
      offset: OFFSET,
      position: POSITION
    });
  },
  info: (message = "", title = null) => {
    ElNotification({
      title,
      message,
      type: "info",
      offset: OFFSET,
      position: POSITION
    });
  },
  error: (message = "Ошибка", title = null) => {
    ElNotification({
      title,
      message,
      type: "error",
      offset: OFFSET,
      position: POSITION
    });
  },
  created: (message = "Добавлено", title = null) => {
    ElNotification({
      title,
      message,
      type: "success",
      offset: OFFSET,
      position: POSITION
    });
  },
  restore: (message = "restore", title = null) => {
    ElNotification({
      title,
      message,
      type: "success",
      offset: OFFSET,
      position: POSITION
    });
  },
  updated: (message = "Обновлено", title = null) => {
    ElNotification({
      title,
      message,
      type: "success",
      offset: OFFSET,
      position: POSITION
    });
  },
  deleted: (message = "Удалено", title = null) => {
    ElNotification({
      title,
      message,
      type: "success",
      offset: OFFSET,
      position: POSITION
    });
  }
};
export {
  resetForm as a,
  emailRule as e,
  faceModelImagesCount as f,
  notification as n,
  required as r,
  useValidateForm as u
};
//# sourceMappingURL=element.utils-D43vSFwO.js.map
