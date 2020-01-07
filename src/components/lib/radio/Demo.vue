<template>
  <div class="jiemicc-demo ">
    <demo-wrapper title="基础用法" >
      <jiemicc-radio-group v-model="radio0">
        <jiemicc-radio
          value="1"
          name="radio0"
        >单选1 </jiemicc-radio>
        <jiemicc-radio
          value="2"
          name="radio0"
        >单选2</jiemicc-radio>
        <jiemicc-radio
          value="3"
          name="radio0"
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
        >
          <template #icon="{checked}">
            <img
              width="100%"
              :src="checked?checkedUrl:unCheckedUrl"
            >
          </template>
          单选1

        </jiemicc-radio>


        <jiemicc-radio
          value="2"
          name="radio6"
        >
          <template #icon="{checked}">
            <img
              width="100%"
              :src="checked?checkedUrl:unCheckedUrl"
            >
          </template>
          单选2
        </jiemicc-radio>
      </jiemicc-radio-group>
    </demo-wrapper>
    <demo-wrapper class="cell-demo" title="与cell一起使用" >
        <jiemicc-cell-group clickable>
        <jiemicc-cell
          title="单选框1"
          @click="radio7 = '1'"
        >
         <jiemicc-radio
          value="1"
          v-model="radio7"
          name="radio1"
        > {{''}} </jiemicc-radio>
        </jiemicc-cell>
        <jiemicc-cell
          title="单选框2"
          @click="radio7 = '2'"

        >
         <jiemicc-radio
          value="2"
          v-model="radio7"
          name="radio1"
        >{{''}}</jiemicc-radio></jiemicc-cell>

      </jiemicc-cell-group>
    </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccRadio from '@/components/lib/radio/JiemiccRadio.vue';
import JiemiccRadioGroup from '@/components/lib/radio/JiemiccRadioGroup.vue';
import JiemiccCell from '@/components/lib/cell/JiemiccCell.vue';
import JiemiccCellGroup from '@/components/lib/cell/JiemiccCellGroup.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccRadio,
    JiemiccRadioGroup,
    JiemiccCell,
    JiemiccCellGroup,
  },
  props: {},
  data() {
    return {
      radio0: '1',
      radio1: '1',
      radio2: '1',
      radio3: '',
      radio4: '1',
      radio5: '1',
      radio6: '1',
      radio7: '1',
      checkedUrl: 'https://img.zcool.cn/community/01051955434ac00000019ae9a9a369.jpg@2o.jpg',
      unCheckedUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578969385&di=638b138fa31511b8ee2850bd15cd5cce&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F90%2F47%2F9256efcbf458c23.jpg',
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
    margin: 0 16px;
  }
  .cell-demo /deep/ .jiemcc-demo-wrapper__content{
    margin: 0;
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
