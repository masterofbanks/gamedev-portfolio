import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "DoomCharge", "img/projects/DoomCharge.gif", `
    <div class="paragraph">
     <strong>DoomCharge</strong> was the first game jam submission I ever won an award for, winning Streamer’s Choice Award at Score Space Jam. The theme for this Jam was “Charge” and my college roommate and I had to integrate a leaderboard system into gameplay as a rule for the jam. We created a WarioWare Style minigame collection game about trying to keep your phone charged while different events keep disconnecting your phone charger. Sometimes your charger outlet would catch fire and you have to put it out with an oven mitt, or your power would go out and you have to search in the dark to turn it back on. The biggest learnings from this project came from assembling the code architecture that switches the game between the different minigames. By creating EnterMinigame and ExitMinigame methods within the GameManager class that could be called from Minigame classes, flow between different minigames was maintainable and scalable. As soon as we got 2 minigames flowing together, adding more was easy, which was incredibly useful since we only had 3 days to make the whole game. 

    </div>
    <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot interaction-diagram" src="img/projects/DoomCharge.gif" alt="Heatmap before level adjustments" />
            
        </figure>
    </div>

     <div class="paragraph">
        <div class="notice">
        <a href="https://masterofbanks.itch.io/doomcharge" target="_blank">Play Here!</a>
        </div>
    </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "Soccer Wordle", "img/projects/SoccerWordle.gif", `
    <div class="paragraph">
     <strong>Soccer Wordle</strong> was a fun side project I made during the summer between my undergraduate and graduate degrees. It is a full-stack web game inspired by Wordle, where users try to guess a mystery soccer player. By guessing more times, users can get more information about the mystery soccer player. There were 3 major parts to this project: constructing a data set for the soccer players, creating a Rest API to retrieve data from that data set and bring it to the front end, and constructing an easy to use front end where users could guess players. Without an easily publicly available data set for players, I created a webscraper that scraped FBref.com, a website for data on soccer players, and outputted a csv file of player data. I then learned the basics of SQL, and turned the contents of the csv file into a SQL database. From here, I utilized Nodejs and Express to create a Rest API that could retrieve specific player data from the SQL database for a variety of different user inputs: soccer player name, ID, etc. Finally, I utilized Unity and C# to create the front end of the project, with the player search bar querying the Rest API via its URL, and displaying soccer player data on user request. 
    </div>
    <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot interaction-diagram" src="img/projects/SoccerWordle.gif" alt="Heatmap before level adjustments" />
            
        </figure>
    </div>

    `, "#1ca1e2"),
    
];