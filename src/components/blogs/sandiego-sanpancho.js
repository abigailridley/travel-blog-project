import Gallery from '../gallery/gallery'
import './blog-post.css'

const images = [
    { src: require('./img/mexico/sandiego-sanpancho/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/mexico/sandiego-sanpancho/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/mexico/sandiego-sanpancho/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/mexico/sandiego-sanpancho/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/mexico/sandiego-sanpancho/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/mexico/sandiego-sanpancho/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/mexico/sandiego-sanpancho/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/mexico/sandiego-sanpancho/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/mexico/sandiego-sanpancho/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/mexico/sandiego-sanpancho/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/mexico/sandiego-sanpancho/img11.jpeg'), alt: 'Image 11' },
    { src: require('./img/mexico/sandiego-sanpancho/img12.jpeg'), alt: 'Image 12' },
    { src: require('./img/mexico/sandiego-sanpancho/img13.jpeg'), alt: 'Image 13' },
    { src: require('./img/mexico/sandiego-sanpancho/img14.jpeg'), alt: 'Image 14' },
    { src: require('./img/mexico/sandiego-sanpancho/img15.jpeg'), alt: 'Image 15' },
    { src: require('./img/mexico/sandiego-sanpancho/img16.jpeg'), alt: 'Image 16' },
    { src: require('./img/mexico/sandiego-sanpancho/img17.jpeg'), alt: 'Image 17' },
    { src: require('./img/mexico/sandiego-sanpancho/img18.jpeg'), alt: 'Image 18' },
    { src: require('./img/mexico/sandiego-sanpancho/img19.jpeg'), alt: 'Image 19' }
  ];

const SanDiegoSanPancho = () => {
    return ( 
        <div className="container blog-post">
            <h1>San Diego, CA ➡️ San Pancho, Mexico</h1>
            <div className='date'>
            <p>06.05.24 - 23.05.24</p>
            </div>
            <div className='blog-container'>
         <p>
         It’s day 96 of Big Trip. And I have returned to Mexico after 8 years. So the last 2 weeks or so have been… different. Not staying in other people’s luxury apartments in exchange for feeding their cat. We’ve been cosplaying as backpackers and we’ve hit a few different spots since our 2 weeks luxuriating on the Los Angeles coast. I’ll do my best to recap without writing 1000 words on the intricacies Mexican culture. 
         </p>
        <p>
        After a short stop in a fancy apartment in San Diego (with the cutest cat in the world), we took the tram down to San Ysidro, the busiest border crossing between the States and Mexico. We walked through the terminal very confused and we found ourselves on the other side in Tijuana without anyone checking our passports. I was so thrilled that I understood what people were saying in Spanish that I immediately started haggling for the taxi.  We caught a plane to Culiacan, where we were meeting one of my friends from my year abroad. My friend told us that Culiacan had been in the news because of a stand off between the cartel and the military in the middle of the city. In brief, the military captured the cartel leader’s son in 2019, but the cartel fought back and threatened to kill civilians so the military released the son. Then a few years later, the military captured the son again, this time more prepared, so the cartel fought back but ‘lost’(?). No regular city folk hurt either time but lots of shooting could be heard and smoke could be seen. Wild. 
        </p>
        <p>
        When I tell you that the heat was a shock to the system, it felt like someone was holding a hairdryer to your face as you step out onto the street. With having all the symptoms of heat exhaustion, coupled with a viscerally emotional reaction to being back in Mexico, it took us a few days to feel semi-normal. Eduardo took us to a small village close by for a blissfully relaxing trip to a thermal pool where Dylan saw an iguana fall out of a tree. We had agreed to join my friend to go to Mazatlan, a popular beach town. As it turned out, it was his friend’s 30th birthday, and we stayed in a 2 bedroom apartment with 8 very alcohol-oriented Mexican people, 7 of whom did not speak English. But did we stay out past our bed time? We sure did. Did we go out two nights in a row? Absolutely not.  
        </p>
        <p>
        On the Sunday we left the hungover apartment early to catch a bus to San Pancho. The ‘fly by the seat of your pants’ culture in Mexico means that travelling can be a hit and miss experience. The first bus was a luxury air conned huge thing that we had pre booked. Sadly the next one was 3+ hours of non-air conned bus in 80% humidity, with people crammed in and standing in the aisle. Did I have a meltdown in the middle of a corner shop when we arrived? Maybe. Luckily I’d haggled for a deal on a better room with air con in the hostel so I could go and decompress somewhere freezing cold. San Pancho is a tiny hippie beach town, consisting of one main road with little cafes and coffee shops and a surprising amount of vegan food. Americans are starting to invade so, as a white person, everything has an edge of colonising. But other than that it was dreamy. Rounded off with an evening watching the sunset, turning around to see the full moon, and getting some incredibly delicious vegan ice cream on the way home. 
        </p>
        <p>
        Currently on our way to Guadalajara, where I spent my year abroad. So I’m sure the nostalgia will be flowing. Can’t believe we’ve been gone for nearly 100 days. I am homesick for the first time in my life and I keep daydreaming about Brighton seaside can you believe 🌊
        </p>
       
            <p className='date-posted'>Posted on Thursday 23.04.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
    )
}

export default SanDiegoSanPancho