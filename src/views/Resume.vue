<template>
  <div>
    <h1>Resume</h1>
    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Technical Designer - Studio Kismet</h3>
      <h4>October 2025 - Present | Orlando, FL</h4>
      <ul>
        <li>Developed Everent, a hoverboard skating game in Unreal Engine 5, with a multidisciplinary team of 23 people.</li>
        <li>Implemented diegetic UI elements, including pause menus, narrative journals, and interaction prompts, in collaboration with UI artists.</li>
        <li>Designed and built a 3D compass system to help players navigate to points of interest in the open world.</li>
        <li>Implemented full controller remapping to enhance player customization and accessibility.</li>
        <li>Built a 2D heatmapping tool that provided player position data for level design improvements.</li>
      </ul>
      <div class="tech-stack">Unreal Engine 5, UI/UX Design, Tools Design</div>

      <h3>Project Lead - TMRW Sports</h3>
      <h4>January 2026 - May 2026 | Orlando, FL</h4>
      <ul>
        <li>Led a cross-functional development team to create simulation prototypes for a project under NDA.</li>
        <li>Coordinated design brainstorms to develop ideas for sports simulation software.</li>
        <li>Organized and distributed team tasks through Jira.</li>
      </ul>
      <div class="tech-stack">Rapid Prototyping, Team Leadership, Jira</div>

      <h2>Projects</h2>

      <h3><a href="https://masterofbanks.itch.io/soccerwordle" target="_blank" rel="noopener noreferrer">Soccer Wordle</a></h3>
      <h4>May 2025 - August 2025</h4>
      <ul>
        <li>Built a full-stack web game where players guess soccer players instead of words.</li>
        <li>Created a Python web scraper to collect soccer player data from FBref.com.</li>
        <li>Designed and implemented a PostgreSQL database storing information on 4,000 soccer players.</li>
        <li>Created a RESTful API using Node.js and Express to deliver player data to the frontend.</li>
        <li>Designed the frontend in Unity and C# with a responsive player search bar and clear UI.</li>
      </ul>
      <div class="tech-stack">Python, PostgreSQL, Node.js, Express, Unity, C#</div>

      <h3>Drift or Die!</h3>
      <h4>February 2026 - Present</h4>
      <ul>
        <li>Developed a 3D racing game in Unreal Engine 5 where players must drift to prevent their car from exploding.</li>
        <li>Scripted an intuitive car controller with a custom ray-traced suspension physics system.</li>
        <li>Used UE5 Blueprints to implement the car controller, environmental bombs, and UI.</li>
      </ul>
      <div class="tech-stack">Unreal Engine 5, Blueprints, Vehicle Physics, UI Design</div>

      <h3>Cozy Cat Cafe</h3>
      <h4>April 2026 - Present</h4>
      <ul>
        <li>Solo-developed a 2D restaurant management simulator set in a French cat cafe.</li>
        <li>Designed and programmed three cooking UI minigames for preparing customer orders.</li>
        <li>Designed and scripted a finite state machine to control customer ordering, walking, and waiting for food.</li>
      </ul>
      <div class="tech-stack">Unity, C#, UI/UX Design, Customer AI</div>

      <h3><a href="https://masterofbanks.itch.io/dungeoneer-and-the-3-gifts" target="_blank" rel="noopener noreferrer">Dungeoneer and the 3 Gifts</a></h3>
      <h4>April 2024 - October 2024</h4>
      <ul>
        <li>Created a 2D precision platformer in Unity where players use power-ups to explore a sprawling dungeon.</li>
        <li>Implemented fluid, snappy movement and a Metroidvania-style power-up progression system.</li>
        <li>Used C# to program player movement, camera control, and environment control scripts.</li>
      </ul>
      <div class="tech-stack">Unity, C#, Gameplay Programming</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Engines and programming</h3>
        <div>Unity</div>
        <div>Unreal Engine 5</div>
        <div>Blueprinting</div>
        <div>C#</div>
        <div>C++</div>
        <div>Python</div>
        <div>JavaScript</div>
        <div>SQL</div>
      </div>

      <div class="skill-set">
        <h3>Design and production</h3>
        <div>UI/UX Design</div>
        <div>Tools Design</div>
        <div>Rapid Prototype Production</div>
        <div>Perforce</div>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>FIEA - University of Central Florida</h3>
      <h4>August 2025 - Present | Orlando, FL</h4>
      <div>M.S. in Interactive Entertainment</div>

      <h3>University of Florida</h3>
      <h4>August 2021 - May 2025 | Gainesville, FL</h4>
      <div>B.S. in Physics</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
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

.download-links {
  margin: 20px 0;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div,
.full-content ul {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
  max-width: 100%;
  object-fit: cover;
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