import Gallery from '../gallery/gallery'
import './blog-post.css'

const images = [
    { src: require('./img/costarica/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/costarica/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/costarica/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/costarica/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/costarica/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/costarica/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/costarica/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/costarica/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/costarica/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/costarica/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/costarica/img11.jpeg'), alt: 'Image 11' },
    { src: require('./img/costarica/img12.jpeg'), alt: 'Image 12' },
    { src: require('./img/costarica/img13.jpeg'), alt: 'Image 13' },
    { src: require('./img/costarica/img14.jpeg'), alt: 'Image 14' },
    { src: require('./img/costarica/img15.jpeg'), alt: 'Image 15' },
    { src: require('./img/costarica/img16.jpeg'), alt: 'Image 16' },
    { src: require('./img/costarica/img17.jpeg'), alt: 'Image 17' },
    { src: require('./img/costarica/img18.jpeg'), alt: 'Image 18' },
    { src: require('./img/costarica/img19.jpeg'), alt: 'Image 19' }



  ];

const CostaRica = () => {
    return ( 
        <div className="container blog-post">
            <h1>Tortuguero, Costa Rica</h1>
            <div className='date'>
            <p>01.07.24 - 09.07.24</p>
            </div>
            <div className='blog-container'>
<p>Day 142 of Big Trip and I think I may have hit my peak. We left every single home comfort behind and got on a plane to Costa Rica. </p>
<p>We got up at 6am to start our journey to the Caribbean coast of Costa Rica. A taxi, 2 buses and a boat lay ahead of us. The one and only cash machine on Tortuguero had been stolen so we were travelling across the country with an ungodly amount of Costa Rican Colones on our person. They absolutely pile high these tiny boats with luggage and then cram you all in so that the water is almost lapping over the edges. The boat took about 1.5 hours with beautiful tropical scenery. At one point I thought the driver has stalled the boat or something, but he was just stopping to show us a caiman (lil croc) sleeping on a log. We arrived at the dock and crawled over to our hostel and collapsed in our bunk beds. I got the top bunk obv. We had dinner in the restaurant attached to our hostel which directly overlooked the water. Plantain, chips and frijoles, what more could you want??? Veggies & beans, veggies & beans on repeat infinitely.</p>
<p>
Our first day of action started with a 5am wake up for a canoe tour. We got forgotten by our actual group, luckily the reception guy/guide, multi-talented king, at our hostel was taking 2 girls on a kayak on a tour that morning. So he popped us in a canoe and rowed us around the canals showing us plants, animals and giving us some history about Tortuguero, where he grew up. He kept apologising for the lack of animals but let me give you a list of animals we saw that morning: a crocodile hiding under a branch, huge iguanas in the trees, a tiny toucan, lots of macaws, tiger herons, little jacanas walking in the grass, lots of anhingas sitting on branches cleaning themselves, a sea otter looking for somewhere to sit, and two lil howler monkeys having a nap in the tree. I was pretty happy with that.
</p>
<p>
That night we had a turtle tour at 10pm, so we spent the day lazing about having power naps. I took a lil walk to the beach, which isn’t swimmable but very beautiful with tropical trees lining the beach. And famous for being one of the largest nesting spots for green turtles in the world. The turtle tour was one of the most surreal experiences of my life. You arrive at night in groups with a tour guide and you wait in the darkness, with minimal torches to avoid disrupting the turtles. The wardens patrol the beach looking for signs of turtles and then lets the groups know where to go. First we went to see one returning to the sea that hadn’t decided on a nest for her eggs. We couldn’t stand close and the only light was one red torchlight shining on her back. While we’re waiting for info on a next turtle site we are just standing in the pitch black trying not to trip over logs. The sky was FULL of stars and we even saw a few fireflies. On our way to the next turtle, we had to find another exit from the beach because a jaguar was blocking the exit we came from. I was secretly hoping to see it. Tortuguero has a protected jaguar population who hunt turtles in high season. But when there’s no turtles around they like to venture into the town and eat the dogs. Wild. We had a long walk in the surprising 11pm humidity and arrived at the beach while queen was laying her eggs. Apparently she’s in some sort of trance like state and does not notice that we are there. The guide is able to move one flipper out of the way to get a better look at the eggs coming out, they are like golf balls covered in slime. Next we got to see her covering up the nest and camouflaging the nest site, for which she uses her front flippers and assaults anything behind her with flicks of sand. One of the most incredible things I have ever seen in my life. She was so beautiful and strong and huge and impressive. I will never be the same.
</p>
<p>
The next day we headed back to the national park for a guided daytime hike. I had been crossing my fingers to get some sloth action but I knew it would be difficult because, well, they are sloths and they don’t move very much. We had another guide who grew up in Tortuguero who was able to detect some animals by their scent alone. We saw lots more howler monkeys having naps and keeping an eye on us from the trees. There was this amazing group of spider monkeys who were throwing themselves tree to tree, one had this tiny baby on her back, I saw its lil face through the binos. And YES we saw some sloths. I think the guide could tell how desperate I was to get a peak. So he was very patient directing me about where to look and giving me the binos to get a better look. I saw the side of its lil face and its claw, so bloody cute. We saw a couple more but they were just like big lumps of fur. We also saw an agouti, lots of tiny blue jeans frogs, blue morpho butterflies, and one gigantesque grasshopper. 
</p>
<p>
There’s so much more I could have included, Costa Rica was just such an exciting and unique place. They have a saying “Pura Vida” / “Pure Life” which they use in a response to everything. I bought my first and only souvenir bc I am obsessed. I am finishing this off in the airport waiting for our flight to Bogota, where I’ll be reunited with another friend from my year abroad that I haven’t seen in 8 years. We’re also planning our final couple of months before our return to the UK!!!
</p>
            <p className='date-posted'>Posted on 09.07.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
    )
}

export default CostaRica