<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/Home"> Rejouer</router-link>
  </div>
</template>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'You Win'
    };
  },

  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>