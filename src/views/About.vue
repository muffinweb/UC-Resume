<template>
  <div style="margin-bottom: 80px;">
    <h1>Uğur Cengiz</h1>

    <div class="paragraph">
      <div>
        Hi There, I'm Ugur Cengiz. Game & Fullstack DevOps Developer. I've strong passion for making games, building applications and interested in cloud services.<br/><br>
        Outside of my regular activities, I'm into playing guitar whenever I have some free time. I'm also a huge kitten lover and enjoy traveling in nature.
      </div>

      <div style="margin-top: 20px;">You can check my works and prototypes on <router-link to="/game-projects">Games</router-link> page  <router-link to="/other-projects">Apps</router-link> page.</div>
      <div>My TechStack on <router-link to="/resume">Resume</router-link> page as well</div>

      <div style="margin-top: 40px;">I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !</div>
    </div>

    <div class="photo">
      <img style="border-radius: 100%" src="img/avatar.png" alt="Avatar of John" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "About"
  });
</script>