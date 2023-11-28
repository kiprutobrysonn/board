import React from "react";
import styled from "styled-components";
import Logo from "~Assets/logo.svg";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteBoardCollection } from "../Actions/DeleteBaord";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Image = styled.svg`
  background-image: url(${Logo});
  width: 65px;
  height: 65px;
  background-repeat: no-repeat;
  filter: drop-shadow(3px 3px 3px #333);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(6px 6px 6px #333);
    transition: all 200ms ease-in-out;
    transform: scale(1.1) rotate(-4.5deg);
  }
`;

const Title = styled.div`
  padding: 8px;
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Search = styled.input`
  padding: 8px;
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const UserIcon = styled.div`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  margin-right: 8px;
`;

const UserName = styled.span`
  font-weight: bold;
  padding: 10px;
`;

const InviteButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Header = ({ deleteBoardCollection }) => (
  <HeaderWrapper>
    <Link to="/mainboard">
      <Image />
    </Link>
    <Title>KANBANBOARD</Title>
    <Search type="text" placeholder="Search..." />
    <UserProfile>
      <UserIcon>👤</UserIcon>
      <UserName>User Name</UserName>
    </UserProfile>
    <InviteButton onClick={() => deleteBoardCollection()}>
      DELETE ALL BOARDS{" "}
    </InviteButton>
  </HeaderWrapper>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteBoardCollection }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
