import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Everent", "img/projects/everent.png", 
    `
    <div class="paragraph">
     <strong>Everent</strong> is my graduate school capstone project, and the best game I have worked on (so far). Working with a talented group of 18 developers, we created an open world windboarding game using <strong>Unreal Engine 5</strong>. Players ride, surf, and rail grind through a crumbling city while battling against an evil force known as the Halcyon Heart. I worked as a Technical Designer on this project, involving myself and taking charge in a variety of different sections of development. I primarily used Unreal Engine 5's <strong> Blueprint System</strong> for all  of my work on this project, but also wrote some <strong>C++</strong> code to interface with our custom player controller.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/xKO3J9afc3U" frameborder="0" allowfullscreen></iframe>
    </div>
    

    <div class="paragraph">
        <strong>UI/UX Designer and Programmer:</strong>
        <ul>
        <li>I was the foreman on everything UI related for Everent. Everything from the initial prototyping of player UI widgets (minimap, player HUDs) to final, polished versions of pause menus was under my purview. Being the UI Designer also put me in the intersection of other sections within the development team. For example, I worked closely with the programmer leading our save data back end to bring important progression statistics to the pause menu. The player could now track their progress through our game’s narrative and their proficiency in our time trial system.
        </li>
        <li>One of the main goals for our team was to create a fully realized, ship-ready game. To facilitate achieving that goal I developed and implemented a Controller Remapping System into our Pause Menu using UE5’s User Settings Class.
        </li>
         <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/6b5pPTGfers" frameborder="0" allowfullscreen></iframe>
        </div>
        <li> Our team also wanted to create a rich narrative to keep players engaged with our worldbuilding, and we needed a way to get this narrative information to the screen in an unobtrusive and visually pleasing way. To fill this need, I created a dialogue textbox tool with which our narrative team could write dialogue into UE5 data tables and load them into Narrative Points of Interests. Upon interacting with these POIs, the player could read through a series of lines filled with narrative information about the world. Finally, if they wanted to read more about the POI they just found, they could find it under the Narrative tab in the Pause Menu. To create this tab, I had to interface with our save backend to get which of our Narrative POIs the player had interacted with, and display that information to the screen with some text and a picture. 
        </li>
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/PHviTS-1umo" frameborder="0" allowfullscreen></iframe>
        </div>
        <li>I also worked closely with our art team to design UI Widgets that integrated well into our art style. One of the game’s mechanics is a boost feature that allows the player to gain massive speed, and we needed a UI component to tell the player how much boost they had at any given time. At first, I went with a large, arrow shaped design that took up a lot of screen space, distracting the player from the beautiful vistas our level designers and environmental artists spent so much time making. After 3 more revisions, I implemented a small, thin segment of a circle that moved with the player.  
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/PHviTS-1umo" frameborder="0" allowfullscreen></iframe>
        </div>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Heatmapping Tooling:</strong>
        <ul>
        <li>I also had the opportunity to work with our QA team to make some heatmapping tools for our open world playtests. At first we had a massive open world, with 5-6 POIs dotted around the map and large areas of desert dunes connecting them. To test whether players were finding these POIs naturally, I created a heatmapping system that could track player position during a playtest, and save the heatmap to a png for later analysis. During our next two open world play tests, players complained about boredom in the sections between our large POIs and not being able to find POIs. So our level designers looked at all of our heatmaps, and cut out large sections of desert dunes that players were not exploring. Our world was then more condensed and easily explorable. 
        </li>
        </ul>

        <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot" src="img/projects/rioHeatmap.png" alt="Heatmap before level adjustments" />
            <figcaption class="image-caption">Initial Heatmap: Player Paths focusing around POIs but not exploring vast desert dune areas</figcaption>
        </figure>
        
        <figure class="caption-wrapper">
            <img class="pc-screenshot" src="img/projects/condensedMap.png" alt="Heatmap after level adjustments" />
            <figcaption class="image-caption">Revised Map: Post-trimming density map; Level Designers used Heatmap data to remove sections of unexplored desert dunes</figcaption>
        </figure>
    </div>
    </div>
    

  
    
    `, "#23bd69", true),
    new ProjectData("project-2", "Singing Addict", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>Optimistic Chubby Blog</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Drawing Overload", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246")
];