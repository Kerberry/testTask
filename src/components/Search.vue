<template>
    <form action="" class="search-form">
        <input type="text" v-model='searchStr' placeholder="Поиск по названию картины" class="search-input"/>
        <button type="button" @click="$emit('filter', searchStr)" class="search-btn">Найти</button>
    </form>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return{
                searchStr:'',
            }
        },
        methods:{
            
        }
    };  
</script>

<style scoped>
    .search-input{
        font: 400 1.4rem 'Merriweather', serif;
        color:#343030;
        padding: 1.3rem 1.6rem 1.4rem;
        border: 1px solid #E1E1E1;
        border-right: none;
        width: 26rem;
    }
    .search-input::placeholder{
        color: #9F9F9F;
    }
    .search-input:focus{
        border: 1px solid #B5B5B5;
        outline: none;
    }
    .search-btn{
        padding: 1.4rem 3.6rem;
        padding-bottom: 1.5rem;
    }
</style>