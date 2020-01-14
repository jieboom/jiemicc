<script >
export default {
  name: 'JiemiccNumberkey',
  props: {
    show: {
      type: Boolean,
      default: false,
      theme: {
        type: String,
        validator(theme) {
          return ['default', 'custom'].includes(theme);
        },
        default: 'default',
      },
    },
    title: String,

  },
  data() {
    return {
      selfModel: '',
    };
  },
  methods: {
    genkeyboardTitle() {
      if (this.title) {
        return <div class="jiemicc-number-keyboard__title">
              {this.$slots.title}
              <span class="jiemicc-number">{this.title}</span>
           </div>;
      }
    },
  },
};
</script>
<style lang='scss' scoped>

</style>
