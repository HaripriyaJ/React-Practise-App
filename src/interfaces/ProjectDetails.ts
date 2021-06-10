export interface IProjectDetails {
    id: number;
    name: string;
    clientName: string;
    tags: string[];
    resources: {name: string, pfpUrl: string}[];
    progress: number;
    startDate: string;
    endDate: string;
}