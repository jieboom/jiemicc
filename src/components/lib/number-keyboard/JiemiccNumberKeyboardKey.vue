
<script >
import createNamespace from '@/components/utils/create';

const [bem] = createNamespace('number-keyboard');
export default {
  name: 'JiemiccNumberKeyboardKey',
  props: {
    value: String,
    type: String,
    theme: String,
    keyCode: String,
  },
  data() {
    return {};
  },
  methods: {
    keyClick() {
      const { value, keyCode } = this;
      this.$emit('click', value, keyCode);
    },
  },
  render() {
    return (
      <i
        class={[
          bem('key'),
          'jiemicc-hairline-topleft',
          { [bem('key', [this.type])]: this.type },
          {
            [bem('key', ['big'])]:
              this.theme === 'custom'
              && (this.type === 'done' || this.type === 'delete'),
          },
          {
            [bem('key', ['done'])]:
              this.theme === 'custom'
              && this.type === 'done',
          },
          {
            [bem('key', ['long'])]: this.theme === 'custom' && this.value === '0',
          },
        ]}
        onClick={this.keyClick}
      >
        {this.value}
      </i>
    );
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-number-keyboard__key {

  display: inline-block;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  width: $jiemicc-number-keyboard-key-width;
  height: $jiemicc-number-keyboard-key-height;
  line-height: $jiemicc-number-keyboard-key-height;
  background: $jiemicc-number-keyboard-key-bgcolor;
  font-size: $jiemicc-number-keyboard-key-font-size;
  color: $jiemicc-number-keyboard-key-color;
  &:active:not(.jiemicc-number-keyboard__key--big){
      background-color: $jiemicc-number-keyboard-key-active;
  }
  &--delete {
    background-color: $jiemicc-number-keyboard-key-bgcolor-delete;
    font-size: $jiemicc-number-keyboard-key-font-size-delete;
  }
  &--extra {
    background-color: $jiemicc-number-keyboard-key-bgcolor-delete;
  }
  &--big {
    width: $jiemicc-number-keyboard-key-width-big;
    height: $jiemicc-number-keyboard-key-height-big;
    line-height: $jiemicc-number-keyboard-key-height-big;
    font-size: $jiemicc-number-keyboard-key-font-size-big;

  }
  &--done{
     color:$jiemicc-number-keyboard-key-color-done;
     background-color: $jiemicc-number-keyboard-key-bgcolor-done;
  }
  &--long{
      width: $jiemicc-number-keyboard-key-long-done;
  }
}
</style>
