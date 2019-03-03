import React, { Component } from 'react';
import {
  Wrapper,
  Container,
  Logo,
  Header,
  Footer,
  Middle,
  QuestionsStep,
  Question,
  BtnNext,
  BtnBack,
  BtnFinish
} from './styles';

import logo from '../../assets/images/logo.png';
import StatusBar from '../../components/statusBar';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalQuestiosn: 0
    };
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Container>
            <Logo src={logo} />
          </Container>
        </Header>

        <Middle>
          <Container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <QuestionsStep>{`${3} of ${10}`}</QuestionsStep>
            <StatusBar total={10} current={2} />
          </Container>
        </Middle>
        <Footer>
          <Container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <BtnBack>Back</BtnBack>
            <BtnFinish>Finish</BtnFinish>
            <BtnNext>Next</BtnNext>
          </Container>
        </Footer>
      </Wrapper>
    );
  }
}

export default Home;
