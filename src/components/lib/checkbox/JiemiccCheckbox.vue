<template>
  <label
    ref="checkboxWrapper"
    class="jiemicc-checkbox"
    :class="[{'jiemicc-checkbox__disabled':checkboxDisabled},'jiemicc-checkbox__'+shape,{'jiemicc-checkbox__custom-icon':$scopedSlots.icon},{'jiemicc-checkbox__checked':checked},{'jiemicc-checkbox__inline':inline}]"
    :style="{'--checked-color': checkboxCheckedColor}"
  >
    <input
      type="checkbox"
      class="jiemicc-checkbox__input"
      :value="value"
      :name="name"
      :disabled="checkboxDisabled"
      v-model="mdoel"
    >
    <div class="jiemicc-_icon">
      <transition name="jiemicc-checkbox">
        <slot
          name="icon"
          :checked="checked"
        ></slot>
      </transition>
      <transition name="jiemicc-checkbox-icon">
        <jiemicc-icon
          v-if="!$scopedSlots.icon"
          name="diantong_kai"
          color="#fff"
        ></jiemicc-icon>
      </transition>

    </div>
    <span class="jiemicc-checkbox__label">
      <slot></slot>
      <template v-if="!$scopedSlots.default">
        {{value}}
      </template>
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
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      default: 'circle',
    },

  },
  data() {
    return {};
  },
  computed: {
    parentGroup() {
      return this.$parent.$options.componentName && this.$parent.$options.componentName === 'JiemiccChockboxGroup' ? this.$parent : null;
    },
    model: {
      get() {
        return (this.parentGroup && this.parentGroup.value) || this.checkboxValue || [];
      },
      set(val) {

      },
    },
    checkboxDisabled() {
      return this.disabled || (this.parentGroup && this.parentGroup.disabled);
    },

  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-checkbox {
  display: block;
  margin-right: 10px;
  height: 30px;
  line-height: 30px;
  .jiemicc-checkbox_icon {
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
  .jiemicc-checkbox_label {
    vertical-align: middle;
  }
  .jiemicc-checkbox_input {
    appearance: none;
  }
  &.jiemicc-checkbox_checked {
    .jiemicc-checkbox_icon {
      border: 1px solid var(--checked-color);
      background: var(--checked-color);
    }
  }
  &.jiemicc-checkbox__disabled {
    color: #c8c9cc;
    .jiemicc-checkbox_icon {
      background: rgba(#c8c9cc, 0.3);
    }
  }
  &.jiemicc-checkbox__square {
    .jiemicc-checkbox_icon {
      border-radius: 0;
    }
  }
  &.jiemicc-checkbox__custom-icon {
    .jiemicc-checkbox_icon {
      border-radius: 0;
      border: none !important;
      background: transparent !important;
    }
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
