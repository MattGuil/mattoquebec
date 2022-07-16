<template>
    <div id="footer">
        <p>Copyright 2022 mattoquébec | Mentions Légales | All Rights Reserved</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
#footer {
    width: 100%;
    height: 90px;
    background: rgba(0, 61, 165, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    font-weight: 400;
    color: white;
    font-size: .75rem;
    text-align: center;
    padding: 0 10px;
}
</style>