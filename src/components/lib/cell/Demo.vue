<template>
  <div class="jiemicc-demo ">
    <demo-wrapper title="基础用法">

      <jiemicc-cell-group>
        <jiemicc-cell
          title="单元格"
          value="内容"
        ></jiemicc-cell>
        <jiemicc-cell
          title="单元格"
          value="内容"
          desc="描述信息"
        ></jiemicc-cell>

      </jiemicc-cell-group>
    </demo-wrapper>
    <demo-wrapper title="单元格大小">

      <jiemicc-cell-group>
        <jiemicc-cell
          title="普通单元格"
          value="内容"
        ></jiemicc-cell>
        <jiemicc-cell
          title="大号单元格"
          value="内容"
          size="large"
          desc="描述信息"
        ></jiemicc-cell>

      </jiemicc-cell-group>
    </demo-wrapper>
    <demo-wrapper title="标题图标">

      <jiemicc-cell
        title="普通单元格"
        value="内容"
        icon="buganxingqu"
      ></jiemicc-cell>
      <jiemicc-cell
        title="普通单元格"
        value="内容"
        icon="buganxingqu"
        size="large"
      ></jiemicc-cell>

    </demo-wrapper>
     <demo-wrapper title="展示箭头">

      <jiemicc-cell
        title="单元格"
        is-link
      ></jiemicc-cell>
        <jiemicc-cell
        title="单元格"
        is-link
        value="内容"
      ></jiemicc-cell>

  <jiemicc-cell
        title="单元格"
        is-link
        arrow-direction="down"
        value="内容"
      ></jiemicc-cell>

    </demo-wrapper>

  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccCell from '@/components/lib/cell/JiemiccCell.vue';
import JiemiccCellGroup from '@/components/lib/cell/JiemiccCellGroup.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccCell,
    JiemiccCellGroup,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>
