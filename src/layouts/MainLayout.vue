<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white">
      <q-toolbar  class="bg-white constrain">
        <q-toolbar-title class="text-orange text-bold text-grand-hotel">
         <div class="row q-mt-xs">
           <div class="col">
              Quick Search
           </div>
           <l-tabs class="large-screen-only" :options="options"/>
         </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer class="small-screen-only">
       <q-tabs
           indicator-color="transparent"
           active-color="primary"
            no-caps
            class="bg-grey-2 text-grey-8"
          >
            <q-route-tab
              v-for="(option, index) in options"
              :key="index"
              class="q-mx-md"
              :to="option.to"
              :icon="option.icon"
            />
          </q-tabs>
    </q-footer>
    <q-page-container>
     <q-list bordered>
        <router-view></router-view>
     </q-list>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
    'l-tabs': require('components/LocalTabs').default
  },
  data () {
    return {
      leftDrawerOpen: false,
      options: [
        {
          title: 'Menu',
          name: 'menu',
          icon: 'restaurant_menu',
          label: 'Menu',
          to: '/'
        },
        {
          title: 'Restaurantes por categorias',
          name: 'local',
          icon: 'storefront',
          label: 'Categorias',
          to: '/category'
        },
        {
          title: 'Restaurantes por zonas',
          name: 'location',
          icon: 'location_on',
          label: 'Zonas',
          to: '/location'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .q-toolbar__title {
    @media (max-width: $breakpoint-sm-max) {
      text-align: center;
    }
    font-size: 25px;
  }
  .q-footer .q-tab__icon{
    font-size: 22px;
  }
</style>>
