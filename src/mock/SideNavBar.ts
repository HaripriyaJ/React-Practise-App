import { ISideNavBarOptions } from "../interfaces/SideNavBar";

export const sideNavBarOptions: ISideNavBarOptions[] = [
    {
        name: 'projects',
        displayText: 'Projects',
        icon: 'tasks',
        title: 'Project List',
        path: '/projects'
    },
    {
        name: 'todo',
        displayText: 'To Do',
        icon: 'pencil',
        title: 'ToDos List',
        path: '/todo'
    }
]