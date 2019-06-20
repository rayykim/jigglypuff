import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const btnStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

class Product extends Component {
  render() {
    console.log(this.props.products);
    // if(this.props.products[0].image_url) console.log('Image URL', this.props.products[0].image_url);

    const classes = btnStyles();

    const productsArr = this.props.products.map((product, idx) => (
      <div className="product" key={idx}>
        <div key={idx}>
          <img src={product.img_url} width="45%" height="45%" />
          <div>Item: {product.prod_name}</div>
          <div>Description: {product.prod_desc}</div>
          <div>$: {product.prod_price}</div>
          <div>Seller: {product.name}</div>
          <div>Contact Seller: {product.email}</div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={login}
          className={classes.button}
        >
          Login
        </Button>
        <button
          id="subtractFromCart"
          onClick={() => this.props.subtractFromCart(product.SKU)}
        >
          {" "}
          Subtract from Cart
        </button>
      </div>
    ));

    return <div id="catalog">{productsArr}</div>;
  }
}

export default Product;
