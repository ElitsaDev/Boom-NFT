import React from "react";
import styles from "./Featured.module.scss";
import { useRouter } from "next/router";
import { Container, ImageList, ImageListItem } from "@mui/material";

export default function Featured({items = []}) {
  console.log(items)
  const router = useRouter();
  const clickHandler = (item) => {
    router.push(item.image);
  }

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <ImageList cols={6} variant="quilted" gap={20}>
          {items.map((item) => (
            <ImageListItem key={item.id}
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

