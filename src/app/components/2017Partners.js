import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './Track.c.scss';
import Block from './viewBlocks/Block';
import TopNav from './TopNav';
import TitleMod from './TitleMod';
import Footer from './landing/Footer';

const OldPartners = () => (
  <div>
    <Grid className={styles.hero} fluid>
      <TopNav />
      <Row className={styles.background_top} center="xs">
        <TitleMod
          title="PARTNERS FROM 2017"
          content={[
            'Want to see your logo here? Contact us at partnerships@hackjunction.com to get on board with the Junction community.',
            'Check out our partners from 2017:'
          ]}
        />
      </Row>
    </Grid>
    <Block className={styles.block}>
      <Row center="xs">
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/elisa.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/veikkaus.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/N_L1_B4_RGB-1.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/planmeca.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/smartly.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/outotec.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/stara.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/finnair.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/esa.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={12} md={12}>
          <hr className={styles.separator} />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/mlh.png" className="responsive" />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/spotify.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/supercell.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/dot.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/fgj.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/eve-tech.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/blackrock.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/futurice.png" className="responsive" />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/dexter.png" className="responsive" />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/legaltechsummit.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/nordcloud.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/bitville.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/eficode.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suunto.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/sitra.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/helvar.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/procountor.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/sc5.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/mapbox.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/finnid.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/aalto.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fleetboard.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/09/qt.png" className="responsive" alt="" />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/kone.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/trimble.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/46elks.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/holvi.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/fortum.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/microsoft.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/verkkokauppa.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/qvik.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/storaenso.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/siili.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/kyyti.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/atalent.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/kamu.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/trueface.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/castrensnellman.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/bankify.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/icebreaker.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/kira_digi.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/mindfullness.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/jimms.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/waltti.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/nysse.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/foli.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/fira.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suneffects.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/keha.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/tyomarkkinatori.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/hsl.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/ruuvi.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/lvm.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/liikenev.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/trafi.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/ed.png" className="responsive" alt="" />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/semper.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/finefoods.png" className="responsive" />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/hamppufarmi.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/lindahls.png" className="responsive" />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/linkosuo.png" className="responsive" />
        </Col>
        <Col xs={4} md={3}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/11/forsman.png" className="responsive" />
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default OldPartners;
