import React, {useState, useEffect} from "react";
import Card from "../card/Card";
import styles from "./Trending.module.scss";

import { Container, Grid, Typography, Select, FormControl, InputLabel, MenuItem } from "@mui/material";

export default function Trending({ cards = [] }) {

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} >
                <Grid container maxWidth="xl">
                    <Grid item xs={9}>
                        <Typography variant="h1" className={styles.cardHeader}>
                            Trending
                        </Typography>
                    </Grid>
                    <Grid item xs={3}  >
                        <FormControl className={styles.cardSelect}  >
                            <InputLabel id="demo-simple-select-label" >This week</InputLabel>
                            <Select className={styles.inputLabel}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="This week"
                            >
                                <MenuItem >This week </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={styles.containerCard} maxWidth="xl">
                    {cards.map((card, id) => (
                        <Grid item xs={3} key={id}>
                            <Card  {...card} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

/*  let cardsDB  = [
       {
          name:"Ivy",
          user:{
             avatar:{
                url:"images/avatar.png"
             },
             verified:true
          },
          mediaUrl:"images/nft.jpg",
          price:1,
          currency:"ETH",
       },
       {
          name:"Judie",
          user:{
             avatar:{
                url:"images/avatar.png"
             },
             verified:true
          },
        mediaUrl:"images/nft.jpg",
          price:2.3,
          currency:"ETH"
       },
       {
          name:"Juniper",
          user:{
             avatar:{
                "url":"images/avatar.png"
             },
             verified:true
          },
          mediaUrl:"images/nft.jpg",
          price:5,
          currency:"ETH"
       },
       {
          name:"Maple",
          user:{
             avatar:{
                url:"images/avatar.png"
             },
             verified:true
          },
          mediaUrl:"images/nft.jpg",
          price:10,
          currency:"ETH"
       }
    ]
    cards = Array.from(cardsDB) ;
    console.log(cards);
*/