export const fetchWorkSpace = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/work_spaces/${id}`
    });
};

export const fetchWorkSpaces = () => {
    return $.ajax({
        method: "GET",
        url: `api/work_spaces/`
    });
};

export const fetchUserWorkSpaces = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/work_spaces`,
        data: { userId }
    });
};

export const createWorkSpaces = (work_space) => {
    return $.ajax({
        method: "POST",
        url: `api/work_spaces`,
        data: { work_space }
    });
};