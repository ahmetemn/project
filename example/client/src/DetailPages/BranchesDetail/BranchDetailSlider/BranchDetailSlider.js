import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./BranchDetailSlider.css";
import Image from 'react-bootstrap/Image';

export default function BranchDetailSlider({ photoBrans }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const maxPhotos = 8; // Maksimum fotoğraf sayısı
    const userPhotos = 1500; // Kullanıcının eklediği fotoğraf sayısı
    const [datalength , setdatalength] = useState()



    
     useEffect(() =>{

        setdatalength(photoBrans?.length)

     },[photoBrans])
     useEffect(() => {
        // Eklenen fotoğraf sayısı 8'den fazlaysa fazla olanları gizle
        if (userPhotos > maxPhotos) {
            for (let i = maxPhotos; i < userPhotos; i++) {
                const slideIndex = i + 1;
                const colIndex = i;

                // Slaytları ve küçük resimleri gizle
                const slideElements = document.getElementsByClassName('mySlides');
                if (slideElements[slideIndex]) {
                    slideElements[slideIndex].style.display = 'none';
                }

                const colElements = document.getElementsByClassName('demoBranch');
                if (colElements[colIndex]) {
                    colElements[colIndex].style.display = 'none';
                }
            }
        } else {
            // Eklenen fotoğraf sayısı 8'den azsa tüm fotoğrafları göster
            const slideElements = document.getElementsByClassName('mySlides');
            const colElements = document.getElementsByClassName('demoBranch');

            for (let i = 0; i < slideElements.length; i++) {
                slideElements[i].style.display = 'block';
            }

            for (let i = 0; i < colElements.length; i++) {
                colElements[i].style.display = 'block';
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
        const dots = document.getElementsByClassName("demoBranch");
      
        if (slides && dots && slides.length > 0 && dots.length > 0) {
          if (n > slides.length) {
            setSlideIndex(1);
          }
          if (n < 1) {
            setSlideIndex(slides.length);
          }
          for (let i = 0; i < slides.length; i++) {
            if (slides[i]) {
              slides[i].style.display = "none";
            }
          }
          for (let i = 0; i < dots.length; i++) {
            if (dots[i]) {
              dots[i].className = dots[i].className.replace(" active", "");
            }
          }
          if (slides[n - 1]) {
            slides[n - 1].style.display = "block";
          }
          if (dots[n - 1]) {
            dots[n - 1].className += " active";
          }
        }
      }

    console.log(photoBrans?.length)
    return (
        <div>

            <div className="container">



                {photoBrans?.map((item, index) => (
                    <>
                        <div className="mySlides" >
                            <div className="numbertext">{index}/{index.length}</div>

                            <Image className='sliderimageBranch' src={item.image_url} alt="The Woods" />
                        </div>
                    </>
                ))}


            
                           
                                <Row >
                                    {photoBrans?.map((item, index) => {

                                        return (
                                            <Col xs={4} sm={2} lg={3} md={2} >
                                                <div className="image-container ">
                                                    <Image className="demoBranch cursor" src={item.image_url} onClick={() => currentSlide(index )} />
                                                </div>
                                            </Col>
                                        )
                                    })}


                                </Row>
                            
              

            </div>

        </div>
    );
}
