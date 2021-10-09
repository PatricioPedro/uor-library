<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white small-screen-only">
      <q-toolbar>
        <q-toolbar-title class="text-center text-red text-grand-hotel">
           AngoBuscas
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
     <q-list bordered>
        <router-view></router-view>
     </q-list>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
}
</script>
