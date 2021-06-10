import React from 'react';
import { filterValue } from '../../../mock/Filter';
import { projects } from '../../../mock/Projects';
import { sortValues } from '../../../mock/Sort';
import Filter from '../filter/Filter';
import Footer from '../footer/Footer';
import Sort from '../sort/Sort';
import ProjectCard from './card/ProjectCard';

function ProjectList() {
    return (
        <>
            <div className="flex-row mb-3">
                <div className="navbar-start">
                    <Filter filterList={filterValue} />
                </div>
                <div className="navbar-end">
                    <Sort sortList={sortValues} />
                </div>
            </div>
            <ProjectCard  list={projects}/>
            <Footer />
        </>
    );
}
export default ProjectList;