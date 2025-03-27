import { Grid, Container, Typography } from "@mui/material";
import MachineCard from "./MachineCard";
import { machines } from "../helpers/info";

const MachineSection = () => {

    return (
        <Container sx={{ textAlign: "center", py: 4 }}>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ display: "flex", flexWrap: "wrap" }}
            >
                {machines.map((machine) => (
                    <Grid item xs={12} sm={6} md={4} key={machine.name}>
                        <MachineCard machine={machine} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MachineSection;
