import Gallery from '../gallery/gallery'
import './blog-post.css'

const images = [
    { src: require('./img/california/sanfran/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/california/sanfran/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/california/sanfran/img3.jpg'), alt: 'Image 3' },
    { src: require('./img/california/sanfran/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/california/sanfran/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/california/sanfran/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/california/sanfran/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/california/sanfran/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/california/sanfran/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/california/sanfran/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/california/sanfran/img11.jpg'), alt: 'Image 11' },
    { src: require('./img/california/sanfran/img12.jpeg'), alt: 'Image 12' }
  ];

const SanFranBlog = () => {
    return ( 
        <div className="container blog-post">
            <h1>San Francisco, California</h1>
            <div className='date'>
            <p>23.03.24 - 31.03.24</p>
            </div>
            <div className='blog-container'>
            <p>
            Day 44 of the trip. We start the week lapping up our time next to the Golden Gate Park, a couple of transitions as we send our first night in a hotel since we started, and then moving onto our second San Fran location. 
            </p>
            <p>Taking full advantage of all the free days, we headed to the Botanical Gardens, with free entry between 7.30am - 9am (located in the park of course). A huge garden with some great birds and a couple of terrapins in a pond. Very atmospheric, especially so early in the morning. The next day we headed out for a big hilly walk with the lil dog, Gizmo. We tackled Buena Vista Park, then just kept finding hills for us climb up until we were (I was) satisfied and led us up and down another hill to home. Next day included a trip to Japantown but nearby, we took a cheeky trip to the house in Mrs. Doubtfire. This VHS was a staple of my childhood so I was ecstatic to be standing on the same ground as those goats and ponies for Chris’ birthday party. Japantown was amazing, a huge sprawling mall with bars and restaurants, book shops, kawaii shops, stationary shops with an origami display. 
            </p>
            <p>
            Unfortunately this was our last day at my favourite house sit so far. So we cleaned up, packed up, finished my puzzle and cuddled the dog.  The day that dog owners returned, they very generously offered to take us out to lunch. That is the second time an American couple has taken us out to a restaurant. It is so kind and generous, especially as eating out is insanely expensive so something we barely do. They took us to a vegan restaurant, 3 out of 4 of us having cocktails. They were so lovely, driving us to a great view of Alcatraz, and then driving us to our hotel. 
            </p>
            <p>
            It was a humbling moment checking into our hotel. Yes of course we booked the cheapest thing we could find, and yeah it did say on the listing that it would be a shared bathroom. But we did kind of hope there might be an en suite of some sort. A room with a sink and a window that didn’t open properly. It was like holidays back in the day. We watched Catfish on the tiny tv with no ability to look at a guide and listened to the sweet sounds of our fellow guests loudly shouting for some reason. I value our honourable night in Casa Loma. The next sit did not want us there until 8pm, so after checkout we had the WHOLE DAY to occupy ourselves. And it just so happened to be torrential rain all day. We dropped our bags off at the next sit and we ventured out. From 12pm - 8pm: we had a huge burrito at Papalote; a small modern art exhibition; City Lights book shop; Antique Vibrator Museum; shopping mall (intending  to be window shopping but there was a H&M and it was so cheap and I had to); rounded off with a trip to Trader Joe’s taking us to 7.30pm. 
             </p>
            <p>
            Our final week in SF is in the Mission Disctrict, known to be more hipster I think. So far very different vibes from the park area. The weekend in our new location just consisted of, for me allowing myself time to process the transition, stocking up on food and spending time with the unbelievably cute animals. I did attempt a run but the hills are insane. Here we have a small sausage dog called Coco, and a beautiful majestic Snow Bengal cat called Jerry. Jerry is harness trained and I’m hoping to find time to take him out. Coco is so small???? I don’t understand how people own dogs so small. She is so sweet and only wants to be cuddled up under a blanket at all times. 
            </p>
            <p>The upcoming week marks our last week in San Francisco which is devastating as we have loved it so much here. Next stop though, is gonna be a big one for me. Think sea mammals 🐳</p>
           
            <p className='date-posted'>Posted on Monday 01.04.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
        
    )
}

export default SanFranBlog