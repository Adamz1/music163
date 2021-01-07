import {getSongCategory, getSongCategoryList} from '@/services/songs.js'
import {
    CHANGE_CATEGORY,
    CHANGE_CURRENT_CATEGORY,    
    CHANGE_CATEGORY_SONGS_LIST,
    PER_PAGE_NUMBER
} from './constants'

import {handleSongsCategory} from '@/utils/handleData'

const changeSongCategoryAction =(res)=>{
    return ({
        type:CHANGE_CATEGORY,
        category: res
        })
}
const changeSongsListAction =(res)=> {
    return({
        type:CHANGE_CATEGORY_SONGS_LIST,
        categorySongs: res
    })
}

export const changeCurrentCategoryAction =(name)=> ({
        type:CHANGE_CATEGORY,
        currentCategory: name
})


export const changeSongCategory = ()=> {
    return (dispatch)=> {
        getSongCategory().then((res)=> {    
            const categoryData = handleSongsCategory(res)
            dispatch(changeSongCategoryAction(categoryData))
        })
    }
}

export const getSongList = (page)=> {
    return (dispatch,getState)=> {
        const name = getState().get('songs').get('curretCategory')  
        getSongCategoryList(name, page * PER_PAGE_NUMBER).then((res)=> {        
            console.log(res)   // 返还 cat
            dispatch(changeSongsListAction(res))
        })
    }
}