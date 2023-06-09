<template>
  
<div class="wrap" v-if="isAuthenticated()">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?">
        <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
        </button>
    </div>
</div>

<div class="SignUp"><button type="button" @click="SignUp" v-if="!isAuthenticated()">SignUp</button></div>
<div class="login"><button type="button" @click="login" v-if="!isAuthenticated()">Login</button></div>
<div class="logout" style=""><button type="button" @click="Logout" v-if="isAuthenticated()">Logout</button></div>
<SideBar>

</SideBar>

</template>

<script>
import SideBar from '@/components/View/SideBar&Footer/SideBar'

export default {
    name: 'App',
    methods: {
        isAuthenticated() {
          console.log("hi")
            return (localStorage.getItem("user-name") != undefined);

        },
        login() {
            this.$router.push({
                name: "Login-page"
            })
        },
        SignUp() {
            this.$router.push({
                name: "SignUp-page"
            })
        },

        Logout() {
            localStorage.clear();
            sessionStorage.clear();

            this.$router.push({
                name: "Login-page"
            })
        }
    },
    mounted() {
        
    },
    components: {
        SideBar
    }
}
</script>

<style>
.SignUp {

    margin-left: 960px;
    margin-top: -40px;
}

.SignUp button {
    background: aliceblue;
    width: 74px;
    border-radius: 16px;
    height: 34px;
}
.wrap{
    margin-left: 36px;
    
}
.login {
    margin-left: 1144px;
    margin-top: -34px;
}

.login button {
    background: aliceblue;
    width: 74px;
    border-radius: 16px;
    height: 34px;
}

.logout {
    margin-left: 1294px;
    margin-top: -34px;
}

.logout button {
    background: aliceblue;
    width: 74px;
    border-radius: 16px;
    height: 34px;
}

.search {
    width: 50%;
    position: relative;
    display: flex;
}

.searchTerm {
    width: 48%;
    border: 3px solid #ff5252;
    border-right: none;
    padding: 5px;
    margin-left: 246px;
    height: 20px;
    background-color: #000000;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #f4ebeb;
}

.searchTerm:focus {
    color: coral;
}

.searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #ff5252;
    background: #000000;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
