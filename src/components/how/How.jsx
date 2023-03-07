import React from "react";
import styles from "./How.module.scss"
import { Grid, Button, Container } from "@mui/material";
import Step from "./Step";

export default function How({
    description,
    title,
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
                         {items.map((item, index) => (
                               <Step key={index} number={ index + 1} {...item} />
                        ))}  
                    </Grid> 
                </Grid>
         </Container>
        </div>
    );
}
