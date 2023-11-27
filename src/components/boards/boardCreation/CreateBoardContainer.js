import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateBoard from "./CreateBoard";
import ActiveCreateBoard from "./ActiveCreateBoard";

class CreateBoardContainer extends Component {
  render() {
    const { newBoard } = this.props;

    return (
      <div>
        {newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard />}
      </div>
    );
  }
}

CreateBoardContainer.PropTypes = {
  newBoard: PropTypes.object,
  createNewBoard: PropTypes.func.isRequired,
};

function mapStateToProps({ newBoard }) {
  return {
    newBoard,
  };
}

export default connect(mapStateToProps, { CreateBoard })(CreateBoardContainer);
