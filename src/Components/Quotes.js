import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import './App.css';
import NavBar from './nav.js';
import OutlinedCard from  './Card';
import Container from '@material-ui/core/Container';

function Quotes() {
    const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <div className="App">
      <header >
      <NavBar></NavBar>
      </header>
      <body className="App-body">
      <p>
          Quotes from Nana
        </p>
        <>
        <Container classname="Quotes-container">
            <Row gutter={[32, 32]} type="flex">
            <Col className="gutter-row" span={8}>
                <OutlinedCard quote="No matter how hard you think kids will be, they're harder. No matter how much you think you'll love them, you'll love them more."></OutlinedCard>
            </Col>
            <Col className="gutter-row" span={8}>
                <OutlinedCard quote="Looks fade. Marry someone you can have a good conversation with for the next 60 years."></OutlinedCard>
            </Col>
            <Col className="gutter-row" span={8}>
                <OutlinedCard quote="You're not dead yet."></OutlinedCard>
            </Col>
            </Row>
            <Row gutter={[32, 32]} type="flex">
            <Col className="gutter-row" span={8} >
                <OutlinedCard quote="Broccoli is nature's scrub brush."></OutlinedCard>
            </Col>
            <Col className="gutter-row" span={8}>
                <OutlinedCard quote="The key to success is being well dressed."></OutlinedCard>
            </Col>
            <Col className="gutter-row" span={8}>
                <OutlinedCard quote="It's just as easy to marry someone rich."></OutlinedCard>
            </Col>
            </Row>
            <Row gutter={[32, 32]} type="flex">
            <Col className="gutter-row" span={8} >
                <OutlinedCard quote="David, get back here and clean your room."></OutlinedCard>
            </Col>
            <Col className="gutter-row" span={8}>
                <OutlinedCard quote="Okay, carry on. (after hanging up the phone)"></OutlinedCard>
            </Col>
            <Col className="gutter-row" span={8}>
                <OutlinedCard quote="What I know is prunes..."></OutlinedCard>
            </Col>
            </Row>
        </Container>
        </>      
      </body>
    </div>
  );
}

export default Quotes;
