
export default function YnamarEngineFirstCodeBlogPage() {
    return (
      <article className="flex flex-col justify-center items-center text-justify" style={{marginTop: "2rem"}}>
        <p>
        Ynamar Engine is a side project developed by me.

        About the Project: There's almost nothing done yet.

        I intended for it to be an Open Source MMORPG Game Engine, developed with .net.
        It's heavily based on the older engines: Elysium Engine and Eclipse Origins, either visual basic 6 and are quite outdated now.
        I really desired to create a game with those engines, especially Elysium Engine, but with all the limitations of using visual basic 6 it was not viable to use those, so I decided to make my own based on them.
        So in the first release of this project, I intend it to have all the main features of those mentioned above engines.
        </p>
        <p style={{marginTop: "1rem"}}>
        About myself: 4+ Years of experience as a Web Software Developer, but with really low/basic knowdledge in Game Development. Only working in that project in my free time/weekend.
        </p>
        <p style={{marginTop: "1rem"}}>
        Warning: This is not a tutorial, I don't have any idea about what I'm actually doing, I'm just trying. So I maybe throw everything in the trash in any moment and restart.
        I'm using technologies that I think will fit well the project, but any advices/tips/constructive criticism are welcome. 
        </p>
        <p style={{marginTop: "1rem"}}>
        Repository: https://github.com/Zotesso/YnamarEngine
        </p>
        <h2 className="w-100">
            Progress
        </h2>
        <h3 className="w-100">
            Server
        </h3>
        <img src="../ynamar-engine-server.png" alt="Servidor funcionando" className="w-100"/>
        <p style={{marginTop: "1rem"}}>
        By now I just made the initialization and what will be in the future the connected player pool.
        I'm using the library ENet to do that, because of it's UDP protocol capacity (but i accept advices of other library, because ENET seems to be abandoned)
        </p>
        <h3 className="w-100">
        Client
        </h3>
        <p style={{marginTop: "1rem"}}>
        I'm also using the ENet Library to handle the connection with the server.
        For the Graphics rendering and content management, I'm using the most complete option I have found: MonoGame
        I've created the first Graphic method, to render the Character sprite, made it in a way that once movement commands are implemented, it will already handle the movement animation and character looking direction.
        It currently supports a 32x47 sprite, but i intend it to be inteligent to deal with any sprite size or multiple sprite sizes.

        Started working in a Player Name Draw renderer, but it's not ready yet because of problems with the monogame content management generated spritefont.
        </p>
        <img src="../ynamar-engine-client.png" alt="Client renderizando personagem do jogador" />
        <h3 className="w-100">Next Steps</h3>
        <p className="w-100">Server Side: </p>
        <ul className="list-disc">
            <li>Finish the connection pool</li>
            <li>Implement some type of database (not decided yet if it's gonna be some NoSQL db as DynamoDB or a local SQL db by now, probably I will use both for different purposes, ex: map state - NoSQL, Account Data - Relational Cloud/Local Database)</li>
            <li>Save the Account Data</li>
            <li>Send the player data through packages</li>
        </ul>
        <p className="w-100">Client Side:</p>
        <ul className="list-disc">
            <li>Fix the Draw Player Name method</li>
            <li>Finish the connection method</li>
            <li>Implement commands to move the player</li>
            <li>Create a Class to coordinate the server/client package communication</li>
            <li>Map Graphics and Tilesets.</li>
        </ul>
        <p style={{marginTop: "1rem"}}>
        Thank you for reading, I'll be even more thankful if you could give me some advice to accomplish that journey.
        Thanks again,

        Zotesso
        </p>
      </article>
    );
  }
  