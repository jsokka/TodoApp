import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { NavLink } from "react-router-dom";
import { Badge, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Projects.scss";

const ProjectNav = ({ projects, onAddProjectClick }) => {
  const hasProjects = (projects || []).length > 0;

  return (
    <div className="project-nav">
      <Container className="title text-center">
        Projects
        <Button size="sm" variant="light" className="float-right" onClick={onAddProjectClick}>
          <Icon icon={faPlus} /> 
        </Button>
      </Container>
      <TransitionGroup>
        {hasProjects && projects.map(p => 
          <CSSTransition
              key={p.id}
              timeout={500}
              classNames="project">
            <NavLink 
              key={p.id} 
              to={"/project/" + p.id} 
              className="list-group-item list-group-item-action bg-light">
              <Container fluid>
                <Row>
                  <Col className="p-0">
                    {p.name}
                  </Col>
                  <Col md="1">
                    {p.uncompletedTaskCount > 0 
                      ? <Badge className="" variant="secondary">{p.uncompletedTaskCount}</Badge>
                      : null}
                      </Col>
                  </Row>
              </Container>
            </NavLink>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default createFragmentContainer(ProjectNav, { projects: graphql`
  fragment ProjectNav_projects on ProjectType @relay(plural: true) {
    id
    name
    uncompletedTaskCount
  } 
`});