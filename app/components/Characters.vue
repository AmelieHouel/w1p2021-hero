<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/Game/1">Personnage 1</router-link>
    <router-link class="button" to="/Game/2">Personnage 2</router-link>
  </div>
</template>


<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Choisis ton Hero'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
