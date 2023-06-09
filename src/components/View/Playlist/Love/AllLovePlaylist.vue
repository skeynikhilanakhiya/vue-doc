<script>
export default {
    name: "sad-list",
    methods: {
        navigateTo(itemid) {

            console.log('Clicked item with ID:', itemid);
        },
        navigateTos(page) {
            this.page = page;

        },
    },

    mounted() {

    },

    data() {
        return {
            page: 'sun',
            message: "350 song",
            musicplaylists: [{
                    "id": 1,
                    "musicimg": "https://i.scdn.co/image/ab67616d00004851e50a6d11c72c3c11c134e5a0",
                    "musictitle": "Jo Tu Na Mila",
                    "musicmadby": "Asim Azhar",
                    "source": "/music/song/phir-aur-kya-chahiye-from-zara-hatke-zara-bachke/sa_8907212007012_INH102307527"

                },
                {
                    "id": 2,
                    "musicimg": "https://i.scdn.co/image/ab67616d00004851899494fd2fbd757674459af3",
                    "musictitle": "Main Rahoon Ya Na Rahoon",
                    "musicmadby": "Arman Malik",
                    "source": "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3"

                }, {
                    "id": 3,
                    "musicimg": "https://i.scdn.co/image/ab67616d00004851f03c4d5b0c0669c7e14dfb24",
                    "musictitle": "Bolna",
                    "musicmadby": "Arjit Signh ,Asses Kour",
                    "source": "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3"

                }, {
                    "id": 4,
                    "musicimg": "https://i.scdn.co/image/ab67616d000048516597f07e711333210fa77b1c",
                    "musictitle": "Asal Main",
                    "musicmadby": "Darshan Raval",
                    "source": "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3"

                },
            ]
        }
    }
}
</script>
<template>
<div v-for="item in musicplaylists" :key="item.id">

    <div class="playlist">
        <div class="simple-audio-player" id="simp">
            <div class="simp-playlist">
                <ul>
                    <li>
                        <span><img :src="item.musicimg" @click="navigateTo(item.id)" alt="" style="width: 43px;">
                        </span>
                        <span class="simp-source" v-on:click="navigateTos('list_' + item.id)" data-src="http://www.archive.org/download/CanonInD_261/CanoninD.mp3" style="margin-left: 20px;">{{ item.musictitle }}</span><span class="simp-desc">{{item.musicmadby }}</span> <i class="fa-solid fa-circle-play"></i>
                    </li>

                </ul>
            </div>

        </div>
    </div>
    <!-- I am not the owner of these tracks. track images are 22 - 27 -->
    <div v-if="page === 'list_' + item.id" style="  background: black;
  width: 364px;
  float: right;">
        <img :src="item.musicimg" style="width: 57px;   height: 56px;">

        <audio controls style="     background: rgb(8, 8, 8);  border: 3px solid white;
  border-radius: 28px;">
            <source :src="item.source">

        </audio>

    </div>

</div>
</template>

<style scoped>
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

.simp-desc {
    font-size: 90%;

    opacity: .5;
    margin-left: 5px;
}
</style>
