import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#cdd1d1"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/hundebilde.jpeg"
        alt="Blomst"
        sx={{
          width: 300,
          height: 300,
          margin: "auto",
          border: "40px solid #c4f2f0",
        }}
      />
      <Typography variant="h4" gutterBottom color="#3f51b5">
        Jørgen
      </Typography>
    </Stack>
  );
}

export default Profile;
