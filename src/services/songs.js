import request from './axios'
export function getSongCategory(){
    return request({
        url:'/playList/catlist'
    })
}

export function getSongCategoryList(cat ="全部", offset =0, limit = 35){
    return request ({
        url:'/top/playlist',
        params: {
            cat,
            offset,
            limit
        }
    })
}