<template>
  <div class="jiemicc-cell-group jiemicc-hairline-topbottom">
     <slot></slot>
  </div>
</template>

<script >
export default {
  name: '',
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
.jiemicc-cell-group{
    background: #fff;
    overflow: hidden;
    &.jiemicc-hairline-topbottom{
        &::after{
            border-width: 1px 0;
            border-color: #ebedf0;
        }
    }
    /deep/ .jiemicc-cell:not(:last-child){
         position: relative;
         &::after{
            position: absolute;
           display: block;
           content: '';
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
