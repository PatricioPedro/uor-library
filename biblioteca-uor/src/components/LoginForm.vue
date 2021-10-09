<template>
   <div>
      <q-form @submit="login()">
         <q-card-section>
           <q-input
                class="q-mb-lg q-mt-md text-primary"
                v-model="loginData.name"
                placeholder="Nome do Restaurante"
                autofocus
                :rules="[ val => (val && val.length > 0) || '*Campo obrigatorio']"
            >
            <template v-slot:prepend>
                <q-icon name="person"/>
            </template>
           </q-input>
            <q-input
               v-model="loginData.senha"
                class="q-mb-lg q-mt-md text-primary"
                placeholder="Palavara passe"
                type="password"
                :rules="[ val => (val && val.length > 0) || '*Campo obrigatorio']"
            >
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>
            <q-btn
                class="float-center q-mt-md full-width"
                rounded
                dense
                color="primary"
                label="Entrar"
                type="submit"
            >
            </q-btn>
       </q-card-section>
      </q-form>
   </div>
</template>

<script>
export default {
  data () {
    return {
      loginData: {
        name: '',
        senha: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        const response  = await this.$axios.post(`${process.env.API}restaurant/login`, this.loginData)
        window.restaurant = response.data
        this.$router.push('/dashboard')
      } catch (error) {
        alert('Senha errada')
      }
    }
  }
}
</script>

<style>

</style>
