export const fetchChannels = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/channels"
        })
    );
};

export const fetchChannel = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/channels/${id}`
        })
    );
};

export const createChannel = (channel) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/channels",
            data: { channel }
        })
    );
};

export const destroyChannel = (id) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/channels/${id}`
        })
    );
};

export const updateChannel = (data) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `/api/channels/${data.id}`,
            data: { data }
        })
    );
};

export const fetchUserChannels = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/channels`,
        data: { userId }
    });
};