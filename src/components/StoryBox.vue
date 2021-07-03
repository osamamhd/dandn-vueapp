<template>

<div>
    <div class="mx-auto w-11/12 md:w-4/5 lg:w-1/2 bg-gray-100 my-5 p-4
                border-b-2" :class="story.type_of_story">
        <div class="flex justify-between border-b-2 font-semibold"
                    :class="story.type_of_story">
            <router-link v-bind:to="story.get_absolute_url">{{story.title}} </router-link>
            <p>{{story.dop}}</p>
        </div>

        <div class="mt-2 break-all">
            <p class="text-justify">{{story.truncateBody}}</p>

        </div>

        <div class="flex justify-around grid grid-cols-5 gap-5 text-center mt-4">
            <div :id="story.type_of_story" class="col-span-1">
                <button v-on:click="downVote" :id="story.id">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div :id="story.type_of_story" class="col-span-2">
                <p class="mt-1">{{points}} Points</p>
            </div>

            <div :id="story.type_of_story" class="col-span-1">
                <button v-on:click="upVote" :id="story.id">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                </button>
            </div>

            <div :id="story.type_of_story" class="col-span-1">
                <router-link v-bind:to="story.get_absolute_url">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'StoryBox',
    
    props: {
        story: Object
    }, 

    data() {
        return {
            points: this.story.points,
            id: this.story.id,
        }
    },

    methods: {
        upVote() {
            axios
                .post(`/stories/api/up/${this.id}/` , this.points)
                .then(response => {
                    this.points++;
                })
                .catch(err => {
                    console.log(err)
                })
        },

        downVote() {
            axios
                .post(`/stories/api/down/${this.id}/` , this.points)
                .then(response => {
                    this.points--;
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