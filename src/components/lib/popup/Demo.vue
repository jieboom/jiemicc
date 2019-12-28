<template>
  <div class="demo">
      <demo-wrapper title="基础用法">
          <jiemicc-cell title="展示弹出层" is-link></jiemicc-cell>
      </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccCell from '@/components/lib/cell/JiemiccCell.vue';
import JiemiccCellGroup from '@/components/lib/cell/JiemiccCellGroup.vue';
import JiemiccIcon from '@/components/lib/icon/JiemiccIcon.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccCell,
    JiemiccCellGroup,
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

</style>
