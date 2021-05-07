import React from 'react';

const Icons = () =>{
    return(
        <div className="col-lg-12 p-2">
                        <div className="row rounded p-3 ">
                            <div className="col-sm-8 p-1" style={{backgroundColor:'white'}}>
                               <div className="p-2">Sharing article : <a href="#"><i className="fab fa-lg fa-facebook mx-1"></i></a> <i className="fas fa-lg fa-home mx-1"></i> <a href="#"> <i className="fab fa-lg fa-twitter-square mx-1"></i></a> <a href="#"> <i className="fab fa-lg fa-youtube-square"></i></a></div>
                            </div>
                        </div>
        </div>
    )
}

export default Icons;