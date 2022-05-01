import React from "react";
import All from "./Components/All";
import Favorites from "./Components/Favorites";
import Watched from "./Components/Watched";
import Added from "./Components/Added";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Profile from "./assets/profile.svg";
import Arrow from "./assets/arrow.svg";
import SMain from "./assets/smain.jpg";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import "./styles.css";
import Heart from "./assets/heart.svg";
import Mainplace from "./assets/mainplace.png";
import Marilyn from "./assets/Marilyn.jpg";
import Gilda1 from "./assets/Gilda1.jpg";
import TwoTowers from "./assets/TwoTowers.jpg";
import Angry from "./assets/Angry.jpeg";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  border:none;
}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20vh;
  width: 100%;
  background-color: black;
`;

const Div = styled.div`
  width: 30%;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const H1 = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #e71b27;
`;

const SectionTwo = styled.div`
  width: 50%;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const Input = styled.input`
  display: flex;
  width: 35vw;
  height: 5vh;
  background-color: #2c2c2c;
  ::placeholder {
    color: white;
  }
`;

const Ul = styled.ul`
  position: absolute;
  left: 22.5%;
  top: 13.5%;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 6.5vw;
  height: 5vh;
  background-color: #e71b27;
  color: white;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const P = styled.p`
  color: white;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #e71b27;
  }
`;

const H4 = styled.h4`
  font-size: 1vw;
  width: 330%;
  height: 58vh;
`;

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 52vh;
`;

const H2 = styled.p`
  color: #ffffff;
  font-size: 2.5vw;
  width: 200%;
  height: 48.5vh;
`;

const Img = styled.img`
  width: 35vw;
`;

const LinkS = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  color: whitesmoke;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #e71b27;
  }
`;
/*const ContainCarrossel = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 2vw;

img {
width: 10vw;
border-radius: 10px;
}
ul {
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
width: 100%;
height: 60vh;
}
p {
margin: 0 2vw;
}
`;*/

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const TextMain = styled.div`
  width: 50%;
  height: 28vh;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Himg = styled.img`
  width: 2vw;
`;

export default class App extends React.Component {
  state = {
    stateList: false,
    stateModal: false,
    stateHeart: true
  };

  handleList = () => {
    this.setState({ stateList: !this.state.stateList });
  };

  handleModal = () => {
    this.setState({
      stateModal: !this.state.stateModal
    });
  };

  handleHeart = () => {
    this.setState({
      stateHeart: !this.state.stateHeart
    });
  };

  render() {
    return (
      <Router>
        <Container>
          <GlobalStyle />
          <Div>
            <H1>LETTERFLIX</H1>
            <LinkS to="/">
              <p>Home</p>
            </LinkS>
            <P onClick={this.handleList}>Selection</P>
            {this.state.stateList && (
              <Ul>
                <LinkS to="/All">
                  <p onClick={this.handleList}>All</p>
                </LinkS>
                <LinkS to="/Favorites">
                  <p onClick={this.handleList}>Favorites</p>
                </LinkS>
                <LinkS to="/Watched">
                  <p onClick={this.handleList}>Watched</p>
                </LinkS>
                <LinkS to="Added">
                  <p onClick={this.handleList}>Added</p>
                </LinkS>
              </Ul>
            )}
          </Div>
          <SectionTwo>
            <Button onClick={this.handleModal}>Add Movie</Button>
            <div>
              <Modal
                className="ModalB"
                isOpen={this.state.stateModal}
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 80
                  },
                  content: {
                    position: "absolute",
                    top: "40px",
                    left: "40px",
                    right: "40px",
                    bottom: "40px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                    backgroundColor: "black"
                  }
                }}
              >
                <button onClick={this.handleModal}>X</button>
                <h2>Add new movie</h2>

                <div>
                  <form>
                    <label>Title</label>
                    <input type="text" placeholder="   new..." />
                    <label>About</label>
                    <input type="text" placeholder="   Sinopse..." />
                  </form>
                </div>
                <div>
                  <h4>Movie Poster</h4>
                </div>
                <div>
                  <img src={Mainplace} />
                </div>
                <div>
                  <button>Select Image</button>
                </div>
                <div>
                  <label>Watched</label>
                  <input type="radio" name="Watched" value="Watched" />
                  <label>Watched</label>
                  <input
                    type="radio"
                    name="It's on my list"
                    value="It's on my list"
                  />
                </div>
              </Modal>
            </div>

            <Input type="text" placeholder="   📺  Search..." />
            <img src={Profile} />
            <img src={Arrow} />
          </SectionTwo>
        </Container>
        <Main>
          <TextSection>
            <div>
              <Img src={SMain} />
            </div>
            <TextMain>
              <Himg
                onClick={this.handleHeart}
                style={
                  this.state.handleHeart === true
                    ? { filter: "brightness(0.7)" }
                    : {
                        filter:
                          "drop-shadow(1px 1px 10px rgba(255,255,255,0.5))"
                      }
                }
                src={Heart}
              />
              <H4>Recently Watched</H4>
              <H2>Midsummer Night's Dream</H2>
              <p>
                A Midsummer Night's Dream is a 1999 romantic comedy fantasy film
                based on the play of the same name by William Shakespeare. It
                was written, directed and co-produced by Michael Hoffman. The
                ensemble cast features Kevin Kline as Bottom, Michelle Pfeiffer
                and Rupert Everett as Titania and Oberon, Stanley Tucci as Puck,
                and Calista Flockhart, Anna Friel, Christian Bale, and Dominic
                West as the four lovers.
              </p>
            </TextMain>
          </TextSection>

          <section>
            <div
            //slidesToShow={5}
            //cellAlign={"left"}
            //disableEdgeSwiping={true}
            //wrapAround={true}
            //autoplay={true}
            ></div>
          </section>
        </Main>
        <Routes>
          <Route path="All" element={<All />} />
          <Route path="Favorites" element={<Favorites />} />
          <Route path="Watched" element={<Watched />} />
          <Route path="Added" element={<Added />} />
        </Routes>
      </Router>
    );
  }
}
