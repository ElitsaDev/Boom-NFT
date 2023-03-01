import React from "react";
import styles from "./Avatar.module.scss";
import { Box, Badge } from "@mui/material";


export default function Avatar({
    size = 90,
    url = "/images/avatar.png",
    verified = false,
}) {

    const isVerified = verified;
    if (isVerified) {
        return <Badge className={styles.badge}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                <img src="/images/verified.svg" alt="" />}>
        </Badge>
    }

    return (
        <Box className={styles.avatar} style={{ width: size, height: size }}>
            <img src={url}
                alt=""
                className={styles.image}
                style={{ width: "100%", height: "100%" }}
                isVerified={false}
            />
        </Box>
    );
}