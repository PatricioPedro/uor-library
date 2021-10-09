<template>
  <q-page class="constrain-2">
    <div class="q-mt-lg">
      <q-form
        @submit="send"
        class="q-gutter-md"
      >
       <div class="row">
      <q-file
        v-model="file"
        class="q-my-md col-12"
        outlined
        dense
        label="Logotipo"
        name="file"
        use-chips
        append
      >
        <template v-slot:prepend>
            <q-icon name="attach_file" size="xs" />
        </template>
    </q-file>
     <!--q-file class="q-my-md col q-ml-sm" outlined v-model="dataAPI.images" dense label="Imagens do restaurante">
        <template v-slot:prepend>
            <q-icon name="attach_file" size="xs" />
        </template>
    </q-file-->
     </div>
     <div class="row">
    <q-select
      class="q-my-md col"
      v-model="dataAPI.type"
      :options="tipos"
      label="Tipo de restaurante"
      dense
      outlined
    >
      <template v-slot:prepend>
         <q-icon name="category" size="xs" />
      </template>
    </q-select>
    <q-input
      class="q-my-md col q-ml-sm"
      v-model="dataAPI.name"
      type="text"
      label="Nome do restaurante"
      dense
      outlined
    >
      <template v-slot:prepend>
        <q-icon name="restaurant" size="xs"/>
      </template>
    </q-input>
     </div>
     <div class="row">
         <q-input
           class="col q-my-md"
           prefix="+244"
           v-model="dataAPI.contact1"
           type="tel"
           placeholder="Contacto 1"
           dense
           outlined
        >
           <template v-slot:prepend>
              <q-icon name="phone" size="xs"/>
           </template>
         </q-input>
        <q-input
          class="col q-my-md q-ml-sm"
          v-model="dataAPI.contact2"
          prefix="+244"
          type="tel"
          placeholder="Contacto 2"
          dense
          outlined
        >
           <template v-slot:prepend>
              <q-icon name="phone" size="xs"/>
           </template>
        </q-input>
        <q-input
          class="col q-my-md q-ml-sm"
          v-model="dataAPI.email"
          type="email"
          placeholder="Email"
          dense
          outlined
        >
          <template v-slot:prepend>
              <q-icon name="mail" size="xs"/>
           </template>
        </q-input>
     </div>
     <q-input
       class="q-my-md"
       v-model="dataAPI.address"
       type="text"
       placeholder="Endereço"
       dense
       outlined
     >
       <template v-slot:prepend>
          <q-icon name="place" size="xs"/>
        </template>
     </q-input>
     <q-input
       class="q-my-md"
       v-model="dataAPI.description"
       type="textarea"
       placeholder="Descriçao"
       dense
       outlined
     >
       <template v-slot:prepend>
          <q-icon name="description" size="xs"/>
        </template>
     </q-input>
     <q-btn class="q-mb-md float-right" color="primary" label="Registrar" type="submit" outline no-caps/>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tipos: [],
      file: null,
      dataAPI: {
        name: '',
        type: '',
        contact1: '',
        contact2: '',
        email: '',
        address: '',
        description: ''
      }
    }
  },
  computed: {
    categorias: {
      get () {
        return this.$store.state.restaurant.categorias
      }
    }
  },
  methods: {
    getTipos () {
      this.tipos = (Object.keys(this.categorias)
        .map(categoria => categoria.replaceAll('_', ' ')
          .toUpperCase()))
        .sort()
    },
    resetForm() {
       dataAPI = {
        name: '',
        type: '',
        contact1: '',
        contact2: '',
        email: '',
        address: '',
        description: ''
      }
    },
    async send (evt) {
      const formData = new FormData(evt.target)
      Object.keys(this.dataAPI).forEach(key => {
        formData.append(key, this.dataAPI[key])
      })
      try {
        this.$q.loading.show()
        const response = await this.$axios.post(`${process.env.API}restaurant/register`, formData)
        setTimeout(() => {
          this.$q.loading.hide()
          this.dataAPI = {}
          this.file = null
          this.$q.notify({
            message: 'Restaurant Cadastrado com sucesso',
            icon: 'done',
            color: 'positive'
          })
        }, 2000)
        console.log(response)
      } catch (error) {
        this.$q.notify({
          message: 'Falha ao submeter, tente novamente.',
          icon: 'warning',
          color: 'negative'
        })
      }
    }
  },
  mounted () {
    this.getTipos()
  }
}
</script>
