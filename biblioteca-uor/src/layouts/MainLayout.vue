<template>
<q-layout view="lHh Lpr lFf">
    <q-header class="constrain">
       <div class="row no-wrap shadow-1">
      <q-toolbar class="bg-primary">
        <q-toolbar-title class="text-black">
            <div class="text-subtitle1">
                Biblioteca UOR - Encontre livros com facilidade
            </div>
        </q-toolbar-title>
      </q-toolbar>
    </div>
         <q-toolbar>
       <div class="row fit justify-between q-my-sm">
            <q-select label="Faculdade"  @input="modify('Faculdade')"  v-model="modelCollege" class="col-2 q-mx-xs text-grey-8" :options="faculdades" filled dense autofocus select-class="text-grey-8" placeholder="Pesquise livros por: Titulo, autor, editor n° de paginas, etc...">
        </q-select>
            <q-select label="Curso" @input="modify('Curso')" v-model="modelCourse" class="col-2 q-mx-xs" :options="cursos" filled dense autofocus select-class="text-grey-8" placeholder="Pesquise livros por: Titulo, autor, editor n° de paginas, etc...">
        </q-select>
            <q-select label="Area do Saber" v-model="modelKnowledge" class="col-2 q-mx-xs" :options="areas" filled dense autofocus select-class="text-grey-8" placeholder="Pesquise livros por: Titulo, autor, editor n° de paginas, etc...">
        </q-select>
               <q-input debounce="600" class="col-5 q-mx-xs" v-model="modelSearch" filled dense autofocus outlined input-class="text-black" placeholder="Buscar livro por: Titulo, autor, editor n° de paginas, etc...">
          <template v-slot:prepend>
              <q-icon name="search" size="sm" color="black" />
          </template>
        </q-input>
       </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
        <router-view></router-view>
    </q-page-container>
</q-layout>
</template>

<script>
import { fetchAPI } from '../controllers/fecthAPIController'
export default {
components: {
    'l-tabs': require('components/LocalTabs').default
  },
  mixins: [fetchAPI],
    data() {
        return {
            modelCollege: '',
            faculdades: [],
            cursos: [],
            areas: [],
            modelCourse: '',
            drawerLeft: true,
             options: [
        {
          title: 'Academicos',
          name: 'menu',
          icon: 'school',
          label: 'Livros academicos',
          to: '/'
        },
        {
          title: 'Diversos',
          name: 'diversos',
          icon: 'book',
          label: 'Diversos',
          to: '/'
        }
      ]
        }
    },
    methods: {
     async modify (type) {
        if (type === 'Faculdade') {
            this.endPointList = 'course/courseCollege'
          await this.setListWhere({college: this.modelCollege})
          this.cursos = this.list
          this.modelCourse=''
           this.modelKnowledge=''
        } else if (type === 'Curso'){
            this.endPointList = 'knowledge/knowledgeCourse'
            await this.setListWhere({course: this.modelCourse})
            this.areas = this.areas.concat(this.list)
            this.modelKnowledge=''
        }
     }
    },
    async created () {
        this.endPointList = 'college/'
        await this.setList()
        this.faculdades = this.list
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

.bg-cor {
    background-color: rgba(141, 138, 138, 0.959)
}

.font-text {
    font-size: 20px;
}

.q-footer .q-tab__icon {
    font-size: 22px;
}
</style>
