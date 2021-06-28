<template>

  <story-box
    v-for="story in dreamsStories"
    :key="story.id"
    :story="story" />
  
</template>

<script>
import axios from 'axios'
import StoryBox from '@/components/StoryBox'

export default {
  name: 'Dreams', 

  data() {
    return {
      dreamsStories: []
    }
  }, 

  components: {
    StoryBox
  },

  mounted() {
    this.getDreamsStories()

    document.title = 'D&&N | Dreams'
  }, 

  methods: {
    async getDreamsStories() {

      await axios
        .get('/stories/api/list/dreams/')
        .then(response => {
          this.dreamsStories = response.data
        })

        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>