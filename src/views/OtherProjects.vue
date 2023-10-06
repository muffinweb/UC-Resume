<template>
  <div>
    <h1>Apps & Tools</h1>

    <div style="margin-bottom: 30px;">
      And here are some other stuff I've made which are in Fullstack fields except game development.
    </div>
    <ProjectsList v-bind:projects="projects" />

    <!--<div style="margin-top: 20px;">You can check <a target="_blank" href="https://github.com/muffinweb">Github</a> for more</div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
