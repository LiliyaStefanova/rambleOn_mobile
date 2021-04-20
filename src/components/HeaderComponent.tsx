import React, { FunctionComponent } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";

export interface HeaderProps {
  title: string;
}

const HeaderComponent: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
          <Body>
            <Title>{title}</Title>
          </Body>
        </Left>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
