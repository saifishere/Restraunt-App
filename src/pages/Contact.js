import React from 'react'
import Layout from '../components/Layouts/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import {Box, TableContainer, Typography, Table, Paper, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
const Contact = () => {
  return (
    <Layout>
      
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant = 'h4'>
          Contact Our Resturant
        </Typography>
        <p>
          Reach out to us for reservations or inquiries.
          Our team is eager to assist you and ensure a memorable dining experience. 
          Connect with us and discover the flavors of our cuisine!
        </p>
      </Box>

      <Box
         sx={{
          m: 3,
          width: "800px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}  
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details

                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon  sx={{ color: "red", pt: 1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> xyzabc@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 8796874321
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </TableContainer>
      </Box>

    </Layout>
  )
}

export default Contact
