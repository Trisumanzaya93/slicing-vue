<template>
    <div>
        <Navbar/>
        <div class="px-5 pt-5 pb-5  md:px-10 md:pt-10 md:pb-8 lg:px-28 lg:pt-12 lg:pb-8">
            <h3 class="text-xs lg:text-2xl font-medium">Jelajahi modulnya dan ubah masa depanmu</h3>
            <div class="input input-bordered flex justify-between items-center mt-10">
            <input type="text" placeholder="search" class="w-11/12 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
        </div>
        <div class="w-full px-5  lg:px-28 pt-12 bg-gray-200 pb-10">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-20 hover:gap-30">
                <CardVidio/>
                <CardVidio/>
                <CardVidio/>
                <CardVidio/>
                <CardVidio/>
                <CardVidio/>
                <CardVidio/>
                <CardVidio/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/molecule/Navbar.vue"
import CardVidio from "@/components/molecule/CardVidio.vue"
import Footer from "@/components/molecule/Footer.vue"
export default {
    name:"VidioBelajar",
    components:{
        Navbar,
        CardVidio,
        Footer
    }
}
</script>