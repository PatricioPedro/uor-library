<template>
<q-page class="col q-pa-md q-mt-md">
    <div class="row justify-end q-mx-sm">
        <q-btn class="q-mb-md q-mx-sm" icon="add" rounded color="primary" outline :disable="selected.length !== 0" @click="setDialog('Livro')" />
        <q-btn class="q-mb-md q-mx-sm" icon="edit" rounded color="primary" :disable="!selected.length" outline @click="setEdit('book/update')" />
        <q-btn class="q-mb-md q-mx-sm" icon="delete" rounded color="primary" :disable="!selected.length" outline @click="confirm('book/delete')" />
    </div>
    <div class="q-mx-sm">
        <q-dialog v-model="cadDialog" persistent>
            <q-card style="width: 700px; max-width: 80vw;">
                <q-toolbar class="bg-primary">
                    <q-toolbar-title><span class="text-weight-bold text-overline text-black">{{ (!selected.length) ? 'Registrar' : 'Alterar' }}</span></q-toolbar-title>
                    <q-btn flat round dense icon="close" color="black" v-close-popup />
                </q-toolbar>

                <q-card-section class="q-mx-md">
                    <q-form @submit="postData">
                        <div class="row q-mx-md">
                            <q-select class="q-my-sm col-6" v-model.trim="dataAPI.knowledge" :readonly="edit" :options="list" label="Area do saber" dense outlined/>
                            <q-input class="q-my-sm col-6" v-model.trim="dataAPI.title" :readonly="edit" type="text" label="Titulo do livro" dense outlined/>
                            <q-input class="q-my-sm col-6" v-model.trim="dataAPI.subtitle" :readonly="edit" type="text" label="Subtitulo do livro" dense outlined/>
                            <q-input class="q-my-sm col-6" v-model.trim="dataAPI.author" :readonly="edit" type="text" label="Autor" dense outlined/>
                            <q-input class="q-my-sm col-6" v-model.trim="dataAPI.publisher" :readonly="edit" type="text" label="Editora" dense outlined/>
                            <q-input class="q-my-sm col-6" v-model.trim.number="dataAPI.pages" :readonly="edit" min="1" type="number" label="N° de paginas" dense outlined/>
                            <q-input class="q-my-sm col-12" v-model.trim="dataAPI.isbn" :readonly="edit" type="text" label="ISBN" dense outlined/>
                            <q-input class="q-my-sm col-12" v-model.trim="dataAPI.location" :readonly="edit" type="text" label="Localizacao do Livro na Biblioteca" dense outlined/>
                            <q-input class="q-my-sm col-12" v-model.trim="dataAPI.description" :readonly="edit" type="textarea" label="Descricao" dense outlined/>
                        </div>
                        <q-btn class="q-ma-md float-right" color="primary" label="Salvar" outline no-caps type="submit" />
                    </q-form>
                </q-card-section>
            </q-card>
        </q-dialog>
        <q-table
          :dense="$q.screen.lt.md"
          :data="data"
          :columns="columns"
          row-key="_id"
          selection="single"
          :selected.sync="selected"
         >
            <template v-slot:header-selection="scope">
                <q-checkbox v-model="scope.selected" />
            </template>
            <template v-slot:body-selection="scope">
                <q-checkbox v-model="scope.selected" />
            </template>
        </q-table>
    </div>
</q-page>
</template>

<script>
import { fetchAPI } from '../../controllers/fecthAPIController'
export default {
    mixins: [fetchAPI],
    data() {
        return {
            cadDialog: false,
            titleDialog: 'Registrar',
            edit: false,
            imagem: null,
            columns: [
                {

                    name: 'title',
                    align: 'left',
                    label: 'Titulo',
                    field: 'title',
                    sortable: true
                },
                {
                    name: 'subtitle',
                    align: 'left',
                    label: 'Subtitulo',
                    field: 'subtitle',
                    sortable: true
                },
                {
                    name: 'description',
                    align: 'center',
                    label: 'Descriçao',
                    field: 'description'
                },
                {
                    name: 'author',
                    align: 'center',
                    label: 'Autor',
                    field: 'author'
                },
                {
                    name: 'pages',
                    align: 'center',
                    label: 'N° paginas',
                    field: 'pages'
                }
            ],
            separator: 'vertical'
        }
    },
    created () {
      this.getData('book')
    }
}
</script>

<style>

</style>
