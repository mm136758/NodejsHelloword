<template>
  <div class="container">
    <!-- 公式撰寫在taplate -->
    <h2>華氏：{{ fahrenheit }} °F</h2>
    <div class="celsius">
      攝氏：<input type='number' v-model="celsius" /> °C
    </div>
    <img src="static/image/5DUIcox.jpg" alt="manga" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        celsius: 0

      }
    }, 
    computed: {
      // ES6:
      fahrenheit() {
        // computed 計算後才會顯示到 template 上面。
        return this.celsius * 9 / 5 + 32;
      }
    // ES5:
    // fahrenheit: function () {
    //   return this.celsius * 9/5 + 32;
    // }
    }
  }
</script>
<style>
  .celsius {
    font-size: 1.5em;
  }
</style>
