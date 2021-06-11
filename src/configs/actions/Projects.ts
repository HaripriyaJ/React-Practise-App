export const projectActions = {
    GET_LIST: 'projects/getList',
    EDIT_PROJECT: 'projects/edit',
    CREATE_PROJECT: 'projects/add'
};

export const projectFilterActions = {
    BY_ACTIVE: 'filterProject/active',
    BY_ON_HOLD: 'filterProject/onHold',
    BY_CLOSED: 'filterProject/closed',
    REVERT: 'filterProject/clear'
};

export const projectStatus = {
    ACTIVE: 'active',
    INACTIVE: 'onHold',
    CLOSED: 'closed'
}

export const projectListLSKey = "projectList";