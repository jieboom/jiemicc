// 禁止触摸滑动导致的页面滚动的默认行为,使用translate变换代替
// 1. 确定默认情况下 ,容器中间位置对应的columns的index, 然后根据需求调整active的index
// 2. 点击选项,切换活跃index
// 3. 当translate变化时,确定其处于什么状态,如果是moving,则不添加动画,如果不是,则使用动画过渡
// 4. 滑动结束时,根据最近的距离调整index

// move长度和时间决定 translate只是简单跟随变换,还是需要惯性变换
// 简单变换需要计算,将最近的选项调整为选中状态, 惯性变换自动选择需要选择的选项
// 可以选择禁选和默认选项,以及支持多列联动

<script >
import touchMixin from '@/components/utils/mixins/touch';
import createNamespace from '@/components/utils/create';
import { preventDefault, stopPropagation } from '@/components/utils/dom/event';
import { range } from '@/components/utils/format/number';

const [bem] = createNamespace('picker');
// 惯性滑动 用户快速下滑时,并满足 滑动结束时与上次一滑动相比,时间少于 MONMENTUM_LIMIT_TIME ,活动距离大于 MONMENTUM_LIMIT_DISTANCE,
// 为滑动添加惯性延伸
const MONMENTUM_LIMIT_TIME = 200;
const MONMENTUM_LIMIT_DISTANCE = 15;
export default {
  name: 'JiemiccPickerColums',
  mixins: [touchMixin],
  props: {
    columns: Array,
    itemHeight: {
      type: Number,
      default: 40,
    },
    visibleItemCount: {
      type: Number,
      default: 5,
    },
    defaultIndex: Number,
  },
  data() {
    return {
      translateY: 0,
      cuurentIndex: 0,
      moving: false,
    };
  },
  computed: {
    translateRange() {
      const l1 = this.visibleItemCount;
      const l2 = this.columns.length;
      return {
        min: -(l2 - (l1 - 0.5) / 2) * this.itemHeight,
        max: ((l1 + 1) / 2) * this.itemHeight,
      };
    },
    wrapperMiddleIndex() {
      return (this.visibleItemCount + 1) / 2;
    },
  },
  created() {
    const { defaultIndex, columns } = this;
    const len = columns.length;
    const currentIndex = defaultIndex || (len % 2 === 1 ? (len + 1) / 2 : len / 2);
    this.setIndex(currentIndex);
  },
  mounted() {
    this.onTouchEvent(this.$el);
  },
  methods: {
    setIndex(index) {
      const translateY = (this.wrapperMiddleIndex - index) * this.itemHeight;
      this.translateY = translateY;
      this.currentIndex = index;
    },
    monmentum(distance, duration) {
      const speed = distance / duration;
      console.log(distance, duration, speed);

      return this.translateY + speed / 0.002;
    },
    onTouchStart(event) {
      console.log(event);
      this.touchStart(event);
      this.moving = true;
    },
    onTouchMove(event) {
      this.touchMove(event);
      preventDefault(event);
      let { translateY } = this;
      translateY += this.moveY;
      if (
        translateY >= this.translateRange.min
        && translateY <= this.translateRange.max
      ) {
        this.translateY = translateY;
      }
    },
    onTouchEnd(event) {
      this.touchEnd(event);
      this.moving = false;

      const {
        itemHeight,
        wrapperMiddleIndex,
        moveDuration,
        moveY,
      } = this;
      let { translateY } = this;
      if (
        moveDuration < MONMENTUM_LIMIT_TIME
        && Math.abs(moveY) > MONMENTUM_LIMIT_DISTANCE
      ) {
        translateY = this.monmentum(moveY, moveDuration);
      }
      const index = wrapperMiddleIndex - Math.round(translateY / itemHeight);
      const correctIndex = range(1, this.columns.length, index);
      this.setIndex(correctIndex);
    },
  },
  render() {
    return (
      <div class={[bem('columns'), 'pt-cover']}>
        <ul
          style={{
            transform: `translate3d(0, ${this.translateY}px, 0)`,
            'line-height': `${this.itemHeight}px`,
          }}
          class={[
            bem('columns-wrapper'),
            { [bem('columns-wrapper', ['stop'])]: !this.moving },
          ]}
        >
          {this.columns.map((el, index) => (
            <li
              style={{ height: this.itemHeight }}
              key={index}
              onClick={() => this.setIndex(index + 1)}
            >
              {el.text}
            </li>
          ))}
        </ul>
      </div>
    );
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-picker__columns {
  z-index: 0;
}
.jiemicc-picker__columns-wrapper {
  text-align: center;
  color: $jiemicc-picker-columns-wrapper-color;
  &--stop {
    transition: transform 0.2s ease-in-out;
  }
}
</style>
