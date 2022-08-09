<template>
    <div class="flex justify-center items-center">
        <div class="card w-32 hover:scale-110  bg-base-100 shadow-xl lg:w-64">
  <figure><img :src="data.banner" alt="img" /></figure>
  <div class="px-3 pt-3 lg:card-body">
    <h2 class="text-[8px] font-bold lg:card-title">
        {{data.title}}
      </h2>
    <p class="text-[8px] truncate lg:text-sm">Kunjungi Website Fazztrack Untuk Info Pelatihan https://www.fazztrack.com/Follow juga Akun Instagram Fazztrackhttps://www.instagram.com/fazztrack.id</p>
    <div class="flex justify-between items-center border-b-2 pb-4 mt-4">
        <div class="flex mr-3">
            <h3 class="text-yellow-400 text-[8px] lg:text-lg" v-for="index in data.star" :key="index">&#9733;</h3>
        </div>
        <h3 class="text-[8px] lg:text-sm">Level {{data.level}}</h3>
    </div>
    <div class="flex justify-between items-center  pb-2 mt-4">
        <h3 class="text-[8px] lg:text-sm"> Harga Module</h3>        
        <h3 class="text-[8px] text-orange-500 font-bold lg:text-sm ">{{data.price}}</h3>
    </div>
    
  </div>
</div>
    </div>
</template>

<script>
export default {
    name :"CardVidio",
    props:["data"]
}
</script>