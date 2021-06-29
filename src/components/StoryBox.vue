<template>

<div>
    <div class="mx-auto w-11/12 md:w-4/5 lg:w-1/2 bg-gray-100 my-5 p-4
                border-b-2" :class="story.type_of_story">
        <div class="flex justify-between border-b-2 font-semibold"
                    :class="story.type_of_story">
            <p>{{story.title}}</p>
            <p>{{story.pub_date}}</p>
        </div>

        <div class="mt-4">
            <p>{{story.body}}</p>
        </div>

        <div class="flex justify-around grid grid-cols-3 gap-5 text-center mt-4">
            <div :id="story.type_of_story" class="col-span-1">
                <button>Down</button>
            </div>

            <div :id="story.type_of_story" class="col-span-1">
                <p>{{story.points}} Points</p>
            </div>

            <div :id="story.type_of_story" class="col-span-1">
                <button>Up</button>
            </div>
        </div>
        
    </div>
</div>

</template>

<script>
export default {
    name: 'StoryBox',

    props: {
        story: Object
    }

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
</style>