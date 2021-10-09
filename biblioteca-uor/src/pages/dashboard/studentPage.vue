<template>
<q-page class="col q-pa-md q-mt-md">
    <div class="row justify-end q-mx-sm">
        <q-btn class="q-mb-md q-mx-sm" icon="add" rounded color="primary" outline :disable="selected.length !== 0" @click="setDialog('Estudante')" />
        <q-btn class="q-mb-md q-mx-sm" icon="edit" rounded color="primary" :disable="!selected.length" outline @click="setEdit('student/update')" />
        <q-btn class="q-mb-md q-mx-sm" icon="delete" rounded color="primary" :disable="!selected.length" outline @click="confirm('student/delete')" />
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
                            <q-input class="q-my-sm col-6" v-model.trim="dataAPI.name" :readonly="edit" type="text" label="Nome do aluno" dense outlined/>
                            <q-input class="q-my-sm col-6" v-model.trim="dataAPI.registration" :readonly="edit" type="text" label="Matricula" mask="########" dense outlined/>
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

                    name: 'name',
                    align: 'left',
                    label: 'Nome',
                    field: 'name',
                    sortable: true
                },
                {
                    name: 'registration',
                    align: 'left',
                    label: 'N° matricula',
                    field: 'registration',
                    sortable: true
                },
            ],
            separator: 'vertical'
        }
    },
    created () {
      this.getData('student')
    }
}
</script>

<style>

</style>
