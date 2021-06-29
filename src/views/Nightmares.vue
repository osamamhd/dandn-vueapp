<template>

  <story-box
    v-for="story in nightmaresStories"
    :key="story.id"
    :story="story"/>
  
</template>

<script>
import axios from 'axios'
import StoryBox from '@/components/StoryBox'

export default {
  name: 'Nightmares', 

  data() {
    return {
      nightmaresStories: []
    }
  }, 

  components: {
    StoryBox
  },

  mounted() {
    this.getNightmaresStories()

    document.title = 'D&&N | Nightmares'
  }, 

  methods: {
    async getNightmaresStories() {

      await axios
        .get('/stories/api/list/nightmares/')
        .then(response => {
          this.nightmaresStories = response.data
        })

        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
