import React from "react";
import styled from "styled-components";

const Container = styled.section`
  border: solid;
`;

export default class All extends React.Component {
  render() {
    return <Container>I've already seen this</Container>;
  }
}
