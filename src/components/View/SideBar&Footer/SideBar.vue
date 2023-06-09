<script>
export default {
    name: "nav-bar",
    methods: {
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        },

        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        },
       
        
        Home() {
            this.$router.push({
                name: "Home-page"
            })
        },
        Music(){
      this.$router.push({
        name: "Home-list"
      })
        },
        music() {
            if (localStorage.getItem("user-info", this.email)) {
                this.$router.push({
                    name: "Login-page"
                })
            }
        }
    }
}
</script>
<template>
<!-- <img src="@/assets/music.png" alt="" style="  width: 60px;
  float: left;
  margin-top: -36px;"> -->
 <div class="sidebar">
 <img src="@/assets/music.png" style="  width: 50px;
  margin-top: 40px;" alt="">
 <div style="margin-top: 93px">
      <a href="#" @click="Home"><i class="fa fa-fw fa-home"></i> Home</a>
      <a href="#" @click="Music"><i class="fa fa-fw fa-sharp fa-light fa-music"></i> Music</a>
      <a href="#"><i class="fa fa-fw fa fa-book fa-fw"></i> Library</a>
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
 </div>
    </div>
    <div class="main">
  <router-view></router-view>
      
      </div>
</template>

<style scoped>

h2 {
    color: white;
}.sidebar {
  height: 100%;
  width: 249px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 268px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>
