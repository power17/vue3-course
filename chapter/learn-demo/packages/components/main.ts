import { createApp } from 'vue';
import Example from './examples/button.vue';
import Message from './examples/message.vue';
import './src/index.less';

const app = createApp(Message);

app.mount(document.querySelector('#app') as HTMLDivElement);
