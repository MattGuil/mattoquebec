<template>
    <div id="navbar">
        <h1>mattoquébec</h1>
        <div id="menu">
            <router-link to="/">Préface</router-link>
            <router-link to="/preparatifs">Préparatifs</router-link>
            <router-link to="/voyage">Voyage</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
#navbar {
    width: 100%;
    height: 90px;
    background: linear-gradient(rgba(0, 61, 165, 0.5) 80%, #FFFFFF 20%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-weight: bold;
    font-style: italic;
    color: white;
    text-shadow: 3px 3px 0px #314E52;
    padding: 5px 0;
}

#menu {
    display: flex;
}

#menu a {
    background-color: #D9D9D9;
    padding: 5px 30px;
    transform: skewX(-10deg);
    text-decoration: none;
    color: #314E52;
}

#menu a.router-link-active {
    box-shadow: 0px 4px 0px #314E52;
}

#menu a:hover {
    box-shadow: 0px 4px 0px #FF8A00 !important;
}
</style>