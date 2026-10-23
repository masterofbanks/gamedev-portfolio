import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Everent - Primary Focus: UI/UX", "img/projects/everent.png", 
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
        <iframe src="https://blueprintue.com/render/9d60novd/" style="width: 100%; height: 600px; border: 0;" scrolling="no" allowfullscreen></iframe>
        </div>
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/i43LnVx8yMo" frameborder="0" allowfullscreen></iframe>
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
    /*new ProjectData("project-1", "Project Everglades", "img/projects/everent.png", 
    `
    <div class="paragraph">
     <strong>Project Everglades</strong> is a multiplayer co-op exploration game, made in Unreal Engine 5, where you and your friends explore a vast swamp and hunt invasive species. I am the Technical Lead for this project, serving as the foreman for everything network, player controller, and NPC AI-related for a team of 10 people. 
    </div>
    
    

    <div class="paragraph">
        <strong>Lobby Networking:</strong>
        <ul>
        <li>Some of my best work on this project so far is in leveraging Unreal Engine 5’s Networking System to create the necessary components to interact with our game. For instance, I created a lobby system with the Steam Subsystem plugin, where players can host lobbies and invite friends via Steam’s Online Subsystem interface. Other players can also join their friend’s private lobbies by inputting a lobby code, or join public lobbies.
        </li>
         <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/6b5pPTGfers" frameborder="0" allowfullscreen></iframe>
        </div>
        <li> Our team also wanted to create a rich narrative to keep players engaged with our worldbuilding, and we needed a way to get this narrative information to the screen in an unobtrusive and visually pleasing way. To fill this need, I created a dialogue textbox tool with which our narrative team could write dialogue into UE5 data tables and load them into Narrative Points of Interests. Upon interacting with these POIs, the player could read through a series of lines filled with narrative information about the world. Finally, if they wanted to read more about the POI they just found, they could find it under the Narrative tab in the Pause Menu. To create this tab, I had to interface with our save backend to get which of our Narrative POIs the player had interacted with, and display that information to the screen with some text and a picture. 
        </li>
        <div class="paragraph center">
        <iframe src="https://blueprintue.com/render/9d60novd/" style="width: 100%; height: 600px; border: 0;" scrolling="no" allowfullscreen></iframe>
        </div>
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/i43LnVx8yMo" frameborder="0" allowfullscreen></iframe>
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
            <figcaption class="image-caption">Revised Map: Post-t   rimming density map; Level Designers used Heatmap data to remove sections of unexplored desert dunes</figcaption>
        </figure>
    </div>
    </div>
    

  
    
    `, "#2326bd", true),*/
    new ProjectData("project-2", "Adult Driver", "img/projects/cartoonCar.png", 
    `
    <div class="paragraph">
     <strong>Adult Driver</strong> is an isometric Car Combat game, where players can utilize a wide toolset of abilities to destroy enemy helicopters and escape a city. Players can either play stealthily, sneaking up on patrolling helicopters and hacking them using a typing minigame, or aggressively, barreling around the map at max speed, taking helicopters down using their electromagnetic pulse ability. <strong>Made with Unity and C#</strong>, this project offered a great opportunity to design and implement balanced enemy AI. With the player having a variety of options for combat, enemies had to offer equal challenge for disparate situations and tight transitions between these situations. I utilized the State Pattern to make a Finite State Machine to control different Enemy AI actions. Enemies could directly chase the player in packs when in the “Chase State”, patrol the map when in “Idle State,” and slowly track the player when in “Suspicious State.” Different events fired off in a Game Manager class transitioned enemies to new states. Players raced against the clock to kill a set number of enemies and learn an exit code to escape the city. 
  
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/b2l4c1VCCSE" frameborder="0" allowfullscreen></iframe>
    </div>
    

    <div class="paragraph">
        <strong>Modular Car System:</strong>
        <ul>
        <li>One of the main inspirations for this game was Smashy Road, an isometric driving game where you run from the cops. One of the best things about Smashy Road was the immense variety of cars you could drive in that game. However, something I found lacking in Smashy Road was the lack of variety in driving feel between the hundreds of different cars. So, one of the goals with Adult Driver was to create a driving physics system that could produce immensely different game feel from car to car. Vehicles have 12 configurable settings (weight, top speed, wheel grip, tire mass, brake force, suspension spring length, etc.) that produce vastly different turning speeds, acceleration, and braking characteristics. For instance, to simulate F1 style car physics for my race car asset, I increased the wheel grip scaling from 0.5 to 0.65, the maximum power by 100 horsepower, and decreased the weight to 10 kilograms. I also simulated how real-life engines apply power to wheels by using an Animation Curve to modulate power to the wheels relative to the engine’s rotation speed. I could then change that Animation Power curve for different cars, with a large tractor having maximum power low in the rev-range, and normal sedans gradually increasing power with speed. 
        </li>
         <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/vVRLY-wviDA" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>

    <div class="paragraph">
        <strong>Abilities Design and Balance:</strong>
        <ul>
        <li>I also wanted to give the player multiple ways to bring down enemies. So I developed Combat Abilities to support stealth and open combat against enemy helicopters. The first was an electromagnetic pulse ability that would emit outwards from the player and bring down helicopters. This ability had a cooldown, and would charge over time, but players could immediately charge it by crashing into energy canisters dotted around the map. To balance this ability, using EMP blasts and crashing into canisters is loud, alerting the attention of nearby enemies and pushing the player into more overt combat encounters. To escape pursuing enemies, players could use the second ability: a smoke bomb. Using this item in the proximity of enemies would stun them, freezing them in place and blinding them from the enemy, allowing the player to escape entire groups of enemies. The final ability I implemented was a Hacking ability. Players could sneak up behind enemy helicopters and activate a hacking-typing minigame. Upon activating, players would type in the self-destruct code for the helicopter, bringing it down and gaining massive score. 
        </li>
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/wV3261fGHow" frameborder="0" allowfullscreen></iframe>
        </div>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Enemy AI System:</strong>
        <ul>
        <li>I implemented Enemy Behavior using a Finite State Machine, as I wanted enemies to decide between a discrete set of actions at any given time. Enemy helicopters had 5 states: a Patrol State where they navigate between set points in the level at a slow crawl; a Chase state where they follow the player at max speed and periodically shoot at them; an Intrigued State which is prompted whenever the player makes a loud sound (explosion or EMP ability usage) and makes the enemy go investigate wherever the player was 10 seconds before current game time; a Stunned state where the enemy is locked in place and loses sight of the player (prompted by a smoke bomb ability on the player); and a Dead state, which makes the enemy fall to the ground and explode. Originally, I only implemented 3 states: Patrol, Chase and Dead. But this implementation of the FSM made the hacking ability almost useless, as enemies could always pathfind to the player regardless of how well the player drove or how many enemies they killed. More enemies would always come for them. So, I added the Stun State as a transition state between Patrol and Chase to give players the chance to escape enemies by using the smoke bomb ability. I then added the Intrigued state to decrease the efficacy to which players could find players after hearing an explosion. 
        </li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        View Code Here!: <a href="https://github.com/masterofbanks/BankRobbersCode" target="_blank">GitHub Repository</a>.
        </div>
    </div>
    </div>
    `, "#ff0808"),
        new ProjectData("project-3", "Drift or Die!", "img/projects/car.png", 
    `
    <div class="paragraph">
     <strong>Drift or Die!</strong>  is a car drifting simulator <strong>made using Unreal Engine 5 and Blueprints.</strong> Taking inspiration from the movie Speed, a bomb is strapped on the player’s car, and will ignite if the player does not drift for 3 seconds. So players have to keep the car drifting around a small city to prevent their car from exploding. They can also rack up drift points by performing high speed drifts at large turning angles.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/08wD6nHihBc" frameborder="0" allowfullscreen></iframe>
    </div>
    

    <div class="paragraph">
        <strong>Designing Realistic Vehicle Physics and Tuning Game Feel:</strong>
        <ul>
        <li>This game lived and died by its car physics. So, I spent most of my time on this project on making the car feel fun to drift around. Using a similar approach to Adult Driver, I implemented a raycast-based suspension system to simulate how real life coil springs push the car off the ground. Each “wheel” continuously shot a raycast down at the ground, calculating the distance between the center of the wheel and the ground. I then calculated the difference between this distance and the suspension rest length, a constant that I could set depending on what kind of physics I wanted for the car. With that offset value, I could then directly calculate how much force to apply to a wheel via Hooke’s Law, and then subtract off a damping value to make the wheel more absorbent to the spring’s velocity. Applying this force continuously on all 4 wheels of the car rendered a complete suspension system. This approach made the car a more physically simulated object, yielding a car that could physically react to bumps in the road. 
        </li>
        <div class="paragraph center">
        <iframe src="https://blueprintue.com/render/savny0g1/" style="width: 100%; height: 600px; border: 0;" scrolling="no" allowfullscreen></iframe>
        </div>
        </ul>

        <ul>
        <li> With the suspension simulated, I then added a tire slipping model to simulate steering. I again directly calculated the force needed to simulate the physics of this situation. First, I found the relative velocity of a tire in the direction of its forward vector, and divided it by delta time to yield the tire’s acceleration. To simulate tire slipping, I needed to apply a force opposite the tire’s velocity, so tires could resist lateral movement and push the tire back in line relative to its forward vector. F = ma, according to Newton’s Second Law of Motion, so with the addition of a constant for the mass of the tire, and a scaling constant so I could modulate how much tire slipping I wanted to apply to a tire, I could now directly calculate the tire force on the car given its velocity:
        </li>
        <div class="paragraph center">
        <iframe src="https://blueprintue.com/render/mh-wx4fs/" style="width: 100%; height: 600px; border: 0;" scrolling="no" allowfullscreen></iframe>
        </div>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Solving Physics Issues:</strong>
        <ul>
        <li>With the basic car physics simulated, I thought I could move on to developing a game loop around my drifting mechanic. However, I discovered an issue with my physics system when testing the car in a build. The build ran at 120 fps, twice the usual testing scenario of 60 fps when in engine. This doubled frame rate made the car much harder to drift. I deduced that the cause of this issue was simulating my car physics, specifically tire slipping, on Event Tick. With the faster frame rate, the car was calling PreventTireSlipping more times per second, increasing the total amount of opposite force against tire slippage, therefore increasing the simulated grip on the tire. The result was a car that was harder to drift. To fix this issue, I switched where the car ran physics functions from Event Tick to Async Physics Tick, which runs on a separate thread of UE5’s game thread. I also switched how I applied physics to the car’s rigidbody from AddForceAtLocation to AddImpulseAtLocation, multiplying any force calculated within a physics function by the Physics Tick’s deltatime value to convert from force to impulse. The result was a more deterministic physics simulation, with performance independent of frame rate.  
        </li>
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/H2CdnUvdmU4" frameborder="0" allowfullscreen></iframe>
        </div>
        </ul>
    </div>

     <div class="paragraph">
        <strong>Cementing Learning:</strong>
        <ul>
        <li>One of the best ways to truly learn something is to teach it to someone else. So, I created a tutorial series on how to make the exact car controller for this game. After making it, I now have a cemented understanding for how the different physics systems of this car controller work together to create more realistic game feel for the player.</li>
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/QRgLKpbCe3k" frameborder="0" allowfullscreen></iframe>
        </div>
        </ul>
    </div>

   
    </div>
    `, "#5a78af"),
    new ProjectData("project-4", "Cozy Cat Cafe - Primary Focus: UI/UX", "img/projects/Cat.png", `
    <div class="paragraph">
     <strong>Cozy Cat Cafe</strong> is a coffee shop simulator game where players have to manage a cafe from back to front, including taking customer orders, baking pastries, brewing coffee, and serving customers at their tables. Made using C# and Unity, I used this project to put into practice my learnings in UI/UX Design, software design patterns, and NPC AI System design. 
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/7MfrnO2GoPE" frameborder="0" allowfullscreen></iframe>
    </div>
    

    <div class="paragraph">
        <strong>Interaction System:</strong>
        <ul>
        <li>There were many systems players had to utilize in order to progress through customer waves, so I created an Interact system to connect my player controller to the different minigames, NPCs, and kitchen elements in the cafe. Following the Strategy Pattern, I made an abstract Interactable class that could be inherited from to develop different types of interactions. For instance, I created a class for Minigame Interactables that faded the entire screen to black, set up any minigame logic the minigame needed from the player, brought the minigame UI to the screen, and faded the entire screen from black. The Player served as the Context object, with a reference to an interactable object as a field. Strategies for interaction were switched in and out whenever the player entered an interactable zone. And on player input, that strategy would execute, transitioning to a minigame, or taking a customer order.
        </li>
        <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot interaction-diagram" src="img/projects/InteractUM.png" alt="Heatmap before level adjustments" />
            <figcaption class="image-caption">UML Diagram for Interaction System</figcaption>
        </figure>
        </div>
    </div>

    <div class="paragraph">
        <strong>Minigame Design and UX Improvements:</strong>
        <ul>
        <li>In developing Cozy Cat Cafe, I took inspiration from the Papa’s Freezeria genre of games, in which the player has to play through a series of cooking minigames to assemble orders. I wanted to combine the minigame elements of that genre with the kitchen chaos in games like Overcooked, so developing well designed UI-based minigames was paramount to the overall flow of this game. Cozy Cat Cafe had 3 UI Minigames, the first of which being Pastry Mixing. Players could mix together 6 different ingredients in varying amounts to make 5 different recipes. Once assembled correctly, they could submit up to 8 pastries to the oven tray. Players could also submit “garbage” pastries to the oven tray if they incorrectly assembled a recipe. On clicking “Oven”, they leave the minigame and now hold a tray of uncooked pastries, which they can cook in the oven. In my initial mockup of this minigame, I included clear tray and clear mixing bowl buttons, so players could restart their mixing process if they made a mistake. Playtesters found that this was not enough for mistake coverage. Having to delete a whole tray of pastries just because they incorrectly mixed one was extremely unsatisfying. So, I added functionality to delete individual pastries from the tray by pressing their sprite to address playtester concern.
        </li>
        <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot" src="img/projects/PastryUI.png" alt="Heatmap before level adjustments" />
            <figcaption class="image-caption">Mixing Minigame UI</figcaption>
        </figure>
        </div>
        <li>The second minigame, Coffee-Brewing, followed the user-experience of a real coffee maker almost exactly. Players would load the coffee maker with a set amount of water, choose their coffee type (Colombian or French Roast) and start brewing. While the coffee was brewing, players could leave this minigame and do anything of their choice: mix pastries, serve orders, talk to customers, etc. This allowed better players to efficiently multitask between different responsibilities in the store.
        </li>
        <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot" src="img/projects/CoffeeUI.png" alt="Heatmap before level adjustments" />
            <figcaption class="image-caption">Coffee-Brewing Minigame UI</figcaption>
        </figure>
        </div>
        <li>Once coffee is brewed and pastries are cooked, players can assemble them into orders in the serving minigame. Players simply click on the coffee sprite or pastry sprite to add to an order. Once compiled, they click “Serve” and leave the minigame to deliver the order to the customer. At first, players could only assemble and deliver one order at a time. I wanted to simulate the frantic experience of going back and forth from the serving station to the customers during a rush. However, playtesters found the process of going back and forth extremely repetitive and tedious, so I expanded the order inventory from a single object to a list of Order objects. With this addition, players could assemble a massive list of orders all at once, and deliver them to customers in a mad dash around the cafe, all without returning to the serving station more than once. 
        </li>
        <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot" src="img/projects/ServingUI.png" alt="Heatmap before level adjustments" />
            <figcaption class="image-caption">Serving Minigame UI</figcaption>
        </figure>
        </div>
        <li>A short video of all 3 minigames in sequence during gameplay:</li>
        <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/9oT63S87DNw" frameborder="0" allowfullscreen></iframe>
        </div>
        </ul>
    </div>

    <div class="paragraph">
        <strong>NPC Customer Implementation:</strong>
        <ul>
        <li>Customers would come through the cafe front door in waves, with wave information (time to spawn and number of customers) stored within a Game Manager singleton class. Whenever it was time to spawn a new wave, the Game Manager would prompt another singleton object, the Customer Manager, for a new Customer. The Customer Manager would spawn this Customer into the level using the Factory Pattern, with the Factory type changing depending on the type of Customer preset sent into the Customer Manager by the Game Manager. If the preset was null, the Customer Factory would produce random customers, each with a random order. If the preset was not null, the Customer Factory would produce a Named Customer, complete with a name, a set order, a dialogue tree, and a questline that could change depending on how well the player served the Customer on subsequent days. 
        </li>
        <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot interaction-diagram" src="img/projects/CustomerUML.png" alt="Heatmap before level adjustments" />
            <figcaption class="image-caption">UML Diagram for Customer System</figcaption>
        </figure>
        </div>
        <li>Customer AI was controlled by a Finite State Machine-Utility hybrid setup. I already conceptualized a discrete set of tasks that each Customer should flow through (Starting, Waiting, Eating, and Leaving), so I implemented a FSM to control the transitions between and execution of these tasks. I added in three utilities (Lovesickness, Business, and Boredom) to bring some emergence to NPC behavior during their Eating State. These utilities had random values at Customer start up, and changed during the customer’s eating state depending on how well they were served and how much they liked the cafe. For instance, if the player serves an NPC a perfect order (right drink and pastry served in good time), they can boost the NPC’s lovesick utility and make the NPC fall in love with them, unlocking new dialogue options for the NPC on later days. 
        </li>
        <div class="paragraph center">
        <figure class="caption-wrapper">
            <img class="pc-screenshot interaction-diagram" src="img/projects/FSMUML.png" alt="Heatmap before level adjustments" />
            <figcaption class="image-caption">FSM-Utility Hybrid for Customer AI</figcaption>
        </figure>
        </div>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        View Code Here!: <a href="https://github.com/masterofbanks/CozyJam2026" target="_blank">GitHub Repository</a>.
        </div>
    </div>

    
    `, "#e80fb7"),
    
    
];
