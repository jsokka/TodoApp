import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Projects.scss";
import ProjectNavItem from "./ProjectNavItem";

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
        {hasProjects && projects.map(project => 
          <CSSTransition
            key={project.__id}
            timeout={500}
            classNames="project"
          >
            <ProjectNavItem 
              project={project}
            />     
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default createFragmentContainer(ProjectNav, { projects: graphql`
  fragment ProjectNav_projects on ProjectType @relay(plural: true) {
    id
    ...ProjectNavItem_project
  } 
`});