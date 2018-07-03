import React, { Component } from 'react';
import Hammerad from './Hammerad';
import SmallArt from './SmallArt';
class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
         articles:[ 
            {src:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", alt: "orc", p: "Single Orcs in Indianapolis"},
            {src:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", alt: "mountain", p:"You won't believe what's under this mountain" },
            {src:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg", alt:"gold",p:"Mine 20% more gold with One Weird Trick"},
            {src:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", alt:"hobbit", p:"Surprise for Indiana Hobbits born before 1999"}
    ]
    }
}
    render(){
        return(
            <main className="expanded row"> 

          <Hammerad/>
        
           <div className="small-12 columns other-articles">
             <h2>From around the Realm</h2>
             {this.state.articles.map(currentArt=> <SmallArt art = {currentArt}/>)}
              {/* {this.state.articles.map(currentArt => <smallArt src = {currentArt.src} alt= {currentArt.alt} p= {currentArt.p} />)} */}
           </div>
         </main>
        )
    }
}
export default Main