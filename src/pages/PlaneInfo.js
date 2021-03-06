import React, { useState } from "react";
import { Route, Switch } from 'react-router';
import { Row, Col, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Icofont from "react-icofont";
import { Helmet } from 'react-helmet';

import Layout from "../components/Layout";
import ChangesTab from "../components/tabs/ChangesTab";
import LocationsTab from "../components/tabs/LocationsTab";
import ComponentsTab from "../components/tabs/ComponentsTab";
import OverviewTab from "../components/tabs/OverviewTab";
import SettingsTab from "../components/tabs/SettingsTab";

function PlaneInfoPage(props) {
  const [key, setKey] = useState("overview");

  var item;

  if (props.location.state == null) {
    props.history.push("/planes");
    return null;
  } else {
    item = props.location.state.item;
  }

  return (
    <Layout>
      <Helmet>
        <title>LSMS - {item.name}</title>
      </Helmet>
      <Row style={{ marginBottom: "1em" }}>
        <Col md="auto" xs={{ span: "6" }}>
          <Link to="/planes">
            <Button variant="outline-secondary" /* onClick={props.history.goBack} */ >
              <Icofont icon="arrow-left" /> Back
            </Button>
          </Link>
        </Col>
        <Col md={{ span: true }} xs={{ order: 2, span: "auto" }}>
          <h2 style={{ display: "inline" }}>{item.name}</h2>
        </Col>
        <Col md={{ order: 2, span: "auto" }} xs={{ order: 1, span: "6" }}>
          <Link to={{ pathname: `/plane/${item.id}/settings`, state: { item: item } }}>
            <Button style={{ float: "right" }} variant="outline-secondary">
              <Icofont icon="gear" /> Settings
            </Button>
          </Link>
        </Col>
      </Row>

      <Nav variant="tabs" defaultActiveKey="/home">
        <NavLink className="nav-link" to={{ pathname: `/plane/${item.id}/overview`, state: { item: item } }}>
          Overview
        </NavLink>
        <NavLink className="nav-link" to={{ pathname: `/plane/${item.id}/components`, state: { item: item } }}>
          Components
        </NavLink>
        <NavLink className="nav-link" to={{ pathname: `/plane/${item.id}/changes`, state: { item: item } }}>
          Changes
        </NavLink>
        <NavLink className="nav-link" to={{ pathname: `/plane/${item.id}/locations`, state: { item: item } }}>
          Locations
        </NavLink>
      </Nav>

      <Switch>
        <Route path="/plane/:id/overview">
          <OverviewTab item={item} />
        </Route>
        <Route path="/plane/:id/components">
          <ComponentsTab item={item} />
        </Route>
        <Route path="/plane/:id/changes">
          <ChangesTab item={item} />
        </Route>
        <Route path="/plane/:id/locations">
          <LocationsTab item={item} />
        </Route>
        <Route path="/plane/:id/settings">
          <SettingsTab item={item} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default PlaneInfoPage;
