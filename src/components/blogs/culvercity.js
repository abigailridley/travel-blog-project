import Gallery from '../gallery/gallery'
import './blog-post.css'

const images = [
    { src: require('./img/california/culvercity/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/california/culvercity/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/california/culvercity/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/california/culvercity/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/california/culvercity/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/california/culvercity/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/california/culvercity/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/california/culvercity/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/california/culvercity/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/california/culvercity/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/california/culvercity/img11.jpeg'), alt: 'Image 11' },
    { src: require('./img/california/culvercity/img12.jpeg'), alt: 'Image 12' },
    { src: require('./img/california/culvercity/img13.jpeg'), alt: 'Image 13' },
    { src: require('./img/california/culvercity/img14.jpeg'), alt: 'Image 14' },
    { src: require('./img/california/culvercity/img15.jpeg'), alt: 'Image 15' },
    { src: require('./img/california/culvercity/img16.jpeg'), alt: 'Image 16' },
    { src: require('./img/california/culvercity/img17.jpeg'), alt: 'Image 17' }
  ];

const MontereyBlog = () => {
    return ( 
        <div className="container blog-post">
            <h1>Los Angeles, California</h1>
            <div className='date'>
            <p>11.4.24 - 21.4.24</p>
            </div>
            <div className='blog-container'>
         
            <p>We have just passed the 2 month mark of Big Trip. I come to you from Los Angeles, the City of Angels. Arriving in LA was definitely a stark contrast to the sweet little town of Pacific Grove. And everything about LA should mean that I hate it; the noise, the smells, the chaos, the unpredictable people, how everywhere takes at least an hour on public transport. But I kinda love it here. I have been reading a book about LA’s history and that it was created out of nowhere, how the city is barely more than 100 years old. LA feels legitimately iconic and that distracts my sensory overwhelm.
            </p>
        <p>
        On our arrival into LA, getting off our 9hour train at night time, I was scared as I usually am, we braved the night time public transport. After one singular night in an Airbnb, we stayed in Culver City for nearly a week with a lil dog called Pepper, who turned out to have some serious attached problems. We had some iconic days out from this place. After suffering a couple of days of RAIN, we were blessed with sunshine and we responded by taking a hike up to Runyon Canyon with all the other insanely fit Angelenos. This felt like where the action really was. Lots of athleisure-wear and tiny dogs. Some incredible 360 views, including the Hollywood sign and lots of bougie houses in the hills. Next day we went full tourist mode and hit Hollywood Boulevard. It is kind of hilariously underwhelming. I'm a real sucker for capitalism so I was satisfied with just looking out for names I recognised. And also the huge souvenir shops, including the huge Miniso with a giant My Melody themed display. (I have been playing a Hello Kitty themed mobile game which has taken over my life).
        </p>
        <p>
        LA is famously very car-centric, and nothing really shoves that in your face more than Sunset Boulevard. We went for lunch and a little mooch about the shops In Silerlake and Echo park . But because it is built for everyone to drive to cute shops, the cute lunch spot, they are all directly on a very loud and busy main road. It is still enjoyable, and we had an amazing lunch (sitting by the side of the road), I had a vegan “eggs” benedict with some very convincing fake poached egg??? A little trip to a quiet road with HUGE Victorian houses, one of which was out of “Charmed” the TV show, and a sit down in a park (next to a main road). Then it was time to say goodbye to our little anxious Pepper, and off to the next sit just nearby, with a sweet cat called Tortilla. Tortilla is small lil Calico cat who looks weirdly similar to my cat “Tortina” at home, just a bigger and fluffier version. The place we’re in just over the weekend is very soothin. On our day mooching around Sunset we went into a shop called Spellbound Sky. It was playing ominous music and was full of crystals, and intense spiritual stuff. Right so, this house has candles from THAT SHOP. Which seems to be very LA, crystal shops and psychics on every corner. Confirmed by my book that more unusual spiritual practices is very much an LA thing which originates from the 1910s.
        </p>
        <p>
        We had our only flop day of the LA portion in Pasadena, it took 1.5 hours to get to, and then absolutely nothing to see. Other than that, we are just relaxing among the crystals. Recharging before moving onto Santa Monica, hopefully where I get my first swim!!!
        </p>
        <p><small>p.s. I'd like to add I have in fact spotted a celeb. Mae Martin was outside a bar wearing a huge Dodgers cap. And Dylan spotted Tunde Adebimpe walking down the street. I'll let you decide which one was more impressive. </small></p>
            <p className='date-posted'>Posted on Sunday 21.04.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
    )
}

export default MontereyBlog