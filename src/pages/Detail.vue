<template>
  <div>
    <Navbar/>
    <div class="w-full pt-14 pl-10 lg:pl-32">
      <div class="flex flex-col justify-center lg:flex-row lg:justify-between">
        <div class="">
          <h3 class="text-4xl font-semibold">Fullstack Mobile</h3>
          <div class="flex mt-10">
            <div>
              <li class="text-orange-400">
                <span class="text-black text-2xl">Algoritma</span>
              </li>
              <li class="text-orange-400 mt-5">
                <span class="text-black text-2xl">JavaScript</span>
              </li>
              <li class="text-orange-400 mt-5">
                <span class="text-black text-2xl">Express</span>
              </li>
              <li class="text-orange-400 mt-5">
                <span class="text-black text-2xl">Redux</span>
              </li>
              <li class="text-orange-400 mt-5">
                <span class="text-black text-2xl">SCRUM (Kanban)</span>
              </li>
              <div class="mt-10">
          <Button width="w-10" height="h-5" title="Daftar Sekarang" color="bg-orange-500" rounded="rounded-sm" border="border-none"/>
          </div>
            </div>
            <div class="ml-10">
              <li class="text-orange-400">
                <span class="text-black text-2xl">Algoritma</span>
              </li>
              <li class="text-orange-400 mt-5">
                <span class="text-black text-2xl">JavaScript</span>
              </li>
              <li class="text-orange-400 mt-5">
                <span class="text-black text-2xl">Express</span>
              </li>
              <li class="text-orange-400 mt-5">
                <span class="text-black text-2xl">Redux</span>
              </li>
              <li class="text-orange-400 mt-5 ">
                <span class="text-black text-2xl">SCRUM (Kanban)</span>
              </li>
            </div>
          </div>
          
        </div>
        <div class=" flex justify-center pt-10 lg:pt-0 md:mr-60 md:pb-24">
          <img src="@/assets/talent.svg" alt="Shoes" class="w-80 h-80" />
        </div>
      </div>
    </div>
    <div class="w-full pt-14 pl-10 pr-10 flex flex-col lg:pl-32 lg:flex-row lg:pr-0 ">
        <img src="@/assets/img1.png" alt="">
        <div class="mt-10 lg:ml-20 lg:mt-0">
        <h3 class="text-2xl font-semibold">Lebih dari sekedar bootcamp</h3>
        <h3 class="text-xl mt-5">Di bootcamp Fazztrack, kamu akan belajar bersama dengan teman teman yang passionate dan mentor yang akan membimbing kamu ke tujuan kamu. Kamu juga bisa membangun networking yang baik untuk masa depanmu dari teman setim dan mentor kami yang berasal dari industri.</h3>
        </div>
    </div>
    <CardWeek/>
    <div class="w-full h-56 bg-red-50 flex flex-col justify-center items-center mt-20">
      <h3 class="text-2xl font-semibold mb-10 text-center">Tunggu Apa Lagi? Gabung Bersama Kami?</h3>
      <Button width="w-10" height="h-5" title="Daftar Sekarang" color="bg-orange-500" rounded="rounded-sm" border="border-none"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Button from "@/components/atom/button.vue"
import CardWeek from "@/components/molecule/CardWeek.vue"
import Footer from "@/components/molecule/Footer.vue"
import Navbar from "@/components/molecule/Navbar.vue"
export default {
  name: "DetailPage",
  components:{
    Button,
    CardWeek,
    Footer,
    Navbar
  }
};
</script>
