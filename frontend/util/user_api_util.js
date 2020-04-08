export const fetchChannelUsers = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `api/users`,
        data: { channelId }
    });
};

export const fetchUserWorkSpace = (workSpaceId) => {
    return $.ajax({
        method: "GET",
        url: `api/users`,
        data: { workSpaceId }
    });
};
