import React, { useState } from "react";
import styles from "./Avatar.module.scss";
import { Box, Badge } from "@mui/material";


export default function Avatar({
    verified = +false,
    avatar = "/images/avatar.png",
    size = "90px",
   
}) {


    
    return (
        <Box className={styles.avatar} style={{ width: size, height: size }}>
            <img src={avatar}
                alt=""
                className={styles.image}
                style={{ width: "100%", height: "100%" }}
                
               {...verified && <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <img src="/images/verified.svg" alt="" />}>
                </Badge> }
            />
        </Box>
    );
}