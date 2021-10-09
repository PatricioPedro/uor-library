<template>
  <div>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-white">
        <q-bar class="bg-primary">
          <q-btn dense flat icon="arrow_back" v-close-popup label="Voltar">
          </q-btn>
           <q-space />
        </q-bar>

        <q-card-section>
          <header-pg :info="info" class="full-width"/>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="menu" label="Menu" />
            <q-tab name="rota" label="Rota" />
          </q-tabs>
           <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="rota">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="menu">
        <q-scroll-area
          :horizontal="horizontal"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          class="bg-grey-1 rounded-borders size q-pa-sm"
        >
            <div class="row">
              <div class="col-4 col-sm-4 col-md-4 col-xs-12" v-for="(dish, i) in dishes" :key="i">
               <q-card class="card-post q-my-md justify-center" horizontal flat bordered>
                <q-img class="boxfit-cover" :src="require('assets/hamburger-1238246_1920.jpg')"/>
                <q-item class="text-grey-8">
                  <q-item-section>
                    {{ dish.dish }}
                  </q-item-section>
                  <q-item-section side caption>
                    {{ dish.preco }}
                  </q-item-section>
                </q-item>
              </q-card>
             </div>
            </div>
        </q-scroll-area>
          </q-tab-panel>
        </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-item-label class="text-grey-7 q-my-md" caption>
        Sugestoes para voce
        </q-item-label>
        <q-scroll-area
        :horizontal="horizontal"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        class="bg-grey-1 rounded-borders size q-pa-sm"
        >
            <div v-for="(dish, i) in dishes" :key="i">
               <q-card class="my-card q-my-md justify-center" horizontal flat bordered>
                <q-item>
                  <q-item-section avatar>
                    <q-avatar size="45px">
                      <q-img class="boxfit-cover" :src="require('assets/FB_IMG_16180506231003844.jpg')"/>
                    </q-avatar>
                  </q-item-section>

                  <q-item-section class="text-grey-8">
                    <q-item-label caption lines="3">{{ dish.restaurant.name }}</q-item-label>
                    <q-item-label caption> <q-icon name="location_on" size="xs"/>{{ dish.restaurant.location }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-img class="boxfit-cover" :src="require('assets/hamburger-1238246_1920.jpg')"/>
                <q-item>
                  <q-item-section>
                    {{ dish.dish }}
                  </q-item-section>
                  <q-item-section side caption>
                    {{ dish.preco }}
                  </q-item-section>
                </q-item>
                 <q-card-actions>
                    <q-btn @click="dialog=true" class="full-width" icon="info" color="primary" push label="Ver info"/>
                </q-card-actions>
              </q-card>
        </div>
        </q-scroll-area>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean
    },
    height: {
      type: Number
    }
  },
  components: {
    'header-pg': require('components/headerRestaurant').default
  },
  methods: {
    getImage: function (imageData) {
      return `statics/faces/${imageData.id}.jpg`
    }
  },
  data () {
    return {
      tab: 'menu',
      info: {
        restaurant: 'KFC',
        email: 'kfc@gmail.com',
        telefone1: '+244 924 245 000',
        telefone2: '+244 994 245 000',
        address: 'Avenida 21 de Janeira, rua 3 Cassenda'
      },
      source: '',
      dialog: false,
      maximizedToggle: true,
      dishes: [
        {
          restaurant: {
            name: 'Restaurante finhos',
            location: 'Luanda, Maianga'
          },
          dish: 'Calulu',
          preco: '1000kz'
        },
        {
          restaurant: {
            name: 'KFC',
            location: 'Luanda, Avenida 21 de Janeiro'
          },
          dish: 'Hamburguer',
          preco: '1000kz'
        },
        {
          restaurant: {
            name: 'Quintas do leitao',
            location: 'Luanda, Lar do Patriota'
          },
          dish: 'Pizza',
          preco: '1000kz'
        },
        {
          restaurant: {
            name: 'Quintas do leitao',
            location: 'Luanda, Lar do Patriota'
          },
          dish: 'Sandes',
          preco: '1000kz'
        },
        {
          restaurant: {
            name: 'Quintas do leitao',
            location: 'Luanda, Lar do Patriota'
          },
          dish: 'Bitoque',
          preco: '1000kz'
        }
      ],
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: 'orange',
        width: '2px',
        opacity: 0.75
      },
      categorias_restaurantes: [
        {
          descricao: 'Choperia',
          img: 'barbecue-1239434_1920.jpg'
        },
        {
          descricao: 'Típicos',
          img: 'food-3060473_1920.jpg'
        },
        {
          descricao: 'CHURRASCARIA',
          img: 'food-3270461_1920.jpg'
        },
        {
          descricao: 'Fast-food',
          img: 'hamburger-494706_1920.jpg'
        },
        {
          descricao: 'Bares',
          img: 'hamburger-494706_1920.jpg'
        }
      ],
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'orange',
        width: '2px',
        opacity: 0.2
      }
    }
  }
}
</script>

<style lang="scss">
  .my-card {
    width: 100%;
    max-width: 450px;
  }
  .card-post {
    width: 100%;
    max-width: 250px;
  }
  .size {
    @media (min-width: $breakpoint-sm-min) {
       height: 570px;
       width: 100%;
    }
    @media (max-width: $breakpoint-xs-max) {
        height: 500px;
        width: 100%;
    }
    .boxfit-cover  {
      width: 100%;
      height: 100%;
    }
    .margens {
      margin-left: 1px;
      margin-right: 1px;
    }
  }
</style>
