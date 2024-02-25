import SeattleGallery from '../gallery/seattle-gallery'
import './blog-post.css'



const SeattleBlog = () => {
    return ( 
        <div className="container seattle-blog">
            <h1>Seattle Blog</h1>
            <div className='location-date'>
            <h5>Georgetown, Seattle WA</h5>
            <p>17.02.24 - 25.02.24</p>
            </div>
            <div className='blog-container'>
            <p>
            Living in Mexico 9 years ago I was on a trip when a hurricane hit Mexico nowhere near where I was living. But because I was in La Huasteca jumping off waterfalls and I had no signal, no one could get in contact with me. I consider this a traumatising time for my mum whether she agrees or not. Mum, please consider this project a love-letter to you. 
            </p>
            <p>
            Being autistic and living a life I very much liked, I was suitably shit scared to go far far away for an extended period of time. But this is how it’s gone so far. 
            </p>
            <p>
            On our flight, we sat next to a very talkative Welsh lady who now lives in Seattle. She had a lot to say and wanted us to go and visit her while we were there. We never actually got her name or number. She told us not to go out at night in Seattle; this proved to be decent advice. We were nervous about getting through US customs because of the horror stories we heard of housesitters not being let in at customs because they considered it to be work. Under the instructions of Jon, who we are housesitting for in Portland; we lied. It worked, and we both headed to the train shaking in our boots yee-haw. 
            </p>
            <p>
            Our first stop, Georgetown, Seattle WA. Travelling by public transport has been a unique experience. The first night travelling on the bus to the house sit I found genuinely scary after travelling for 18 hours and being grilled by US customs. In the dark with no signal, we realised we hadn’t saved the information about how to get in, so we wandered around trying to find wifi. I was big and brave and asked the receptionist in the Georgetown Inn to use their wifi. Success. We then realised we didn’t have the freaking wifi for the house. So we headed back to the Georgetown Inn to use their wifi to get our wifi. 
            </p>
            <p>
            Arriving at our first house sit was surreal. The owners, Valerie & family, had already left on their trip to Italy so we were greeted by Yuri and Watney who looked like ghosts. Georgetown is considered to be a sort of ‘artsy district’. The house is certainly ‘artsy’, with a basement cinema room, a graffiti toilet, a sauna in the garden and a badge machine. Valerie really wants us to make a badge and graffiti the toilet. To be confirmed.
            </p>
            <p>
            Weather: exactly the same as home. One day of sunshine had us taking the ferry to Bainbridge Island: the birthplace of <a href='https://bipickleball.org/history'>Pickleball</a>. Pickleball, America’s fastest growing sport. Bainbridge Island did in fact not have any homeless people and was extremely quaint. We had heard that sometimes you can see orcas from the ferry, so I got out my binoculars and stood right at the front of the ferry for the whole 30 minutes there and back. No orcas. We have done some touristy stuff like visiting the Space Needle briefly, which looks like a prop out of a 60s space film. Not sure of its purpose but it does look nice on the sky line coming in on the ferry from Bainbridge Island: the birthplace of Pickleball.
            </p>
            <p>
            We went to for food at a vegan Bahn Mi restaurant in the International District which has road names in Vietnamese. A low food hygiene rating but good Bahn Mis. I took a solo trip to the Capitol Hill district, known for LGBTQ+ bars and interesting shops. This is where the cool young people seemed to be. I had a 6oz cappuccino which seemed to be the closest thing to a flat white. 
            </p>
            <p>
            Sunday marks one week in Seattle, and the start of our second sit in Portland, where we will be spending 3 weeks.  The welcome guide for the sit is very promising, we are told that Pepe the Chihuahua may wait for us to say something like “You’re a good boy Pepe I love you” before he eats. Can’t wait. 
            </p>
            <p className='date-posted'>Posted on Sunday 25.02.24</p>
            </div>
            <div className='gallery'>
<SeattleGallery/>
            </div>
        </div>
    )
}

export default SeattleBlog