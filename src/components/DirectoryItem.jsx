import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/DirectoryItem.jsx";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "../css/DirectoryItem.jsx";
const DirectoryItem = ({ id, imageUrl, title,route }) => {
  const navigate = useNavigate();
  const onNavigate=()=>navigate(route)
  return (
    <DirectoryItemContainer key={id} onClick={onNavigate}>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
