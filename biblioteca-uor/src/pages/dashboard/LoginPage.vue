<template>
  <q-page class="q-pa-md">
    <login-form class="small-screen-only q-mt-lg"></login-form>
    <div class="absolute-center">
       <q-list class="large-screen-only q-pa-md" bordered style="min-height: 100px; min-width: 350px">
        <div class="text-h1 text-primary text-center text-grand-hotel q-mb-lg" style="font-size:30px">
            Menu Digital
        </div>
        <login-form></login-form>
    </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  components: {
    'login-form': require('components/LoginForm').default
  }
}
</script>

<style lang="scss">
  .center-page {
    width: 420px;
    margin: 0 auto;
  }
</style>
