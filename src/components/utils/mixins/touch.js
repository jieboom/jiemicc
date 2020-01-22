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
      moveDuration: '',
      moveDateStamp: '',
    };
  },
  methods: {
    touchStart(event) {
      this.resetTouchmoveData();

      const { clientX, clientY } = event.touches[0];
      this.startX = clientX;
      this.startY = clientY;
    },
    touchMove(event) {
      const { clientX, clientY } = event.touches[0];
      this.moveX = clientX - this.deltaX - this.startX;
      this.moveY = clientY - this.deltaY - this.startY;

      this.deltaX = clientX - this.startX;
      this.deltaY = clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction ? this.direction : getTouchDirection(this.offsetX, this.offsetY);
      this.moveDateStamp = Date.now();
    },
    touchEnd(event) {
      this.moveDuration = Date.now() - this.moveDateStamp;
    },
    resetTouchmoveData() {
      this.startX = '';
      this.startY = '';
      this.deltaX = '';
      this.deltaY = '';
      this.offsetX = '';
      this.offsetY = '';
      this.moveX = '';
      this.moveY = '';
      this.direction = '';
    },
    onTouchEvent(el) {
      on(el, 'touchstart', this.onTouchStart);
      on(el, 'touchmove', this.onTouchMove);
      if (this.onTouchEnd) {
        on(el, 'touchend', this.onTouchEnd);
      }
    },
  },

};

export default touchMixin;
