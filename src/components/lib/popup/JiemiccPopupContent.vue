<template>
  <div
    class="jiemicc-popup"
    :class="[contentClass]"
    :style="[overIndex]"
  >
    <jiemicc-icon
      v-if="closeable"
      color="lightgrey"
      :name="closeIcon"
      :style="closeIconPosition"
      size="20"
      class="jiemicc-popup__close"
      @click.native="$emit('close')"
    ></jiemicc-icon>
    <slot></slot>
  </div>
</template>

<script >
import JiemiccIcon from '@/components/lib/icon/JiemiccIcon.vue';

export default {
  name: 'JiemiccPopup',
  props: {
    position: {
      type: String,
      default: 'center',
      validator(val) {
        return ['center', 'top', 'bottom', 'left', 'right'].includes(val);
      },
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    closeIcon: {
      type: String,
      default: 'aixin',
    },
    closePosition: {
      type: String,
      default: 'top-right',
    },
  },
  components: {
    JiemiccIcon,
  },

  data() {
    return {
      // eslint-disable-next-line no-plusplus
      overIndex: { zIndex: window.overIndex++ },
    };
  },
  computed: {
    contentClass() {
      const contentClassMap = {
        center: 'jiemicc-popup__center',
        top: 'jiemicc-popup__top',
        bottom: 'jiemicc-popup__bottom',
        left: 'jiemicc-popup__left',
        right: 'jiemicc-popup__right',
      };
      return contentClassMap[this.position] || '';
    },
    closeIconPosition() {
      if (!/^[^-]+-[^-]+$/.test(this.closePosition)) return '';
      const positionArr = this.closePosition.split('-');
      return {
        [positionArr[0]]: 'var(--poistionDistance)',
        [positionArr[1]]: 'var(--poistionDistance)',
      };
    },

  },
};
</script>
<style lang='scss' scoped>
.jiemicc-popup {
  --poistionDistance: 5px;
  position: relative;
  position: fixed;
  background: #fff;
  .jiemicc-popup__close{
     position: absolute;
  }
  &.jiemicc-popup__center {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding: 30px;
  }
  &.jiemicc-popup__top {
    top: 0;
    left: 0;
    right: 0;
    min-height: 160px;
  }
  &.jiemicc-popup__bottom {
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 160px;
  }
  &.jiemicc-popup__left {
    bottom: 0;
    left: 0;
    top: 0;
    min-width: 100px;
  }
  &.jiemicc-popup__right {
    bottom: 0;
    right: 0;
    top: 0;
    min-width: 100px;
  }
}
</style>
