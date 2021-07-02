<template>
  <div class="py-4">
    <img class="mx-auto px-2" alt="Vue logo" src="../assets/brand.svg">
  </div>

  <div class="grid grid-cols-2 md:py-1">
    <div class="col-span-2 md:col-span-1 
                flex md:m-1 justify-center 
                md:justify-end">
                <img src="../assets/b1-img.svg" alt="">
        <!-- Created by Nithinan Tatah from the Noun Project -->
    </div>
    <div class="col-span-2 md:col-span-1 flex justify-center">
        <p class="flex justify-center mx-6 py-4
                    text-4xl md:text-6xl font-serif
                     font-black my-auto text-center
                      md:text-left text-gray-800">
                      Write a story about your dreams or nightmares!
                    </p>
    </div>
</div>

<div class="grid grid-cols-2 md:py-6 bg-gray-800">
    <div class="col-span-2 md:col-span-1  flex justify-end">
        <p class="text-gray-100 mx-6 py-4
                    md:ml-20 text-4xl md:text-5xl 
                    font-serif font-black my-auto
                    text-center md:text-right">
                    Every one of us has that kind of story, 
                    so what's you dreamt of last night.
        </p>
    </div>
    <div class="col-span-2 md:col-span-1
                 flex mx-6 justify-center 
                 md:justify-start">
                 <img src="../assets/b2-img.svg" alt="">
        <!-- Created by ruliani2018 from the Noun Project -->
    </div>
</div>
    <footer class="text-gray-200 text-center bg-gray-800">&copy;2021</footer>


</template>

<script>
export default {
  name: 'Home',

}
</script>
