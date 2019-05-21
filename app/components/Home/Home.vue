<template>
  <div class="big-header">
    <h1 class="name">{{ message }}</h1>
    <br />
    <router-link class="button" to="/character">Commencer</router-link>
  </div>
</template>


<style lang="scss" scoped>
@import 'home';
</style>

<script>
import countService from '../../services/countService';
import game from '../../services/data.js';

export default {
  data() {
    return {
      message: 'SURVIVOR'
    };
  },

  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
