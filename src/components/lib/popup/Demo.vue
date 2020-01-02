<template>
  <div class="demo">
    <demo-wrapper title="基础用法">
      <jiemicc-cell
        title="展示弹出层"
        is-link
        @click.native="show=true"
      ></jiemicc-cell>
      <jiemicc-popup
        v-model="show"
        :duration="300"
      ></jiemicc-popup>
    </demo-wrapper>
    <demo-wrapper title="弹出位置">
      <jiemicc-cell-group :border="false">
        <jiemicc-cell
          title="顶部弹出"
          is-link
          @click.native="showTop = true"
        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showTop"
          popup-position="top"
        ></jiemicc-popup>
        <jiemicc-cell
          title="底部弹出"
          is-link
          @click.native="showBottom = true"
        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showBottom"
          popup-position="bottom"
        ></jiemicc-popup>
        <jiemicc-cell
          title="左侧弹出"
          is-link
          @click.native="showLeft = true"
        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showLeft"
          popup-position="left"
        ></jiemicc-popup>
        <jiemicc-cell
          title="右侧弹出"
          is-link
          @click.native="showRight = true"
        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showRight"
          popup-position="right"
        ></jiemicc-popup>
      </jiemicc-cell-group>
    </demo-wrapper>
    <demo-wrapper title="关闭图标">
      <jiemicc-cell-group :border="false">
        <jiemicc-cell
          title="关闭图标"
          is-link
          @click.native="showClose = true"

        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showClose"
          closeable
          popup-position="bottom"
        ></jiemicc-popup>
        <jiemicc-cell
          title="自定义图标"
          is-link
          @click.native="showCloseCustom = true"
        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showCloseCustom"
          closeable
          close-icon="dianying"
          popup-position="bottom"
        ></jiemicc-popup>
        <jiemicc-cell
          title="图标位置"
          is-link
          @click.native="showColsePosition = true"
        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showColsePosition"
          closeable
          close-position="top-left"
          popup-position="bottom"
        ></jiemicc-popup>
      </jiemicc-cell-group>
    </demo-wrapper>
    <demo-wrapper title="圆角弹窗">
     <jiemicc-cell
          title="圆角弹窗"
          is-link
          @click.native="showRound = true"

        ></jiemicc-cell>
        <jiemicc-popup
          v-model="showRound"
          closeable
          round
          popup-position="bottom"
        ></jiemicc-popup>
    </demo-wrapper>

  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccCell from '@/components/lib/cell/JiemiccCell.vue';
import JiemiccCellGroup from '@/components/lib/cell/JiemiccCellGroup.vue';
import JiemiccPopup from '@/components/lib/popup/JiemiccPopup.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccCell,
    JiemiccCellGroup,
    JiemiccPopup,
  },
  props: {},
  data() {
    return {
      show: false,
      showBottom: false,
      showTop: false,
      showLeft: false,
      showRight: false,
      showClose: false,
      showCloseCustom: false,
      showColsePosition: false,
      showRound: false,
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>
