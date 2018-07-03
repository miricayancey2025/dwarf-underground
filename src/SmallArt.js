import React, { Component } from 'react';

class smallArt extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return( 
        <div className="small-6 medium-3 columns other-article">
        <a href="#">
        <img src= {this.props.art.src} alt={this.props.art.alt} />
        <p>{this.props.art.p}</p>
        </a>  
        </div>

                )
            }
            }
     export default smallArt