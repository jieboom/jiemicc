
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
      type: String,
      default: '40',
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
            text: '测试三',
          },
          {
            text: '测试四',
          },
        ],
      },
    };
    const pickerMask = <div class={[bem('mask')]} style={{ 'background-size': `100% ${this.itemHeight * 2}px` }}> </div>;
    return (
      <div {...pickerProp} class={bem()}>
        <JiemiccPickerColums {...pickerColumnsProp}></JiemiccPickerColums>
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
}
</style>
