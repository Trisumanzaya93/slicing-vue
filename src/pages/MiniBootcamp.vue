<template>
<div>
        <Navbar/>
        <div  class="px-5 pt-5 pb-5  md:px-10 md:pt-10 md:pb-8 lg:px-28 lg:pt-12 lg:pb-8">
            <h3 class="text-xs lg:text-2xl font-medium">Belajar bersama expert dan creator terpercaya</h3>
        </div>
        <div v-if="data.isLoading">
            <Loading />
        </div>
        <div v-else class="w-full px-5  lg:px-28 pt-12 bg-gray-200 pb-10">
            <div class="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-10">
                <CardMiniBootcamp v-for="(item,index) in data.list" :key="index" :data="item"/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/molecule/Navbar.vue"
import Footer from "@/components/molecule/Footer.vue"
import CardMiniBootcamp from "@/components/molecule/CardMiniBootcamp.vue"
import Loading from "@/components/atom/loading.vue"
import {mapActions,mapGetters} from "vuex"
export default {
    name:"MiniBootcamp",
    components:{
        Navbar,
        Footer,
        CardMiniBootcamp,
        Loading
    },
    computed:{
        ...mapGetters({
            data:"miniBootcamp/miniBootcamp"
        })
    },
    mounted(){
        this.getMiniBootcamp()
    },
    methods:{
        ...mapActions({
            getMiniBootcamp:"miniBootcamp/getMiniBootCamp"
        })
    }
}
</script>