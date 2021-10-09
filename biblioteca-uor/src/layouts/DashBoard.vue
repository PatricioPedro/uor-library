<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white">
      <q-toolbar class="bg-white constrain">
        <q-toolbar-title
          class="text-black text-orverline"
          style="font-size:18px"
        >
          Biblioteca UOR painel de admin
        </q-toolbar-title>
        <q-space />
        <q-btn
          round
          flat
          icon="school"
          dense
          color="primary"
          class="q-mx-sm"
          @click="setDialog('Faculdade')"
        >
          <q-tooltip>
            Faculdade
          </q-tooltip>
        </q-btn>
        <q-btn round flat icon="book" dense color="primary" class="q-mx-sm"  @click="setDialog('Curso')">
          <q-tooltip>
            Curso
          </q-tooltip>
        </q-btn>
        <q-btn round flat icon="book" dense color="primary" class="q-mx-sm" @click="setDialog('Area')">
          <q-tooltip>
            Area do saber
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="500"
      content-class="bg-primary text-black"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item
            clickable
            v-ripple
            class="q-mr-xs"
            v-for="(opt, index) in options"
            :key="index"
            exact
            :to="opt.to"
            :active="link === opt.label"
            @click="link = opt.label"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon :name="opt.icon" size="xs" />
            </q-item-section>

            <q-item-section>
              {{ opt.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-dialog v-model="cadDialog" persistent>
        <q-card style="width: 700px; max-width: 80vw;">
          <q-toolbar class="bg-primary">
            <q-toolbar-title
              ><span class="text-weight-bold text-overline text-black"
                >Registrar</span
              ></q-toolbar-title
            >
            <q-btn flat round dense icon="close" color="black" v-close-popup />
          </q-toolbar>

          <q-card-section class="q-mx-md">
            <q-form @submit="postData">
              <!-- Form faculdade -->
              <div v-if="dialogType === 'Faculdade'" class="row q-mx-md">
                <!--q-select
                  class="q-my-md col-6"
                  v-model="dataAPI.category"
                  :readonly="edit"
                  :options="tipos"
                  label="Categoria"
                  dense
                  outlined
                >
                  <template v-slot:prepend>
                    <q-icon name="category" size="xs" />
                  </template>
                </q-select-->
                <q-input
                  class="q-my-sm col-12"
                  v-model="dataAPI.description"
                  type="text"
                  label="Descriçao da Faculdade"
                  dense
                  outlined
                />
              </div>
               <!-- Form curso -->
              <div v-else-if="dialogType === 'Curso'" class="row q-mx-md">
                <q-select
                  class="q-my-md col-12"
                  v-model="dataAPI.college"
                  :options="list"
                  label="Faculdade"
                  dense
                  outlined
                />
                <q-input
                  class="q-my-sm col-12"
                  v-model="dataAPI.description"
                  type="text"
                  label="Nome do Curso"
                  dense
                  outlined
                />
              </div>
                <!-- Form area do saber -->
              <div v-else-if="dialogType === 'Area'" class="row q-mx-md">
                <q-select
                  class="q-my-md col-12"
                  v-model="dataAPI.course"
                  :options="list"
                  label="Curso"
                  dense
                  outlined
                />
                <q-input
                  class="q-my-sm col-12"
                  v-model="dataAPI.description"
                  type="text"
                  label="Area do Saber"
                  dense
                  outlined
                />
              </div>
              <q-btn
                class="q-ma-md float-right"
                color="primary"
                label="Salvar"
                outline
                no-caps
                type="submit"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { fetchAPI } from '../controllers/fecthAPIController'
export default {
  mixins: [fetchAPI],
  data() {
    return {
      drawer: true,
      link: "Livros",
      cadDialog: false,
      options: [
        {
          label: "Livros",
          to: "/dashboard",
          icon: "book"
        },
        {
          label: "Alunos matriculados",
          to: "/aluno",
          icon: "people"
        },
        {
          label: "Diversos",
          to: "/",
          icon: "school"
        },
        {
          label: "Terminar sessao",
          to: "/",
          icon: "logout"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.q-toolbar__title {
  @media (max-width: $breakpoint-sm-max) {
    text-align: center;
  }
  font-size: 25px;
}
.font-text {
  font-size: 26px;
}
.q-footer .q-tab__icon {
  font-size: 22px;
}
.my-menu-link {
  color: black;
  background: rgba(238, 159, 13, 0.945);
}
.color-other {
  background: rgb(245, 162, 9);
  font-size: 50px;
}
</style>
