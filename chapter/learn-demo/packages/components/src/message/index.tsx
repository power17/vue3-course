import { createApp, h, render } from 'vue';
import MessageComponent from './message.vue';
import { MessageParams } from './types';

const Message = {
  open(param: MessageParams) {
    const dom = document.querySelector('body') as HTMLBodyElement;
    const duration = param.duration || 3000;
    const msg = h(MessageComponent, {
      text: param.text,
      type: param.type
    });
    console.log(msg, 'msg');
    const app = createApp({
      render() {
        return h(msg);
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
