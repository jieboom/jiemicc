<template>
  <div>
    <div class="jiemicc-cell-group__title" v-if="title">{{title}}</div>
    <div class="jiemicc-cell-group " :class="['jiemicc-hairline-topbottom',{'jiemicc-cell-clickable':clickable}]" >
        <slot></slot>
    </div>
  </div>

</template>

<script >
export default {
  name: 'JiemiccCellGroup',
  props: {
    title: {
      type: String,
      default: '',
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-cell-group__title{
    padding: 10px 15px;
    font-size: 14px;
    color: rgba(69, 90, 100, 0.6);
}
.jiemicc-cell-group {

  overflow: hidden;

  &.jiemicc-hairline-topbottom {
    &::after {
      border-width: 1px 0;
      border-color: #ebedf0;
      z-index: 1;
    }
  }
    &.jiemicc-cell-clickable {
    &::after {
      border-width: 1px 0;
      border-color: #ebedf0;
      z-index: -1;
    }
  }
  /deep/ .jiemicc-cell:not(:last-child) {
    position: relative;
    &::after {
      position: absolute;
      display: block;
      content: "";
      left: 15px;
      right: 0;
      top: calc(100% - 1px);
      height: 1px;
      background: #ebedf0;
      transform: scaleY(0.5);
    }
  }
}
</style>
