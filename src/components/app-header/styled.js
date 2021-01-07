import styled from "styled-components";

// 导入背景图片资源
import photo from '@/assets/img/sprite_01.png'
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  height: 70px;
  display: flex;

  .logo {
    display: inline-block;
    width: 157px;
    height: 100%;
    background-position: 0 0;
    margin-right: 20px;
  }

  .select-list {
    display: flex;

    a {
      display: block;
      height: 70px;
      line-height: 70px;
      padding: 0 17px;
      color: #ccc;
      font-size: 14px;
      position: relative;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #000;
        color: #fff;
      }

      &.active > i {
        color: red;
        width: 12px;
        height: 7px;
        position: absolute;
        bottom: -1px;
        left: calc(50% - 6px);
        background-position: -226px 0;
      }

      :last-of-type::after {
        content: "";
        display: block;
        position: absolute;
        top: 20px;
        right: -27px;
        width: 30px;
        height: 19px;
        /* background: url(${photo}) -190px 0; */
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  .search {
    height: 32px;
    width: 158px;
    border-radius: 16px;
  }
  .center{
    width:90px;
    height: 32px;
    line-height:32px;
    text-align:center;
    border: 1px solid red; 
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
    color:white 
  }
  .login{
    
  }
`;
