import { projectFilterActions } from "../configs/actions/Projects";

export interface IFilterList {
    name: string;
    text: string;
    action: string;
}

export const projectFilterValues:IFilterList[] = [
    {
        name: 'active',
        text: 'Active Projects',
        action: projectFilterActions.BY_ACTIVE
    },
    {
        name: 'onHold',
        text: 'On-Hold Projects',
        action: projectFilterActions.BY_ON_HOLD
    },
    {
        name: 'closed',
        text: 'Closed Projects',
        action: projectFilterActions.BY_CLOSED
    },
    {
        name: 'clear',
        text: 'Clear',
        action: projectFilterActions.REVERT
    }
];
