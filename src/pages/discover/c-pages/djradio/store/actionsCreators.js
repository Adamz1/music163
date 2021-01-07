import {
  getDjRadioCateList,
  getDjRadioRecommend,
  getDjRadios,
} from "@/services/djradio";

import {
  CHANGE_RADIO_CATEGORIES,
  CHANGE_CURRENT_ID,
  CHANGE_RECOMMENDS,
  CHANGE_RADIOS,
} from "./constants";

const changeRadioCategoriesAciton = (res)=> ({
    type: CHANGE_RADIO_CATEGORIES,
    categories: res.categories
})

const changeRecommendsAction = (res)=> ({
    type: CHANGE_RECOMMENDS,
    recommends: res.djRadios
})

const changeRadiosAction =(res)=> ({
    type: CHANGE_RADIOS,
    radios: res.djRadios
})

export const changeCurrentIdAction = (id) => ({
    type:CHANGE_CURRENT_ID,
    currentId: id
})


export const getRadios = (currentId, offset)=> {    
    console.log(1)
    return dispatch=> {
        getDjRadios(currentId, 30, offset).then((res)=> {   
            dispatch(changeRadiosAction(res))
        })
    }
}

export const getRadioRecommend =(currentId)=> {
    return dispatch => {
        getDjRadioRecommend(currentId).then((res)=> {
            console.log(res)
            dispatch(changeRecommendsAction(res))
        })
    }
}

export const getRadioCategories = ()=> {
    return dispatch => {
        getDjRadioCateList().then((res)=> { 
            console.log(res)
            const currentId = res.categories[0].id
            // 修改当前的 id (default)  
            dispatch(changeCurrentIdAction(currentId))
            dispatch(changeRadioCategoriesAciton(res))
        })
    }
}
