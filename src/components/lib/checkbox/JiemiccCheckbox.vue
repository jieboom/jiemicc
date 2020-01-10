<template>
  <label
    ref="checkboxWrapper"
    class="jiemicc-checkbox"
    :class="[
    {'jiemicc-checkbox__disabled':checkboxDisabled || isLimitDisbled},
    'jiemicc-checkbox__'+shape,
    {'jiemicc-checkbox__custom-icon':$scopedSlots.icon},
    {'jiemicc-checkbox__checked':checkboxChecked},
    {'jiemicc-checkbox__inline':inline},
    {'jimeicc-checkbox__label-disabled': checkboxLabelDisabled},
    {'jiemicc-checkbox__m0':!$parent.$options.componentName || !$parent.$options.componentName === 'JiemiccChockboxGroup' }
    ]"
    :style="{'--checked-color': checkboxCheckedColor}"
    @click.stop
  >
    <input
      type="checkbox"
      class="jiemicc-checkbox__input"
      :value="label"
      :disabled="checkboxDisabled || isLimitDisbled"
      v-model="model"
    >
    <div
      class="jiemicc-checkbox__icon"
      :style="{'font-size':iconSize}"
    >
      <transition name="jiemicc-checkbox">
        <slot
          name="icon"
          :checked="checkboxChecked"
        ></slot>
      </transition>
      <transition name="jiemicc-checkbox-icon">
        <jiemicc-icon
          v-if="!$scopedSlots.icon && checkboxChecked"
          name="diantong_kai"
          color="#fff"
        ></jiemicc-icon>
      </transition>

    </div>

    <span
      class="jiemicc-checkbox__label"
      @click="labelDisabled && $event.preventDefault();"
    >
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script >
import JiemiccIcon from '@/components/lib/icon/JiemiccIcon.vue';

export default {
  name: 'JiemiccCheckbox',
  components: {
    JiemiccIcon,
  },
  componentName: 'JiemiccCheckbox',
  props: {
    label: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    shape: String,
    checkedColor: {
      type: String,
      default: '#1989fa',
    },
    value: Boolean,
    checked: {
      type: Boolean,
      default: false,
    },
    labelDisabled: {
      type: Boolean,
      default: false,
    },
    iconSize: String,
  },
  data() {
    return {
      selfModel: false,
    };
  },
  created() {
    this.checked && this.initChecked();
  },

  computed: {
    parentGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName && parent.$options.componentName === 'JiemiccChockboxGroup') {
          break;
        }
        parent = parent.$parent;
      }
      return parent;
    },
    model: {
      get() {
        // eslint-disable-next-line no-nested-ternary
        return this.parentGroup
          ? this.parentGroup.value
          : this.value !== undefined
            ? this.value
            : this.selfModel;
      },
      set(val) {
        if (this.parentGroup) {
          this.parentGroup.$emit('change', val);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = true;
        }
        setTimeout(() => {
          this.$emit('click', val);
        }, 0);
      },
    },
    checkboxIconSize() {
      return this.iconSize || (this.parentGroup && this.parentGroup.iconSize);
    },
    checkboxShape() {
      return this.shape || (this.parentGroup && this.parentGroup.shape);
    },
    checkboxLabelDisabled() {
      return (
        this.labelDisabled
        || (this.parentGroup && this.parentGroup.labelDisabled)
      );
    },
    checkboxDisabled() {
      return this.disabled || (this.parentGroup && this.parentGroup.disabled);
    },
    checkboxCheckedColor() {
      return (
        this.checkedColor || (this.parentGroup && this.parentGroup.checkedColor)
      );
    },
    checkboxChecked() {
      return (
        (Array.isArray(this.model) && this.model.includes(this.label))
        || this.model === true
      );
    },
    inline() {
      return !!this.parentGroup && this.parentGroup.inline;
    },
    isLimitDisbled() {
      if (!this.parentGroup) return false;
      const { max, min } = this.parentGroup;

      // eslint-disable-next-line no-mixed-operators
      return !!(min || max) && (this.model.length <= min && this.checkboxChecked) || (this.model.length >= max && !this.checkboxChecked);
    },
  },
  mounted() {
    if (this.parentGroup) this.parentGroup.checkboxChild.push(this);
  },
  methods: {
    initChecked() {
      if (Array.isArray(this.model) && !this.model.includes(this.label)) {
        this.model.push(this.label);
      }
    },

  },
};
</script>
<style lang='scss' scoped>
.jiemicc-checkbox {
  display: block;
  margin-right: 10px;
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
  .jiemicc-checkbox__icon {
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
    overflow: hidden;
    /deep/ .jiemicc-icon {
      vertical-align: top;
      font-size: 0.8em !important;
    }
  }
  .jiemicc-checkbox__label {
    vertical-align: middle;
  }
  .jiemicc-checkbox__input {
    appearance: none;
    opacity: 0;

  }
  &.jiemicc-checkbox__checked {
    .jiemicc-checkbox__icon {
      border: 1px solid var(--checked-color);
      background: var(--checked-color);
    }
  }

  &.jiemicc-checkbox__square {
    .jiemicc-checkbox__icon {
      border-radius: 0;
    }
  }
  &.jiemicc-checkbox__custom-icon {
    .jiemicc-checkbox__icon {
      border-radius: 0;
      border: none !important;
      background: transparent !important;
    }
  }
  &.jiemicc-checkbox__disabled {
    color: #c8c9cc;
    .jiemicc-checkbox__icon {
      background: rgba(#c8c9cc, 0.3);
      border-color: #c8c9cc;
    }
  }
  &.jiemicc-checkbox__inline {
    display: inline-block;
  }
  &.jiemicc-checkbox__m0{
      margin-top: 0;
  }
  .jiemicc-checkbox-icon-enter,
  .jiemicc-checkbox-icon-leave-to {
    opacity: 0;
  }
  .jiemicc-checkbox-icon-enter-active,
  .jiemicc-checkbox-icon-leave-active {
    transition: opacity 0.3s ease-out;
  }

}
</style>
