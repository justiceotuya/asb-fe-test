import styled from 'styled-components';
import { ReactComponent as Speaker } from '../../../../assets/icons/speaker.svg'
import { device } from '../../../../device';



export const StyledModuleHistory = styled.div`
padding:12px;

@media ${device.tablet}{
    grid-area: 2 / 3 / 4 / 5;
}
@media ${device.laptop}{
    grid-area: 4 / 1 / 3 / 2;
}

.modules_history__header{
    display: flex;
    align-items:center;
    margin-bottom: 26px;

    h3 {
        font-weight: bold;
        margin-left: 16px;
        font-size: 14px;
        line-height: 150%;
        color: #000000;
    }
}

.module_history__body{

}
.module_history__item{
/* margin-left:18px; */
margin-bottom:20px;
display: flex;


:last-child {
    .item_decorator {
        :before{
            display: none;;
        }
    }
}

.item_decorator{
    position: relative;
    /* width: 9px;
height: 9px;
background: #707070;
border-radius: 100%; */
margin-right: 9px;
:after {
    content: '';
    display: table;
    width: 9px;
    height: 9px;
    background: #707070;
    border-radius: 2000px;
    position: relative;
    top: 3px;
}

:before {
    content: '';
    display: table;
    height: 68px;
    border: .1px dashed #C4C4C4;
    border-radius: 20px;
    position: absolute;
    top: 9px;
    right: 4px;
}


}
}
.module_history__title{
    font-weight: bold;
font-size: 12px;
line-height: 140%;
color: #747474;
margin-bottom: 10px;
}
.module_history__meta{
display: flex;
align-items:center;
    .date,.platform{
        font-weight: bold;
font-size: 12px;
line-height: 140%;
color: #A1AACE;
    }
    .divider{
margin: 0 6px;
width: 4px;
height: 4px;
background-color: #A1AACE;
border-radius: 100%;
    }
    .platform{

    }
}
`;

export const StyledSpeakerIcon = styled(Speaker)``
