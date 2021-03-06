import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { NavLink } from "react-router-dom";
import { Badge, Container, Row, Col, ProgressBar } from "react-bootstrap";

const ProjectNavItem = ({ project }) => {
  const completedTaskCount = (project.taskCount - project.uncompletedTaskCount);
  
  return (
    <NavLink 
      key={project.id} 
      to={"/project/" + project.id} 
      className="list-group-item list-group-item-action bg-light">
      <Container fluid>
        <Row>
          <Col className="p-0">
            {project.name}
          </Col>
          <Col className="p-0" xs="1">
            {project.uncompletedTaskCount > 0 
              ? <Badge className="" variant="secondary">{project.uncompletedTaskCount}</Badge>
              : null}
            </Col>
          </Row>
      </Container>
      <ProgressBar now={completedTaskCount} min={0} max={project.taskCount} />
    </NavLink>
  );
};

export default createFragmentContainer(ProjectNavItem, { project: graphql`
  fragment ProjectNavItem_project on ProjectType {
    id
    name
    taskCount
    uncompletedTaskCount
  }
`});