<script >
import createNamespace from '@/components/utils/create';

const [bem] = createNamespace('password-input');
export default {
  name: 'JiemiccPasswordInput',
  props: {
    length: {
      type: [String, Number],
      default: 6,
    },
    value: {
      type: String,
      default: '',
    },
    cleartext: {
      type: Boolean,
      default: false,
    },
    info: String,
    errorInfo: String,
    margin: String,
    focused: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focus: this.focused,
    };
  },
  watch: {
    focus: {
      immediate: true,
      handler(focus) {
        if (focus) {
          const { passwordInputArr } = window;
          // 文档中已获取焦点元素先失去焦点
          const { activeElement, body } = document;
          if (activeElement && activeElement !== body) {
            activeElement.blur();
          }

          passwordInputArr.forEach((input) => {
            if (input !== this) {
              input.focus = false;
            }
          });
          document.body.addEventListener('click', this.onBlur);
        } else {
          this.$emit('blur');
          document.body.removeEventListener('click', this.onBlur);
        }
      },
    },
  },
  beforeCreate() {
    const { passwordInputArr } = window;
    passwordInputArr
      ? passwordInputArr.push(this)
      : (window.passwordInputArr = [this]);
  },
  methods: {
    onFoucs(event) {
      event.stopPropagation();
      this.focus = true;
      this.$emit('foucs');
    },
    onBlur() {
      this.focus = false;
    },
  },
  render() {
    const {
      value, info, errorInfo, cleartext, margin, onFoucs, focus,
    } = this;
    const length = Number(this.length);
    const inputBody = (
      <ul class={[bem('body')]}>
        {new Array(length).fill('input--key').map((el, idx) => (
          <li
            class={[
              bem('key'),
              { 'jiemicc-hairline-right': !margin },
              { [bem('key', ['mask'])]: !cleartext && value.length >= idx + 1 },
              { [bem('key', ['cursor'])]: idx === value.length && focus },
            ]}
            style={{ 'margin-right': margin }}
          >
            {cleartext && value.length >= idx + 1 && value.charAt(idx)}
            <i />
          </li>
        ))}
      </ul>
    );
    const inputinfo = (
      <div class={[{ [bem('info')]: info || errorInfo, [bem('error-info')]: errorInfo }]}>
        {info || errorInfo}
      </div>
    );
    return (
      <div class={bem()} onClick={onFoucs}>
        {inputBody}
        {inputinfo}
      </div>
    );
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-password-input {
  &__body {
    display: flex;
    justify-content: space-between;
    height: $jiemicc-password-input-body-height;
  }
  &__key {
    position: relative;
    flex: auto;
    height: 100%;
    line-height: $jiemicc-password-input-body-height;
    text-align: center;
    font-size: $jiemicc-password-input-body-font-size;
    color: $jiemicc-password-input-body-color;
    background: $jiemicc-password-input-key-bgcolor;
    &:last-child {
      margin-right: 0 !important;
    }
    i {
      visibility: hidden;
      position: absolute;
      display: block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      width: $jiemicc-password-input-body-cursor-width;
      height: $jiemicc-password-input-body-cursor-height;
      background-color: $jiemicc-password-input-body-mask-bgcolor;
      animation: jiemicc-password-input-cursor 1.2s .8s infinite ease-in-out;
      @keyframes jiemicc-password-input-cursor {
        from {
          opacity: 1;
        }
        49% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        to {
          opacity: 0;
        }
      }
    }
    &--mask {

      &::before {
        position: absolute;
        content: "";
        display: block;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 20px);

        width: $jiemicc-password-input-body-mask-height;
        height: $jiemicc-password-input-body-mask-height;
        background-color: $jiemicc-password-input-body-mask-bgcolor;
      }
    }
    &--cursor {
      i{
        visibility:visible;
      }
    }
  }
  &__info{
    text-align: center;
    line-height: $jiemicc-password-input-info-height;
    height: $jiemicc-password-input-info-height;
    color: $jiemicc-password-input-info-color;
    font-size: $jiemicc-password-input-info-font-size;
  }
  &__error-info{
    color: $jiemicc-password-input-info-error-color;
  }
}
</style>
