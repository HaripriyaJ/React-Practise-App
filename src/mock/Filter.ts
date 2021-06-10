
export interface IFilterList {
    name: string;
    text: string;
}

export const filterValue:IFilterList[] = [
    {
        name: 'active',
        text: 'Active Projects'
    },
    {
        name: 'onHold',
        text: 'On-Hold Projects'
    },
    {
        name: 'closed',
        text: 'Closed Projects'
    }
];