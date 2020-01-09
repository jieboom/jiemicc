<template>
  <div class="jiemicc-checkbox-group" >
      <slot></slot>
  </div>
</template>

<script >
export default {
  name: 'JiemiccChockboxGroup',
  componentName: 'JiemiccChockboxGroup',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    checkedColor: String,
    shape: String,
    labelDisabled: String,
    iconSize: String,
    max: Number,
    min: Number,
  },
  watch: {
    value(val) {
      setTimeout(() => {
        this.$emit('checkboxChange', val);
      }, 0);
    },
  },
  data() {
    return {
      checkboxChild: [],
    };
  },
  mounted() {
    console.log(this.checkboxChild);
  },
  methods: {
    chooseToggle(all) {
      if (all) {
        this.checkboxChild.forEach((child) => {
          child.initChecked();
        });
      } else {
        const allValue = this.checkboxChild.map(child => child.label);
        const subValue = allValue.filter(val => !this.value.includes(val));
        this.$emit('change', subValue);
      }
    },
    chooseItem(index) {
      this.checkboxChild[index].$el.click();
    },
  },
};
</script>
<style lang='scss' scoped>

</style>
