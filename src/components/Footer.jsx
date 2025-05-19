import { Box, Container, Grid, Typography, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/Linkedin";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8 }}
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton href="mailto:contacto.lcyconstrucciones@gmail.com" target="_blank" rel="noopener" color="inherit">
                <EmailIcon fontSize="small" />
              </IconButton>
              <IconButton href="https://wa.me/5493885900578" target="_blank" rel="noopener" color="inherit">
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Redes Sociales
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton href="https://www.instagram.com/lcy_construcciones?igsh=Z2xsa3FlMzVtMjg2&utm_source=qr" target="_blank" rel="noopener" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/company/lcy-construcciones-y-servicios/" target="_blank" rel="noopener" color="inherit">
                <LinkedinIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: "1px solid #444", mt: 4, pt: 2, textAlign: "center" }}>
          <Typography variant="body2" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
            <CopyrightIcon fontSize="small" />
            LCY Construcciones {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;