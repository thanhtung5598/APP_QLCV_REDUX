import * as types from './../contanst/index'
export const status = (status) => {
    return {
        type: types.Toggle,
        status:status
    }
}
export const Sort = (sort) => {
    return {
        type: types.SortValue,
        sort : sort
    }
}