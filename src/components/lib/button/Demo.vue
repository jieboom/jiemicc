<template>
  <div class="jiemicc-demo">
    <demo-wrapper title="按钮类型">
      <jiemicc-button>默认按钮</jiemicc-button>
      <jiemicc-button type="primary">主要按钮</jiemicc-button>
      <jiemicc-button type="info">信息按钮</jiemicc-button>
      <jiemicc-button type="danger">危险按钮</jiemicc-button>
      <jiemicc-button type="warn">警告按钮</jiemicc-button>
    </demo-wrapper>
    <demo-wrapper title="朴素类型">
      <jiemicc-button
        type="primary"
        plain
      >主要按钮</jiemicc-button>
      <jiemicc-button
        type="info"
        plain
      >信息按钮</jiemicc-button>
    </demo-wrapper>
    <demo-wrapper title="细边框">
      <jiemicc-button
        type="warn"
        plain
        hairline
      >警告按钮</jiemicc-button>
      <jiemicc-button
        type="primary"
        plain
        hairline
      >主要按钮</jiemicc-button>
    </demo-wrapper>
    <demo-wrapper title="禁用状态">
      <jiemicc-button
        disabled
        type="danger"
      >禁用按钮</jiemicc-button>
      <jiemicc-button
        disabled
        type="warn"
      >禁用按钮</jiemicc-button>
    </demo-wrapper>
    <demo-wrapper title="加载状态">
      <jiemicc-button
        loading
        type="danger"
      >危险按钮</jiemicc-button>
      <jiemicc-button
        loading
        loading-icon="spinner"
        type="warn"
      >警告按钮</jiemicc-button>
      <jiemicc-button
        loading
        loading-icon="spinner"
        type="warn"
        loading-text="加载中..."
      >警告按钮</jiemicc-button>
    </demo-wrapper>
   <demo-wrapper title="按钮图标">
      <jiemicc-button
        icon="caidan"
        type="danger"
      ></jiemicc-button>
      <jiemicc-button
        icon="anquan"
        type="warn"
      >警告按钮</jiemicc-button>

    </demo-wrapper>
    <demo-wrapper title="按钮尺寸">
      <jiemicc-button
        type="primary"
        size="large"
      >超大尺寸</jiemicc-button>
      <jiemicc-button
        type="primary"
        size="normal"
      >正常尺寸</jiemicc-button>
       <jiemicc-button
        type="primary"
        size="small"
      >小号尺寸</jiemicc-button>
       <jiemicc-button
        type="primary"
        size="mini"
      >超小尺寸</jiemicc-button>

    </demo-wrapper>
    <demo-wrapper title="自定义颜色">

       <jiemicc-button
        type="primary"
        color="#7232dd"
      >单色按钮</jiemicc-button>
       <jiemicc-button
        type="primary"
        color="#7232dd"
        plain
      >单色按钮</jiemicc-button>

    </demo-wrapper>


  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccButton from '@/components/lib/button/JiemiccButton.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccButton,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  /deep/ .jiemcc-demo-wrapper__content {
    padding: 0 16px;
    .jiemicc-button {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
