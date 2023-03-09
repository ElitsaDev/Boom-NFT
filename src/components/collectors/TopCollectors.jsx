import React from "react";
import styles from "./TopCollectors.module.scss";
import CollectorColumn from "./CollectorColumn";
import { Container, Grid, Typography, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import chunk from "lodash.chunk";

export default function TopCollectors({ collectors = [] }) {
   
    let chunckedCollectors = chunk(collectors, 3);
    
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} >
                <Grid container maxWidth="xl">
                    <Grid item xs={9}>
                        <Typography variant="h1" className={styles.cardHeader}>
                            Top Collectors
                        </Typography>
                    </Grid>
                    <Grid item xs={3}  >
                        <FormControl className={styles.cardSelect}  >
                            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                            <Select className={styles.inputLabel}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="This week"
                            >
                                <MenuItem >Sort by </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={styles.containerCard} maxWidth="xl">
                    {chunckedCollectors.map((collector, id) => (
                        <Grid item xs={3} key={id}>
                            <CollectorColumn  {...collector} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

/*
let coll = {
    "collectors": [
        {
          "name": String,
          "nftsCount": 0,
          "avatar": String,
          "verified": true,
        },
      {
          "name": String,
          "nftsCount": 0,
          "avatar": String,
          "verified": false,
        }
    ]
}
*/

