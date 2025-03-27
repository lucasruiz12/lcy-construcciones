import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const Section = ({ id, title, content }) => {
  return (
    <Container id={id} sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        {content.map((text, index) => (
          <Typography key={index} variant="body1" paragraph dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </motion.div>
    </Container>
  );
};

export default Section;
