'use client';
import React from "react";
import Footer from "../../components/Footer";
import Image from 'next/image'
import { Gallery } from "react-grid-gallery";
import ImageGallery from "react-image-gallery";
import logoDistressed from '../../public/LOGO-with-distress.png'
import logoUndistressed from '../../public/LOGO-without-distress.png'
import img1 from '../../public/almanac2.jpg'
import img2 from '../../public/IMG_2711.png'
import img3 from '../../public/IMG_2721.png'
import img4 from '../../public/IMG_3054.png'

const images = [
  {
     src: {img1},
     width: 768,
     height: 768,
     isSelected: true,
     caption: "test",
  },
  {
     src: {img2},
     width: 1648,
     height: 1236,
     alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
     src: {img3},
     width: 320,
     height: 212,
     alt: "test 2"
  },
];


const images2 = [
  {
     original: {img1},
     thumbnail: {img1},
  },
  {
    original: {img2},
    thumbnail: {img2},
  },
  {
    original: {img3},
    thumbnail: {img3},
  },
];
// const imageMap = images.map(img => (
//   <Image src={img.src} width={img.width} height={img.height} alt="band logo" />
// ));

export default function Press() {
    return (
        <div className="container">
          <main>
            <h1 className="text-3xl pt-20 pb-10">Press Kit</h1>
            <h2 className="text-2xl pb-10">Logo PNGs</h2>
            <Image src={logoDistressed} width={500} height={200} alt="band logo distressed" />
            <Image src={logoUndistressed} width={500} height={200} alt="band logo undistressed" />
            <h2 className="text-2xl pb-10">Quotes</h2>
            <p className="w-3/5 text-center text-balance text-slate-500 dark:text-slate-400">
              "Almanac Man is load-bearing, twin vocal, double-shot espresso post 
              noise from Denver. Is that it? Is that all? Not really. Born out of 
              the metal crunch of Laurium and fused with an acute sense of 
              precision, Almanac Man has blistered Denver audiences for the 
              last two years. Unlike other bands working trudging in the 
              same well-mined soundzone, Almanac Man do away with pretension 
              without doing away with a relationship to melodies. This ain’t 
              no Don Delillo shit. This is Saul Bellow without the rank 
              Conservatism. Enjoy the headache."
              </p>
              <span className="text-white italic pt-5 pb-10"> - Jeremy Brashaw, Ghost Canyon Fest</span>
              <p className="w-3/5 text-center text-balance text-slate-500 dark:text-slate-400">
                "How did I hear about Denver’s Almanac Man? Well, as you will read in many future 
                installments, many of No Coast’s bands reach out directly. These fellas, in 
                particular, reached out on the heels of a recommendation by Moon Pussy. 
                I get lots of emails from bands asking to play the fest and I listen to all 
                the bands, every single one. I didn’t find out I till after a deep listen to 
                For Your Cause (This Ghost Is Clear) that the drummer is in Bear Claw. Which lended 
                a bit of context to the familiarity of their sound. They’ll whack you in the face 
                with some 90’s references but keep those early 2000’s Chicago rhythms around to 
                propel the guitar whenever it’s at its most melodic (for the record, the bass tone 
                is about as modern as you get). I dig this band and you should check out 
                'inco-habitant' for some pummeling desperation"</p>
                <span className="text-white italic pt-5"> - Jeff Helland, No Coast Fest</span>
            <h1 className="text-3xl pt-20 pb-10">Bio</h1>
            <p className="w-3/5 text-center text-balance text-slate-500 dark:text-slate-400">
              Almanac Man formed in 2020 when Denver, CO post-hardcore heroes Laurium folded, prompting guitarist Brian Dooley (ex-Tigon) and bassist Nick Holtz to team up with drummer and recent Chicago ex-pat Scott Picco (ex-Bear Claw), forming a noise rock trio that fused their former band's detuned abrasion with twin vocals and odd meters. Sidelined from live performance by a world-historic pandemic, they put their heads down and recorded their debut LP - 2022's FOR YOUR CAUSE, 27 minutes of raw-wound intensity. Once recording wrapped, Holtz departed and the band added Sean Dove on bass. This new iteration supported the record with fierce live shows and a tour to Denton, TX's illustrious No Coast Fest in 2022, performing alongside such bands as Protomarytr, Metz, Chat Pile, Young Widows and Ken Mode. In 2023, Almanac Man played the inaugural Ghost Canyon Fest in their hometown, joining Big | Brave, Pile’s Rick Maguire and many others. 2024 brings the release of their second full-length on The Ghost Is Clear, TERRAIN, a meditation on loss, futility and avarice. Recorded in Ft. Collins, CO at the famous Blasting Room by Felipe Patino of Green Door Recordings and mixed by Anti-Sleep's Scott Evans (Kowloon Walled City), TERRAIN brings more melody and experimentation into the pummeling chaos. Prepare your ears.
            </p>
            <h2 className="text-2xl pt-20 pb-10">Images</h2>
            {/* {imageMap} */}
            <Image src={img1} width={300} height={300} alt="Almanac Man live @ Hi-Dive" />
            <div className="columns-2">
            <Image src={img3} width={300} height={300} alt="Almanac Man live @ Hi-Dive" />
            <Image src={img4} width={300} height={300} alt="Casual promo shot" />
            </div>
            <h2 className="text-2xl pt-20 pb-10">Live Video</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eDLyUmN3hkA?si=wyF3ebx5iMqD1jXL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2 className="text-2xl pt-20 pb-10">Spotify</h2>
            <iframe className="w-4/5" src="https://open.spotify.com/embed/album/23zXWuY5oAMUCbJG9npFns?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowFullScreen></iframe>
            <h2 className="text-2xl pt-20 pb-10">Bandcamp</h2>
            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=606013730/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://almanacman.bandcamp.com/album/for-your-cause">For Your Cause by Almanac Man</a></iframe>
          </main>
    
          <Footer />
        </div>
      )
  }