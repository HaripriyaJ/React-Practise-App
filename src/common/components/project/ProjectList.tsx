import React from 'react';
import { projects } from '../../../mock/Projects';
import ContentArea from '../content/Content';
import Footer from '../footer/Footer';
import ProjectCard from './card/ProjectCard';

function ProjectList() {
    return (
        <>
            <ContentArea>
                <ProjectCard  list={projects}/>
            </ContentArea>
            <Footer />
        </>
    );
}
export default ProjectList;