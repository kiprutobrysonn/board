import React from "react";
import styled from "styled-components";
import Add from "~Assets/adduser.png";

const AddUserContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const AddUserButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
`;

const AddUser = () => {
  const handleAddUser = () => {
    // Implement the logic to add a user
    console.log("Add user functionality goes here");
  };

  return (
    <AddUserContainer>
      <AddUserButton onClick={handleAddUser}>
        <img src={Add} height={50}></img>
      </AddUserButton>
    </AddUserContainer>
  );
};

export default AddUser;
