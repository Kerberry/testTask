<template>
    <nav class="main-nav">
        <ul class="nav-list">
            <li class="nav-item">
                <a href="#" class="nav-link">Каталог</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Доставка</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Оплата</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Контакты</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">О компании</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
    };
</script>

<style scoped>
    .main-nav{
        display: flex;
        align-items:flex-end;
        margin-bottom: 1.4rem;
    }
    
    .nav-list {
        display: flex;
        width: 54.2rem;
        justify-content: space-between;
        align-items: center;
    }
    .nav-item {
        list-style-type: none;
    }
    .nav-link {
        font: 400 1.4rem 'Merriweather', serif;
        text-decoration: none;
        color: #343030;
    }
</style>