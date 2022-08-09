<template>
    <div>
        <div v-if="videos.isLoading">
            <h3>loading</h3>
        </div>
        <div v-else-if="videos.isError">
            <h3>error server</h3>
        </div>
        <div v-else>
            <ul>
                <li v-for="(item,index) in videos.list" :key="index">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
export default {
    name:"VideosPage",
    computed:{
        ...mapGetters({
            videos:"videos/videos"
        })
    },
    methods:{
        ...mapActions({
            getVideos:"videos/getVideos"
        })
    },
    mounted(){
        this.getVideos()
    }
    
}
</script>