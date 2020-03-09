import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import CreateEvent from "./create-event";
// import EditEvent from "./edit-event";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  onCreateEventClick = () => {
    this.props.history.push('/create/');
    console.log("redirecting done")
  }
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome onboard,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Create your events here!!{" "}
                Become a <span style={{ fontFamily: "monospace" }}>Doodler</span>
              </p>
            </h4>
            <button
              style={{
                width: "200px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginRight: "2rem"
              }}
              onClick={this.onCreateEventClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              CREATE EVENT
            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            
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