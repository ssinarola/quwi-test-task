<template>
    <div>
        <div class="header">
            <button @click.prevent="logoutHandler" class="logout">Logout</button>
        </div>
        <Nuxt />
    </div>
</template>
  
<script>
export default {
    name: 'DeafultPage',
    methods: {
        async logoutHandler() {
            await this.$auth.logout();
            this.$router.push('/login');
        }
    }
}
</script>

<style>
body {
    margin: 0 !important;
    padding: 0 !important;
    background-color: white
}

.header {
    margin: 0;
    padding: 0;
    height: 60px;
    background-color: white;
    color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-weight: 600;
    font-size: 15px;
    width: 100%;
}

.logout {
    color: #252537;
    height: 40px;
    padding: 0 20px;
    background-color: #c44512 !important;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    text-align: center;
    margin: 10px;
    letter-spacing: 0.05em;
    float: right;
}
</style>
  