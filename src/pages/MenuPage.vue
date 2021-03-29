<template>
  <q-page class="constrain q-pa-lg">
   <div class="container">
       <div class="row q-mt-md q-gutter-sm">
          <div class="col col-xs-12 col-sm-7">
            <q-input
              class="full-width"
              placeholder="Procurar por"
              dense
              outlined
              clearable
              clear-icon="close"
              square
            >
              <template v-slot:prepend>
                <q-icon name="search"/>
              </template>
              <template v-slot:append>
                <q-btn v-if="!text" icon="keyboard_arrow_down" round flat>
                      <q-menu
                          transition-show="scale"
                          transition-hide="scale"
                          persistent auto-close
                        >
                    <q-list style="min-width: 100px">
                      <q-item-label caption class="q-pa-sm">
                        Filtrar por
                      </q-item-label>
                      <q-item
                        v-for="(filter, index) in filters"
                        :key="index"
                        clickable
                        @click="typeFilter=filter"
                      >
                        <q-item-section>{{ filter.description }}</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </template>
            </q-input>
          </div>
         <div class="col col-xs-12 col-sm-4">
             <q-list bordered dense>
                <q-tooltip>
                  Filtrar por intervalo de preços
                </q-tooltip>
                 <q-item v-if="typeFilter['type'] === 'intervalo'">
                 <div class="row">
                   <div class="col col-xs-12">
                      <q-item-section class="q-mr-sm">
                        <q-input min="0" suffix="kzs"  placeholder="min." type="number" dense></q-input>
                      </q-item-section>
                   </div>
                   <div class="col col-xs-12">
                    <q-item-section>
                        <q-input min="0" suffix="kzs"  placeholder="max." type="number" dense></q-input>
                    </q-item-section>
                   </div>
                 </div>
                </q-item>
                <q-item v-if="typeFilter['type'] === 'promo'">
                  <q-radio :label="typeFilter['description']"/>
                </q-item>
                 <q-item v-if="typeFilter['type'] === 'tipos'">
                  <q-select class="full-width" dense label="Tipos de pratos" :options="filters[2]['items']"/>
                </q-item>
              </q-list>
         </div>
      </div>
   </div>
   <div class="absolute-center">
      Encontre os melhores pratos ao seu redor
   </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      text: null,
      typeFilter: { type: 'intervalo' },
      stars: 4,
      filters: [
        {
          description: 'Intervalo de preços',
          type: 'intervalo'
        },
        {
          description: 'Promocionais',
          type: 'promo'
        },
        {
          description: 'Tipos de menu',
          type: 'tipos',
          items: ['Saladas', 'Mariscos']
        }
      ],
      categorias_restaurantes: [
        {
          descricao: 'Grills',
          img: 'https://cdn.quasar.dev/img/chicken-salad.jpg'
        },
        {
          descricao: 'Choperia',
          img: 'morning-dessert-1263376_1920.jpg'
        },
        {
          descricao: 'Fusion-food',
          img: 'logo_quick.png'
        },
        {
          descricao: 'Típicos',
          img: 'food-3270461_1920.jpg'
        },
        {
          descricao: 'CHURRASCARIA',
          img: 'meat-123668_1920.jpg'
        },
        {
          descricao: 'Fast-food',
          img: 'hamburger-494706_1920.jpg'
        },
        {
          descricao: 'Tradicional',
          img: 'https://cdn.quasar.dev/img/chicken-salad.jpg'
        },
        {
          descricao: 'Bares',
          img: 'beer-2166004_1920.jpg'
        }
      ]
    }
  }
}
</script>
