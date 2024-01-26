<template>
  <div>
    <nav>
      <div class="left-side">
        <BaseNavbarLink mode="nav-link" to="/" label="Home"/>
        <BaseNavbarLink mode="nav-link" to="/about" label="About"/>
        <BaseNavbarLink mode="nav-link" to="/anagrafiche" label="Elenco Anagrafiche"/>
      </div>
      <div class="right-side">
        <base-button type="button" mode="outline-light">Log Out</base-button>
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: .5rem;
  padding-bottom: .5rem;
  background-color: #0d6efd;
}
nav .right-side {
  flex: 1;
  display: flex;
  margin-right: .5rem;
  justify-content: flex-end;
}
nav .left-side {
  flex: 1;
  display: flex;
}
</style>