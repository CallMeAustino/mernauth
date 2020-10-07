import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <br></br>
              <Link to={`/halloffame/`}>Hall of Fame</Link>
              <br></br>
              <Link to={`/robot/`}>Robot</Link>
              <br></br>
              <Link to={`/robotcreator/`}>Robot Creator</Link>

              {/* <Link to={`/projects/${project.author_id}/${project.id}`}>{project.description}</Link> */}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);