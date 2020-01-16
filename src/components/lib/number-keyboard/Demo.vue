
<template>
  <div class="jiemicc-demo ">
    <demo-wrapper title="默认样式">
      <jiemicc-button
        @click="show1 = !show1"
        type="primary"
      >打开默认数字键盘</jiemicc-button>
      <jiemicc-number-keyboard
        v-model="value1"
        :show.sync="show1"
        title="完成"
        extra-key="."
      ></jiemicc-number-keyboard>
    </demo-wrapper>
    <demo-wrapper title="自定义样式">
      <jiemicc-button
        @click="show2 = !show2"
        type="info"
      >打开自定义键盘</jiemicc-button>
      <jiemicc-number-keyboard
        v-model="value2"
        :show.sync="show2"
        title="完成"
        theme="custom"
      ></jiemicc-number-keyboard>
    </demo-wrapper>
    <demo-wrapper title="双向绑定">
      <jiemicc-field
        v-model="value3"
        @click="show3 = true"
        readonly
      ></jiemicc-field>
      <jiemicc-number-keyboard
        v-model="value3"
        :show.sync="show3"
        title="完成"
      ></jiemicc-number-keyboard>
    </demo-wrapper>
    <demo-wrapper title="键盘标题设置">
      <jiemicc-button
        @click="show4 = !show4"
        type="primary"
      >键盘标题设置</jiemicc-button>
      <jiemicc-number-keyboard
        v-model="value4"
        :show.sync="show4"
        title="完成"
      >
       <template #title><div style="text-align:center;width:80%;" > 键盘标题</div></template>
      </jiemicc-number-keyboard>
    </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccNumberKeyboard from '@/components/lib/number-keyboard/JiemiccNumberKeyboard.vue';
import JiemiccButton from '@/components/lib/button/JiemiccButton.vue';
import JiemiccField from '@/components/lib/field/JiemiccField.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccButton,
    JiemiccNumberKeyboard,
    JiemiccField,
  },
  props: {},
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      value1: '',
      value2: '',
      value3: '',
      value4: '',

    };
  },
  methods: {

  },
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);
  /deep/ .jiemcc-demo-wrapper__content {
    padding: 0 15px;
  }
}
</style>
