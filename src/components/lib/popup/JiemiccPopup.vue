<template>

  <div
    class="jiemicc-popup--container"
    ref="container"
    style="--duration:30s;--round: 3px;"
  >

    <transition name="jiemicc-popup-overlay">
      <overlay
        v-if="show"
        @click.native="$emit('maskClick',false);$emit('overlay-click')"
        :overlayClass="$attrs.overlayClass"
        :overlayStyle="$attrs.overlayStyle"
        :overlayOpacity="$attrs.overlayOpacity"
        :overlayBackgroundColor="$attrs.overlayBackgroundColor"
      ></overlay>
    </transition>
    <transition
      :name="`jiemicc-popup-fade-${popupPosition}`"
      @enter="$emit('open')"
      @after-enter="$emit('opened')"
      @leave="$emit('close')"
      @after-leave="$emit('closed')"
    >
      <jiemicc-popup-content
        v-if="show"
        :position="popupPosition"
        :closeable="$attrs.closeable"
        :closePosition="$attrs['close-position']"
        :closeIcon="$attrs['close-icon']"
        :style="[roundStyle,contentStyle]"
        @close="$emit('maskClick',false)"
        @close.native.stop="$emit('click')"
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
        return (
          typeof value === 'string'
          || (typeof value === 'object' && value instanceof HTMLElement)
        );
      },
    },
    contentStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    roundStyle() {
      return this.popupPosition === 'bottom' && this.round
        ? {
          'border-top-right-radius': 'var(--round)',
          'border-top-left-radius': 'var(--round)',
        }
        : {};
    },
  },
  mounted() {
    // 动画执行时间
    if (Number.isInteger(this.duration) && this.duration > 0) {
      this.$refs.container.style.setProperty(
        '--duration',
        `${this.duration / 1000}s`,
      );
    }
    console.log(this.container);

    // 指定挂载元素
    const isHtmlElemntOrTag = val => typeof val === 'string'
      || (typeof val === 'object' && val instanceof HTMLElement);
    if (isHtmlElemntOrTag(this.container)) {
      try {
        const containerNode = typeof this.container === 'string'
          ? document.querySelector(this.container)
          : this.container;
          // eslint-disable-next-line no-unused-expressions
        containerNode && containerNode.appendChild(this.$el);
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {

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
  transition: opacity ease-out, transform ease-out;
  transition-duration: var(--duration);
}

.jiemicc-popup-overlay-enter,
.jiemicc-popup-overlay-leave-to {
  opacity: 0 !important;
}
</style>
