
import '../blog-post.css'


const RioDeJaneiro = () => {
    return ( 
        <div className="container blog-post">
            <h1>Rio de Janeiro</h1>
            <div className='date'>
            <p>31.07.24 - 09.08.24</p>
            </div>
            <div className='blog-container'>
<p>
Day 178 of Big Trip, the final day of our travels around the Americas. We’re currently sitting in São Paolo airport waiting for our 11 hour flight back to Heathrow. I’m not really sure how to go about this post, partly because 9.30pm is usually our bedtime and partly because I can’t believe this is the last blog post. I have very mixed feelings!!! I will be sharing our definitive ranking of everywhere we’ve been at the end of this post. 
</p>
<p>
I guess first things first, our final stop: Rio de Janeiro. Ranking HIGH on our lists, this city was pretty unexpectedly interesting. I vaguely knew about the beaches, and obviously about Christ the Redeemer. It has all the vibrancy expected of a Latin American city without the chaos of places like Mexico. We treated ourselves to a proper airbnb which was 2 minutes from Copacabana Beach but also right on a main road; a mixed experience. I had completely freaked myself out with horror stories about the crime in Rio, but realised quickly that I’d be fine being from Stab City Southend. 
</p>
<p>
I was immediately enamoured with the beaches and Rio’s WINTER weather of 25 degrees. The beach culture is taken extremely seriously, and everyone is working on very specific tan lines. I tried to take part but obviously got burnt. We were there in the down season so it was mostly Brazilians sunbathing and taking walks/runs/bikes along the promenade. In this part of the world, all sales people come to you, so you can just hire a chair and a parasol and have the caipirinhas delivered to you. I had totally forgotten about caipirinhas and was wildly excited to be reunited with them- an insanely good Brazilian cocktail. Beach sunsets are a big thing, so we saw some pretty decent colourful sunsets, with hoards of people gathering appreciating the winter sun disappearing behind a rock. At one of our sunset hang outs we saw a capybara swimming in a marina to an unknown destination??
</p>
<p>
We were actually lucky enough to have another friend from my year abroad living in Rio at the moment. Being Brazilian, she was an excellent guide and took us to some beautiful places, mainly the sunset hangouts. She took us to a huge Sunday market near where she lives. We tried our first coconut where they just lop the top off and stick a straw in it. FUCKING DELICIOUS MATE. And then she got the guy to open it for me and I ate all the coconut inside, I did not know coconuts were so juicy??? Then Mariana just kept finding me different drinks to try of fruits I had never heard of. Very hit and miss. She took us to a famous staircase, Escadaria Selaron. Famed for this eccentric man who made it his life’s work to cover the stairs in tiles from around the world, and once it was complete he died.
</p>
<p>
Of course we had to visit Christ the Redeemer. One of the 7 Wonders of the World. The most impressive thing about it really is that you can see christ basically anywhere you go in Rio. He’s so big and so high up, he really is all seeing. There’s nothing to do up there apart from pray or take selfies but the train ride up has some amazing views. Another iconic Rio thing is Sugarloaf but instead of going up there in the cable car, we hiked the smaller mountain next to it, Morro de Urca. It was pretty short but intense, all the Brasilian’s just marching up there in their bloody havaianas. We had a surprise of some tiny marmosets causing havoc. And of course the views were incredible. 
</p>
<p>
Rio felt like an excellent ending to these 6 months. I feel really ready to be going home (don’t quote me on that when I’m depressed bc British summer is so shit), and I’m really proud of us for having such a successful trip, seeing some good stuff and making good decisions. It was pretty fucking exhausting but we did it and now it is home time. Thank you for taking an interest!! This has been a great project to help me process all the moving around and celebrate each place for what it was. 
</p>
<div className="container">
            <h1 className="title">Ranking time!</h1>
            <p>We ended up going to 16 places, 2 continents, 5 countries and looked after 15 pets in 178 days.</p>
            
            <div className="lists">
                <div className="list-container">
                    <h4>Abi's rankings:</h4>
                    <ol className="list-left">
                        <li>San Francisco</li>
                        <li>Tortuguero</li>
                        <li>Rio de Janeiro</li>
                        <li>Mexico City</li>
                        <li>Guatapé</li>
                        <li>Los Angeles</li>
                        <li>San Pancho</li>
                        <li>Monterey Bay</li>
                        <li>Portland</li>
                        <li>San Miguel de Allende</li>
                        <li>San Diego</li>
                        <li>Mazatlán</li>
                        <li>Bogotá</li>
                        <li>Culiacán</li>
                        <li>Seattle</li>
                        <li>Guadalajara</li>
                    </ol>
                </div>
                <div className="list-container">
                    <h4>Dylan's rankings:</h4>
                    <ol className="list-right">
                        <li>San Francisco</li>
                        <li>Ciudad de Mexico</li>
                        <li>Guatapé</li>
                        <li>Rio de Janeiro</li>
                        <li>Tortuguero</li>
                        <li>Los Angeles</li>
                        <li>San Pancho</li>
                        <li>Portland</li>
                        <li>Monterey Bay</li>
                        <li>San Diego</li>
                        <li>San Miguel de Allende</li>
                        <li>Mazatlán</li>
                        <li>Bogotá</li>
                        <li>Seattle</li>
                        <li>Culiacán</li>
                        <li>Guadalajara</li>
                    </ol>
                </div>
            </div>
            <p className="date-posted">Posted on 13.08.24</p>
        </div>
        </div>
        </div>
    );
}

export default RioDeJaneiro
            

const style = `
.container {
    display: flex;
    flex-direction: column; /* Ensures that the title is above the lists */
    text-align: center;
    margin: 20px;
}

.title, .subtitle {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
    display: inline;
}

.lists {
    display: flex;
    justify-content: center;
    gap: 50px; /* Space between the two lists */
    margin-top: 10px;
}

.list-left, .list-right {
    list-style-type: decimal;
    padding-left: 20px;
    font-size: 18px;
    color: #555;
}

.list-left li, .list-right li {
    margin-bottom: 10px;
}

/* Responsive design: stack the lists on small screens */
@media screen and (max-width: 600px) {
    .lists {
        flex-direction: column;
        align-items: center;
        gap: 20px; /* Adjust the gap when stacked */
    }

    .title {
    font-size: 20px;
    }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);