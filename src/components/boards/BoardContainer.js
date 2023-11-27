import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CreateBoardContainer from "./boardCreation/CreateBoardContainer";
import ShowAllBoards from "./ShowAllBoards";
import { fadeIn } from "~Utils/Animations";

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
  animation: ${fadeIn} 300ms linear;
`;
const CloseButton = styled.img`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
class BoardContainer extends Component {
  renderAllBoards = () => {
    const { boardsCollection } = this.props;
    return boardsCollection.map((board) => {
      return <ShowAllBoards id={board.id} key={board.id} title={board.title} />;
    });
  };

  render() {
    return (
      <Wrapper>
        <CreateBoardContainer>
          <CloseButton
            src="../../Assets/closeIcon.svg"
            alt="Close"
            onClick={() => {
              // Handle the close button click action here
              // For example, navigate to another page or close the modal
            }}
          />
        </CreateBoardContainer>

        {this.renderAllBoards()}
      </Wrapper>
    );
  }
}

function mapStateToProps({ boardsCollection }) {
  return {
    boardsCollection,
  };
}

export default connect(mapStateToProps)(BoardContainer);
