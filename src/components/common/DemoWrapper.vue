<template>
  <div class="jiemicc-demo-wrapper">
      <div class="jiemicc-demo-wrapper__header">{{title}}</div>
      <div class="jiemcc-demo-wrapper__content">
           <slot></slot>
      </div>
  </div>
</template>

<script >
export default {
  name: 'JiemiccDemoWrapper',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang='scss' scoped>
  .jiemicc-demo-wrapper{
      .jiemicc-demo-wrapper__header{
          color: rgba(69, 90, 100, 0.6);
          padding: 16px;
          padding-top: 20px;
          font-size: 14px;
      }
  }
</style>
