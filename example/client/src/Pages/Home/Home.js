import React from 'react'
import Slider from '../../Components/Slider/Slider';
import SliderRowerCard from "../../Components/Content/SliderLowerCard//SliderRowerCard"
import '../../index.css';
import PlasticSurgery from '../../Components/Content/PlasticSurgery/PlasticSurgery';
import GynecologıcalDiseases from "../../Components/Content/GynecologıcalDiseases/GynecologıcalDiseases"
import Hospital from "../../Components/Content/Hospital/Hospital"
import Cities from "../../Components/Content/Cities/Cities";
import Shorts from '../../Components/Content/Shorts/Shorts';
import MobileShorts from '../../Components/Content/Shorts/MobileShorts/MobileShorts';
import InfoCard from '../../Components/Content/InfoCard/InfoCard';


export default function Home( {sliderValue , setSliderValue } ) {
    return (

        <>
            <MobileShorts />
            <Shorts></Shorts>
            <Slider  sliderValue={sliderValue} setSliderValue={setSliderValue}  />
            <SliderRowerCard />
            <InfoCard />
            <PlasticSurgery />
            <Hospital />
            <GynecologıcalDiseases />
            <Cities />
         

        </>
    )
}
