<template>
    <div v-if="show" class="popup-area" @click.self="closeModal">
        <div class="popup">
            <div class="popup-slider">
                <Slider
                    :popupCard="popupCard"
                />
            </div>
            <span class="popup-subscr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iusto voluptates voluptatibus repudiandae laborum quibusdam recusandae ullam molestiae, quidem deleniti placeat aliquid repellat numquam, sunt aut officiis dolores dolor amet?</span>
            <div class="popup-cost">
                <span v-if="popupCard.oldCost" class="old-cost">{{popupCard.oldCost}}$</span>
                <span class="new-cost">{{popupCard.newCost}}$</span>
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
        data(){
            return {
                
            };
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
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 2;
    }
    .popup {
        background: #fff;
        border-radius: 8px;
        padding: 1.5rem;
        max-width: 90vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>