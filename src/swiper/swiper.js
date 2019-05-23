import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './swiper.css'
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";

class Lunbo extends React.Component {
    componentDidMount ()
    {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable:true
            }
        });
    }
    render() {
        return (
            <div className={}>
                <div className="swiper-container" >
                    <div className="swiper-wrapper" >
                        <div className="swiper-slide"><img src={img1} width="700px" height="300px" /></div>
                        <div className="swiper-slide"><img src={img2} width="700px" height="300px" /></div>
                        <div className="swiper-slide"><img src={img3} width="700px" height="300px" /></div>
                        <div className="swiper-slide"><img src={img4} width="700px" height="300px" /></div>
                    </div>
                    <div className='swiper-pagination'></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                    <div className="swiper-button-next swiper-button-white"></div>
                </div>
            </div>
        );
    }
}


export default Lunbo
