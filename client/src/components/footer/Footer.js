import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Footer extends Component {
    render() {
    return (
        <h1>footer</h1>
        );
      }
    }

 export default connect()(Footer);