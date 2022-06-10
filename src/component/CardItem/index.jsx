import React from 'react'
import { Box } from '@mui/system';
import { Typography,ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';

function CardItem({ title, Icon, href }) {
  return (
    <>
      <Link to={href}>
        <ButtonBase sx={{ borderRadius: "1rem",width:"100%" }}>
          <Box
            sx={{
              p: 3,
              height: "25rem",
              width:"100%",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { color: "rgb(255,215,0)" },
              transition: "all .3s",
              borderRadius: "1rem",
            }}
          >
            <Icon fontSize={"150px"} />
            <Typography
              fontSize={"2rem"}
              sx={{ p: 2, textDecoration: "underline" }}
            >
              {title}
            </Typography>
          </Box>
        </ButtonBase>
      </Link>
    </>
  );
}

export default CardItem