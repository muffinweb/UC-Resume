<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Uğur Cengiz</strong>, 4 years experienced Software Developer. I develop Web App Solutions, 2D 3D Games, and useful tools.
      I've knowledge of designing software artitect, producing algorithmic solutions, containerizing, creating CI/CD pipelines and document stuff.
      My goal in App Development Scene is developing self-contained, sustainable products.
      <br />
      <br />I use Unity Game Engine to make 2D, 3D games. I can manage Humonoid Chacacters/Animation Controls, create shooter mechanics, design UI and so on.
      <br />Also i can create Roblox Levels with Roblox Studio. With Studio editor and Lua programming language i love to make levels in Roblox.
      I want to make entertaing, funny but hard at the same time Hyper-Casual mobile games that entartain gamers.
      <br />
      <br />I care about using tools that make work easier and help make the product sustainable.
      <br />And I also believe that sharing knowledge empowers and  learning never ends.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/CV-Ugur-Cengiz.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/ugurcengiz-photo.png" alt="Photo of Ugur Cengiz" style="border-radius: 100%;filter: grayscale(0.4)"/>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Tagum</h3>
      <h4>2020-2023</h4>

      <div>I Worked on e-Invoice Automations, ERP Applications, E-Commerce Projects, API Integrations</div>

      <div class="tech-stack">Javascript, SQL, PHP, Linux, CI3, Laravel, Tools</div>

      <h3>Bulrog</h3>
      <h4>2017-2018</h4>

      <div>I build many corporate web sites, developed useful wordpress plugins,tools. Excel based e-mail automations</div>

      <div class="tech-stack">Wordpress, PHP, SQL, Mailer</div>

      <h3>Calisto</h3>
      <h4>2016-2017</h4>

      <div>I developed CRM projects and improved built‑in tracking,messaging features.</div>

      <div class="tech-stack">SQL, Javascript, C#, PHP, Windows Form</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h4>Languages</h4>
        <SkillRate name="Javascript" :rate="4" />
        <SkillRate name="SQL" :rate="4" />
        <SkillRate name="PHP" :rate="4" />
        <SkillRate name="C#" :rate="3" />
        <SkillRate name="Unity Engine" :rate="3" />
        <SkillRate name="Lua" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Frameworks & Editor/Engines</h3>
        <SkillRate name="Unity Engine" :rate="3" />
        <SkillRate name="Roblox Studio" :rate="3" />
        <SkillRate name="Laravel" :rate="3" />
        <SkillRate name=".Net Core" :rate="3" />
        <SkillRate name="CodeIgniter 3" :rate="5" />

      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Bandirma University - 2024</h3>
      <h4>Associate Degree</h4>
      <div>Specialty in Programming and Architecting Desktop, Web Application Technologies</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>I can communicate with people in english at mid-level and read documantations for researching purposes</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Git</h3>
        <div>Version Control is essential tool i use</div>

        <h3>I 🧡 Docker</h3>
        <div>Not only application's source itself, But also creating it's base system</div>

        <h3>I 💛 DevOps</h3>
        <div>For Apps making CI/CD pipelines, testing,building,deploy automations is fun</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>