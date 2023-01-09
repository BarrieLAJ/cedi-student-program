import * as React from 'react';
import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Link from "../src/component/Link"

const Home: NextPage = () => {
  return (
      <Container>
          <Box
              sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
          >
              <Typography variant="h4" component="h1" gutterBottom>
                  CEDI Education Support Scheme
              </Typography>
              <Box
                  component={Link}
                  href="/students/1234"
                  sx={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                      boxShadow: (theme) => theme.shadows[2],
                      width: "100%",
                      p: 2,
                      borderRadius: "8px",
                      justifyContent: "space-between"
                  }}>
                  <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                      <Avatar src="student Image" alt="NM" variant="circular"/>
                      <Typography variant="h6">Fatmatu Bintu V Kamara</Typography>
                  </Box>
                  <Typography fontWeight={500}>29</Typography>
                  <Typography fontWeight={400}>Information Technology (IT)</Typography>
                  <Typography fontWeight={400}>Year 2</Typography>
                  <Typography fontWeight={400}>Le 4,000</Typography>
              </Box>
          </Box>
      </Container>
  );
};

export default Home;
