<template>
  <div>
    <h1>Resume</h1>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3><strong>Technical Designer</strong> - Studio Kismet</h3>
      <h4>October 2025 - Present | Orlando, FL</h4>
      <ul>
        <li>Developed <strong>Everent</strong>, a <strong>hoverboard skating game</strong> in <strong>Unreal Engine 5</strong>, with a multidisciplinary team of 23 people.</li>
        <li>Implemented <strong>diegetic UI elements</strong>, including pause menus, narrative journals, and interaction prompts, in collaboration with UI artists.</li>
        <li>Designed and built a <strong>3D compass system</strong> to help players <strong>navigate</strong> to points of interest in the open world.</li>
        <li>Implemented <strong>full controller remapping</strong> to enhance player customization and accessibility.</li>
        <li>Built a <strong>2D heatmapping tool</strong> that provided player position data for level design improvements.</li>
      </ul>
      <div class="tech-stack">Unreal Engine 5, UI/UX Design, Tools Design</div>

      <h3><strong>Project Lead</strong> - TMRW Sports</h3>
      <h4>January 2026 - May 2026 | Orlando, FL</h4>
      <ul>
        <li>Led a <strong>cross-functional development</strong> team to create <strong>simulation prototypes</strong> for a project under NDA.</li>
        <li>Coordinated <strong>design brainstorms</strong> to develop ideas for sports simulation software.</li>
        <li>Organized and <strong>distributed</strong> team <strong>tasks</strong> through <strong>Jira</strong>.</li>
      </ul>
      <div class="tech-stack">Rapid Prototyping, Team Leadership, Jira</div>

      <h2>Projects</h2>

      <h3>Drift or Die!</h3>
      <h4>February 2026 - October 2026</h4>
      <ul>
        <li>Developed a 3D racing game in <strong>Unreal Engine 5</strong> where players must drift to prevent their car from exploding.</li>
        <li>Scripted an intuitive <strong>car controller</strong> with a custom ray-traced suspension physics system.</li>
        <li>Used <strong>UE5 Blueprints</strong> to implement the car controller, environmental bombs, and UI.</li>
      </ul>
      <div class="tech-stack">Unreal Engine 5, Blueprints, Vehicle Physics, UI Design</div>

      <h3>Cozy Cat Cafe</h3>
      <h4>April 2026 - October 2026</h4>
      <ul>
        <li>Solo-developed a <strong>2D restaurant management simulator</strong> set in a French cat cafe.</li>
        <li>Designed and programmed three cooking <strong>UI minigames</strong> for preparing customer orders.</li>
        <li>Designed and scripted a <strong>finite state machine</strong> to control customer ordering, walking, and waiting for food.</li>
      </ul>
      <div class="tech-stack">Unity, C#, UI/UX Design, Customer AI</div>

      <h3>Adult Driver</h3>
      <h4>January 2026 - Present</h4>
      <ul>
        <li>Developed a 3D car combat game in <strong>Unity</strong> where players destroy enemy helicopters to escape a city.</li>
        <li>Designed and programmed a <strong>car controller</strong> in <strong>C#</strong> with player abilities for stealth and combat playstyles.</li>
        <li>Devised an <strong>enemy AI</strong> system that tracks the player in packs when alerted to a disturbance.</li>
      </ul>
      <div class="tech-stack">Unity, C#, Vehicle Physics, Enemy AI</div>

      <h3><a href="https://masterofbanks.itch.io/soccerwordle" target="_blank" rel="noopener noreferrer">Soccer Wordle</a></h3>
      <h4>May 2025 - August 2025</h4>
      <ul>
        <li>Built a <strong>full-stack web game</strong> where players guess soccer players instead of words.</li>
        <li>Created a <strong>Python</strong> web scraper to collect soccer player data from FBref.com.</li>
        <li>Designed and implemented a <strong>PostgreSQL</strong> database storing information on 4,000 soccer players.</li>
        <li>Created a <strong>RESTful API</strong> using <strong>Node.js</strong> and <strong>Express</strong> to deliver player data to the frontend.</li>
        <li>Designed the <strong>frontend</strong> in <strong>Unity and C#</strong> with a responsive player search bar and clear <strong>UI</strong>.</li>
      </ul>
      <div class="tech-stack">Python, PostgreSQL, Node.js, Express, Unity, C#</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Engines and programming</h3>
        <div><strong>Unity</strong></div>
        <div><strong>Unreal Engine 5</strong></div>
        <div><strong>Blueprinting</strong></div>
        <div><strong>C#</strong></div>
        <div><strong>C++</strong></div>
        <div><strong>Python</strong></div>
        <div><strong>JavaScript</strong></div>
        <div><strong>SQL</strong></div>
      </div>

      <div class="skill-set">
        <h3>Design and production</h3>
        <div><strong>UI/UX Design</strong></div>
        <div><strong>Tools Design</strong></div>
        <div><strong>Rapid Prototype Production</strong></div>
        <div><strong>Perforce</strong></div>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>FIEA - University of Central Florida</h3>
      <div><strong>M.S. in Interactive Entertainment</strong></div>

      <h3>University of Florida</h3>
      <div><strong>B.S. in Physics</strong></div>
    </div>

    <div class="download-links">
      <a :href="resumeUrl" download="T-Alexander-Campbell-Resume.pdf">Download resume (PDF)</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
  data() {
    return {
      resumeUrl: `${process.env.BASE_URL}d/t-alexander-campbell-resume.pdf`,
    };
  },
});
</script>

<style scoped>
.full-content strong {
  color: #d2b48c;
  font-weight: 700;
}

h1 {
  margin-bottom: 30px;
}

.full-content > h2:first-child {
  padding-top: 0;
}

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
  margin-top: 32px;
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
