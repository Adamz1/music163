import React, { memo, useEffect,useState } from 'react' 
import {AlphaListWrapper} from './style'
import classNames from 'classnames'
import {singerAlphas} from '@/utils/handleData'    
import {getArtistListAC} from '../../../store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

export default memo(function HYAlphaList(props) {
   
    // redux
    const dispatch = useDispatch()      
    const {currentArea,  currentType } = useSelector(state => ({
        currentArea: state.get('artist').get('currentArea'),
        currentType: state.get('artist').get('currentType')
    })) 
     // hooks
     const [currentAlpha, setCurrentAlpha] = useState(-1)
     useEffect(() => {
         console.log(currentArea, currentType, currentAlpha)
        dispatch(getArtistListAC(currentArea,currentType.type,currentAlpha))
     }, [dispatch, currentAlpha, currentArea,currentType ])
  
    return (
        <AlphaListWrapper>  
            {
                currentArea !== -1 && singerAlphas.map((item, index)=> {
                    const isActive = currentAlpha === item;
                    if(item === '0') item  = '其他'
                    if(item ==='-1') item  = "热门"
                    return (    
                        <div key ={item} className = {classNames('item', {'isActive': isActive})}>
                            <span onClick ={e=> setCurrentAlpha(item)}>{item.toUpperCase()}</span>
                        </div>
                    )
                })
            }
        </AlphaListWrapper>
    )
})
