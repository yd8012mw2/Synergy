import React from 'react';
import ReactPlayer from 'react-player';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import CalendarGrid from './CalendarGrid';
import BlockHeader from './viewBlocks/BlockHeader';
import styles from './About.c.scss';
import Block from './viewBlocks/Block';
import TopNav from './TopNav';
import TitleMod from './TitleMod';
import Footer from './landing/Footer';

const About = () => (
  <div>
    <TopNav />
    <Row className={styles.background_top} center="xs">
      <TitleMod title="WHAT IS JUNCTION" />
    </Row>
    <Block className={`${styles.block} ${styles.infotext}`}>
      <Col xs={12} className={styles.parag}>
        Junction is a community of developers, designers and entrepreneurs from around the world, led by a team of
        volunteers. The Junction main event, Europe{"'"}s biggest hackathon is organized annually in Finland during the
        wintery month of November.
        <br />
        <br />
        On top of our main event, Junction also organizes several other hackathons and tech-events around the world with
        the help of local developer communities. Check out our calendar to get to know all that is going on in Junction!
        We have a busy fall coming up.
        <br />
        <br />
        The one thing about Junction that we love to mention is, that we are not your standard cafeteria hackathons.
        Junction is an experience, a unique environment to create & learn and a global community on a mission to empower
        people to create with technology.
      </Col>
    </Block>
    <Block className={styles.block} contentClassName={styles.content}>
      <Row center="xs" className={styles.community}>
        <Col xs={6} md={4}>
          <p className={styles.number}>3</p>
          <p>Years</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>14</p>
          <p>Countries</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>103</p>
          <p>Nationalities</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>162</p>
          <p>Partners</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>1049</p>
          <p>Volunteers</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>1102</p>
          <p>New ideas into reality</p>
        </Col>
      </Row>
      <Row className={styles.bottomRow} center="xs">
        <Col xs={12} md={12}>
          <span className={styles.number}> Over 5000 </span>
          <br />participants in total
        </Col>
      </Row>
    </Block>
    <Block className={styles.dark_block}>
      <BlockHeader title="Junction from previous years" />
      <Row className={styles.video} center="xs">
        <ReactPlayer url="https://www.youtube.com/watch?v=G5GOb9Ea5z0" className={styles.video} />
      </Row>
    </Block>
    <Block className={styles.block}>
      <BlockHeader title="NEXT UP" />
      <Col>
        <CalendarGrid categories={{ hacktour: true, junctionx: true, techrace: true, hacktalks: true }} limit={3} />
      </Col>
      <Row center="xs">
        <Col xs={12} md={12}>
          <Link to="/calendar">
            <button className={styles.apply_button}>SEE FULL CALENDAR</button>
          </Link>
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default About;
