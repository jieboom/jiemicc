<script >
import JiemiccNumberKeyboardKey from '@/components/lib/number-keyboard/JiemiccNumberKeyboardKey.vue';
import createNamespace from '@/components/utils/create';


const [bem] = createNamespace('number-keyboard');
console.log(bem(['custom']));


export default {
  name: 'JiemiccNumberkey',
  components: {
    JiemiccNumberKeyboardKey,
  },
  model: {
    prop: 'show',
    event: 'change',
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    theme: String,
    title: String,
    extraKey: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selfModel: '',
    };
  },
  methods: {
    keyClick(key) {
      console.log(key);
    },
    close() {
      this.$emit('change', false);
    },
    genkeyboardTitle() {
      if (this.title && this.theme !== 'custom') {
        return (
        <div
          class={[
            bem('title'),
            { [bem('title', ['sloted'])]: this.$slots.title },
            'jiemicc-hairline',
          ]}
        >
          {this.$slots.title}
          <span class={bem('title', ['done'])} onClick={this.close}>
            {this.title}
          </span>
        </div>
        );
      }
    },

    genkeyboardMain() {
      const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      return nums.map(num => (
        <JiemiccNumberKeyboardKey
          key={num}
          value={num}
          onclick={this.keyClick}
        />
      ));
    },
    genKeyboardBody() {
      if (this.theme === 'custom') {
        return (
          <div class={bem('body')}>
            <div class={bem('input')}>
              {this.genkeyboardMain()}
              <JiemiccNumberKeyboardKey value="0" onclick={this.keyClick} theme="custom"/>
              <JiemiccNumberKeyboardKey
                value={this.extraKey}
                onclick={this.keyClick}
              />
            </div>
            <div class={bem('handle')}>
              <JiemiccNumberKeyboardKey
                value="删除"
                onclick={this.keyClick}
                type="delete"
                theme="custom"
              />
              <JiemiccNumberKeyboardKey
                value="完成"
                onclick={this.keyClick}
                type="done"
                theme="custom"
              />
            </div>
          </div>
        );
      }
      return (
        <div class={bem('body')}>
          <div class={bem('main')}>{this.genkeyboardMain()}</div>
          <JiemiccNumberKeyboardKey
            value={this.extraKey}
            onclick={this.keyClick}
            type="extra"
          />
          <JiemiccNumberKeyboardKey value="0" onclick={this.keyClick} />
          <JiemiccNumberKeyboardKey
            value="删除"
            onclick={this.keyClick}
            type="delete"
          />
        </div>
      );
    },
  },
  render() {
    return (
      <transition name="jiemicc-slide-up">
        <div
          class={[bem(), { [bem(['custom'])]: this.theme === 'custom' }]}
          vShow={this.show}
        >
          {this.genkeyboardTitle()}
          {this.genKeyboardBody()}
        </div>
      </transition>
    );
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-number-keyboard {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: $jiemicc-number-keyboard-title-bgcolor;
  &--custom {
    .jiemicc-number-keyboard__body {
      display: flex;
      justify-content: space-between;
    }
  }
  &__input {
   flex: auto;
  }
  &__handle {
    width: $jiemicc-number-keyboard-custom-handle-width;
  }
  &__title {
    display: flex;
    justify-content: flex-end;
    height: $jiemicc-number-keyboard-title-height;
    background-color: $jiemicc-number-keyboard-title-bgcolor;
    &--done {
      right: 0;
      color: $jiemicc-number-keyboard-title-done-color;
      font-size: $jiemicc-number-keyboard-title-done-font-size;
      line-height: $jiemicc-number-keyboard-title-height;
      padding: $jiemicc-number-keyboard-title-done-padding;
    }
  }
  &__title--sloted {
    justify-content: space-between;
  }
}
</style>
