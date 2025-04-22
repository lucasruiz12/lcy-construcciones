import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import CarouselCards from "./CarouselCards";
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from "react";
import MachineModal from "./MachineModal";

const MachineCard = ({ machine }) => {

    const [showModal, setShowModal] = useState(false);

    const { name, images } = machine;

    const message = `Hola! Quiero consultar disponibilidad y más información acerca del alquiler de la siguiente máquina: 
    
    *${name}*`;

    return (
        <Card sx={{ maxWidth: 345, height: 600, display: "flex", flexDirection: "column", mx: "auto" }}>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
                <CarouselCards images={images} />
            </Box>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Typography variant="h5" textAlign="center">{name}</Typography>
                <br />
                <Button variant="outlined" color="default" onClick={() => setShowModal(true)} startIcon={<InfoIcon />}>
                    Más información
                </Button>
                <br />
                <Button variant="outlined" color="default" href={`https://wa.me/5493885900578?text=${message}`} startIcon={<WhatsAppIcon />} target="_blank">
                    Contactar por WhatsApp
                </Button>
            </CardContent>
            {showModal && <MachineModal open={showModal} onClose={() => setShowModal(false)} machine={machine} />}
        </Card>
    );
};

export default MachineCard;
