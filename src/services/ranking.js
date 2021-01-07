import request from './axios'

// 拿到 topList
export function getTopList(){
    return request({
        url: '/toplist'
    })
}


// 拿到 playList
export function getRankingList(id){
    return request({
        url:'/playlist/detail' ,
        params: {
            id
        }

    })
}