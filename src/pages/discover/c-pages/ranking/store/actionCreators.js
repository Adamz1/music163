import {getTopList,getRankingList} from '@/services/ranking.js'

import {CHANEG_TOP_LIST,
    CHANGE_CURRENT_ID,
    CHANGE_PLAYLIST
} from './constants'


const changeTopList = (res)=> {
    return ({
        type: CHANEG_TOP_LIST, 
        topList: res.list
    })
}

const changePlayList =(res)=> {
    return ({
        type: CHANGE_PLAYLIST,
        playList: res.playlist
    })
}


export const changeCurrentIdAction = (id)=> {
    return ({
        type:CHANGE_CURRENT_ID,
        currentIndex: id
    })
}


export const changeTopListAction =()=> {
    return  (dispatch)=> {
        getTopList().then((res)=> { 
            dispatch(changeTopList(res))            
        })
    }
}

export const changePlayListAction =(id)=> {
    return (dispatch)=> {
        getRankingList(id).then((res)=> {  
            console.log(res)
            dispatch(changePlayList(res))
        })
    }
}