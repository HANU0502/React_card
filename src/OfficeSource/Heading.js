import React from 'react';

const Heading = () => {
    return(
      <div className="bg-light p-3">
            <div className="container">
            <div className="row mt-4 pt-4">
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="row">
                        <div className="col-2">
                            <p>Home</p>
                        </div>
                        <div className="col-2">
                        <i class="far fa-angle-right">Back</i>
                        </div>
                        <div className="col-6 float-right">
                            <p>Office Space</p>
                        </div>
                    </div>
                    <div className="col-lg-12 pb-">
                        <div className="display-1 text-dark my-"><b>Five Regus office to inspire you <span style={{color:'red'}}>.</span> </b></div>
                    </div>
                    <div className="col-lg-12 p-1">
                        <small>Posted on: 11th January 2021</small>
                    </div>
                    <div className="col-lg-12 p-1">
                    <small>Reading times : 2 mins</small>
                    </div>
                    <div className="col-lg-12 p-3">
                        <div className="row rounded p-1 ">
                            <div className="col-3"><small>Share Article : </small></div>
                            <div className="col-1">Fb</div>
                            <div className="col-1">Fb</div>
                        </div>
                    </div>
                    <div className="col-lg-12 pt-4">
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet atque consequatur sequi dolores praesentium iste officiis, voluptate consequuntur voluptatibus temporibus rerum esse cupiditate modi! Et laborum ipsa alias porro soluta.</h5>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 ">
                    <img className="img-fluid float-end" src="https://picsum.photos/seed/picsum/700/600" alt="Nature image" />
                </div>
            </div>
        </div>
      </div>
    )
}

export default Heading;