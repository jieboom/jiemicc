import { on } from '@/components/utils/dom/event';

// 组件混入该方法,可以得知 touchmove的方向和距离
const MIN_TOUCH_DISTANCE = 10;
function getTouchDirection(offsetX, offsetY) {
  if (offsetX > offsetY && offsetX > MIN_TOUCH_DISTANCE) {
    return 'horizon';
  }
  if (offsetY > offsetX && offsetY > MIN_TOUCH_DISTANCE) {
    return 'vertical';
  }
  return '';
}

const touchMixin = {
  data() {
    return {
      startX: '',
      startY: '',
      deltaX: '',
      deltaY: '',
      offsetX: '',
      offsetY: '',
      direction: '',
    };
  },
  methods: {
    touchStart(event) {
      const { clientX, clientY } = event.touches[0];
      this.startX = clientX;
      this.clientY = clientY;
    },
    touchMove(event) {
      const { clientX, clientY } = event.touches[0];
      this.deltaX = clientX - this.startX;
      this.deltaY = clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction ? this.direction : getTouchDirection(this.offsetX, this.offsetY);
    },
    resetTouchmoveData() {
      this.startX = '';
      this.startY = '';
      this.deltaX = '';
      this.deltaY = '';
      this.offsetX = '';
      this.offsetY = '';
      this.direction = '';
    },
    onTouchEvent(el) {
      on(el, 'touchstart', this.touchStart);
      on(el, 'touchmove', this.touchMove);
      if (this.touchEnd) {
        on(el, 'touchend', this.touchEnd);
      }
    },
  },

};

export default touchMixin;
