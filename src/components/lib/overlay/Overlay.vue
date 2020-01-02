<template>
  <div
    class="jiemicc-ovelay"
    :class="overlayClass"
    :style="overStyle"

  >
  </div>
</template>

<script >
export default {
  name: 'Overlay',
  props: {
    overlayClass: String,
    overlayStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    overlayOpacity: {
      type: Number,
      default: 0.5,
    },
    overlayBackgroundColor: {
      type: String,
      default: '#000',
    },

  },
  data() {
    return {
      // eslint-disable-next-line no-plusplus
      overStyle: Object.assign(this.overlayStyle, { zIndex: window.overIndex++, opacity: this.overlayOpacity, backgroundColor: this.overlayBackgroundColor }),
    };
  },
  created() {
    document.body.classList.add('over-hidden');
  },
  destroyed() {
    document.body.classList.remove('over-hidden');
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-ovelay {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: #000;
}
</style>
