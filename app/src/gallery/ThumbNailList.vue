<template>
  <div class="container-fluid">
    <h3>Gallery</h3>
    <div>
      <vue-spinner size="massive" message="Loading..." v-if="loading"></vue-spinner>
      <div class="col-md-3" v-for="thumbnail in thumbnails" @click="openPicture(thumbnail)" v-if="thumbnails && thumbnails.length > 0">
        <div class="thumbnail">
          <img class="img-thumbnail" :src="thumbnail.thumbnailUrl" alt="...">
          <div class="center-block" style="text-align: center;">
            <label>{{thumbnail.title}}</label>
          </div>
        </div>
      </div>
    </div>
    <modal name="modalPicture" :width="640" :height="680">
      <div class="container">
        <article style="text-wrap: normal;">Title: {{selectedThumbNail.title}}</article>
        <img :src="selectedThumbNail.url" alt="...">
      </div>
    </modal>
  </div>
</template>
<script>
  import Spinner from 'vue-simple-spinner'

  export default{
    name: 'thumbnail-list',
    components: {
      'vue-spinner': Spinner
    },
    created () {
      this.loading = true
      this.$http.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
          return response.json()
        })
        .then(thumbnails => {
          this.thumbnails = thumbnails
          this.loading = false
        })
    },
    methods: {
      openPicture: function (thumbnail) {
        this.selectedThumbNail = thumbnail
        this.$modal.show('modalPicture')
      }
    },
    data: function () {
      return {
        loading: false,
        selectedThumbNail: {},
        thumbnails: []
      }
    }
  }
</script>
