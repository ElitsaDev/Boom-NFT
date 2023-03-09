import React from "react";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss";
import { Container, ImageList, ImageListItem } from "@mui/material";

export default function Featured(items = []) {
  const router = useRouter();
  const clickHandler = () => {
    router.push(item.image);
  }

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <ImageList cols={6} variant="quilted" gap={20}>
          {items.map((item) => (
            <ImageListItem key={item.image}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img className={styles.image}
                src={item.image}
                onClick={clickHandler}
              />
            </ImageListItem>))
          }
        </ImageList>
      </Container>
    </div>);
}

/*
let items = [
  {
    image:
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
    title: "Breakfast",
    rows: 2,
    cols: 3,
    href: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
    title: "Burger",
    href: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
    title: "Camera",
    href: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
    title: "Coffee",
    href: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
    title: "Hats",
    href: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
    title: "Honey",
    href: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
    title: "Basketball",
    href: "/about",
  },
];
*/