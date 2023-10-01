import React from 'react';
import Introduction from "src/pages/home/introduction/Introduction";
import WhyImportant from "src/pages/home/whyImportant/WhyImportant";
import BestChoice from "src/pages/home/bestChoice/BestChoice";
import Equipments from "src/pages/home/equipments/Equipments";
import Services from "src/pages/home/services/Services";
import Reviews from "src/pages/home/reviews/Reviews";
import Brands from "src/pages/home/brands/Brands";
import Offers from "src/pages/home/offers/Offers";
import Discover from "src/pages/home/discover/Discover";
import Promises from "src/pages/home/promises/Promises";
import AboutUs from "src/pages/home/aboutUs/AboutUs";
import ContactUs from "src/pages/home/contactUs/ContactUs";
const HomePage = () => {
    return (
        <main>
            <Introduction/>
            <WhyImportant/>
            <BestChoice/>
            <Equipments/>
            <Services/>
            <ContactUs/>
            <Discover/>
            <Reviews/>
            <Brands/>
            <Offers/>
            <Promises/>
            <AboutUs/>
        </main>
    );
};

export default HomePage;