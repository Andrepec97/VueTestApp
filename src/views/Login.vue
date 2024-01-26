<template>
  <main>
    <div class="left-side">
    </div>
    <div class="right-side">
    </div>
  </main>
</template>
<script>
export default {
  name: 'login-view'
}
</script>
<style scoped>
main {
  height: 49rem;
  background-color: #ebebeb;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  display: flex;
}
main .left-side {
  width: 20vw;
  margin: auto;
  background-color: white;
  border-radius: 4px;
  display: flex;
  box-shadow: 0 0 10px rgba(0,0,0,0.2)
}
main .right-side {
  width: 20vw;
  margin: auto;
  background-color: white;
  border-radius: 4px;
  display: flex;
  box-shadow: 0 0 10px rgba(0,0,0,0.2)
}
</style>