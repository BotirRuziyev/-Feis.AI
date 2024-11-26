import { ElNotification, FormInstance } from 'element-plus';

export const emailRule = {
  validator: (rule: any, value: any) => {
    if (value) {
      const res = String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );

      if (res) {
        return true;
      }
    }

    return true;
  },
  message: 'Email',
  trigger: ['blur', 'change'],
};
export const passMinLength = {
  validator: (rule: any, value: any) => {
    console.log('---passMinLength: ', value);
    if (value) {
      if (value.length >= 5) {
        return true;
      }
    }

    return false;
  },
  message: 'Длина пароля должна быть не менее 5 символов!',
  trigger: ['blur', 'change'],
};
export const passLength = {
  validator: (rule: any, value: any) => {
    console.log('---passMinLength: ', value);
    if (value) {
      if (value.length === 5) {
        return true;
      }
    }

    return false;
  },
  message: 'Длина пароля должна быть 5 цифр!!',
  trigger: ['blur', 'change'],
};
export const required = {
  required: true,
  message: 'Required field',
  trigger: ['blur', 'change'],
};
export const requiredMsgNull = {
  required: true,
  message: '',
  trigger: ['blur', 'change', 'input'],
};

export const faceModelImagesCount = {
  validator: (rule: any, value: any) => {
    if (value.length > 5) {
      return true;
    }
    return false;
  },
  message: 'Min image count 5',
  trigger: ['blur', 'change'],
};

export function resetForm(formEl: FormInstance | undefined): void {
  if (!formEl) {
    return;
  }
  formEl.resetFields();
}

export async function useValidateForm(
  formEl: FormInstance | undefined,
): Promise<boolean> {
  if (!formEl) {
    return false;
  }
  return await formEl.validate((valid: boolean) => {
    return valid;
  });
}

export async function useValidateFormInField(
  formEl: FormInstance | undefined,
  fields: Array<any>,
): Promise<boolean> {
  if (!formEl) {
    return false;
  }
  // deadline
  return await formEl.validateField(fields);
}

/** Notification **/
const OFFSET = 10;
const POSITION = 'bottom-right';

export const notification = {
  success: (message = '', title = null) => {
    ElNotification({
      title,
      message,
      type: 'success',
      offset: OFFSET,
      position: POSITION,
    });
  },
  warning: (message = '', title = null) => {
    ElNotification({
      title,
      message,
      type: 'warning',
      offset: OFFSET,
      position: POSITION,
    });
  },
  info: (message = '', title = null) => {
    ElNotification({
      title,
      message,
      type: 'info',
      offset: OFFSET,
      position: POSITION,
    });
  },
  error: (message = 'Ошибка', title = null) => {
    ElNotification({
      title,
      message,
      type: 'error',
      offset: OFFSET,
      position: POSITION,
    });
  },
  created: (message = 'Добавлено', title = null) => {
    ElNotification({
      title,
      message,
      type: 'success',
      offset: OFFSET,
      position: POSITION,
    });
  },
  restore: (message = 'restore', title = null) => {
    ElNotification({
      title,
      message,
      type: 'success',
      offset: OFFSET,
      position: POSITION,
    });
  },
  updated: (message = 'Обновлено', title = null) => {
    ElNotification({
      title,
      message,
      type: 'success',
      offset: OFFSET,
      position: POSITION,
    });
  },
  deleted: (message = 'Удалено', title = null) => {
    ElNotification({
      title,
      message,
      type: 'success',
      offset: OFFSET,
      position: POSITION,
    });
  },
};
