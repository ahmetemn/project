import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./DoctorDetailSlider.css";
import Image from 'react-bootstrap/Image';

export default function DoctorDetailSlider({ doctorBranchPhoto }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const maxPhotos = 8; // Maksimum fotoğraf sayısı
    const userPhotos = 1500; // Kullanıcının eklediği fotoğraf sayısı
    const [datalength , setdatalength] = useState()

     useEffect(() =>{

        setdatalength(doctorBranchPhoto.length)

     },[doctorBranchPhoto])
    useEffect(() => {
        // Eklenen fotoğraf sayısı kullanılabilecek maksimum fotoğraf sayısından fazlaysa son 2 fotoğrafı gizle
        if (userPhotos > maxPhotos) {
            const extraPhotos =  maxPhotos;
            for (let i = 0; i < extraPhotos; i++) {
                const slideIndex = maxPhotos + i + 1;
                const colIndex = maxPhotos + i;

                // Ekstra slaytları gizle
                const slideElements = document.getElementsByClassName('mySlides');
                if (slideElements[slideIndex]) {
                    slideElements[slideIndex].style.display = 'none';
                }

                // Ekstra küçük resimleri gizle
                const colElements = document.getElementsByClassName('demo');
                if (colElements[colIndex]) {
                    colElements[colIndex].style.display = 'none';
                }
            }
        }
    }, [userPhotos, maxPhotos]);

    useEffect(() => {
        const timer = setInterval(() => {
            plusSlides(1);
        }, 1000);

        showSlides(slideIndex);

        return () => clearInterval(timer);
    }, [slideIndex]);

    function plusSlides(n) {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;


            if (newIndex > datalength  ) {
                newIndex = 1;
            } else if (newIndex < 1) {
                newIndex = 4
            }

            return newIndex;
        });
    }

    function currentSlide(n) {
        setSlideIndex(n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("demo");

        if (slides && dots && slides.length > 0 && dots.length > 0) {
            if (n > slides.length) {
                setSlideIndex(1);
            }
            if (n < 1) {
                setSlideIndex(slides.length);
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }

    console.log(doctorBranchPhoto.length)
    return (
        <div>

            <div className="container">



                {doctorBranchPhoto?.map((item, index) => (
                    <>
                        <div className="mySlides" >
                           

                            <Image className='sliderimageDoctor' src={item.image_url} alt="The Woods" />
                        </div>
                    </>
                ))}


            
                           
                                <Row >
                                    {doctorBranchPhoto.map((item, index) => {

                                        return (
                                            <Col xs={4} sm={2} lg={3} md={2} >
                                                <div className="image-container ">
                                                    <Image className="demo cursor" src={item.image_url} onClick={() => currentSlide(index + 1)} />
                                                </div>
                                            </Col>
                                        )
                                    })}


                                </Row>
                            
              

            </div>

        </div>
    );
}
