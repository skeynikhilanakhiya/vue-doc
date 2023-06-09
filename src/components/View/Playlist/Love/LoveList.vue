<script>
import AllLovePlaylist from './AllLovePlaylist.vue';
export default {
    name: "love-list",
    components: {
        AllLovePlaylist
    },
    methods: {
        navigateTo(page) {
            this.page = page;
        },
    },
    mounted() {
        console.log(this.musicplaylist);
    },

    data() {
        return {
            page: "sun",
            message: "350 song",
            musicplaylist: [{
                "id": 1,
                "title": "Love",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis ullam molestiae",
                "thumbnail": "https://i.scdn.co/image/ab67616d00001e02095191f6b96fd9eff585befc",



            },
            ]
        }
    }
}
</script>
<template>
    <div v-for="item in musicplaylist" :key="item.id" style="  margin-left: -70px;">

        <router-link to="/">
            <img src="@/assets/rewind-button.png" alt="" style="width: 50px;  margin-left: -1142px;">

        </router-link>
        <div class="container" style=" background: linear-gradient(transparent 0,rgba(176, 245, 255, 0.5) 100%);">
            <div class="item">

                <div class="imges">
                    <img :src="item.thumbnail" alt="">
                </div>
            </div>
        </div>

        <div class="head">
            <h1>{{ item.title }}</h1>
        </div>
        <div class="para">
            <p>{{ item.description }}</p>
        </div>
        <div class="crak">
            <img src="@/assets/music.png" alt="">
        </div>
        <div style="margin-top: -39px;margin-left: -72px;">
            <b>Play With Music</b>
            <i style="color: aliceblue;margin-left: 10px;">
                {{ message }}
            </i>
        </div>

        <div class="wrapper">
            <div class="items">
                <div class="wrap">
                    <div class="imge">
                        <img src="@/assets/play.png" v-on:click="navigateTo('They')" alt="" style="cursor: pointer;">
                        <div style="  margin-top: -25px;">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVR4nO2Uu0oDQRSGNxYhKGpnF/Q5rIyFpBG08VKqYLyAL6CtaOUtRNRnsNB0oj6A4jtEC2PQRm1UFD4ZchaGYXazm+xEEQ8sJPv/53z/zOyu5/3Xf/3GAjqAaaAMVIEv4BG4AGaAjKUnA8wCl8CT9KjeU2BSzYwKHwBuCK8aMKb1jMu9sLoG+qPAa9JQAeaBLJAWbRm404auAxva/1tgSbxp6V2Q+6oeAkNQ33Z/5WdAd4BPbfUa8KmB1e9V29FITw9wLt4r63EAU9rKrXDDPwy8AM9ALoK/V9u9CZuhLGKh0TCtZ0hdMfyLwjixiVURs56jUucvjHub+CFip8MAXcJ4t4kVEQcdBsj5z5lN3BHx2GEA9XapKtrEPuBVDHMO4AWZ/Rb4nFH/aPimfILwvDp3mb3SyLyVZAiBq1mqtqM2bUqDejNGW4CPxIYnFcKAqwc8FXdACthtJoQBP4gNbyVEYvBmQhjww5bhRoi9sBDO4FFCGPCjxOFhIdoGN0KUtI+VDy85hxshigJuz8oDQuzL1V64EeJn4N5fqW8/roA/jQ8o9QAAAABJRU5ErkJggg=="
                                alt="" style="height: 53px;
  margin-left: -920px;
  margin-top: -56px;
  width: 55px;">
                        </div>
                        <div class="more">
                            <img src="@/assets/more.png" alt=""
                                style="height:57px;  margin-left: -765px;margin-top: -58px;width: 45px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AllLovePlaylist></AllLovePlaylist>
    </div>
</template>

<style scoped>
h2 {
    color: antiquewhite;
}

.imge img {
    width: 67px;
    margin-left: -1090px;
}

.head {
    color: aliceblue;
}

.crak img {
    width: 43px;
    margin-left: -310px;

}

.wrapper {
    margin-top: 24px;
    background: linear-gradient(black 10%, rgba(79, 91, 93, 0.5) 90%)
}

.head h1 {
    margin-top: -137px;
    margin-left: -122px;
}

.para p {
    color: aliceblue;

    margin-left: 290PX;
}

.imges img {
    width: 212px;
    margin-left: -658px;

}

#simp {
    max-width: 1525px;
    font-size: 14px;
    font-family: "Segoe UI", Tahoma, sans-serif;
    text-align: initial;
    line-height: initial;
    background: #17212b;
    color: #ddd;
    margin: 0 auto;
    border-radius: 6px;
    overflow: hidden;
}

#simp ul[data-v-3f325278] {
    overflow-y: auto;
    overflow-x: hidden;
}

#simp ul li .simp-desc[data-v-3f325278] {
    font-size: 90%;
    opacity: .5;
    margin-left: 5px;
}
</style>
