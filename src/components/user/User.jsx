import React, { useState, useCallback } from "react";
import styles from "./User.module.scss";
import { Box } from "@mui/material";

import Avatar from "../avatar/Avatar";

export default function User({ 
    name = "",
    info = "",
    avatar = "",
    size = 55,
    verified = false,
    
}) {
    return (
        <div className={styles.user}>
            <Avatar />
            <Box className={styles.container}>
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{info}</p>
            </Box>
        </div>
    );
}
