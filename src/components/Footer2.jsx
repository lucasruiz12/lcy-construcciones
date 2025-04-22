
import { Box, Container, Grid, Typography, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box
      component="footer"
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
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon fontSize="small" />
              <Link href="mailto:contacto@lcyconstrucciones.com" color="inherit" underline="hover">
                contacto@lcyconstrucciones.com
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <WhatsAppIcon fontSize="small" />
              <Link href="https://wa.me/5493885900578" target="_blank" rel="noopener" color="inherit" underline="hover">
                +54 9 388 590-0578
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Redes Sociales
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
                <FacebookIcon />
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
