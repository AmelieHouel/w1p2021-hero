<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/Characters"> Let's play</router-link>
  </div>
</template>



<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Welcome to Evil'
    };
  },

//  methods: {
//    handleClick() {
 //     countService.increment();
 //   }
//  }
};
</script>