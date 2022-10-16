<template>
    <div v-if="show" class="popup-area" @click.self="closeModal">
        <div class="popup">
            <Slider
                :popupCard="popupCard"
            />
            <div class="subscr-wrapper">
                <h2 class="popup-title">&laquo{{popupCard.name}}&raquo</h2>
                <p class="popup-subscr">{{popupCard.subscr}}</p>
                <div class="popup-cost">
                    <p v-if="popupCard.oldCost" class="old-cost">{{popupCard.oldCost}}$</p>
                    <p class="new-cost">{{popupCard.newCost}}$</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '../components/Slider.vue'
    export default{
        name:'Popup',
        components:{
            Slider,
        },
        
        props:{
            cards:Object,
            popupCard:Object,
        },
        data () {
            return {
                show: false,
            }
        },
        methods: {
            closeModal() {
                this.show = false;
            }
        }

    }
</script>

<style scoped>
    .popup-area {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 2;
    }
    .popup {
        background: #fff;
        border-radius: 8px;
        padding: 2.5rem;
        max-width: 90vw;
        max-height: 95vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition:all 0.5s ease-out;
    }
    .popup-title{
        font: 700 1.8rem 'Merriweather', serif;
        color:#343030;
        margin-bottom: 1rem;
    }
    .popup-subscr{
        font: 400 1.5rem 'Merriweather', serif;
        padding-bottom: 3rem;
    }
    .subscr-wrapper{
        padding: 0 2rem;
    }
    .new-cost{
        font-size: 3rem;
        text-align: center;
    }
    .old-cost{
        text-align: center;
    }
</style>