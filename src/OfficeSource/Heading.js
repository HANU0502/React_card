import React from 'react';
import Icons from './Icons'
import './Office.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
const Heading = () => {
    return(
      <div className="bg-light p-3">
            <div className="container">
            <div className="row mt-4 pt-4">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-sm-6 text-dark breadcrumb">
                            <a href="#" className="breadcrumb-item"><i className="fas fa-home">  </i></a>
                            <span><i className="fas fa-chevron-right"></i>  </span>
                            <a href="#" className="breadcrumb-item">Office Source</a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="display-1 text-dark my-"><b>Five Regus office to inspire you<span style={{color:'red'}}><b>.</b> </span> </b></div>
                    </div>
                    <div className="col-lg-12 p-1">
                        <small>Posted on: 11th January 2021</small>
                    </div>
                    <div className="col-lg-12 p-1">
                    <small>Reading times : 2 mins</small>
                    </div>
                    <Icons />
                    <div className="col-lg-12 pt-4">
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet atque consequatur sequi dolores praesentium iste officiis, voluptate consequuntur voluptatibus temporibus rerum esse cupiditate modi! Et laborum ipsa alias porro soluta.</h5>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 col-sm-12 ">
                    <img className="img-responsive" src="https://picsum.photos/seed/picsum/700/600" alt="Nature image" />
                </div>
            </div>
        </div>
      </div>
    )
}

export default Heading;