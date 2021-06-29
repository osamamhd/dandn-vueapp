<template>
  <h1>Create Story</h1>

  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label>Title</label>
        <div>
            <input type="text" placeholder="The Title of your story" v-model="title">
        </div>
      </div>

      <div>
        <label>Content</label>
        <div>
            <input type="text-area" placeholder="Write Your Story" v-model="body">
        </div>
      </div>

      <div id="selector">
                    <select v-model="type">
                        <option v-for="(type, key) in type_of_story" :value="key" :key="key">
                        {{type}}
                        </option>
                    </select>
                    <br>
                    <br>
                    <span>Selected: {{ type }}</span>
                    </div>

      <button>Publish</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateStory',

  data() {
    return {
      title: '',
      body: '',
      type: '',
      type_of_story: {
        dream: 'Dream',
        nightmare: 'Nightmare'
      },
      errors: []
    }
  }, 

  mounted() {
    document.title = 'D&&N | Publish Story'
  },

  methods: {
    submitForm() {
      this.error  = []

      const FormData = {
        title: this.title,
        body: this.body,
        type: this.type
      }

      axios
        .post('/stories/api/list/dreams/', FormData)
        .then(response => {
          this.$router.push('/nightmares')
        }).catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }

                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
    }
  }

}
</script>

<style>

</style>