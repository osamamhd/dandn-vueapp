<template>
<div>
    {{ story.title }}
    {{ story.pub_data }}
    {{ story.body }}

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

<style>

</style>