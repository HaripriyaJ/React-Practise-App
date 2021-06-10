export interface IProjectDetails {
    id: number;
    name: string;
    clientName: string;
    tags: string[];
    resources: IResourceDetails[];
    progress: number;
    startDate: string;
    endDate: string;
    status: 'active' | 'on hold' | 'closed';
}

export interface IResourceDetails {
    id?: string|number; 
    name: string; 
    pfpUrl: string;
}