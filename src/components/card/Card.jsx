import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";

import { Card as CardMui, CardContent, CardHeader, CardMedia, Chip, Badge, Stack } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import millify from "millify";
import Countdown from "react-countdown";

export default function Card({
    name = "",
    likes = 0,
    mediaUrl = "/images/nft.jpg",
    user = {},
    price = "",
    currency = "",
    timeLeft = 0,
}) {

    let formatedPrice = millify(Number(price), {
        precision: 1,
        decimalSeparator: ".",
        lowercase: false,
        units: [currency],
        space: true,
    });

    let formatedLikes = millify(likes);

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return '';
        } else {
            // Render a countdown
            return (<>{hours}:{minutes}:{seconds}</>)
        }
    }

    return (
        <CardMui className={styles.card}>
            <CardContent >
                <CardHeader className={styles.cardHeader}
                    avatar={<Avatar className={styles.avatar}
                        url={user.avatar}
                        verified={user.verified}
                        size={33}
                    />}
                />
                <CardMedia className={styles.media}
                    component="img"
                    image={mediaUrl}
                    alt="NFT image"
                ></CardMedia>
                {timeLeft && (<div className={styles.liveCardWrapper}>
                    <Badge className={styles.badge}>
                        <CircleIcon className={styles.circle} />
                        LIVE
                    </Badge>
                    <Countdown className={styles.countdown} date={Date.now() + timeLeft} renderer={renderer} />
                </div>)
                }

                <Stack className={styles.infoText} direction="row">
                    <div >
                        <div className={styles.title} >{name}</div>
                        <div className={styles.price}>~{formatedPrice}</div>
                    </div>
                    <Chip className={styles.likes}
                        avatar={<FavoriteIcon className={styles.icon} alt="favorite icon" />}
                        label={formatedLikes}
                        variant="filled"
                    />
                </Stack>
            </CardContent>
        </CardMui>
    );
}

