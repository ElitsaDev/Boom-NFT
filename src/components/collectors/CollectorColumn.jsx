import React from "react";
import styles from "./CollectorColumn.module.scss";
import Collector from "./Collector";
import { Container } from "@mui/material";

export default function CollectorColumn({ items = [
        {
        name: "",
        nftsCount: 0,
        avatar: "",
        verified: false,
        id: 0,
        }
    ]
 }) {

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                {items.map((item, index) => (
                    <Collector
                        type={((index + 1) % 2)
                            ? 'lighter'
                            : ''
                        } 
                        {...item}
                        key={index}  
                    />
                ))}
            </Container>
        </div>);
}