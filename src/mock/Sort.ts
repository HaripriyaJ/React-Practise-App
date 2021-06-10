export interface ISortList {
    name: string; 
    text: string; 
    isClicked: boolean;
}

export const sortValues: ISortList[] = [
    {
        name: 'oldest',
        text: 'Oldest',
        isClicked: true
    },
    {
        name: 'newest',
        text: 'Newest',
        isClicked: false
    }
];