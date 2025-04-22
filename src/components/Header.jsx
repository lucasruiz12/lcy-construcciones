import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logoHeader from '../assets/logo-header.png'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = (id) => {
        scrollToSection(id);
        setAnchorEl(null);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                    <img src={logoHeader} style={{ height: "50px", width: "50px" }} alt="LCY" />
                </Typography>

                <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }} onClick={() => scrollToSection("about")}>Quiénes Somos</Button>
                <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }} onClick={() => scrollToSection("construction")}>Construcción</Button>
                <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }} onClick={() => scrollToSection("machines")}>Alquiler de Máquinas</Button>
                <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }} onClick={() => scrollToSection("services")}>Servicios de Ingeniería</Button>

                <IconButton color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: "block", md: "none" } }}>
                    <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
                    <MenuItem onClick={() => handleMenuClose("about")}>Quiénes Somos</MenuItem>
                    <MenuItem onClick={() => handleMenuClose("construction")}>Construcción</MenuItem>
                    <MenuItem onClick={() => handleMenuClose("machines")}>Alquiler de Máquinas</MenuItem>
                    <MenuItem onClick={() => handleMenuClose("services")}>Servicios de Ingeniería</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
