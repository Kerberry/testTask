<template>
    <header class="header">
        <div class="header-container">
            <Nav />
            <Search 
                @filter="filter"
            />
        </div>
    </header>
</template>

<script>
    import Nav from "./Nav.vue";
    import Search from "./Search.vue";
    export default {
        name: "Header",
        components: {
            Search,
            Nav,
        },
        data(){
            return{
                reserveCards:[],
            }
        },
        methods:{
            filter(str){
                this.$emit('filterCards', str);
            }
        }
    };
</script>

<style scoped>
.header{
    flex: 0 0 auto;
    border-bottom: 1px solid #E1E1E1;
}
.header-container {    
    display: flex;
    justify-content: space-around;
    padding: 2.4rem 0 2.4rem 8rem;
    flex-wrap: wrap;
}
.header .main-nav{
    margin-right: 10rem;
}
    
</style>
