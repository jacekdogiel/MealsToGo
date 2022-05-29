import { React } from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: "white";
`;

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Asia Orchid",
    icon,
    photos = [
      "https://restaumatic-production.imgix.net/uploads/accounts/28377/media_library/47a535da-c1fd-482e-a8aa-10406eb75032.jpg?auto=compress&blur=0&crop=focalpoint&fit=max&fp-x=0.5&fp-y=0.5&h=768&rect=0%2C0%2C960%2C720&w=1920",
    ],
    address = "Some random addess",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
