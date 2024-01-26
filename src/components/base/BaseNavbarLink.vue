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
    mode: {
      type: String,
      default: '',
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.to;
    },
    classes() {
      return {
        [this.mode]: this.mode,
        active: this.isActive,
      };
    },
  },
}
</script>
<style scoped>
div a {
  color: white;
  text-decoration: none;
}

div a.active {
  color: #ccc;
}

.nav-link {
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
}
</style>