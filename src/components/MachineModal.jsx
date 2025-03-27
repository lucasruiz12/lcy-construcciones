import React from "react";
import { Modal, Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "./Carousel";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MachineModal = ({ open, onClose, machine }) => {

    const { name } = machine

    const message = `Hola! Quiero consultar disponibilidad y más información acerca del alquiler de la siguiente máquina: 
    
    *${name}*`;

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="machine-modal-title">
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: "70%", md: "50%" },
                    height: "80%",
                    bgcolor: "white",
                    borderRadius: "12px",
                    boxShadow: 24,
                    p: 4,
                    outline: "none",
                    animation: "fadeIn 0.3s ease-out",
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{ position: "absolute", top: 8, right: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography id="machine-modal-title" variant="h4" fontWeight={500} gutterBottom>
                    {machine.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "1.2rem" }} dangerouslySetInnerHTML={{ __html: machine.description }} />
                <Carousel images={machine.images} modal={true} />
                <br />
                <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                <Button variant="outlined" color="default" href={`https://wa.me/5493885900578?text=${message}`} startIcon={<WhatsAppIcon />} target="_blank">
                    Contactar por WhatsApp
                </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default MachineModal;
