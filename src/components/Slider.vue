<template>
  <di v-for="image in images[popupCard.id]">
    <button @click="prev">&lt;</button>
    <img :src="image" class="popup-img"/>
    <button @click="next">&gt;</button>
  </di>
</template>

<script>
    export default{
        name:'Slider',
        props:{
            popupCard: Object,
        },
        data(){
            return{
                images:{
                    0:[
                        require("../assets/img/painting1.png"),
                        require("../assets/img/painting11.png"),
                        require("../assets/img/painting12.png")
                    ],
                    1:[
                        require("../assets/img/painting2.png"),
                        require("../assets/img/painting21.png"),
                    ],
                    2:[
                        require("../assets/img/painting3.png"),
                        require("../assets/img/painting31.png"),
                        require("../assets/img/painting32.png"),
                    ]
                },
                i:0,
                
            }
        },
        computed:{
            image: this.images[popupCard.id][0],
        }
        
    }
    
</script>

<style>
.popup-img{
    max-width: 90%;
}
</style>