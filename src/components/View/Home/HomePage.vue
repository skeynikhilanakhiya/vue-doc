<script>
export default {
    name: "home-page",
    methods: {
        list() {
            this.$router.push({
                name: "piano-list"
            })
        },
         
    },
    mounted() {

    }
}
</script>
<template>
 
<h2>HomePage</h2>
<div class="container" style="background: black;  margin-left: -42px;">
    <div class="items">
        <div class="imges">
            <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="">

            <img src="@/assets/play.png" alt="" class="play" v-on:click="list" style="cursor: pointer;">

            <div class="paragraph">
                <p>Nikhil Playlist</p>
            </div>
        </div>

        <div class="imges">
            <img src="https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5" alt="">
            <router-link :to="{ name: 'Playlist', params: { slug: 'Playlist' } }" >
        <img src="@/assets/play.png" alt="" class="play" style="cursor: pointer;">
            </router-link>

            <div class="paragraph">
                <p>Deep Focus</p>
            </div>
        </div>
        <div class="imges">
            <img src="https://i.scdn.co/image/ab67616d00001e027569cbe3695608074d9fd389" alt="">
            <router-link to="/study/playlist">
            <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
            </router-link>

            
            <div class="paragraph">
                <p>Love Playlist</p>
            </div>
        </div>
        <div class="imges">
            <img src="https://i.scdn.co/image/ab67706f00000002fd2bf73dc05c8d0a1fd4f282" alt="">
            <router-link to="/sad/hindi/playlist">
            <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
            </router-link>

            
            <div class="paragraph">
                <p>Sad</p>
            </div>
        </div>
        <div class="imges">
            <img src="https://i.scdn.co/image/ab67616d00001e02095191f6b96fd9eff585befc" alt="">
            <router-link to="/love/list">
            <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
            </router-link>

            
            <div class="paragraph">
                <p>Love </p>
            </div>
        </div>
        <div class="imges">
            <img src="https://i.scdn.co/image/ab67706f000000026e192f0af72c8a40c3b3e1f5" alt="">
            <router-link to="/moment/list">
            <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
            </router-link>

            
            <div class="paragraph">
                <p>Momment</p>
            </div>
        </div>
        <div class="imges">
            <img src="https://i.scdn.co/image/ab67706f00000002ba1149f135035bc23c4a7f25" alt="">
            <router-link to="/reading/relex/list">
            <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
            </router-link>

           
            <div class="paragraph">
                <p>Reading Relex</p>
            </div>
        </div>
        <div class="imges" style="  margin-top: 14px;">
            <img src="https://i.scdn.co/image/ab67706f00000002fee0aa7c6bfc815873e45f9e" alt="">
            <!-- <router-link> -->
            <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
            <!-- </router-link> -->

            
            <div class="paragraph">
                <p>Adventure</p>
            </div>
        </div>
        <div class="imges" style="  margin-top: 14px;">
                <img src="https://i.scdn.co/image/ab67616d00001e02bca30634e6cad10b97c03d21" alt="">
                <!-- <router-link> -->
                <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
                <!-- </router-link> -->

            
                <div class="paragraph">
                    <p>Ae Dil hai Mushkil</p>
                </div>
            </div><div class="imges" style="  margin-top: 14px;">
                <img src="https://i.scdn.co/image/ab67616d00001e029afa247096830f85f74d3b8e" alt="">
                <!-- <router-link> -->
                <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
                <!-- </router-link> -->

            
                <div class="paragraph">
                    <p>Pritam</p>
                </div>
            </div><div class="imges" style="  margin-top: 14px;">
                <img src="https://i.scdn.co/image/ab67616d00001e024f63ea7bb431131b4aa5b0d2" alt="">
                <!-- <router-link> -->
                <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
                <!-- </router-link> -->

            
                <div class="paragraph">
                    <p> Remembering KK</p>
                </div>
            </div><div class="imges" style="  margin-top: 14px;">
                <img src="https://i.scdn.co/image/ab67616d00001e02913edcaccb2268647d0c495b" alt="">
                <!-- <router-link> -->
                <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
                <!-- </router-link> -->

            
                <div class="paragraph">
                    <p> Bramastra</p>
                </div>
            </div><div class="imges" style="  margin-top: 14px;">
                <img src="https://i.scdn.co/image/ab67616d00001e02cb2d661326ec6b589a228270" alt="">
                <!-- <router-link> -->
                <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
                <!-- </router-link> -->

            
                <div class="paragraph">
                    <p>Bhool Bhulaiya 2</p>
                </div>
            </div><div class="imges" style="  margin-top: 14px;">
                <img src="https://i.scdn.co/image/ab67616d00001e029f70e983fb1c0e64d561597c" alt="">
                <!-- <router-link> -->
                <img src="@/assets/play.png" alt="" class="play"  style="cursor: pointer;">
                <!-- </router-link> -->

            
                <div class="paragraph">
                    <p>Tadap</p>
                </div>
            </div>
    </div>
</div>
</template>

<style scoped>
h2 {
    color: aliceblue;
    font-family: cursive;

}

.paragraph {
    color: aliceblue;
    background: rgb(0, 0, 0);
    height: 38px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 30%;
  position: absolute;
  top: 9%;
  left: 31%;
  transform: translate(-50%, -50%);
}
.imges .play:hover {
    display: inline;
    width: 55px;
    margin-top: -36px;
    float: left;
    position: absolute;
    margin-left: 31px;
}

.imges .play {
    width: 55px;
    margin-top: -36px;
    float: left;
    position: absolute;
    margin-left: 31px;
}

.paragraph p {
    padding: 7px;
    font-family: fantasy;
}

.items {
    display: flex;  flex-wrap: wrap;
    margin-left: 49px;
}

.imges img {
    width: 162px;
    margin-right: 29px;
}

.imges {
    background-color: black;
    margin-right: 12px;
    width: 165px;
}
</style>
