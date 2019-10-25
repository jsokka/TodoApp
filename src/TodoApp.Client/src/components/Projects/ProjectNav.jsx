import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import "./Projects.scss";
import ProjectNavItem from "./ProjectNavItem";

const ProjectNav = ({ projects }) => {

  projects = projects || [];

  return (
    <div className="project-nav">
      <TransitionGroup>
        {projects.map(project => 
          <CSSTransition
            key={project.id}
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