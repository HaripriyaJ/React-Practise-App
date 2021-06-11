import React, { useEffect } from 'react';
import { projectFilterValues } from '../mock/Filter';
import { sortValues } from '../mock/Sort';
import Filter from '../common/components/filter/Filter';
import Footer from '../common/components/footer/Footer';
import Sort from '../common/components/sort/Sort';
import ProjectCard from '../common/components/project/card/ProjectCard';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { GetProjects } from '../apis/Projects';

function ProjectList() {
    // Load project list
    const { projects } = useSelector((state: RootStateOrAny) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProjects());
    }, [dispatch]);

    return (
        <>
            <div className="flex-row mb-3">
                <div className="navbar-start">
                    <Filter filterList={projectFilterValues} />
                </div>
                <div className="navbar-end">
                    <Sort sortList={sortValues} />
                </div>
            </div>
            <div className="min-height">
                <ProjectCard  list={projects}/>
            </div>
            <Footer />
        </>
    );
}
export default ProjectList;