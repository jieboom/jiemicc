
<template>
  <div class="jiemicc-demo ">
    <demo-wrapper title="默认样式">
        <jiemicc-button @click="show1 = !show1" type="primary">打开默认数字键盘</jiemicc-button>
       <jiemicc-number-keyboard v-model="show1" title="完成" extra-key="."></jiemicc-number-keyboard>
    </demo-wrapper>
    <demo-wrapper title="自定义样式">
        <jiemicc-button @click="show2 = !show2" type="info">打开自定义键盘</jiemicc-button>
       <jiemicc-number-keyboard v-model="show2" title="完成" theme="custom"></jiemicc-number-keyboard>
    </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccNumberKeyboard from '@/components/lib/number-keyboard/JiemiccNumberKeyboard.vue';
import JiemiccButton from '@/components/lib/button/JiemiccButton.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccButton,
    JiemiccNumberKeyboard,
  },
  props: {},
  data() {
    return {
      show1: true,
      show2: false,
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);
  /deep/ .jiemcc-demo-wrapper__content{
    padding: 0 15px;
  }
}
</style>
