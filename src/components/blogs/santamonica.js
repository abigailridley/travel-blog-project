import Gallery from '../gallery/gallery'
import './blog-post.css'

const images = [
    { src: require('./img/california/santamonica/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/california/santamonica/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/california/santamonica/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/california/santamonica/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/california/santamonica/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/california/santamonica/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/california/santamonica/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/california/santamonica/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/california/santamonica/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/california/santamonica/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/california/santamonica/img11.jpeg'), alt: 'Image 11' },
    { src: require('./img/california/santamonica/img12.jpeg'), alt: 'Image 12' },
    { src: require('./img/california/santamonica/img13.jpeg'), alt: 'Image 13' },
    { src: require('./img/california/santamonica/img14.jpeg'), alt: 'Image 14' },
    { src: require('./img/california/santamonica/img15.jpeg'), alt: 'Image 15' },
    { src: require('./img/california/santamonica/img16.jpeg'), alt: 'Image 16' },
    { src: require('./img/california/santamonica/img17.jpeg'), alt: 'Image 17' },
    { src: require('./img/california/santamonica/img18.jpeg'), alt: 'Image 18' },
    { src: require('./img/california/santamonica/img20.jpeg'), alt: 'Image 20' },
    { src: require('./img/california/santamonica/img21.jpeg'), alt: 'Image 21' }
  ];

const SantaMonica = () => {
    return ( 
        <div className="container blog-post">
            <h1>Santa Monica, California</h1>
            <div className='date'>
            <p>21.4.24 - 06.04.24</p>
            </div>
            <div className='blog-container'>
         
           <p>
           Santa Monica, baby! Today is day 79 of Big Trip. We’re nearing the month 3 mark and also the North American stint. The last two weeks we have been at the same house sit in Santa Monica, in Los Angeles. Some stability, some seaside, some sunshine, LOTS of palm trees. The same meowing cats every day at 6.30am. 
           </p>
           <p>
           Apparently Santa Monica is “Where the rents are high and the temperatures are low”. One day Santa Monica was the same temperature as Southend on sea. And that’s just not right. I did make it to the beach for my FIRST SWIM of the whole entire trip. But when I made it down there I could barely see the palm trees it was so foggy and misty. I did brave a swim tho of course. The trip to Venice Beach was also cloudy, no sea swims but lots of gawping on The Venice boardwalk, hoping for someone to be dressed up like Barbie & Ken on rollerblades.The Venice canals cheered me up on a day where I was determined to be pissed off. 
           </p>
           <p>
           The art gallery/museum options here are all free, and good. The Getty museum is one of the most beautiful places I’d ever been. The lines of the building against the blue sky. The whole thing was a David Hockney painting. The art inside, terribly mediocre. Every single museum here seems to gag over French Renaissance paintings. They did have a temporary exhibit about blood though. Our trip to the Griffith Observatory was also extremely beautiful with a mediocre exhibit. I nearly passed out running up there to see the view before the sunset. Watching the sky darken and the city start to light was mesmerising. 
           </p>
           <p>
           We’re pretty good at hitting the tourist spots, so we definitely had to go to Beverly Hills and Rodeo Drive. Still no celeb spots, felt like we were close to a few tho. I have a compulsion to look at rich people so I enjoyed people watching. We did see a man get tased by the police because he spat on a political art installation, and that felt very American. Another very American thing was watching Gone Girl at the cinema, an amazing experience, but the audience wildly cackling at anything mildly funny or wry. I could barely stand it. Tried to remind myself I need to respect their culture. As an antidote to all this, we fell in love with a shop called Ye Olde King’s Head. With Scottish staff, Linda McCartney vegetarian pies, marmite, Heinz, Robinsons, even Fairy and Radox. My soul felt soothed, we got a pie, chips and beans fix for a hefty hefty price. 
           </p>
           <p>
           An enjoyable couple of weeks. And relatively meltdown free. Which will all change while we slowly descend into Mexico. So glad we’ve had these couple of months to ease into the travelling before entering the chaos of Mexico, panicking and trying to remember how to speak Spanish. We are also determined not to use too many flights so a few long bus rides are in order. Next is a short stay in San Diego then crossing the border and facing my year abroad trauma once and for all. 
           </p>
       
            <p className='date-posted'>Posted on Monday 06.04.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
    )
}

export default SantaMonica