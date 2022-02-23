import React from "react";
import Img from "../Img/ImgStyled";
import items from "./data";
import { PolygonArtStyled, Item, Title, SubTitle } from "./PolygonArtStyled";
import { useNavigate } from "react-router-dom";

const PolygonArt = () => {
  const nav = useNavigate();

  return (
    <PolygonArtStyled>
      {items.map((item) => {
        const { id } = item;

        return (
          <Item
            className="single"
            onClick={() => {
              nav(`/item/${id}`, { state: item });
            }}
          >
            <Img src={item.image} />
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </Item>
        );
      })}
    </PolygonArtStyled>
  );
};

export default PolygonArt;
