<template>
    <div v-for="card in cards" :key="card.id" class="card-item" v-bind:class="{sold:card.isSold}">
        <img :src= "card.img" :alt="card.name" class="card-img" @click="$emit('showPopup', card.id)"/>
        <h2 class="card-title" @click="$emit('showPopup', card.id)">&laquo{{card.name}}&raquo <br> {{ card.author }}</h2>
        <div class="buy-wrapper">
            <div v-if="!card.isSold" class="cost-wrapper">
                <span v-if="card.oldCost" class="old-cost">{{ card.oldCost.toLocaleString() }}$</span>
                <span class="new-cost">{{ card.newCost.toLocaleString() }}$</span>
            </div>
            <span v-else class="sold-title">Продана на аукционе</span>
            <button class="buy-btn selected" v-if="card.isSelected">&#10004 В корзине</button>
            <button class="buy-btn processed" v-else-if="card.isProcessed">...</button>
            <button class="buy-btn" @click="cart(card.id)" v-else-if="!card.isSold">Купить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            cards: Object,
        },
        emits:['cardToCart', 'showPopup'],
        methods:{
            cart(id){
                this.$emit('cardToCart', id)
            }
        }
    };
</script>

<style>
.card-item{
    margin: 0 3rem 3rem;
    border: 1px solid #E1E1E1;
}
.card-img{
    margin-bottom: 2rem;
    cursor:pointer;
}
.card-title{
    font: 400 1.8rem 'Merriweather', serif;
    color:#343030;
    padding-left: 2.4rem;
    margin-bottom: 2.2rem;
    line-height: 2.7rem;
    cursor:pointer;
}
.buy-wrapper{
    display: flex;
    justify-content: flex-end;
    align-items:center;
    padding: 0 2.3rem 2.4rem;
}
.cost-wrapper{
    display: flex;
    flex-direction: column;
    margin-right: 2.1rem;
}
.old-cost{
    font:300 1.4rem 'Merriweather', serif;
    color:#A0A0A0;
    text-decoration: line-through;
}
.new-cost{
    font:700 1.6rem 'Merriweather', serif;
    color:#343030;
}
.buy-btn{
    padding: 1.4rem 3rem 1.3rem 3.1rem;
}
.disable{
    background-color:#C1B4B1;
}
.sold{
    opacity:0.5;
    pointer-events:none;
}
.sold-title{
    font: 700 1.6rem 'Merriweather', serif;
}
.processed,
.selected{
    padding: 1.4rem 0 1.3rem;
    width:11.8rem;
    text-align: center;
}
</style>