import React from "react";
import CartBtn from "../components/CartBtn";
import NavBar from "../components/Navbar";
import { connect } from "react-redux";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import * as actions from "../actions/actions";

const mapStateToProps = store => ({
  totalItemsInCart: store.products.totalItemsInCart
});

const mapDispatchToProps = dispatch => ({
  proceedToCheckout: () => dispatch(actions.proceedToCheckout())
});

function Header(props) {
  return (
    <header>
      <div className="header-left">
        <Typography variant="display1" align="center" gutterBottom>
          {" "}
          Exercises{" "}
        </Typography>
        <Typography variant="title" color="mint">
          DrewsList
        </Typography>
      </div>
      <div className="header-right">
        <NavBar />
        <CartBtn
          proceedToCheckout={props.proceedToCheckout}
          totalItemsInCart={props.totalItemsInCart}
        />
      </div>
    </header>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
