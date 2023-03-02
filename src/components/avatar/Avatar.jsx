import React, { useEffect, useState } from "react";
import styles from "./Avatar.module.scss";
import { Box, Badge } from "@mui/material";


export default function Avatar({
    
    url = "/images/avatar.png",
    
}) {
    const [verified, setVerified] = useState();
    const [size, setSize] = useState(90);

    useEffect(() => {
        if(verified){
            setVerified(<Badge className={styles.badge}
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <img src="/images/verified.svg" alt="" />}>
            </Badge>)
        }
    }, [verified]);

    useEffect(() => {
        setSize(oldSize => newSize);
    }, [size])

    return (
        <Box className={styles.avatar} style={{ width: size, height: size }}>
            <img src={url}
                alt=""
                className={styles.image}
                style={{ width: "100%", height: "100%" }}
                isVerified={verified}
                
            />
        </Box>
    );
}