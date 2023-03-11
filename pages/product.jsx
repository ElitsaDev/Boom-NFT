import ProductImage from "../src/components/productImage/ProductImage";
import { useState, useEffect } from "react";

const url = "./images/nft.jpg";

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