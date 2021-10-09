<template>
  <q-page class="bg-grey-2 constrain">
     <q-dialog v-model="detail" persistent>
      <q-card style="min-width: 40vw">
        <q-card-section>
          <div class="text-h6">Detalhes do livro</div>
        </q-card-section>

          <q-card-section v-if="!hasPermission">
           <q-input class="q-my-sm col-6" debounce="200" :rules="[val => hasPermission || 'Matricula nao encontrada']" v-model.trim="seek" :readonly="edit" type="text" label="Digite o seu n° de Matricula para visualizar o livro" mask="########" dense outlined/>

        </q-card-section>

        <q-card-section v-else class="q-pt-none">
          <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Tititulo</q-item-label>
          <q-item-label caption lines="2">{{ info.title }}</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
        <q-item-section>
          <q-item-label>Subtitulo</q-item-label>
          <q-item-label caption lines="2">{{ info.subtitle }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Autor</q-item-label>
          <q-item-label caption lines="2">{{ info.author }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Editora</q-item-label>
          <q-item-label caption lines="8">{{ info.publisher }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Subtitulo</q-item-label>
          <q-item-label caption lines="8">{{ info.subtitle }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>N° paginas</q-item-label>
          <q-item-label caption lines="8">{{ info.pages }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Area do saber</q-item-label>
          <q-item-label caption lines="8">{{ info.knowledge }}</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
        <q-item-section>
          <q-item-label>ISBN</q-item-label>
          <q-item-label caption lines="8">{{ info.isbn }}</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
        <q-item-section>
          <q-item-label>Localizacao na Biblioteca</q-item-label>
          <q-item-label caption lines="8">{{ info.location }}</q-item-label>
        </q-item-section>
      </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div v-if="status" class="absolute-center">
        <q-spinner-ios
          color="primary"
          size="3em"
        />
      </div>
      <div v-else>
            <div class="text-body1 text-italic absolute-center" v-if="results.length === 0">
          Livro nao encontrado, tente outra pesquisa
        </div>
       <div v-else class="row q-pa-xl">
          <div v-for="(book, index) in results" :key="index" class="col-3">
            <q-card class="my-card" flat bordered>
          <q-card-section horizontal style="min-height: 250px">
            <q-card-section class="q-pt-xs">
              <div class="text-overline">{{ book.subtitle }}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ book.title }}</div>
              <div class="text-caption text-grey">
                {{ book.description }}
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="primary" no-caps @click="setDetail(book)">
              Ver mais informacoes do livro
            </q-btn>
          </q-card-actions>
        </q-card>

          </div>
      </div>
     </div>
      </div>
  </q-page>
</template>

<script>
import { fetchAPI } from '../controllers/fecthAPIController'
export default {
  name: 'PageIndex',
  mixins: [fetchAPI],
  data () {
    return {
      detail: false,
      info: {},
      seek: '',
      hasPermission: false
    }
  },
  methods: {
    setDetail (data) {
      this.info=data
      this.detail=true
      this.hasPermission=false
      this.seek=''
    },
    async verify() {
      try {
       const {data } = await this.$axios.post(`${process.env.API}student/search`,
        {
          registration: this.seek,
        })
        if (data > 0) {
          this.hasPermission=true
        }
      } catch (error) {
        console.log(error)
      }
    }
 },
 watch: {
   async seek () {
     if (this.seek.length === 8) {
       await this.verify()
     }
   }
 }
}
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 350px
}
</style>