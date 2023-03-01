import React, { useState, useCallback } from "react";
import styles from "./Header.module.scss";
import Logo from "../logo/Logo";

import { styled } from "@mui/material/styles"
import { Container, Grid, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    '&:hover': {
        backgroundColor: theme.palette.background.default,
    },
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

export default function Header() {
   
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} >
                <Grid container maxWidth="xl" justify={'space-between'} alignItems={"center"} >
                    <Grid item md={2} sx={{ display: "flex" }}>
                        <Logo />
                    </Grid>
                    <Grid item md={5} sx={{ display: "flex" }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase fullWidth
                                placeholder="Find items, users and activity"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                    <Grid item md={5} sx={{ display: "flex", justifyContent: "flex-end" }} >
                    <Button className={styles.menuItemButton} variant={"text"}>Home</Button>
                        <Button className={styles.menuItemButton} variant={"text"}>Activity</Button>
                        <Button className={styles.menuItemButton} variant={"contained"}>EXPLORE</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

