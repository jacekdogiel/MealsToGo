import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeigh && `margin-top: ${StatusBar.currentHeight}px`};
`;
