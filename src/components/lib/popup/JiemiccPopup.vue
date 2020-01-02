<template>

  <div class="jiemicc-popup--container" ref="container"  style="--duration:30s;--round: 3px;">

    <transition   name="jiemicc-popup-overlay">
      <overlay
        v-if="show"
        @click.native="$emit('maskClick',false)"
        :overlayClass="$attrs.overlayClass"
        :overlayStyle="$attrs.overlayStyle"
        :overlayOpacity="$attrs.overlayOpacity"
        :overlayBackgroundColor="$attrs.overlayBackgroundColor"
      ></overlay>
    </transition>
    <transition :name="`jiemicc-popup-fade-${popupPosition}`">
      <jiemicc-popup-content
        :position="popupPosition"
        v-if="show"
        :closeable="$attrs.closeable"
        :closePosition="$attrs['close-position']"
        :closeIcon="$attrs['close-icon']"
        :style="[roundStyle]"
         @close="$emit('maskClick',false)"
      >
        <slot></slot>
      </jiemicc-popup-content>
    </transition>
  </div>

</template>

<script >
import Overlay from '@/components/lib/overlay/Overlay.vue';
import JiemiccPopupContent from '@/components/lib/popup/JiemiccPopupContent.vue';

export default {
  inheritAttrs: false,
  name: 'JiemiccPopup',
  components: {
    Overlay,
    JiemiccPopupContent,
  },
  model: {
    prop: 'show',
    event: 'maskClick',
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    popupPosition: {
      type: String,
      default: 'center',
    },
    duration: {
      type: Number,
      default: 300,
    },
    round: {
      type: Boolean,
      default: false,
    },
    container: {
      validator(value) {
        return typeof value === 'string' || value instanceof Element;
      },
    },
  },
  computed: {
    roundStyle() {
      return this.popupPosition === 'bottom' && this.round ? { 'border-top-right-radius': 'var(--round)', 'border-top-left-radius': 'var(--round)' } : {};
    },
  },
  mounted() {
    if (Number.isInteger(this.duration) && this.duration > 0) {
      this.$refs.container.style.setProperty('--duration', `${this.duration / 1000}s`);
    }
    document.body.appendChild(this.$el);
  },


};
</script>
<style lang='scss' scoped>
.jiemicc-popup-fade-center-enter,
.jiemicc-popup-fade-center-leave-to {
  opacity: 0;
}
.jiemicc-popup-fade-top-enter,
.jiemicc-popup-fade-top-leave-to {
  transform: translateY(-100%);
}
.jiemicc-popup-fade-bottom-enter,
.jiemicc-popup-fade-bottom-leave-to {
  transform: translateY(100%);
}

.jiemicc-popup-fade-left-enter,
.jiemicc-popup-fade-left-leave-to {
  transform: translateX(-100%);
}
.jiemicc-popup-fade-right-enter,
.jiemicc-popup-fade-right-leave-to {
  transform: translateX(100%);
}

[class*="enter-active"],
[class*="leave-active"] {
  transition: opacity  ease-out, transform  ease-out;
  transition-duration: var(--duration);
}

.jiemicc-popup-overlay-enter,
.jiemicc-popup-overlay-leave-to {
  opacity: 0  !important;
}

</style>
