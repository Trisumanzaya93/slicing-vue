<template>
    <div class="w-full grid grid-cols-2 mx-10">
        <div v-for="(item,index) in data.data" :key="index" class=" border-2">
            <h1>{{item.name}}</h1>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
    name:"VuexPage",
    computed:{
        // ...mapState({
        //     listPhotos:(state)=>state.product.listPhotos
        // })
        ...mapGetters({
            data:"users/dataUsers"
        })
    },
    mounted() {
        // this.getPhotos()
        this.getUsers()
    },
    methods:{
        ...mapActions({
            // getPhotos:"product/getPhotos",
            getUsers:"users/getUsers"
        }),
        hendleBtn(){
            this.sum()
        }
    }
}
</script>