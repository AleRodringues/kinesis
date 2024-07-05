import React from 'react';
import Header from '../common/Header';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import CategoriesCards from './Home/CategoriesCards';
import ProductsCards from './Home/ProductsCards';
import OfferOfTheDay from './Home/OfferOfTheDay';
import DiscountOffers from './Home/DiscountOffers';
import Brands from './Home/Brands';
import AmazingOffers from './Home/AmazingOffers';
import PartnerProducts from './Home/PartnerProducts';
import TrainingProducts from './Home/TrainingProducts';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <NavBar />
            <CategoriesCards />
            <ProductsCards />
            <OfferOfTheDay />
            <DiscountOffers />
            <Brands />
            <AmazingOffers />
            <PartnerProducts />
            <TrainingProducts />
            <Footer />
        </div>
    );
};

export default HomePage;
