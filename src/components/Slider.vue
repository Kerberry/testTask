<template>
    <div class="popup-wrapper">
        <button class="popup-btn" :class="{disable:i === 0}" @click="prevImg">&#8249;</button>
        <img :src="images[popupCard.id][i]" class="popup-img"/>
        <button class="popup-btn" :class="{disable:i === images[popupCard.id].length-1 }" @click="nextImg">&#8250;</button>
    </div>
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
                img:'',
            }
        },
        methods:{            
            nextImg(){
                this.i+=1;
                return(this.i)
            },
            prevImg(){
                this.i-=1;
                return(this.i)
            }
        }
    }
    
</script>

<style scoped>
.popup-wrapper{
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}
.popup-img{
    max-height: 50vh;
    margin: 0 auto;
    height: auto;
}
.popup-btn{
    color:#343030;
    border:none;
    background: #ffffff;
    font-size: 5rem;
}
.popup-btn:hover{
    color:#A0A0A0;
    background: #ffffff;
}
.disable{
    opacity:0.5;
    pointer-events:none;
}
</style>