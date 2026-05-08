import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Stats from "@/components/Stats";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Program />
            <Stats />
            <Sponsors />
            <Footer />
        </>
    );
}