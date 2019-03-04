<script>
export default {
  data(){
    return {
      message: 'Helo, .vue file',
    }
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
  display: inline-block;
  color: blue;
  border: 2px solid black;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
}
</style>