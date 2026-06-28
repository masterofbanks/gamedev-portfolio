<template>
  <div style="margin-bottom: 80px;">
    <h1>Tarik Campbell</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Tarik Campbell</strong>, a Game Technical Designer specializing in <strong>Tools Design, Car Controllers, and UI/UX Design</strong>.<br/>
      </div>

      <div>
        <br/>
        I have been making games for 8 years, developing everything from small console applications to large open world Unreal Engine 5 games, with teams of various sizes. But I only really started taking game development seriously after my first game jam with a college roommate. After a strenuous 72 hour blitz of coding and pixel art, I invited a friend to play our game. The smile that appeared on his face brought me a level of joy I had never experienced, and from then on I decided to make this my career, still trying to feel that joy everyday. 
      </div>

      <div style="margin-top: 20px;">Over the past 9 months, I have had the opportunity to work with some extremely talented people on what is the best game project I have worked on, <router-link to="/game-projects">Everent</router-link>, an open-world hoverboarding game. I am also a frequent game jam entrant, and you can play some of my game jam projects on my <a href="https://masterofbanks.itch.io/">itch.io page</a>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for my next opportunity</strong> as a Technical Designer. You can reach me at <a href="mailto:tarikalex2003@gmail.com">tarikalex2003@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/son.png" alt="Avatar of John" /> 
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
    padding: 0px;
    padding-left: 80px;
    width: 400px;
  }
}

</style>