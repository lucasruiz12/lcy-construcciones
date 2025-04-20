import Header from "../components/Header";
import Section from "../components/Section";
import { Container } from "@mui/material";
import { aboutContent, constructionContent, engineeringContent, machineContent, sectionImages } from "../helpers/info";
import MachineSection from "../components/MachineSection";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <>
            <Header />
            <Section id="about" title="¿Quiénes somos?" content={aboutContent} images={sectionImages["about"]} />
            <Section id="construction" title="Construcción" content={constructionContent} images={sectionImages["construction"]} />
            <Section id="machines" title="Alquiler de máquinas y movimientos de áridos" content={machineContent} images={sectionImages["machines"]} />
            <Container id="machines" sx={{ py: 6 }}>
                <MachineSection />
            </Container>
            <Section id="services" title="Servicios de Ingeniería" content={engineeringContent} images={sectionImages["services"]} />
            <Footer />
        </>
    );
};

export default Home;
