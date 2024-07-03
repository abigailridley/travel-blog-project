import Gallery from '../gallery/gallery'
import './blog-post.css'

const images = [
    { src: require('./img/mexico/mexicocity/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/mexico/mexicocity/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/mexico/mexicocity/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/mexico/mexicocity/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/mexico/mexicocity/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/mexico/mexicocity/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/mexico/mexicocity/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/mexico/mexicocity/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/mexico/mexicocity/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/mexico/mexicocity/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/mexico/mexicocity/img11.jpeg'), alt: 'Image 11' },
    { src: require('./img/mexico/mexicocity/img12.jpeg'), alt: 'Image 12' },
    { src: require('./img/mexico/mexicocity/img13.jpeg'), alt: 'Image 13' },
    { src: require('./img/mexico/mexicocity/img14.jpeg'), alt: 'Image 14' },
    { src: require('./img/mexico/mexicocity/img15.jpeg'), alt: 'Image 15' },
    { src: require('./img/mexico/mexicocity/img16.jpeg'), alt: 'Image 16' },
    { src: require('./img/mexico/mexicocity/img17.jpeg'), alt: 'Image 17' },
    { src: require('./img/mexico/mexicocity/img18.jpeg'), alt: 'Image 18' },
    { src: require('./img/mexico/mexicocity/img19.jpeg'), alt: 'Image 18' },
    { src: require('./img/mexico/mexicocity/img20.jpeg'), alt: 'Image 20' },
    { src: require('./img/mexico/mexicocity/img21.jpeg'), alt: 'Image 21' },
    { src: require('./img/mexico/mexicocity/img22.jpeg'), alt: 'Image 22' }


  ];

const CDMX = () => {
    return ( 
        <div className="container blog-post">
            <h1>Mexico City, Mexico</h1>
            <div className='date'>
            <p>09.06.24 - 01.07.24</p>
            </div>
            <div className='blog-container'>
<p>
OKAY I am so excited to write about our Mexico City portion!!! It’s in top 5 places for the whole trip. We were blessed with the most amazing housesit which felt great after over a month of airbnbs on a sliding scale of shitty to mediocre. We were looking after a lil cat called Caracola, which means snail or shell. The area were staying in was Gringolandia but I did not care cos it was so bloody cute and nice. Lots of trees and cute buildings with shutters. We were in a flat in a complex with a gate and a guard. GENTRIFICATION. Also, let me get the weather chat out of the way. Because of the altitude the weather is DREAMY. Max 25 degrees, it was start of rainy season so most afternoons had some rain or a thunderstorm. Truly delightful. 

</p>
<p>
We were right near a park called Bosque de Chapultepec. It had multiple museums, lots of space to walk/run/cycle and of course a hoard of market stalls where everyone shouts at you to buy their stuff. I still don’t know if their shouting helps them do business or not? What if they were just quiet about it? Every week each area has a market called a Tiangius where a maze of markets pop up full of fruit and veg and pretty much anything you could desire. Of course the fruit and veg is just better in Mexico, the avocados and mangos are elite. The vegan food offering was really top notch too. A few street food carts with really good vegan food. We got to eat tacos on the street standing up like we were local or something!!! 

</p>
<p>
We had to make the trip to Teotihuacan for the mesoamerican pyramids that are about 2000 years old, predating Aztec and Mayan civilisations. There are two huge pyramids which  are very impressive, the pyramid of the sun and the pyramid of the moon. They were obsessed with the gods and made human sacrifices all the time. Some of whom were displayed in the museum. I got interviewed in English by some school children, and then they took a picture with me, what a thrill.

</p>
<p>
Okay so an iconic thing that I never did when I lived in Mexico before, was going to a Lucha Libre fight. I have never seen anything like it. The crowd were loving it. There was one wrestler which Dylan told me was actually from the Isle of Sheppey. The crowd HATED him which was so funny and kept chanting for the other guy to win. Another seriously iconic thing that I DID do last time in Mexico City, because I think that was the ONLY reason that my mum came to Mexico, not for me but for Frida Kahlo. Ohhhhh the Blue House. Casa Azul. I kept my monobrow and moustache just to honour her. Her studio and bedroom are the best parts. The wheelchair with an easel attached. Her bed with a mirror fixed above so she could still paint self portraits even when she was bed bound. Unforgettable. Round the corner from her house is Trotsky’s house where he died. Annoyingly for Dylan all the information was in Spanish, but it was interesting to see where he lived while he was hiding out from the Russian government. You can see the bullet holes in the wall inside his house from the first assassination attempt. 

</p>

<p>At the end of our 2.5 weeks in Mexico City we rounded off with Mexico City pride. A huge crowd collected around the Angel of Independence monument, and we waited for the parade but one never came. It was still impressive and everyone had big rainbow energy. Our final day was Dylan’s birthday which was celebrated by me getting thrashed at pool and having the best vegan burgers probably since leaving the UK. The next day we had to say goodbye to our foster child, Caracola, and get our butts on a plane to Costa Rica. I’m finishing writing this from Costa Rica but I’m going to keep my mouth SHUT until the end of the week. 
</p>


            <p className='date-posted'>Posted on 03.07.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
    )
}

export default CDMX