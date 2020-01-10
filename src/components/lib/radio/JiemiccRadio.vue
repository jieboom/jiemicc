<template>
  <label
    ref="radioWrapper"
    class="jiemicc-radio"
    :class="[{'jiemicc-radio__disabled': radioDisabled},{'jiemicc-checkbox__m0':!$parent.$options.componentName || !$parent.$options.componentName === 'JiemiccChockboxGroup' },'jiemicc-radio__'+shape,{'jiemicc-radio__custom-icon':$scopedSlots.icon},{'jiemicc-radio_checked':radioChecked}]"
    :style="{'--checked-color': radioCheckedColor,display: inline ? 'inline-block': 'block'}"
    @click.stop="$emit('click')"
  >
    <input
      ref="radio"
      class="jiemicc-radio_input"
      type="radio"
      :value="label"
      :disabled="radioDisabled"
      v-model="model"
    >
    <div class="jiemicc-radio_icon">
      <transition name="jiemicc-radio-icon">
        <slot
          name="icon"
          :checked="radioChecked"
        >
        </slot>
      </transition>
      <transition name="jiemicc-radio-icon">
        <jiemicc-icon
          v-if="!$slots.icon&&radioChecked"
          name="diantong_kai"
          color="#fff"
        ></jiemicc-icon>
      </transition>
    </div>
    <span class="jiemicc-radio_label">

      <slot>{{label}}</slot>
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
    label: {
      type: String,
      required: true,
    },
    value: String,
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
    checked: Boolean,
  },
  computed: {
    parentGroup() {
      let parent = this.$parent;
      while (parent) {
        if (
          parent.$options.componentName
          && parent.$options.componentName === 'JiemiccRadioGroup'
        ) {
          break;
        }
        parent = parent.$parent;
      }
      return parent;
    },
    model: {
      get() {
        // eslint-disable-next-line no-nested-ternary
        return this.parentGroup ? this.parentGroup.value : this.value !== undefined ? this.value : this.selfModel;
      },
      set(val) {
        if (this.parentGroup) {
          this.parentGroup.$emit('change', val);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = val;
        }
        setTimeout(() => {
          this.$emit('click');
        }, 0);
      },
    },
    radioDisabled() {
      return this.disabled || (this.parentGroup && this.parentGroup.disabled);
    },
    radioCheckedColor() {
      return (
        this.checkedColor || (this.parentGroup && this.parentGroup.checkedColor)
      );
    },
    inline() {
      return this.parentGroup && this.parentGroup.inline;
    },
    radioChecked() {
      return this.label === (this.model || this.value);
    },
  },

  data() {
    return {
      selfModel: '',
    };
  },
  created() {
    this.checked && this.initChecked();
  },
  mounted() {
    const setStyleProperty = (property, value) => {
      // eslint-disable-next-line no-unused-expressions
      this.$refs.radioWrapper
        && this.$refs.radioWrapper.style.setProperty(property, value);
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
    initChecked() {
      if (this.label !== this.model) this.model = this.label;
    },
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-radio {
  display: block;
  margin-right: 10px;
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
  .jiemicc-radio_icon {
    display: inline-block;
     font-size: 25px;
    height: 1em;
    width: 1em;
    margin-right: 8px;
    border: 1px solid #c8c9cc;
    border-radius: 100%;
    text-align: center;
    line-height: 1em;
    vertical-align: middle;
     /deep/ .jiemicc-icon {
      vertical-align: top;
      font-size: 0.8em !important;
    }
  }
  .jiemicc-radio_label {
    vertical-align: top;
  }
  .jiemicc-radio_input {
    appearance: none;
    opacity: 0;
  }
  &.jiemicc-radio_checked {
    .jiemicc-radio_icon {
      border: 1px solid var(--checked-color);
      background: var(--checked-color);
    }
  }
  &.jiemicc-radio__disabled {
    color: #c8c9cc;
    .jiemicc-radio_icon {
      background: rgba(#c8c9cc, 0.3);
      border: 1px solid #c8c9cc;
    }
  }
  &.jiemicc-radio__square {
    .jiemicc-radio_icon {
      border-radius: 0;
    }
  }
  &.jiemicc-radio__custom-icon {
    .jiemicc-radio_icon {
      border-radius: 0;
      border: none !important;
      background: transparent !important;
    }
  }
  &.jiemicc-checkbox__m0{
    margin-top: 0;
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
