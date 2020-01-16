<script >
import createNamespace from '@/components/utils/create';

const [bem] = createNamespace('password-input');
export default {
  name: 'JiemiccPasswordInput',
  props: {
    length: {
      type: [String, Number],
      default: 6,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {

    };
  },
  methods: {

  },
  render() {
    const inputBody = <ul>
      {new Array(this.length).map((el, idx) => <li>{this.value.length <= (idx + 1) && this.value}</li>)}
    </ul>;
  },
};
</script>
<style lang='scss' scoped>

</style>
