<template>
  <div>
    <nav>
      <div class="right-side">
        <BaseNavbarLink to="/" label="Home"/>
        <BaseNavbarLink to="/about" label="About"/>
      </div>
      <div class="left-side">
        <base-button type="button" mode="outline-light">Login</base-button>
      </div>
    </nav>
  </div>
</template>
<script>
import BaseNavbarLink from "@/components/base/BaseNavbarLink.vue";

export default {
  name: 'TheNavbar',
  components: {
    BaseNavbarLink,
  },
}
</script>
<style scoped>
nav {
  display: flex;
  padding: 1rem;
  background-color: #0d6efd;
  color: white;
}
nav .right-side {
  flex: 1;
  display: flex;
}
nav .left-side {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
</style>