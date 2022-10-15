<template>
    <Header 
        :cards="cards"  
        @filterCards="filterCards"      
    />
    <div class="main">
        <Popup
            :cards="cards" 
            ref="popup"
            :popupCard="popupCard"
        />
        <div class="container">
            <h1 class="main-title">Картины эпохи Возрождения</h1>
            <div class="card-wrapper">
                <Card
                    :cards="cards" 
                    @cardToCart="cardToCart"
                    @showPopup="showPopup"
                />
            </div>
        </div>
    </div>
    <Footer />    
</template>

<script>
    import { defineComponent } from 'vue'
    import Header from "./components/Header.vue";
    import Card from "./components/Card.vue";
    import Footer from "./components/Footer.vue";
    import Popup from "./components/Popup.vue";

    export default defineComponent({
        name: "App",
        components: {
            Header,
            Card,
            Footer,
            Popup,
        },
        data() {
            return {
                cards: [
                    {
                        id: 0,
                        name: "Рождение Венеры",
                        author: "Сандро Боттичелли",
                        img: require("./assets/img/painting1.png"),
                        slider:[
                            require("./assets/img/painting1.png"),
                            require("./assets/img/painting11.png"),
                            require("./assets/img/painting12.png"),
                        ],
                        oldCost: 2000000,
                        newCost: 1000000,
                        isSelected: false,
                        isProcessed: false,
                        isSold: false,
                    },
                    {
                        id: 1,
                        name: "Тайная вечеря",
                        author: "Леонардо да Винчи",
                        img: require("./assets/img/painting2.png"),
                        slider:[
                            require("./assets/img/painting2.png"),
                            require("./assets/img/painting21.png"),
                        ],
                        newCost: 3000000,
                        isSelected: false,
                        isProcessed: false,
                        isSold: false,
                    },
                    {
                        id: 2,
                        name: "Сотворение Адама",
                        author: "Микеланджело",
                        img: require("./assets/img/painting3.png"),
                        slider:{
                            1: require("./assets/img/painting3.png"),
                            2: require("./assets/img/painting31.png"),
                            3: require("./assets/img/painting32.png"),
                        },
                        oldCost: 6000000,
                        newCost: 5000000,
                        isSelected: true,
                        isProcessed: false,
                        isSold: false,
                    },
                    {
                        id: 3,
                        name: "Урок анатомии",
                        author: "Рембрандт",
                        img: require("./assets/img/painting4.png"),
                        slider:[
                            require("./assets/img/painting4.png"),
                        ],
                        oldCost:6000000,
                        newCost:5000000,
                        isSelected: false,
                        isProcessed: false,
                        isSold: true,
                    },
                ],
                reserveCards:[],
                popupCard:{},
            };
        },
        created(){
            if(localStorage.getItem('cards')){
                this.cards = JSON.parse(localStorage.getItem("cards"));
            }
            
        },
        methods:{
            filterCards(str){
                if(this.reserveCards.length>0){
                    [this.cards, this.reserveCards] = [this.reserveCards, this.cards];
                }

                this.reserveCards= this.cards;
                this.cards=this.cards.filter(i=>i.name.toLowerCase().includes(str.toLowerCase()));                
            },
            cardToCart(id){
                this.cards[id].isProcessed = true;
                setTimeout(() => {
                    this.cards[id].isProcessed = false;
                    this.cards[id].isSelected = true;
                    window.localStorage.setItem('cards', JSON.stringify(this.cards))
                }, 2000);
                
            },
            showPopup(id) {
                this.$refs.popup.show = true;
                this.popupCard = this.cards[id];
                return this.popupCard;
            }
        }
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');
    
    
    .container,
    .header-container,
    .footer-container{
        max-width: 122rem;
        width: 80%;
        margin: 0 auto;
    }
    .main{
        padding-top: 4.8rem;
        flex: 1 0 auto;
    }
    
    .main-title{
        font: 700 2.4rem 'Merriweather', serif ;
        color:#343030;
        margin-bottom: 4rem;
    }
    .card-wrapper{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    

    @media(max-width:1291px){
        .main-title{
            text-align: center;
        }
        .card-wrapper{
            justify-content: space-around;
        }
    
    }
</style>
