import React, { useState, useCallback } from "react";
import styles from "./User.module.scss";
import { Container, Stack, Avatar, Badge, Box } from "@mui/material";

import { styled } from "@mui/material/styles"
import VerifiedIcon from '@mui/icons-material/Verified';

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
