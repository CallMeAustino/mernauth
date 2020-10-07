import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Robot extends Component {
    render() {
    return (
        <h1>robot</h1>
        );
    }
}

 export default connect()(Robot);