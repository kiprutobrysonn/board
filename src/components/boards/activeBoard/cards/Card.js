import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DragSource } from "react-dnd";
import { ItemTypes } from "~Utils/Constants";
import archiveCard from "~Actions/ArchiveCard";

const CardWrapper = styled.div`
  margin: 10px 0;
  padding: 14px 7px;
  background: rgb(241, 241, 241);
  border-radius: 4.5px;
  cursor: grab;
  display: flex;
  justify-content: space-around;
`;

const UserIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #3498db;
  color: #fff;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 19px;
  margin: 0;
  cursor: pointer;
`;

const ArchiveTask = styled.div`
  padding: 4px 7px;
  opacity: 0.4;
  border: none;
  border-radius: 9999;
  cursor: pointer;
  font-size: 16px;
`;

const cardSource = {
  beginDrag({ title, cardId, listId }) {
    return {
      title,
      cardId,
      listId,
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

@DragSource(ItemTypes.CARD, cardSource, collect)
class Card extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    archiveCard: PropTypes.func.isRequired,
  };

  state = {
    isEditing: false,
    editedTitle: this.props.title,
  };

  handleTitleClick = () => {
    this.setState({ isEditing: true });
  };

  toggleTick;

  handleTitleChange = (event) => {
    this.setState({ editedTitle: event.target.value });
  };

  handleTitleBlur = () => {
    const { cardId, listId, archiveCard } = this.props;
    const { editedTitle } = this.state;

    // Save the edited title
    archiveCard(cardId, listId, editedTitle);

    // Exit the editing mode
    this.setState({ isEditing: false });
  };
  togglePost = (cardId, listId) => {
    this.props.archiveCard(cardId, listId);
  };

  render() {
    const { isDragging, connectDragSource, cardId, listId, title, isArchived } =
      this.props;
    const { isEditing, editedTitle } = this.state;

    const cardStyles = {
      opacity: isDragging || isArchived ? 0.35 : 1,
      boxShadow: "0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)",
      textDecoration: isArchived ? "line-through" : "none",
      backgroundColor: isArchived ? "#DECAFF" : "#caffde",
    };

    return (
      <div style={{ position: "relative" }}>
        <UserIcon>👤</UserIcon>
        {connectDragSource(
          <div>
            <CardWrapper style={cardStyles}>
              {isEditing ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={this.handleTitleChange}
                  onBlur={this.handleTitleBlur}
                  autoFocus
                />
              ) : (
                <CardTitle onClick={this.handleTitleClick}>{title}</CardTitle>
              )}
              <ArchiveTask
                onClick={() => this.props.archiveCard(cardId, listId)}
              >
                ✓
              </ArchiveTask>
            </CardWrapper>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { archiveCard })(Card);
