<template>
  <label
    ref="radioWrapper"
    class="jiemicc-radio"
    :class="[{'jiemicc-radio__disabled': radioDisabled},'jiemicc-radio__'+shape,{'jiemicc-radio__custom-icon':$slots.icon}]"
    :style="{'--checked-color': checkedColor,display: inline ? 'inline-block': 'block'}"
  >
    <input
      class="jiemicc-radio_input"
      type="radio"
      :name="name"
      :value="value"
      :disabled="radioDisabled"
      v-model="model"
    >
    <div class="jiemicc-radio_icon">
      <transition name="jiemicc-radio-icon">
        <slot name="icon" :checked="checked">
        </slot>
        <jiemicc-icon
          v-if="!$slots.icon&&value === model"
          name="diantong_kai"
          color="#fff"
        ></jiemicc-icon>
      </transition>
    </div>
    <span class="jiemicc-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{value}}
      </template>
    </span>
  </label>
</template>

<script >
import JiemiccIcon from '@/components/lib/icon/JiemiccIcon.vue';

export default {
  name: 'JiemiccRadio',
  components: {
    JiemiccIcon,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      default: 'circle',
    },
    checkedColor: {
      type: String,
      default: '#1989fa',
    },
  },
  computed: {
    parentGroup() {
      return this.$parent.$options.componentName
        && this.$parent.$options.componentName === 'JiemiccRadioGroup'
        ? this.$parent
        : null;
    },
    model: {
      get() {
        return this.parentGroup ? this.parentGroup.value : '';
      },
      set(val) {
        if (this.parentGroup) {
          this.parentGroup.$emit('change', val);
        }
      },
    },
    radioDisabled() {
      return this.disabled || (this.parentGroup && this.parentGroup.disabled);
    },
    inline() {
      return this.parentGroup && this.parentGroup.inline;
    },
    checked() {
      return this.value === this.model;
    },
  },

  data() {
    return {};
  },
  mounted() {
    const setStyleProperty = (property, value) => {
      // eslint-disable-next-line no-unused-expressions
      this.$refs.radioWrapper && this.$refs.radioWrapper.style.setProperty(property, value);
    };
    const styleMap = {
      '--checked-color': this.checkedColor,
    };
    // eslint-disable-next-line no-restricted-syntax
    for (const property in styleMap) {
      // eslint-disable-next-line no-prototype-builtins
      if (styleMap.hasOwnProperty(property)) {
        setStyleProperty(property, styleMap[property]);
      }
    }
  },
  methods: {
    test() {},
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-radio {
  display: block;
  margin-right: 10px;
  height: 30px;
  line-height: 30px;
  .jiemicc-radio_icon {
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 8px;
    border: 1px solid #c8c9cc;
    border-radius: 100%;
    box-sizing: border-box;
    text-align: center;
    line-height: 18px;
    vertical-align: middle;
  }
  .jiemicc-radio_label {
    vertical-align: middle;
  }
  .jiemicc-radio_input {
    appearance: none;
    &:checked + .jiemicc-radio_icon {
      border: 1px solid var(--checked-color);
      background: var(--checked-color);
    }
  }
  &.jiemicc-radio__disabled {
    color: #c8c9cc;
    .jiemicc-radio_icon {
      background: rgba(#c8c9cc, 0.3);
    }
  }
  &.jiemicc-radio__square {
    .jiemicc-radio_icon {
      border-radius: 0;
    }
  }

  .jiemicc-radio-icon-enter,
  .jiemicc-radio-icon-leave-to {
    opacity: 0;
  }
  .jiemicc-radio-icon-enter-active,
  .jiemicc-radio-icon-leave-active {
    transition: opacity 0.3s ease-out;
  }
}
</style>
