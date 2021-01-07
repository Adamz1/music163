import request from './axios'
// 轮播图的数据
export function getTopBanners(){    
    return request({
        url:"/banner"
    })
}
// 得到热门推荐的数据
export function getHotRecommends(){
    return request({
        url:'/personalized?limit=8'
    })
}

//  得到上新的数据 
export function getNewAlbum(){
    return request({
        url: "/top/album?limit=10",
        params: {   
        }
    })
}

// 得到排行榜的数据
export function getTopRankings(idx){
    return request({
        url: '/top/list',
        params: {
            idx
        }
    })
}

// 得到 settleArtist 的数据
export function getSettleArtist(limit, cat){
    return request({
        url:'/artist/list', 
        params: {
            cat, 
            limit
        }
})
}