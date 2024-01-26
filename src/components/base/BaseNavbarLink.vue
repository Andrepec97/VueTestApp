<template>
  <div>
    <router-link :class="classes" :to="to">{{ label }}</router-link>
  </div>
</template>
<script>
export default {
  name: 'BaseNavbarLink',
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.to;
    },
    classes() {
      return {
        active: this.isActive,
      };
    },
  },
}
</script>
<style scoped>
div {
  padding: 0 .5rem;
}

div a {
  color: white;
  text-decoration: none;
}

div a.active {
  color: #ccc;
}
</style>