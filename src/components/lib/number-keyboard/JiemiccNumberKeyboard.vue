<script >
import createNamespace from '@/components/utils/create';

const [bem] = createNamespace('number-keyboard');
console.log(bem('title'));

export default {
  name: 'JiemiccNumberkey',
  props: {
    show: {
      type: Boolean,
      default: false,
      theme: {
        type: String,
        validator(theme) {
          return ['default', 'custom'].includes(theme);
        },
        default: 'default',
      },
    },
    title: String,

  },
  data() {
    return {
      selfModel: '',
    };
  },
  methods: {
    genkeyboardTitle() {
      if (this.title) {
        return <div class={bem('title')}>
              {this.$slots.title}
              <span class={bem('title', ['main'])}>{this.title}</span>
           </div>;
      }
    },
  },
  render() {
    return <div class={bem()}>
        {this.genkeyboardTitle()}
    </div>;
  },
};
</script>
<style lang='scss' scoped>

</style>
