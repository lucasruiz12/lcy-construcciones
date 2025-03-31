import Header from "../components/Header";
import Section from "../components/Section";
import { Container } from "@mui/material";
import { aboutContent, constructionContent, engineeringContent, machineContent } from "../helpers/info";
import MachineSection from "../components/MachineSection";

const Home = () => {

    return (
        <>
            <Header />
            <Section id="about" title="¿Quiénes somos?" content={aboutContent} />
            <Section id="construction" title="Construcción" content={constructionContent} />
            <Section id="machines" title="Alquiler de máquinas y movimientos de áridos" content={machineContent} />
            <Container id="machines" sx={{ py: 6 }}>
                <MachineSection />
            </Container>
            <Section id="services" title="Servicios de Ingeniería" content={engineeringContent} />
        </>
    );
};

export default Home;
