import React from "react";
import styles from "./Avatar.module.scss";
import { Box, Badge } from "@mui/material";

export default function Avatar({
    size = 90,
    url = "/images/avatar.png",
    verified = false,
}) {

    return (
        <Box className={styles.avatar} style={{ width: size, height: size }}>
            <img src={url}
                alt="avatar"
                className={styles.image}
                style={{ width: "100%", height: "100%" }}
            />
            {verified 
            && <img src="/images/verified.svg" alt="verified" className={styles.badge} />}
        </Box>
    );
}


 /*
 <Badge className={styles.badge}
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <img src="/images/verified.svg" alt="verified" />
                </Badge>
 */