<template>
  <div class="jiemicc-radio-group" >
      <slot></slot>
  </div>
</template>

<script >
export default {
  name: 'JiemiccRadioGroup',
  componentName: 'JiemiccRadioGroup',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
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
  },
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>
<style lang='scss' scoped>

</style>
