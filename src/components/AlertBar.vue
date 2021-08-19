<template>
  <div class="alert-bar" v-if="alertIsVisible">
    <div class="message"><p>{{message}}</p></div>
    <button class="closeBtn" v-on:click="removeAlert"><img src="../assets/close.svg" alt="close alert"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertIsVisible: true,
    }
  },
  props: {
    message: {
      type: String,
      required: false,
    }
  },
  methods: {
    removeAlert() {
      this.alertIsVisible = false;
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
// @import "~@lkmx/flare/src/flare";

.alert-bar {
  height: auto;
  display: grid;
  background: rgb(54, 11, 155);
  grid-template-columns: 1fr 24px;
  padding: var(--f-gutter);
  align-items: center;
  * {
    margin: 0;
  }
  .message {
    p {
      line-height: 1.4;
      color: white;
    }
  }
  .closeBtn {
    padding: 0;
    background: transparent;
    img {
      filter: invert(1);
    }
  }
}
</style>