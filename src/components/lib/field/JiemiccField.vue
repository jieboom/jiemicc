
<script >
import JiemiccCell from '@/components/lib/cell/JiemiccCell.vue';
import systemVali from '@/components/utils/validate/system';
import JiemiccIcon from '@/components/lib/icon/JiemiccIcon.vue';

export default {
  name: 'JiemiccField',
  componentName: 'JiemiccField',
  components: {
    JiemiccCell,
    JiemiccIcon,
  },

  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
    },
    label: String,
    maxlength: [String, Number],
    leftIcon: String,
    rightIcon: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    required: Boolean,
    errorMessage: String,
    autosize: [Boolean, Object],
    showLimitCount: Boolean,
    labelWidth: String,
    labelClass: String,
    labelAlign: String,
  },
  data() {
    return {
      pattern: '',
      selfModel: '',
      focused: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.value !== undefined ? this.value : this.selfModel;
      },
      set() {
        const formatVal = this.formatNumber();
        this.value !== undefined
          ? this.$emit('input', formatVal)
          : (this.selfModel = formatVal);
      },
    },
    inputListener() {
      const listeners = {
        ...this.$listeners,
        input: this.onInput,
        focus: this.onFocus,
        blur: this.onBlur,
        keypress: this.onkeypress,
      };
      return listeners;
    },
  },
  watch: {
    value() {
      this.adjustSize();
    },
  },
  mounted() {
    this.formatNumber();
    this.type === 'textarea' && this.autosize && this.adjustSize();
  },
  methods: {
    // eslint-disable-next-line consistent-return
    adjustSize() {
      const { autosize } = this;
      if (!this.type === 'textarea' || !autosize) {
        return false;
      }
      const { input } = this.$refs;
      input.style.height = 'auto';
      let height = input.scrollHeight;
      if (Object.prototype.toString.call(autosize) === '[object Object]') {
        if (typeof autosize.maxHeight === 'number' && autosize.maxHeight > 0) {
          height = Math.min(autosize.maxHeight, height);
        }
        if (typeof autosize.minHeight === 'number') {
          height = Math.max(autosize.minHeight, height);
        }
      }

      if (height) {
        input.style.height = `${height}px`;
      }
    },
    formatNumber() {
      const target = this.$refs.input;
      if (!target) return false;
      let { value } = target;
      const { maxlength, type, formatFn } = this;
      // number 类型的 input,使用maxlength无效
      if (type === ('number' || 'digit') && Number(maxlength) < value.length) {
        value = value.substring(0, Number(maxlength));
      }
      // format函数
      if (typeof formatFn === 'function') {
        value = formatFn(value);
      }
      target.value = value;

      return value;
    },
    // exposed method
    focus() {
      const input = this.$refs;
      input && input.focus();
    },
    // exposed method
    blur() {
      const input = this.$refs;
      input && input.blur();
    },
    onInput() {},
    onFocus() {
      this.$emit('focus');
      this.focused = true;
    },
    onBlur() {
      this.$emit('blur');
      setTimeout(() => {
        this.focused = false;
      }, 0);
    },
    onClear() {
      this.$emit('clear');
      this.$emit('input', '');
    },
    onkeypress(event) {
      if (this.type === 'search' && event.keyCode === 13) {
        event.preventDefault();
        this.$refs.input.blur();
      }
      this.$emit('keypress', event);
    },
    leftIconClick() {
      this.$emit('left-icon-click');
    },
    rightIconClick() {
      this.$emit('right-icon-click');
    },
    genInput() {
      const { type } = this;

      const inputProps = {
        ref: 'input',
        class: ['jiemicc-field__control'],
        attrs: {
          ...this.$attrs,
          maxlength: this.maxlength,
        },
        on: this.inputListener,


      };
      if (type === 'textarea') {
        return <textarea {...inputProps} vModel={this.model} > </textarea>;
      }

      let inputType = type;
      if (type !== 'digit') {
        inputType = type;
      } else if (systemVali('ios')) {
        // ios number模式下设置pattern可以只输入整数
        inputType = 'number';
        inputProps.attrs.pattern = '\\d*';
      } else {
        // Android 无法阻止小数点输入,所以使用tel模式
        inputType = 'tel';
      }
      return <input type={inputType} {...inputProps} vModel={this.model}/>;
    },
    genLimitCount() {
      if (this.showLimitCount && this.maxlength) {
        return (
          <div class="jiemicc-field__count">
            {this.value.length}/{this.maxlength}
          </div>
        );
      }
    },
    genRightIcon() {
      if (this.rightIcon) {
        return (
          <JiemiccIcon name={this.rightIcon} onClick={this.rightIconClick} />
        );
      }
    },
    genLeftIcon() {
      if (this.leftIcon) {
        return <jiemicc-icon name={this.leftIcon} onClick={this.leftIconClick} />;
      }
    },
    genClearIcon() {
      if (this.clearable && this.model && this.focused) {
        return (
          <jiemicc-icon
            name="chenggong"
            class="ml-10 jiemicc-field__clear"
            onClick={this.onClear}
          />
        );
      }
    },
    genInputError() {
      if (this.errorMessage) {
        return <div class="jiemicc-field__error">{this.errorMessage}</div>;
      }
    },
    genTitleSlot() {
      if (this.label) {
        return <div
              class={[this.labelClass, 'jiemicc-field__label']}
              style={{ width: this.labelWidth, 'text-align': this.labelAlign }}
            >
              {this.genLeftIcon()}
              <span class="jiemicc-field__label-main">{this.label}</span>
            </div>;
      }
    },
  },
  render() {
    const titleSlot = this.genTitleSlot;
    const scopedSlots = {
      title: titleSlot,
    };

    return (
      <JiemiccCell
        flex-auto
        class={['jiemicc-field', { 'jiemicc-field__required': this.required }]}
        scopedSlots={scopedSlots}
      >

          <div class="jiemicc-field__main">
            {this.genInput()}
            <div class="jiemicc-field__right-icon">
              {this.genClearIcon()}
              {this.genRightIcon()}
            </div>
            {this.$slots.button}
          </div>
          {this.genLimitCount()}
          {this.genInputError()}
      </JiemiccCell>
    );
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-field {
  &__label {
    line-height: 1.5em;
    width: 80px;
  }
  &__main {
    display: flex;
    align-items: center;
  }
  &__control {
    line-height: 1.5em;
    color: #323233;
    width: 100%;
    flex: auto;
    resize: none;
    &:disabled {
      background: transparent;
    }
  }
  &__right-icon {
    display: inline-block;
    max-height: 1.5em;
    line-height: 1.5em;
    i {
      margin: 0 4px;
    }
  }
  &__count {
    text-align: right;
    color: #777;
  }
  &__error {
    color: red;
    line-height: 1.5em;
    margin-top: 5px;
  }
  &.jiemicc-field__required {
    .jiemicc-field__label-main {
      &::before {
        content: "*";
        color: red;
        padding-right: 2px;
      }
    }
  }
}
</style>
