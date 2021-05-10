import React from 'react';
import Button from './Manhattan.style'
import './Manhattan.style'

const Manhattan = () =>{
    return(
        <>
        <div className="bg-light p-3">
            <div className="container">
            <div className="row mt-4 pt-4">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="row">
                        <div className=" mx-2 col-sm text-dark breadcrumb py-2">
                            <a href="#" className="breadcrumb-item"><i className="fas fa-home mx-2">  </i></a>
                            <span><i className="fas fa-chevron-right"></i>  </span>
                            <a href="#" className="breadcrumb-item mx-2"> United state </a>
                            <span><i className="fas fa-chevron-right mx-2"></i>   </span>
                            <a href="#" className="breadcrumb-item mx-2"> New York </a><span><i className="fas fa-chevron-right mx-2"></i>   </span>
                            <a href="#" className="breadcrumb-item"> New York City </a>
                            
                        </div>
                    </div>
                    <div className="col-lg-12 py-2">
                        <div className="display-4 text-dark text-dark font-weight-bold"><b>Work your way in Manhattam<span style={{color:'red'}}><b>.</b> </span> </b></div>
                    </div>
                    
                    <div className="col-lg-12 p-1 py-2">
                        <div className="col-sm-12">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <a href="#" className="mx-2"> 4.1/5</a>
                            <span className="lead mx-3">21 reviews</span>
                        </div>
                    </div>

                    <div className="col-lg-12 p-1 py-4">
                        <i class="fas fa-map-marked-alt"></i>

                        <small className="mx-3 text-uppercase"><u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laboriosam aliquam eveniet rem dicta optio!</u></small>
                    </div>
                    <div className="col-lg-12 p-1 py-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consectetur ratione dolore consequuntur labore pariatur tempore ea obcaecati</p>
                    </div>
                    <div className="col-lg-12 py-2 d-flex justify-content-between">
                        <div className="col-lg-8">
                        <div class="btn-group">
                            <button class="btn btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Enter email">
                            <i class="fas fa-flag"></i>
                            </button>
                            
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>

                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-4">
                            <Button>click me</Button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 col-sm-12 ">
                    <img className="img-responsive" src="https://picsum.photos/seed/picsum/700/600" alt="Nature image" />
                </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Manhattan;