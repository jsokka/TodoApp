import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { format } from "date-fns";
import { fi } from 'date-fns/locale'

const ProjectHeader = ({ project, onEditProjectClick }) => {
  return (
    <div>
      <h2 className="page-title">
        {project.name}
        <Icon 
          size="sm" 
          style={{ cursor: "pointer", marginLeft: "0.5rem" }} 
          icon={faPencilAlt} 
          onClick={onEditProjectClick}
        />
        {project.deadline && 
          <div className="sub">
            <Icon icon={faCalendarDay} />
            {format(new Date(project.deadline), "PPP", { locale: fi })}
          </div>}  
      </h2>
      <p>{project.description}</p>
    </div>
  );
}

export default createFragmentContainer(ProjectHeader, { project : graphql`
  fragment ProjectHeader_project on ProjectType {
    name
    description
    deadline
  }
`
});