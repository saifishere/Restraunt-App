import React from 'react'
import Layout from '../components/Layouts/Layout'
import {Box, Typography} from '@mui/material'
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
          Nestled in the heart of downtown, our restaurant offers an exquisite 
          dining experience that blends modern cuisine with a cozy ambiance. 
          Renowned for its diverse menu, we feature dishes crafted from fresh, 
          locally sourced ingredients, catering to both traditional and adventurous 
          palates. Our talented chefs excel in creating visually stunning and flavorful
          meals, ensuring every visit is memorable. The elegant interior, coupled 
          with warm lighting and attentive service, makes it an ideal spot for both
          intimate dinners and lively gatherings. Whether you're here for a casual
          lunch or a celebratory dinner, our commitment to quality and hospitality
          guarantees a delightful culinary journey.
        </p>

        <br/>

        <p>
          Indian cuisine, served at our restaurant, offers a vibrant culinary journey
          through a rich tapestry of flavors and aromas. Our menu features traditional
          dishes like butter chicken, biryani, and paneer tikka, prepared with authentic
          spices and fresh ingredients. Each meal is crafted to balance heat and subtlety,
          catering to both adventurous and mild palates. We also offer a variety of 
          vegetarian and vegan options, ensuring a delightful experience for all dietary
          preferences. Complemented by warm, inviting decor and attentive service, dining
          at our restaurant immerses you in the essence of India's diverse and celebrated 
          culinary heritage.
        </p>

      </Box>
    </Layout>
  )
}

export default About
