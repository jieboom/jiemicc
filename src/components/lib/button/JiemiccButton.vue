<template>
  <button
    class="jiemicc-button"
    :class="[typeClass,plainClass,hairlineClass,disabledClass,sizeClass]"
    :disabled="disabled||loading"
    ref="button"
    @click="$emit('click')"
  >
    <template v-if="!this.loading">
      <i
        :class="`iconfont icon-${icon}`"
        style="vertical-align:middle;"
        v-if="icon"
      ></i>
      <slot></slot>
    </template>
    <template v-else>
      <i
        :class="`iconfont icon-loading-${loadingIcon}`"
        style="vertical-align:middle;"
      ></i><span style="vertical-align:middle;margin-left: 5px;">{{loadingText}}</span>
    </template>

  </button>
</template>

<script >
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    hairline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    'loading-icon': {
      type: String,
      default: 'default',
    },
    'loading-text': {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    color: {
      type: String,
    },
  },
  mounted() {
    const colors = {
      default: '#ebedf0',
      primary: '#07c160',
      info: '#1989fa',
      danger: '#ee0a24',
      warn: '#ff976a',
    };
    this.$refs.button.style.setProperty('--color', colors[this.type]);
    if (this.color) {
      this.$refs.button.style.setProperty('--color', this.color);
    }
  },
  data() {
    return {
      typeClass: this.type === 'default' ? `jiemicc-button--${this.type}` : '',
      plainClass: this.plain ? 'jiemicc-button--plain' : '',
      hairlineClass: this.hairline ? 'jiemicc-button--hairline' : '',
      disabledClass: this.disabled ? 'jiemicc-button-disabled' : '',
      sizeClass: `jiemicc-button-${this.size}`,
    };
  },
};
</script>
<style lang='scss' scoped>

.jiemicc-button {
  position: relative;
  padding: 0 15px;
  color: #fff;
  font-size: 14px;
  border-radius: 2px;
  line-height: 42px;
  border: none;
  border: 1px solid var(--color);
  background: var(--color);
  white-space: nowrap;
  &.jiemicc-button--plain {
    color: var(--color);
    background: #fff;
  }
  // 按钮激活
  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: #000;
    opacity: 0;
  }
  &:active {
    &::before {
      opacity: 0.1;
    }
  }
  &.jiemicc-button--default {
    border: 1px solid var(--color);
    color: #323233;
    background: #fff;
    &.jiemicc-button--hairline {
      border: none;
      &::after {
        border: 1px solid var(--color);
      }
    }
  }
  // 细边框样式
  &.jiemicc-button--hairline {
    border: none;
    &::after{
     border-width: 1px;
    }
  }
  // 禁止样式
  &.jiemicc-button-disabled {
    opacity: 0.5;
  }
  // 尺寸样式
  &.jiemicc-button-large {
    width: 100%;
    line-height: 48px;
  }
  &.jiemicc-button-small {
    font-size: 13px;
    padding: 0 10px;
    line-height: 33px;
  }
  &.jiemicc-button-mini {
    font-size: 10px;
    padding: 0 5px;
    line-height: 25px;
  }
}
</style>
