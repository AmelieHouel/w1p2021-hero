<template>
  <div class="big-header">
    <div>
      <p>{{ message1 }}</p>
      <p>{{ message2 }}</p>
      <p>{{ message3 }}</p>
      <p>{{ message4 }}</p>

    </div>
    <div class ="buttons">
    <router-link class="button" :to="action1">{{ BTN1 }}</router-link>
    <router-link class="button" :to="action2">{{ BTN2 }}</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "Game";

</style>

<script>
import countService from '../../services/countService';
import json from '../../services/data.js';

export default {
  computed: {
    id(){
      return this.$route.params.id;
    },
    action1(){
      return json[this.id].to1;
    },
    action2(){
      return json[this.id].to2;
    },
    BTN1(){
      return json[this.id].BTN1;
    },
    BTN2(){
      return json[this.id].BTN2;
    },

    message1(){
      const id = this.$route.params.id;
      const step = json[id];
      if (!step)
        return '';
      
      return step.message1;
    },
    message2(){
      const id = this.$route.params.id;
      const step = json[id];
      if (!step)
        return '';
      
      return step.message2;
    },
    message3(){
      const id = this.$route.params.id;
      const step = json[id];
      if (!step)
        return '';
      
      return step.message3;
    },
     message4(){
      const id = this.$route.params.id;
      const step = json[id];
      if (!step)
        return '';
      
      return step.message4;
    },

  background(){
    const id = this.$route.params.id;
    const step = json[id];
    return step.background;
  }


  }
}
</script>
