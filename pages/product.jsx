import ProductImage from "../src/components/productImage/ProductImage";
import { useState, useEffect } from "react";

const url = "/images/d6b005492c2a88cd9e81e3ae72cd9859.png";

export default function Product() {
    const [productImage, setProductImage] = useState("");
    useEffect(() => { 
        setProductImage(url);
       }, []);

    return (
        <>
            <ProductImage url={productImage}/>
        </>
    );
}