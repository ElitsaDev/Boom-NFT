import React from "react";
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
                                value={cards}
                                label="This week"
                            >
                                <MenuItem value={4} >This week </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={2} spacing={1} className={styles.containerCard} maxWidth="xl">
                    {cards && cards.map(({ card, id }) => (
                        <Grid item md={3} key={id} sx={{ display: "flex" }}>
                            <Card  {...card} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}