export function contentFetchDataSuccess(content) {
    return {
        type: "DATA_SUCCES",
        payLoad:content
    }
}

export function contentFetchDataError(dataError) {
    return {
        type: "DATA_ERROR",
        payLoad:dataError
    }
}

export function contentFetchDataLoading() {
    return {
        type: "DATA_LOADING",
        payLoad: "loading"
    }
}




export function contentFetchData(url) {
    return (dispatch) => {
        dispatch(contentFetchDataLoading())
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(content => dispatch(contentFetchDataSuccess(content)))
            .catch((err)=>{
                dispatch(contentFetchDataError(err));
            });
    }
}
