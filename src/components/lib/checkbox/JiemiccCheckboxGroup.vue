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
    max: Number,
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
    };
  },
  methods: {
    chooseAll() {

    },
    chooseToggle() {

    },
  },
};
</script>
<style lang='scss' scoped>

</style>
