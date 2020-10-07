import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Halloffame extends Component {
    render() {
    return (
        <h1>halloffame</h1>
        );
      }
    }

 export default connect()(Halloffame);