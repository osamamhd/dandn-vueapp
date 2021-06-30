<template>

    <div class="h-screen" :class="story.type_of_story">
        <div class="mx-auto w-11/12 md:w-4/5 lg:w-1/2 pt-4">
            <div class="flex justify-between border-b-2 font-semibold">
                <p>{{ story.title }}</p>
                <p>{{story.pub_date}}</p>
            </div>

            <div class="mt-4">
                <p>{{story.body}}</p>
            </div>

            <div class="flex justify-around grid grid-cols-3 gap-5 text-center mt-4">
            <div :id="story.type_of_story" class="col-span-1">
                <button v-on:click="downVote" :id="story.id">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div :id="story.type_of_story" class="col-span-1">
                <p class="mt-1">{{story.points}} Points</p>
            </div>

            <div :id="story.type_of_story" class="col-span-1">
                <button v-on:click="upVote" :id="story.id">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                </button>
            </div>
            </div>
        
        </div>
    </div>
  
</template>

<script>
import axios from 'axios'

export default {
    name: 'Story',

    data() {
        return {
            story: {},
        }
    }, 

    mounted() {
        this.getStory()

    }, 

    methods:{
        async getStory() {
            
            const story_slug = this.$route.params.story_slug

            await axios
                .get(`stories/api/${story_slug}/`)
                .then(response => {
                    this.story = response.data

                    document.title = 'D&&N | ' + this.story.title

                })
                .catch(err => {
                    console.log(err)
                })
        },

        upVote() {
            axios
                .post(`/stories/api/up/${this.story.id}/` , this.story.points)
                .then(response => {
                    this.story.points++;
                })
                .catch(err => {
                    console.log(err)
                })
        },

        downVote() {
            axios
                .post(`/stories/api/down/${this.story.id}/` , this.story.points)
                .then(response => {
                    this.story.points--;
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },

}
</script>

<style scoped>
.nightmare {
    color: #F3F4F6;
    background-color: #374151;
    border-color: #D1D5DB;
}

.dream {
    color: #374151;
    background-color: #F3F4F6;
    border-color: #374151;
}


#dream {
    color: #F3F4F6;
    background-color: #374151;
}

#nightmare {
    color: #374151;
    background-color: #F3F4F6;
}

button:focus { outline: none; }

</style>