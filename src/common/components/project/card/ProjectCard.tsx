import React from 'react';
import { IProjectDetails } from '../../../../interfaces/ProjectDetails';
import ProgressBar from '../../ProgressBar';
import './ProjectCard.scss';

function ProjectCard(props:{list: IProjectDetails[]}) {
    return (
        <>
        {
            props.list.map(project => {
                return (
                    <div className="mb-6 p-5 project-card-wrapper">
                        <article className="flex-row project-card">
                            <div className="flex-column">
                                {/* Project Name, Client Name, Project Tags */}
                                <p className="heading">Client: {project.clientName}</p>
                                <p className="is-capitalized is-size-6">{project.name.length > 60 ? project.name.slice(0, 59) + "..." : project.name}</p>
                                <p className="mt-1">{project.tags.map(tag => <span className="tag is-primary is-light m-1">{tag}</span>)}</p>
                            </div>
                            <div className="flex-column user-list mr-6">
                                {/* Number of resources with first 5 resource's pfp*/}
                                <p className="heading is-align-content-center">
                                    {project.resources.slice(0, 5).map(resource => <img className="icon is-clickable" src={resource.pfpUrl} title={resource.name} alt="Resource" />)}
                                </p>
                                <p className="is-size-7">{project.resources.length} People</p>
                            </div>
                            <div className="flex-column is-clickable">
                                {/* Start date and End Date */}
                                <p className="heading is-align-content-center">Start Date</p>
                                <p className="is-size-7 start-date">{project.startDate}</p>
                               
                            </div>
                            <div className="flex-column is-clickable">
                                <p className="heading is-align-content-center">End Date</p>
                                <p className="is-size-7 end-date">{project.endDate}</p>
                            </div>
                            <div className="flex-column more">
                                <span className="is-clickable" title="More">
                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </span>
                            </div>
                        </article>
                        <div className="is-clickable" title={String(project.progress) + "%"}>
                            {/* <div className="is-clickable custom-progress" ></div> */}
                            <ProgressBar width={project.progress}/>
                        </div>
                    </div>
            )})
        }
        </>
    );
}

export default ProjectCard;