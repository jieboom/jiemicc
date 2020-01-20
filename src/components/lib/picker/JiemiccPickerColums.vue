// 禁止触摸滑动导致的页面滚动的默认行为,使用translate变换代替
// move长度和时间决定 translate只是简单跟随变换,还是需要惯性变换
// 简单变换需要计算,将最近的选项调整为选中状态, 惯性变换自动选择需要选择的选项
// 可以选择禁选和默认选项,以及支持多列联动

<script >
import touchMixin from '@/components/utils/mixins/touch';
import createNamespace from '@/components/utils/create';

const [bem] = createNamespace('picker');
export default {
  name: 'JiemiccPickerColums',
  mixins: [touchMixin],
  props: {
    columns: Array,
    height: {
      type: String,
      default: '40',
    },
  },
  data() {
    return {
      translateY: 0,
    };
  },
  created() {
  },
  methods: {},
  render() {
    return (
      <ul
        style={{
          transform: `translate3d(0, ${this.translateY}px, 0)`,
          'line-height': `${this.height}px`,
        }}
        class={[bem('columns-wrapper')]}
      >
        {this.columns.map(el => (
          <li style={{ height: this.height }}>{el.text}</li>
        ))}
      </ul>
    );
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-picker__columns-wrapper{
  text-align: center;
  color: $jiemicc-picker-columns-wrapper-color;
}
</style>
