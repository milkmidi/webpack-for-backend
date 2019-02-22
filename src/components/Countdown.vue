<script>
const digi = (value/*Number*/) => (value < 10 ? `0${value}` : `${value}`);

export default {
  props: {
    value: Number,
  },
  data: vm => ({
    time: vm.value,
  }),
  watch: {
    value(val/*Number*/) {
      this.time = val;
    },
  },
  computed: {
    displayTime() {
      const min = Math.floor(this.time / 60);
      const sec = this.time % 60;
      return `${digi(min)}:${digi(sec)}`;
    },
  },
  mounted() {
    if (Number.isNaN(this.value)) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.time -= 1;
      if (this.time <= 0) {
        this.stop();
        this.$emit('complete');
      }
    }, 1000);
  },
  methods: {
    stop() {
      clearTimeout(this.intervalId);
      this.intervalId = -1;
    },
  },
  beforeDestroy() {
    this.stop();
  },
};
</script>

<template>
<div class="counterdown">
  <slot></slot>
  <span>{{displayTime}}</span>
</div>
</template>

<style scoped>
.counterdown{
  color: red;
}
</style>