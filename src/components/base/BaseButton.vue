<template>
  <div>
    <button :type="type" :class="classes">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    mode:{
      type: String,
      default: 'primary',
    },
  },
  computed: {
    classes() {
      return {
        primary: this.mode === 'primary',
        secondary: this.mode === 'secondary',
        tertiary: this.mode === 'tertiary',
        danger: this.mode === 'danger',
        'outline-primary': this.mode === 'outline-primary',
        'outline-secondary': this.mode === 'outline-secondary',
        'outline-tertiary': this.mode === 'outline-tertiary',
        'outline-danger': this.mode === 'outline-danger',
        'outline-light': this.mode === 'outline-light'
      };
    },
  },
}
</script>
<style scoped>
div {
  padding: 0 .5rem;
}
div button{
  padding: .5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #333;
}

.primary {
  background-color: #0d6efd;
  color: white;
}
.primary:hover {
  background-color: #0b5ed7;
  color: white;
}
.primary:active {
  background-color: #0a58ca;
  color: white;
}
.primary:focus {
  background-color: #0d6efd;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}
.secondary:hover {
  background-color: #5c636a;
  color: white;
}
.secondary:active {
  background-color: #565e64;
  color: white;
}
.secondary:focus {
  background-color: #6c757d;
  color: white;
}

.tertiary {
  background-color: #ffc107;
  color: white;
}
.tertiary:hover {
  background-color: #e0a800;
  color: white;
}
.tertiary:active {
  background-color: #d39e00;
  color: white;
}
.tertiary:focus {
  background-color: #ffc107;
  color: white;
}

.danger {
  background-color: #dc3545;
  color: white;
}
.danger:hover {
  background-color: #c82333;
  color: white;
}
.danger:active {
  background-color: #bd2130;
  color: white;
}
.danger:focus {
  background-color: #dc3545;
  color: white;
}

.outline-primary {
  background-color: white;
  color: #0d6efd;
  border: 1px solid #0d6efd;
}
.outline-primary:hover {
  background-color: #0d6efd;
  color: white;
}
.outline-primary:active {
  background-color: #0b5ed7;
  color: white;
}

.outline-secondary {
  background-color: white;
  color: #6c757d;
  border: 1px solid #6c757d;
}
.outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}
.outline-secondary:active {
  background-color: #5c636a;
  color: white;
}

.outline-tertiary {
  background-color: white;
  color: #ffc107;
  border: 1px solid #ffc107;
}
.outline-tertiary:hover {
  background-color: #ffc107;
  color: white;
}
.outline-tertiary:active {
  background-color: #e0a800;
  color: white;
}

.outline-danger {
  background-color: white;
  color: #dc3545;
  border: 1px solid #dc3545;
}
.outline-danger:hover {
  background-color: #dc3545;
  color: white;
}
.outline-danger:active {
  background-color: #c82333;
  color: white;
}

.outline-light {
  background-color: transparent;
  color: #f8f9fa;
  border: 1px solid #f8f9fa;
}
.outline-light:hover {
  background-color: #f8f9fa;
  color: #212529;
}
.outline-light:active {
  background-color: #e2e6ea;
  color: #212529;
}

</style>