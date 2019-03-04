<script>
export default {
  data(){
    return {
      message: 'Helo, .vue file',
    }
  },
  mounted() {
    console.log('MyButton mounted');
  },
};
</script>

<template>
  <div class="my-button">
    {{ message }}
  </div>
</template>


<style scoped>
.my-button {
  color: blue;
}
</style>