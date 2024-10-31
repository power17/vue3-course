import { createApp, h } from 'vue';
import MessageComponent from './message.vue';
import { MessageParams } from './types';

const Message = {
  open(param: MessageParams) {
    const dom = document.createElement('div');
    const body = document.querySelector('body') as HTMLBodyElement;
    const duration = param.duration || 3000;
    const msg = h(MessageComponent, {
      text: param.text,
      type: param.type
    });
    body.appendChild(dom);
    const app = createApp({
      render() {
        return msg;
      }
    });
    app.mount(dom);

    let timer: number | null = null;
    if (duration > 0) {
      timer = setTimeout(() => {
        msg.component?.exposed?.['closeMessage']?.();
        app.unmount();
        dom.remove();
      }, duration);
    }
    return {
      close() {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        msg.component?.exposed?.['closeMessage']?.();
        app.unmount();
        dom.remove();
      }
    };
  }
};

export default Message;
