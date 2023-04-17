import React from "react";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div className="home">
            <Header />
            <About /> 
            <SignUp />
            <Footer />
        </div>
    )
}

export default Home;