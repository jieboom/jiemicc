<template>
  <jiemicc-cell
    flex-auto
    class="jiemicc-field"
    :class="{'jiemicc-field__required':required}"
  >
    <template #title>
      <div
        class="jiemicc-field__label"
        v-if="label"
      >
        <jiemicc-icon
          :name="leftIcon"
          v-if="leftIcon"
        ></jiemicc-icon>
        <span class="jiemicc-field__label-main">{{label}}</span>
      </div>
    </template>
      <div class="jiemicc-field__main">
        <textarea
          ref="input"
          class="jiemicc-field__control"
          v-if="fieldType === 'textarea'"
          :readonly="readonly"
          :disabled="disabled"
          :placeholder="placeholder"
          :rows="rows"
          v-model.trim="model"
          :maxlength="maxlength"


        ></textarea>
        <input
          ref="input"
          v-else
          class="jiemicc-field__control"
          :type="fieldType"
          :placeholder="placeholder"
          :pattern="pattern"
          :readonly="readonly"
          :disabled="disabled"
          v-model.trim="model"
          :maxlength="maxlength"
        >
        <div class="jiemicc-field__right-icon">
          <jiemicc-icon
            name="chenggong"
            class="ml-10 jiemicc-field__clear"
            v-if="clearable && model"
            @click.native="$emit('input', '')"
          ></jiemicc-icon>
          <jiemicc-icon
            :name="rightIcon"
            v-if="rightIcon"
            class="ml-10"
          ></jiemicc-icon>
        </div>
        <slot name="button"></slot>
      </div>
      <div class="jiemicc-field__error" v-if="errorMessage">
          {{errorMessage}}
      </div>

  </jiemicc-cell>
</template>

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
    placeholder: String,
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return [
          'text',
          'tel',
          'digit',
          'number',
          'password',
          'textarea',
        ].includes(type);
      },
    },
    label: String,
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    leftIcon: String,
    rightIcon: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    errorMessage: String,
    rows: String,
    autosize: [Boolean, Object],
    maxlength: String,
  },
  data() {
    return {
      pattern: '',
      fieldType: '',
      selfModel: '',
    };
  },
  computed: {
    model: {
      get() {
        return this.value !== undefined ? this.value : this.selfModel;
      },
      set(val) {
        this.value !== undefined
          ? this.$emit('input', val)
          : (this.selfModel = val);
      },
    },
  },
  watch: {
    type: {
      immediate: true,
      handler(type) {
        if (type !== 'digit') {
          this.fieldType = type;
        } else if (systemVali('ios')) {
          // ios number模式下设置pattern可以只输入整数
          this.fieldType = 'number';
          this.pattern = '\\d*';
        } else {
          // Android 无法阻止小数点输入,所以使用tel模式
          this.fieldType = 'tel';
        }
      },
    },
    value() {
      this.adjustSize();
    },
  },
  mounted() {
    this.type === 'textarea' && this.autosize && this.adjustSize();
  },
  methods: {
    adjustSize() {
      const { autosize } = this;
      if (!this.type === 'textarea' || !autosize) {
        return false;
      }
      const { input } = this.$refs;
      input.style.height = 'auto';
      const height = input.scrollHeight;


      if (height) {
        input.style.height = `${height}px`;
      }
    },
  },

};
</script>
<style lang='scss' scoped>
.jiemicc-field {
  .jiemicc-field__label {
    line-height: 1.5em;
    width: 80px;
  }
  .jiemicc-field__main {
    display: flex;
    align-items: center;
    .jiemicc-field__control {
      line-height: 1.5em;
      color: #323233;
      width: 100%;
      flex: auto;
      resize: none;
      &:disabled {
        background: transparent;
      }
    }
    .jiemicc-field__right-icon {
      display: inline-block;
      max-height: 1.5em;
      line-height: 1.5em;
      i{
        margin: 0 4px;
      }
    }
  }
  .jiemicc-field__error{
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
