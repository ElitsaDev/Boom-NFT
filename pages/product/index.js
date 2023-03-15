import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice";

export default function Product() {
  return (
    <Container maxWidth="sm">
        <ProductImage />
        <ProductInfoTitle />
        <ProductInfoPrice />
    </Container>
  );
}