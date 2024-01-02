import React, { useState, useEffect } from 'react';
import './Gaming.css'
import gsap, { TweenMax, Expo } from 'gsap';

const Gaming = () => {

    const [images] = useState([
        {
            id: 1,
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/272/401/119/apex-legends-battle-royale-video-game-art-video-game-characters-fan-art-hd-wallpaper-preview.jpg',
        },
        {
            id: 2,
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/352/847/648/apex-legends-neon-blender-3d-graphics-loba-hd-wallpaper-preview.jpg',
        },
        {
            id: 3,
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/210/864/1014/video-game-apex-legends-bloodhound-apex-legends-lifeline-apex-legends-wraith-apex-legends-hd-wallpaper-preview.jpg',
        },
        {
            id: 4,
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/25/838/370/video-game-apex-legends-bloodhound-apex-legends-hd-wallpaper-preview.jpg',
        },
    ]);



    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.first', 1.5, {
            delay: 0.2,
            left: '-100%',
            ease: 'expo.inOut'
        })
        .to('.second', 1.5, {
            delay: 0.4,
            left: '100%', 
            ease: 'expo.inOut',
            onComplete: function() {
                document.querySelector('.second').style.display = 'none';
            }
        });

        TweenMax.set('.product-title', { opacity: 0, y: -50 });

        TweenMax.to('.product-title', 1, {
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut,
        });

        TweenMax.to('.product-title', 1, {
            delay: 2.7, 
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut,
        });
        TweenMax.to(".stripe", 2.4, {
            delay: 5,
            width: "100%",
            ease: Expo.easeInOut
        });


        let intervalId;

        if (autoplay) {
            intervalId = setInterval(() => {
                nextSlide();
            }, 6000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [autoplay]);

    return (
        <div className='ms-16 mt-16'>
            <div className="container">
                <div className="overlay first"></div>
                <div className="overlay second"></div>



                <div className="product-text">
                <div className="stripe"></div>

                    <h1 className="product-title">ART.</h1>
                </div>

            </div>
            <div className=" mx-auto ms-0 " style={{ hieght: '400px', width: '1000px', marginTop: '500px' }}>
                <div className="relative">

                    <div className="overflow-hidden">
                        <img
                            src={images[currentIndex].imageUrl}
                            alt={images[currentIndex].title}
                            className="w-full"
                        />
                    </div>
                    <div className='gm'>
                        <div className='gm1'>
                            <img className='ct1' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                        </div>
                        <div className='gm2'>
                            <img className='ct2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                        </div>
                        <div className='gm3'>
                            <img className='ct3' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                        </div>

                    </div>
                </div>

            </div>

            <div className='mt-44'>

                <div className='mn'>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>

                </div>




                <div className='mn'>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>

                </div>




                <div className='mn'>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>

                </div>



                <div className='mn'>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>
                    <div className='mn1'>
                        <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                        <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Gaming;
