import React from "react";
import styles from "./How.module.scss";
import { Grid, Button, Container } from "@mui/material";
import Step from "./step/Step";

export default function How({
    description = "Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.",
    title = "String",
    items = [],
    link,
}) {
    return (
        <div className={styles.wrapper}>
          <Container className={styles.container}>
                <Grid container className={styles.cardContainer}>
                    <Grid item xs={6} >
                        <h1 className={styles.title}>
                            {title}
                        </h1>
                        <p className={styles.description}>{description}</p>
                        <Button className={styles.menuItemButton} variant="contained" href={link}>Learn more</Button>
                    </Grid>
                    <Grid item xs={4}>
                         {items.map((item, id) => (
                              // <Step key={index} number={ index+1} {...item} />
                                 <Step key={id}  props = { {number: id + 1, ...item }} />
                           
                        ))}  
                    </Grid> 
                </Grid>
         </Container>
        </div>
    );
}
/*
import { Button, Grid } from "@mui/material";
import styles from "./How.module.scss";
import Step from "./step/Step";

export default function How({
    description = "Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.",
    title = "String",
    items = [],
    link,
}) {
    return (
        <div className={styles.how}>
            <Grid container className={styles.info}>
                <Grid item xs={6}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    <Button variant="contained" href={link} className={styles.button}>Learn More</Button>
                </Grid>
                <Grid item xs={4}>
                    {items.map((item, index) => (
                        <Step key={index} number={ index+1} {...item} />
                    ))}
                </Grid>
            </Grid>
        </div>


    )
}
*/