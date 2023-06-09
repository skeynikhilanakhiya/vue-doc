<script>
export default {
    name: "login-page",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            localStorage.setItem("user-info", this.email)
            sessionStorage.setItem("user-info", this.email, this.password);
            if (localStorage.getItem("user-name", this.username) === localStorage.getItem("user-info", this.email)) {
                this.$router.push({
                    name: "Home-page"
                })
            }
        },
        refresh() {
            let email = document.querySelector('.email');
            let psd = document.querySelector('.password');
            let check = document.querySelector('#rem');
            let msg = document.querySelectorAll('.msg');
            if (email.value == "") {
                msg[0].innerText = "Please enter a valid email address or phone number.";
            }
            if (psd.value == "") {
                msg[1].innerText = "Your password must contain between 4 and 60 characters.";
            } else {
                msg[0].innerText = "";
                msg[1].innerText = "";
                alert('Sign-in succesfully');
            }

            email.value = "";
            psd.value = "";
            check.checked = "";

        }

    },
    mounted() {

    }
}
</script>
<template>
<!-- Main Content -->
<!-- Logo -->
<!-- <Div class="container">
    <div class="wrpper">
        <div class="ite">
            <div class="logo"><img src="@/assets/music.png" alt=""></div>
        </div>

<div class="contain">

<form action="">

<label for="text">UserName : </label>

<input type="text">

</form>

</div>
    </div>
</Div> -->
<form @clcik="refresh()">
    <img src="@/assets/music.png" alt="" style="width: 57px;">

    <h3>Sign In</h3>

    <div class="inputbox">
        <label>Email or phone number</label>
        <input type="text" class="email" v-model="email">
        <p class="msg"></p>
    </div>

    <div class="inputbox">
        <label>Password</label>
        <input type="password" class="password" v-model="password">
        <p class="msg"></p>
    </div>

    <input type="submit" value="sign in" @click="login " class="submit">

    <div class="helpBox">
        <div class="checkBox">
            <input type="checkbox" id="rem">
            <label for="rem">Remember me</label>
        </div>

        <a href="##">Need help?</a>
    </div>

    <p class="sign">
        New to Music?
        <router-link to="/signup">
            <a href="##">Sign up now</a>.
        </router-link>
    </p>

    <p class="msg">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="##">Learn more.</a></p>

</form>

<!-- Footer -->
</template>

<style scoped>
.logo {
    width: 120px;
    position: absolute;
    top: 10px;
    left: 10px;
    filter: drop-shadow(0 0 25px #000);
}

form {
    width: 350px;
    margin-left: 381px;
    background: rgba(0, 0, 0, .70);
    padding: 80px 40px;
    color: #fff;
}

form h3 {
    color: #fff;
    text-transform: capitalize;
    font-size: 1.8em;
}

form .inputbox {
    margin: 25px 0;
    position: relative;
}

form .inputbox .msg {
    font-size: .70em;
    margin-top: 5px;
    color: #f00;
}

form .inputbox label {
    position: absolute;
    top: -10px;
    right: 8px;
    padding: 5px 15px;
    width: auto;
    font-size: .75em;
    user-select: none;
    color: #eee;
    background: #CC0202;
    border-radius: 20px;
}

form .inputbox input {
    border: none;
    outline: none;
    padding: 15px 15px;
    width: 100%;
    font-size: 1em;
    user-select: none;
    outline: 2px solid #CC0202;
    border-radius: 5px;
    background: #111;
    color: #fff;
}

form .inputbox input:focus {
    background: #222;
}

form .submit {
    width: 100%;
    border: none;
    outline: none;
    padding: 15px 0;
    font-size: 1em;
    text-transform: capitalize;
    color: #eee;
    background: #CC0202;
    border-radius: 5px;
    cursor: pointer;
}

form .submit:hover {
    background: #222;
    box-shadow: 0 0 20px #000;
}

form .helpBox {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    color: #777;
    font-size: .95em;
}

form .helpBox a {
    color: #777;
}

form .helpBox a:hover {
    text-decoration: underline;
}

form .sign {
    margin: 20px 0;
    font-size: 1.2em;
    color: #666;
}

form .sign a {
    color: #fff;
}

form .sign a:hover {
    text-decoration: underline;
}

form .msg {
    font-size: .75em;
    color: #555;
}

.fa-youtube-play {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: rgba(255, 0, 0, .75);
    cursor: pointer;

}

.fa-youtube-play a {
    text-decoration: none;
    font-size: .85em;
    color: rgba(255, 255, 255, .75);
}

.fa-youtube-play a:hover {
    color: rgba(255, 0, 0, .75);
}

h1 {
    color: aliceblue;
}

.container {
    border: 2px solid white;
}

.logo img {
    width: 100px;
}

.contain label {
    color: aliceblue;
}
</style>
