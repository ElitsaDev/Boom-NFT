import { Typography } from "@mui/material";
import User from "../user/User";
import styles from "./ProductInfoCreator.module.scss";
import classNames from 'classnames';

export default function ProductInfoCreator({
    name='Eli',
    avatar,
    verified = false,

}){
    return (
        <div className={classNames(styles["product-info-creator"])}>
            <Typography 
                className={classNames(styles.title)}
                variant="h1"  
                component='h1' 
            >CREATOR</Typography>
            <div className={classNames(styles["user-container"])}>
                <User name={name} avatar={avatar} verified={verified}/>
            </div>
        </div>
    );
}