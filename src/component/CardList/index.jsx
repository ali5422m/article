import React, { useState } from 'react'
import {
  BsShieldFillCheck,
  BsFillPencilFill,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";
import CardItem from '../CardItem';
import { Box} from "@mui/system";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function CardList({token}) {
    const cardArray = [
      {
        title: "Login",
        icon: BsShieldFillCheck,
        path: "/login",
        id: 1,
      },
      {
        title: "Articles",
        icon: BsLayoutTextSidebarReverse,
        path: "/articles",
        id: 2,
      },
      {
        title: "AddArticles",
        icon: BsFillPencilFill,
        path:token? "/add-articles":"/login",
        id: 3,
      },
    ];
    const [cardList, setCardList] = useState(cardArray)
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {cardList.map((item) => (
            <Grid item key={item.id}  xs={12} lg={4} md={6} >
              <CardItem title={item.title} Icon={item.icon} href={item.path} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CardList