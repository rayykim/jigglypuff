import React from "react";
import CartBtn from "../components/CartBtn";
import NavBar from "../components/Navbar";
import { connect } from "react-redux";
// import "typeface-roboto";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Typography from "@material-ui/core/Typography";
// import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import * as actions from "../actions/actions";
import { typography } from "@material-ui/system";

const mapStateToProps = store => ({
  totalItemsInCart: store.products.totalItemsInCart
});

const mapDispatchToProps = dispatch => ({
  proceedToCheckout: () => dispatch(actions.proceedToCheckout())
});

function Header(props) {
  return (
    <div>
      <header>
        <div>test</div>
      </header>
      <div className="header-right">
        <NavBar />
        <CartBtn
          proceedToCheckout={props.proceedToCheckout}
          totalItemsInCart={props.totalItemsInCart}
        />
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
