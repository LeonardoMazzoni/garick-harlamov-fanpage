<script setup>
import { RouterView } from 'vue-router'
import { spin } from '@/main.js'
</script>

<template>
  <header>
    <div class="inline-flex py-10 px-14 justify-between w-full">
      <div class="flex">
      <div class="mr-4 flex-shrink-0 self-center">
        <img alt="logo" class="w-10" src="@/assets/small_garik.webp" />
      </div>
      <div>
        <h4 class="text-lg font-bold">garikharlamovfanpage</h4>
        <p class="mt-1">Garik Harlamov Garik Harlamov Garik Harlamov Garik <br/> Harlamov Garik Harlamov Garik Harlamov Garik Harlamov</p>
      </div>
      </div>
      <div class="flex">
        <button @click="spin" class="h-12 px-4 rounded-full text-green-400 ring-1 ring-green-400 cursor-pointer hover:text-gray-950 hover:bg-green-500 transition-colors duration-300">
          Join the cult
        </button>
      </div>
    </div>
  </header>

  <RouterView/>

  <footer class="pb-10 pt-20 px-14 text-center text-sm bg-zinc-900 relative z-10">
    <p>©2019 by garikharlamovfanpage. Proudly created with Love for garik</p>
    <br/>
    <p>bruh</p>
  </footer>
</template>