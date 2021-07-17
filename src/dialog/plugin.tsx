import Vue from 'vue';
import DialogComponent from './dialog';

import { getAttach } from '../utils/dom';
import {
  DialogOptions,
  DialogMethod,
  DialogConfirmMethod,
  DialogAlertMethod,
  DialogInstance,
} from './type';

const createDialog: DialogMethod = (props: DialogOptions) => {
  const options = { ...props };
  options.visible = true;
  const dialog = new DialogComponent({
    propsData: {
      ...options,
      onClose: options.onClose || (() => {
        dialog.visible = false;
      }),
    },
  }).$mount();
  const container = getAttach(options.attach);
  if (container) {
    container.appendChild(dialog.$el);
  } else {
    console.error('attach is not exist');
  }

  const dialogNode: DialogInstance = {
    show: () => {
      dialog.visible = true;
    },
    hide: () => {
      dialog.visible = false;
    },
    update: (options: DialogOptions) => {
      Object.assign(dialog, options);
    },
    destroy: () => {
      dialog.visible = false;
      container.contains(dialog.$el) && container.removeChild(dialog.$el);
    },
  };
  return dialogNode;
};
interface ExtraApi {
  confirm: DialogConfirmMethod;
  alert: DialogAlertMethod;
};

const confirm: DialogConfirmMethod = (props: DialogOptions) => createDialog(props);

const alert: DialogAlertMethod = (props: Omit<DialogOptions, 'confirmBtn'>) => {
  const options = { ...props };
  options.cancelBtn = null;
  return createDialog(options);
};

const extraApi: ExtraApi = {
  confirm,
  alert,
};

const _DialogPlugin: Vue.PluginObject<undefined> = {
  install: () => {
    Vue.prototype.$dialog = createDialog;
    Object.keys(extraApi).forEach((funcName) => {
      Vue.prototype.$dialog[funcName] = extraApi[funcName];
    });
  },
};

Object.keys(extraApi).forEach((funcName) => {
  _DialogPlugin[funcName] = extraApi[funcName];
});

export const DialogPlugin: (
  Vue.PluginObject<undefined>
  & DialogMethod
  & ExtraApi
) = _DialogPlugin as any;
export default DialogPlugin;

declare module 'vue/types/vue' {
  // Bind to `this` keyword
  interface Vue {
    $dialog: DialogMethod & ExtraApi;
  }
};
