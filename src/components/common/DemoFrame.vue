<template>
  <div class="jiemicc-demo-frame">
    <div class="jiemicc-demo-frame__header ">
      <span
        class="jiemicc-demo__back lh-60"
        @click="$router.go(-1)"
      > &lt; </span>
      <span class="jiemicc-demo__title">{{componentName}}</span>
    </div>
    <div class="jiemicc-demo-frame__content">
      <component :is="componentId"></component>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DemoFrame',
  props: {
    componentName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // eslint-disable-next-line prefer-template
      componentId: () => import('@/components/lib/' + this.componentName + '/Demo.vue'),
    };
  },
  computed: {
    title() {
      return (
        this.componentName[0].toUpperCase() + this.componentName.substring(1)
      );
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-demo-frame {
  .jiemicc-demo-frame__header {
    text-align: center;
    background: #fff;
    .jiemicc-demo__back {
      float: left;
      margin-left: 10px;
      color: #969799;
      font-size: 20px;
      transform: scaleY(2);
    }
    .jiemicc-demo__title {
      line-height: 60px;
      color: #323233;
      font-size: 17px;
      text-transform: capitalize;
    }
  }
  .jiemicc-demo-frame__content {
    overflow: hidden;
    min-height: calc(100vh - 60px);
    background: #f7f8fa;
  }
}
</style>
