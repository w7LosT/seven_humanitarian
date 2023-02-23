import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = () => {
    return (
        <div>
            <Header itemActive='/' /> 
            <h1>Home</h1>
            <Footer />
        </div>
    );
};