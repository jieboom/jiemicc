<template>
  <div class="jiemicc-demo m-20" >
       <demo-wrapper  title="基础用法">
            <div class="icon-wrapper">
              <jiemicc-icon name="aixin"></jiemicc-icon>
            </div>
            <div class="icon-wrapper">
              <jiemicc-icon name="bianji"></jiemicc-icon>
            </div>

       </demo-wrapper>
        <demo-wrapper  title="自定义颜色">
            <div class="icon-wrapper">
              <jiemicc-icon color="lightgrey" name="aixin"></jiemicc-icon>
            </div>
            <div class="icon-wrapper">
              <jiemicc-icon color="red" name="bianji"></jiemicc-icon>
            </div>
       </demo-wrapper>
        <demo-wrapper  title="自定义尺寸">
            <div class="icon-wrapper">
              <jiemicc-icon color="lightgrey" size="30" name="aixin"></jiemicc-icon>
            </div>
            <div class="icon-wrapper">
              <jiemicc-icon color="red" size="2rem" name="bianji"></jiemicc-icon>
            </div>
       </demo-wrapper>
        <demo-wrapper  title="提示信息">
            <div class="icon-wrapper">
              <jiemicc-icon name="aixin" size="25" dot></jiemicc-icon>
            </div>
            <div class="icon-wrapper">
              <jiemicc-icon name="bianji" size="25" info="1"></jiemicc-icon>
            </div>
            <div class="icon-wrapper">
              <jiemicc-icon name="bianji" size="25" info="99+"></jiemicc-icon>
            </div>
       </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccIcon from '@/components/lib/icon/JiemiccIcon.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccIcon,
  },
  props: {

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
.jiemicc-demo{
    min-height: calc(100vh - 100px);
    background: #fff;
    /deep/ .jiemcc-demo-wrapper__content{
       display: flex;
       justify-content: flex-start;
    }
    .icon-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25%;
      height: 60px;
    }
}
</style>
