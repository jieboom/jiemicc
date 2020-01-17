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
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    value: String,
    theme: String,
    title: String,
    extraKey: {
      type: String,
      default: '',
    },
    maxlength: [String, Array],
    zIndex: String,
    deleteText: {
      type: String,
      default: '删除',
    },
  },
  data() {
    return {
      selfModel: '',
    };
  },
  computed: {
    model: {
      get() {
        return this.value || this.selfModel;
      },
      set(val) {
        this.value !== undefined
          ? this.$emit('input', val)
          : (this.selfModel = val);
      },
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(val) {
        if (val === true) {
          const { jiemiccNumberKeyboardArr } = window;
          jiemiccNumberKeyboardArr.forEach((keyboard) => {
            if (keyboard !== this) {
              keyboard.$emit('update:show', false);
            }
          });

          setTimeout(() => {
            window.document.body.addEventListener('click', this.blur);
          }, 0);
        } else {
          window.document.body.removeEventListener('click', this.blur);
        }
      },

    },
  },
  beforeCreate() {
    window.jiemiccNumberKeyboardArr
      ? window.jiemiccNumberKeyboardArr.push(this)
      : (window.jiemiccNumberKeyboardArr = [this]);
  },

  methods: {
    keyClick(key, keyCode) {
      this.$emit('key', key, keyCode);

      const { maxlength, model } = this;
      const len = model.length;

      if (keyCode !== undefined && keyCode === '46') {
        let deleteChar = '';
        if (len > 0) {
          const newVal = model.substring(0, len - 1);
          deleteChar = model.charAt(len - 1);
          this.$emit('input', newVal);
        }
        this.$emit('delete', deleteChar);
        return;
      }
      // if (keyCode && keyCode === '13') {
      //   this.$emit('update:show', false);
      //   return;
      // }
      if (!maxlength || maxlength > len) {
        this.$emit('input', model + key);
      }
    },
    blur() {
      this.$emit('update:show', false);
    },
    close() {
      this.$emit('update:show', false);
      this.$emit('close');
    },
    onEvent(event) {
      this.$emit(event);
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
              <JiemiccNumberKeyboardKey
                value="0"
                onclick={this.keyClick}
                theme="custom"
              />
              <JiemiccNumberKeyboardKey
                value={this.extraKey}
                onclick={this.keyClick}
              />
            </div>
            <div class={bem('handle')}>
              <JiemiccNumberKeyboardKey
                value={this.deleteText}
                onclick={this.keyClick}
                type="delete"
                theme="custom"
                keyCode="46"
              />
              <JiemiccNumberKeyboardKey
                value="完成"
                onclick={this.close}
                type="done"
                theme="custom"
                keyCode="13"
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
            value={this.deleteText}
            onclick={this.keyClick}
            type="delete"
            keyCode="46"
          />
        </div>
      );
    },
  },
  render() {
    const {
      onEvent,
    } = this;
    const transitionProp = {
      on: {
        enter: () => onEvent('open'),
        'after-enter': () => onEvent('show'),
        leave: () => onEvent('blur'),
        'after-leave': () => onEvent('hide'),
      },
    };
    return (
      <transition
      name = 'jiemicc-slide-up'
        {...transitionProp}
      >
        <div
          class={[bem(), { [bem(['custom'])]: this.theme === 'custom' }]}
          vShow={this.show}
          style={{ 'z-index': this.zIndex }}
          onClick={e => e.stopPropagation()}
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
