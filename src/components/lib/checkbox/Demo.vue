
<template>
  <div class="jiemicc-demo ">
    <demo-wrapper title="基础用法">
      <jiemicc-checkbox v-model="checkbox0">多选1 </jiemicc-checkbox>
    </demo-wrapper>
    <demo-wrapper title="禁止选中">
      <jiemicc-checkbox
        v-model="checkbox1"
        disabled
      >多选1 </jiemicc-checkbox>
    </demo-wrapper>
    <demo-wrapper title="禁用文本点击">
      <jiemicc-checkbox
        label-disabled
        v-model="checkbox2"
      >多选1 </jiemicc-checkbox>

    </demo-wrapper>
    <demo-wrapper title="自定义形状">
      <jiemicc-checkbox
        shape="square"
        v-model="checkbox3"
      >多选1 </jiemicc-checkbox>
    </demo-wrapper>
    <demo-wrapper title="自定义大小">
      <jiemicc-checkbox
        shape="square"
        icon-size="30px"
        v-model="checkbox4"
      >多选1 </jiemicc-checkbox>

    </demo-wrapper>

    <demo-wrapper title="选中框颜色">

      <jiemicc-checkbox
        :label="1"
        v-model="checkbox5"
        checked-color="#000"
      >多选1 </jiemicc-checkbox>

    </demo-wrapper>
    <demo-wrapper title="自定义图标">
      <jiemicc-checkbox v-model="checkbox6">
        <template #icon="{checked}">
          <img
            :src="checked ? checkedUrl : unCheckedUrl"
            alt=""
            width="100%"
          >
        </template>
        多选1 </jiemicc-checkbox>

    </demo-wrapper>
    <demo-wrapper title="多选框组">
      <jiemicc-checkbox-group v-model="checkbox7">
        <jiemicc-checkbox
          :label="1"
          checked
        >多选1 </jiemicc-checkbox>
        <jiemicc-checkbox :label="2">多选2</jiemicc-checkbox>
        <jiemicc-checkbox :label="3">多选3</jiemicc-checkbox>
      </jiemicc-checkbox-group>
    </demo-wrapper>
    <demo-wrapper title="多选框内联">
      <jiemicc-checkbox-group
        v-model="checkbox8"
        inline
      >
        <jiemicc-checkbox
          :label="1"
          checked
        >多选1 </jiemicc-checkbox>
        <jiemicc-checkbox :label="2">多选2</jiemicc-checkbox>
        <jiemicc-checkbox :label="3">多选3</jiemicc-checkbox>
      </jiemicc-checkbox-group>
    </demo-wrapper>
    <demo-wrapper title="设置数量限制">
      <jiemicc-checkbox-group
        v-model="checkbox9"
        :min="1"
        :max="5"
      >
        <jiemicc-checkbox
          :label="1"
          checked
        >多选1 </jiemicc-checkbox>
        <jiemicc-checkbox :label="2">多选2</jiemicc-checkbox>
        <jiemicc-checkbox :label="3">多选3</jiemicc-checkbox>
        <jiemicc-checkbox :label="4">多选4</jiemicc-checkbox>
        <jiemicc-checkbox :label="5">多选5</jiemicc-checkbox>
        <jiemicc-checkbox :label="6">多选6</jiemicc-checkbox>
      </jiemicc-checkbox-group>
    </demo-wrapper>
    <demo-wrapper title="全选和反选">
      <jiemicc-checkbox-group
        v-model="checkbox10"
        inline
        ref="checkbox10"
      >
        <jiemicc-checkbox
          :label="1"
          checked
        >多选1 </jiemicc-checkbox>
        <jiemicc-checkbox :label="2">多选2</jiemicc-checkbox>
        <jiemicc-checkbox :label="3">多选3</jiemicc-checkbox>
        <jiemicc-checkbox :label="4">多选4</jiemicc-checkbox>
        <jiemicc-checkbox :label="5">多选5</jiemicc-checkbox>
        <jiemicc-checkbox :label="6">多选6</jiemicc-checkbox>
      </jiemicc-checkbox-group>
      <jiemicc-button
        @click="$refs.checkbox10.chooseToggle(true)"
        class="m-20"
      >全选</jiemicc-button>
      <jiemicc-button
        @click="$refs.checkbox10.chooseToggle()"
        type="primary"
      >反选</jiemicc-button>

    </demo-wrapper>
    <demo-wrapper title="单配单元格组件使用">
      <jiemicc-checkbox-group
        v-model="checkbox11"
        ref="checkbox11"
      >
        <jiemicc-cell-group
          clickable

        >
          <jiemicc-cell
             v-for="(value,index) in checkList"
            :key="index"
            :title="'多选框'+value"
            @click="$refs.checkbox11.chooseItem(index)"
          >
            <jiemicc-checkbox :label="value"> {{''}} </jiemicc-checkbox>
          </jiemicc-cell>
        </jiemicc-cell-group>
      </jiemicc-checkbox-group>
    </demo-wrapper>

  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccCheckbox from '@/components/lib/checkbox/JiemiccCheckbox.vue';
import JiemiccCheckboxGroup from '@/components/lib/checkbox/JiemiccCheckboxGroup.vue';
import JiemiccCell from '@/components/lib/cell/JiemiccCell.vue';
import JiemiccCellGroup from '@/components/lib/cell/JiemiccCellGroup.vue';
import JiemiccButton from '@/components/lib/button/JiemiccButton.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccCheckbox,
    JiemiccCheckboxGroup,
    JiemiccCell,
    JiemiccCellGroup,
    JiemiccButton,
  },
  props: {},
  data() {
    return {
      checkbox0: true,
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: [],
      checkbox8: [],
      checkbox9: [],
      checkbox10: [],
      checkbox11: [],
      checkList: ['1', '2', '3', '4'],
      checkedUrl:
        'https://img.zcool.cn/community/01051955434ac00000019ae9a9a369.jpg@2o.jpg',
      unCheckedUrl:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578969385&di=638b138fa31511b8ee2850bd15cd5cce&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F90%2F47%2F9256efcbf458c23.jpg',
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);
  /deep/ .jiemicc-demo-wrapper:not(:last-child) {
    .jiemcc-demo-wrapper__content {
      margin: 0 16px;
    }
  }
   /deep/ .jiemicc-cell-main{
     align-items: center;
  }

}
</style>
