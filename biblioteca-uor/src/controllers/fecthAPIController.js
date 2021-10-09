export const fetchAPI = {
  data() {
    return {
      list: [],
      dataAPI: {},
      endpointPost: '',
      endPointList: '',
      filterList: '',
      dialogType: '',
      modelSearch: '',
      modelKnowledge: '',
      endPointData: '',
      selected: [],
      update: false,
      data:  []
    };
  },
  computed: {
    results: {
      get() {
        return this.$store.state.product.books;
      }
    },
    status: {
      get() {
        return this.$store.state.product.status;
      }
    }
  },
  methods: {
    async searchBook () {
      this.$store.commit("product/SET_STATUS", true);
      const { data } = await this.$axios.post(
        `${process.env.API}book/search`,
        {
          search: this.modelSearch,
          knowledge: this.modelKnowledge
        }
      );
      this.books = data
      this.$store.commit("product/SET_BOOKS", data);
      setTimeout(() => {
        this.$store.commit("product/SET_STATUS", false);
      }, 600);
      console.log(JSON.stringify(this.results))
    },
    async postData() {
      this.$q.loading.show({
        delay: 400 // ms
      })
      try {
        if (!this.update) {
          var response = await this.$axios.post(
            `${process.env.API}${this.endpointPost}`,
            this.dataAPI
          );
        this.dataAPI = {}
        } else {
          var response = await this.$axios.put(
            `${process.env.API}${this.endpointUpdate}`,
            this.dataAPI
          );
        }
        this.$q.notify({
          message: 'Efectuado com sucesso!'
        })
        this.getData(this.endPointData)
        console.log(response)
      } catch (error) {
        console.log(error)  
      }
      setTimeout(() => {
        this.$q.loading.hide()
      }, 1000);
    },
    setEdit (endpoint) {
      this.endpointUpdate = endpoint
      this.dataAPI = this.selected[0]
      this.cadDialog = true
      this.update = true
    },
    async setList () {
        const { data } = await this.$axios.get(`${process.env.API}${this.endPointList}`)
        this.list = data.map(e => e.description)
        console.log(this.list)
    },
    async setListWhere (filter) {
      const { data } = await this.$axios.post(`${process.env.API}${this.endPointList}`, filter)
      this.list = data.map(e => e.description)
      console.log(this.list)
  },
    async getData (endpoint) {
      this.endPointData = endpoint
      try {
        const { data } = await this.$axios.get(`${process.env.API}${this.endPointData}`)
        this.data = data
      } catch (error) {
        console.error(error)
      }
    },
    confirm (endpoint) {
      this.$q.dialog({
        title: 'Essa accao vai remover esse registro',
        message: 'Tem a certeza que vai remover esse registro?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        this.$axios.put(`${process.env.API}${endpoint}`, {
          _id: this.selected[0]['_id']
        })
        this.getData(this.endPointData)
        this.selected = []
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    setDialog(type) {
      this.dialogType = type
      this.cadDialog = true;
      this.update=false
      this.dataAPI = {}
      if (this.dialogType === 'Faculdade') {
        this.endpointPost = 'college/register'
      } else if (this.dialogType === 'Curso'){
        this.endPointList = 'college/'
        this.setList()
        this.endpointPost = 'course/register'
      }else if (this.dialogType === 'Area'){
        this.endPointList = 'course/'
        this.setList()
        this.endpointPost = 'knowledge/register'
      }
      else if (this.dialogType === 'Livro'){
        this.endPointList = 'knowledge/'
        this.endPointData = 'book/'
        this.setList()
        this.endpointPost = 'book/register'
      }
      else if (this.dialogType === 'Estudante'){
        this.endPointData = 'student/'
        this.endpointPost = 'student/register'
      }
    }
  },
  watch: {
    modelSearch () {
      this.searchBook()
    },
    modelKnowledge () {
      this.searchBook()
    }
  }
};
