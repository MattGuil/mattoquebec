<template>
    <div id="navbar">
        <h1>mattoquébec</h1>
        <div id="menu">
            <div>
                <router-link to="/">Préface</router-link>
            </div>
            <div>
                <router-link to="/preparatifs">Préparatifs</router-link>
            </div>
            <div>
                <router-link to="/voyage">Voyage</router-link>
            </div>
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
    background: rgba(0, 61, 165, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-weight: bold;
    font-style: italic;
    color: white;
    text-shadow: 3px 3px 0px #314E52;
}

#menu {
    background-color: #D9D9D9;
    display: flex;
}

#menu div {
    padding: 10px 30px;
}

#menu div:hover {
    box-shadow: 0px 4px 0px #FF8A00;
}

#menu a {
    text-decoration: none;
    color: #314E52;
}
</style>