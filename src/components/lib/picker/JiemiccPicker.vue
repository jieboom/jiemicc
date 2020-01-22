
<script >
import JiemiccPickerColums from '@/components/lib/picker/JiemiccPickerColums.vue';
import createNamespace from '@/components/utils/create';

const [bem] = createNamespace('picker');
export default {
  name: 'JiemiccPicker',
  components: {
    JiemiccPickerColums,
  },
  props: {
    itemHeight: {
      type: Number,
      default: 40,
    },
    visibleItemCount: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    bgLinerHeight() {
      return (this.visibleItemCount - 1) / 2 * this.itemHeight;
    },
  },
  data() {
    return {};
  },
  methods: {},
  render() {
    const pickerProp = {
      class: [[bem()]],
    };
    const pickerColumnsProp = {
      props: {
        columns: [
          {
            text: '测试一',
          },
          {
            text: '测试二',
          },
          {
            text: '测试三',
          },
          {
            text: '测试四',
          },
          {
            text: '测试五',
          }, {
            text: '测试六',
          },


        ],
        itemHeight: this.itemHeight,
        visibleItemCount: this.visibleItemCount,
        defaultIndex: this.$attrs.defaultIndex,

      },
    };
    const pickerMask = <div class={[bem('mask')]} style={{ 'background-size': `100% ${this.bgLinerHeight}px` }}> </div>;
    return (
      <div {...pickerProp} class={bem()} style={{ height: `${this.itemHeight * this.visibleItemCount}px` }}>
        <JiemiccPickerColums ref="colums" {...pickerColumnsProp}></JiemiccPickerColums>
        {pickerMask}
      </div>
    );
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-picker{
  position: relative;
  background: $jiemicc-picker-bgcolor;
  overflow: hidden;
}
.jiemicc-picker__mask{
   position: absolute;
   left: 0;
   right: 0;
   top:0;
   bottom: 0;
   pointer-events: none;
   background: $jiemicc-picker-bg;
   background-position: top,bottom;
   background-repeat: no-repeat;
}
</style>
