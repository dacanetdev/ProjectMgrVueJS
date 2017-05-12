<template>
  <div class="home">
    <app-header :project-name="'Vue.js Rever Test Project'"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../layout/Header'

export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'app-header': Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
