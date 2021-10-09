<template>
  <div>
    <q-input
      v-model="modelPesquisa"
      rounded
      outlined
      dense
      clearable
      class="fullwidth"
      :placeholder="placeholder"
    >
      <template v-slot:prepend>
        <q-icon name="search" color="grey-8"/>
    </template>
    </q-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pesquisa: ''
    }
  },
  props: {
    modelPesquisa: String,
    placeholder: String
  }
}
</script>

<style>

</style>
