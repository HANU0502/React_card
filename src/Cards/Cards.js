import React, { Component } from 'react'
import Card from "./CardUI";

class Cards extends Component{
    render(){
        return(
            <div className="mt-5 pt-5 px-5 container-fluid d-flex justify-content-center">
                
                    <div className="row">
                        <div className="col-12">
                            <h2>Other ways to work <span style={{color:'red'}}> .</span> </h2>
                        </div>
                            <div className="col-3">
                                <Card />
                            </div>
                            <div className="col-3">
                                <Card />
                            </div>
                            <div className="col-3">
                                <Card />
                            </div>
                            <div className="col-3">
                                <Card />
                            </div>
                    </div>
            </div>
        )
    }
}
export default Cards;

