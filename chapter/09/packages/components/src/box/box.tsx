import { defineComponent } from 'vue';
import { prefixName } from '../theme/prefix';

export const Box = defineComponent({
  props: {
    class: String
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class={`${prefixName}-box ${props.class || ''}`}>
          {slots?.default?.()}
        </div>
      );
    };
  }
});
