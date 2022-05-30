import { React } from "react";
import { Text, View, Image} from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Asia Orchid",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://restaumatic-production.imgix.net/uploads/accounts/28377/media_library/47a535da-c1fd-482e-a8aa-10406eb75032.jpg?auto=compress&blur=0&crop=focalpoint&fit=max&fp-x=0.5&fp-y=0.5&h=768&rect=0%2C0%2C960%2C720&w=1920",
    ],
    address = "Some random addess",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Info>
        <Title>{name}</Title>
        <Section>
           <Rating>
             {ratingArray.map(() => (
               <SvgXml xml={star} width={20} height={20} />
             ))}
           </Rating>
           <SectionEnd>
             {isClosedTemporarily && (
               <Text variant="label" style={{ color: "red" }}>
                 CLOSED TEMPORARILY
               </Text>
             )}
             <View style={{ paddingLeft: 16 }} />
             {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
             <View style={{ paddingLeft: 16 }} />
             <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
           </SectionEnd>
         </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
