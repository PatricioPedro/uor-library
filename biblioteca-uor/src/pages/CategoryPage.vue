<template>
  <q-page class="q-pa-md">
     <q-list bordered class="constrain-1 q-pa-sm">
       <div class="row justify-around">
          <q-select style="max-width: 450px;" outlined square v-model="model" dense class="col col-sm-6 col-md-6 col-xs-12 full-width" label="Categorias" :options="options" />
        <q-item-label class="col q-my-md col-sm-6 col-md-6 col-xs-12" caption lines="6">
           Restaurantes com essa categoria sao especialista em
           grelhados
        </q-item-label>
       </div>
     </q-list>
    <div class="constrain-1">
        <q-scroll-area
        class="bg-grey-1 rounded-borders size q-pa-sm"
        >
          <div class="row">
            <div class="col col-sm-4 col-md-4 col-xs-12" v-for="i in 10" :key="i">
               <q-card class="card-post q-my-md justify-center" horizontal flat bordered>
                <q-img class="boxfit-cover" :src="require('assets/FB_IMG_16180506231003844.jpg')"/>
                <q-card-section class="text-center">
                   KFC
                </q-card-section>
                 <q-card-actions>
                    <q-btn @click="dialog=true" class="full-width" icon="info" color="primary" push label="Ver info"/>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      options: [
        'Fastfood',
        'Choperia',
        'Grills',
        'Chines'
      ],
      model: ''
    }
  }
}
</script>

<style>

</style>
