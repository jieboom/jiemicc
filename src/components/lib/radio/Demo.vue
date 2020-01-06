<template>
  <div class="jiemicc-demo ">
    <demo-wrapper title="基础用法">
      <jiemicc-radio-group v-model="radio1">
        <jiemicc-radio
          value="1"
          name="radio1"
        >单选1 </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio1"
        >单选2</jiemicc-radio>
        <jiemicc-radio
          value="3"
          name="radio1"
        >单选3</jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
    <demo-wrapper title="单选框内联">
      <jiemicc-radio-group
        v-model="radio1"
        inline
      >
        <jiemicc-radio
          value="1"
          name="radio1"
        >单选1 </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio1"
        >单选2</jiemicc-radio>
        <jiemicc-radio
          value="3"
          name="radio1"
        >单选3</jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
    <demo-wrapper title="全部禁用">
      <jiemicc-radio-group
        v-model="radio2"
        disabled
      >
        <jiemicc-radio
          value="1"
          name="radio2"
          disabled
        >单选1 </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio2"
        >单选2</jiemicc-radio>
        <jiemicc-radio
          value="3"
          name="radio2"
        >单选3</jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
    <demo-wrapper title="禁用状态">
      <jiemicc-radio-group v-model="radio3">
        <jiemicc-radio
          value="1"
          name="radio3"
          disabled
        >单选1 </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio3"
        >单选2</jiemicc-radio>
        <jiemicc-radio
          value="3"
          name="radio3"
        >单选3</jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
    <demo-wrapper title="自定义形状">
      <jiemicc-radio-group v-model="radio4">
        <jiemicc-radio
          value="1"
          name="radio4"
          shape="square"
        >单选1 </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio4"
          shape="square"
        >单选2</jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
    <demo-wrapper title="自定义选中颜色">
      <jiemicc-radio-group v-model="radio5">
        <jiemicc-radio
          value="1"
          name="radio5"
          checked-color="#07c160"
        >单选1 </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio5"
          checked-color="#07c160"
        >单选2</jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
    <demo-wrapper title="自定义图标">
      <jiemicc-radio-group v-model="radio6">
        <jiemicc-radio
          value="1"
          name="radio6"
        >单选1
          <template v-slot:icon="radio">
            <img
              width="100%"
              :src="radio.checked?checkedUrl:unCheckedUrl"
            >
          </template>
        </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio6"
        >单选2
          <template v-slot:icon="radio">
            <img
              width="100%"
              :src="radio.checked?checkedUrl:unCheckedUrl"
            >
          </template></jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccRadio from '@/components/lib/radio/JiemiccRadio.vue';
import JiemiccRadioGroup from '@/components/lib/radio/JiemiccRadioGroup.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccRadio,
    JiemiccRadioGroup,
  },
  props: {},
  data() {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '',
      radio4: '1',
      radio5: '1',
      radio6: '1',
      checkedUrl: '',
      unCheckedUrl: '',
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);
  /deep/ .jiemcc-demo-wrapper__content {
    margin: 0 16px;
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 60px;
  }
}
</style>
