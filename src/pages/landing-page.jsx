import React from "react"
import intro1 from "../assests/images/hair-2.jpg"
import card1 from "../assests/images/hair-4.png"
import card2 from "../assests/images/hair-5.png"
import card3 from "../assests/images/hair-3.jpg"
import cta from "../assests/images/hair-6.png"
import hairVideo from "../assests/Video/Hair-by-kola.mp4"

import '../App.css';


function LandingPage() {
  console.log(intro1);
  return (
        <div className="main">
   <div className="main__cont">
    <div className="main__cont--text">
     <h1 className="pri-textBox head-main white">
      Hair products made with love.That's what you get from us.
     </h1>
     <button className="pri-btn dark p-mid">Shop now</button>
    </div>
    <img className="main__cont--image" src={intro1} alt="intro" />
   </div>
   <div className="main__about">
    <div className="main__about--image"></div>
    <div className="main__about--textBox">
     <div className="tbHeader dark head-main text-center">Our Brand Story</div>
     <p className="tbText p-mid text-center dark">
      Hair by kola is Kenya's No. 1 Online one-stop beauty platform providing
      quality and trendy hair products.Because we believe hair doesn't make the
      woman but good hair definitely helps.
     </p>
    </div>
   </div>
   <div className="main__shop">
    <div className="main__shop--shopContent">
     <h1 className="main__shop--header head-main white">Wigs Selection</h1>
     <div className="main__shop--cards">
      <div className="card-main">
       <img className="card-main__img" src={card1} alt="card-img" />
       <h2 className="card-main__header white text-center card-header">
        Frontal Wigs
       </h2>
       <p className="card-main__text white text-center p-card">
        This wig covers the entire front of your head from ear to ear.
       </p>
      </div>
      <div className="card-main">
       <img className="card-main__img" src={card2} alt="card-img" />
       <h2 className="card-main__header white text-center card-header">
        Closure Wigs
       </h2>
       <p className="card-main__text white text-center p-card p-card">
        Typically have a 4x4-inch patch placed on the middle, front portion of
        the hairpiece.
       </p>
      </div>
      <div className="card-main">
       <img className="card-main__img" src={card3} alt="card-img" />
       <h2 className="card-main__header white text-center card-header">
        Trends
       </h2>
       <div className="card-main__text white text-center p-card">
        Here are some of the huge trends right now.
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="main__fav">
    <div className="main__fav--header">
     <h1 className="mfHeader head-main  dark">
      Here are some of the huge trends right now.
     </h1>
    </div>
    <div className="main__fav--cards">
     <div className="card-sec">
      <img src={card1} alt="card1" className="card-sec__img" />
      <div className="card-sec__textBox">
       <p className="card-sec__textBox--text p-mid dark">
        Jumbo Braids a hair coloring technique where a darker base is gradually
        lightened along the lengths of the hair, usually starting mid-way.
       </p>
       <a href="/" className="card-sec__textBox--link card-header dark">
        Jumbo Braids
       </a>
      </div>
     </div>
     <div className="card-sec">
      <img src={card2} alt="card2" className="card-sec__img" />
      <div className="card-sec__textBox">
       <p className="card-sec__textBox--text p-mid dark">
        Embrace and protect your natural hair with flattering knotless braids.
        These protective braids are versatile, effortlessly chic, and shield
        your scalp and tresses from all kinds of damage.
       </p>
       <a href="/" className="card-sec__textBox--link card-header dark">
        Knotless braids
       </a>
      </div>
     </div>
     <div className="card-sec">
      <img src={card3} alt="card2" className="card-sec__img" />
      <div className="card-sec__textBox">
       <p className="card-sec__textBox--text p-mid dark">
        Style: Hippie Locs, Culy Crochet Hair, Godness Faux Locs, River Locs
        Crochet Hair, Fashion avant-garde, Boho Style.
       </p>
       <a href="/" className="card-sec__textBox--link card-header  dark">
        Curly faux locs
       </a>
      </div>
     </div>
    </div>
   </div>
   <div className="main__comments">
    <video
     src={hairVideo}
     autoPlay
     muted
     loop
     className="main__comments--video"
    />
    <div className="main__comments--textBox">
     <div className="main__comments--comment white text-center head-comment">
      I'm the biggest user of our products. I won't put anything harmful on your
      head, because if you invest in your hair, it's the crown you never take
      off.
     </div>
     <div className="main__comments--title head-main white text-center">
      - Cynthia Kola , CEO
     </div>
    </div>
   </div>
   <div className="main__contacts">
    <div className="main__contacts--cta">
     <div className="contacts__title dark head-main">Get in Touch</div>
     <img className="contacts__cta" src={cta} alt="cta" />
    </div>
    <div className="main__contacts--address">
     <div className="contacts__address">
      <h3 className="contacts__address--title dark p-mid ">Mailing Address</h3>
      <address className="contacts__address--text dark p-card ">
       123 Anywhere St., Any City, State, Country 12345
      </address>
     </div>
     <div className="contacts__address">
      <h3 className="contacts__address--title dark p-mid ">Email Address</h3>
      <address className="contacts__address--text dark p-card ">
       hello@hairbykola.com
      </address>
     </div>
    </div>
   </div>
  </div>
  )
}

export default LandingPage