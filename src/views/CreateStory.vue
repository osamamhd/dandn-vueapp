<template>

  <div class="w-full md:w-4/5 lg:w-1/2 mx-auto px-5 font-bold">

    <form @submit.prevent="submitForm">

      <div>
        <label>Title</label>
        <div>
            <input type="text" placeholder="Title of your story" v-model="title">
        </div>
      </div>

      <div class="mt-8">
        <label>Content</label>
        <div>
          <textarea name="body" id="body" rows="5" placeholder="Write Your Story" v-model="body"></textarea>
            <!-- <input size="25" type="text-area" placeholder="Write Your Story" v-model="body"> -->
        </div>
      </div>

      <div  class="mt-8">
        <label for="type_of_story">Type Of Story</label>
          <select
            id="type_of_story"
            v-model="type_of_story"
            name="type_of_story">
            <option value="dream">Dream</option>
            <option value="nightmare">Nightmare</option>
          </select>
      </div>
      
      <div class="mt-5 flex justify-end">
        <button class="border-b-2 border-gray-800 bg-gray-200 py-1 px-3">Publish</button>
      </div>

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
      type_of_story: '',
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
        type_of_story: this.type_of_story,
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

<style scoped>

input, select, textarea  {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #333;
  color: #555;
}

button:focus { outline: none; }

</style>