import React, { memo } from 'react'

import {UserLoginWrapper} from './style'

export default memo(function HYLogin() {
    return (
        <UserLoginWrapper className ='sprite_02'>   
            <p>登陆网易云音乐, 可以享受无限收藏的乐趣,并且无限同步到手机</p>
            <a href="/login" className = "sprite_02">点击登陆</a>
        </UserLoginWrapper>
    )
})
