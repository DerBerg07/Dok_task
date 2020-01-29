export function currentPageChange(page) {
    return {
        type: "PAGE_CHANGED",
        payLoad:page
    }
}
export function CarValue(newCarValue) {
    return {
        type: "CAR_ADD_VALUE",
        payLoad: newCarValue
    }
}