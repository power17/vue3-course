import { createApp } from 'vue';
import Example from './examples/button.vue';
import Message from './examples/message.vue';
import Dialog from './examples/dialog.vue';
import Grid from './examples/grid.vue';
import './src/index.less';

const app = createApp(Grid);

app.mount(document.querySelector('#app') as HTMLDivElement);
