import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#c4f2f0" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#18ba3b">
        Bjeff bjeff bjeff
      </Typography>
      <Typography>
      “Menneskets beste venn” er en vanlig setning som har blitt kjent globalt. Imidlertid er det mange andre som vi er sikre på at du vil elske å lese. Derfor vil vi i denne artikkelen dele noen av de beste setningene og sitatene om hunder med deg.

Våre kjære venner fortjener absolutt vår oppmerksomhet. I tillegg kjenner deres vennskap, kjærlighet og lojalitet til oss ingen grenser. Dette er grunnen til at selv et lite hyllest som dette er veldig lite sammenlignet med det de gir oss.
      </Typography>
    </Box>
  );
}

export default Description;
