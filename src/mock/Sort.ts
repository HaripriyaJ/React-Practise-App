import { sortOrder } from "../configs/actions/Projects";

export interface ISortList {
    name: string; 
    text: string; 
    action: string;
}

export const sortValues: ISortList[] = [
    {
        name: 'oldest',
        text: 'Oldest',
        action: sortOrder.ASC
    },
    {
        name: 'newest',
        text: 'Newest',
        action: sortOrder.DESC
    }
];