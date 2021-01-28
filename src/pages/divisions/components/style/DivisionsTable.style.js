import styled from 'styled-components';
import { device } from '../../../../device';
import {ReactComponent as Menu} from '../../../../assets/icons/dots.svg'
import {ReactComponent as More} from '../../../../assets/icons/more.svg'
import {ReactComponent as ArrowDownRight} from '../../../../assets/icons/arrow-down-right.svg'
import {ReactComponent as ArrowLeft} from '../../../../assets/icons/arrow-left.svg'
import {ReactComponent as ArrowUp} from '../../../../assets/icons/arrow-up.svg'

export const StyledDivisionsTable = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
    border-radius: 6px;
    /* padding: 17px; */
    display:none;
    height: 600px;
  overflow-y: scroll;

    @media ${device.tablet}{
        display: block;
        grid-area: 4/ 1 / 4 / 6;
    }
    @media ${device.laptop}{
        grid-area: 2 / 2 / 6 / 6;
    }

table {
    border-collapse: collapse;
    width:100%;
}
thead {
    background: #F3F6F9;
}
td,th{
    text-align: left;
    /* padding: 15px 20px; */
}
td {
    padding: 10px 5px;
    vertical-align: middle;

    @media (min-width: 1000px){
      padding: 10px;
  }
}
th{
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #899198;
    padding: 15px 10px;
    background: #F3F6F9;
    position: sticky;
  z-index: 2;
  top: 0;

  input {
      width:15px;
      height:15px;
  }
}

.full_centered_page{
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
}
`;
export const StyledTableRow = styled.tr`
  background: #FFFFFF;
box-shadow: inset 0px -1px 0px rgba(183, 183, 183, 0.25);


.table_checkbox__container {
    input {
        margin:0;
        height:15px;
        width:15px;
        /* margin-right:10px; */
    }
}
.table_data__name{
    font-size: 14px;
    line-height: 18px;
    color: #25213B;
}
.table_data__address{
    /* display:flex;
    flex-direction: column; */
    .data__state{
        font-weight: 500;
        font-size: 12px;
        line-height: 19px;
        color: #25213B;
    }
    .data__street{
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #878592;
    }
}
.table_data__status{
p{
    font-weight: bold;
font-size: 14px;
line-height: 18px;
color:${p =>p.status.includes('No')? '#8C70FF' : '#F4B400'};
padding: 2px 12px;
background: ${p =>p.status.includes('No')? '#F6F3FF' : '#FFF6DE'};
border-radius: 11px;
display: inline;
}
}
.table_data__entries{

    .entries_stat{
        font-weight: 500;
        font-size: 12px;
        line-height: 19px;
        color: #25213B;
        margin-left: 12px;
        position:relative;

        :after {
            content: '';
            display:table;
            width:6px;
            height: 6px;
            background: #25213B;
            border-radius: 100%;
    position: absolute;
    top: 7px;
    left: -10px;
        }

    }
    .entries_group{
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #878592;
    }
}
.table_data__risk_profile{
display: flex;
align-items: center;
position:relative;
bottom: -7px;

.risk_value {
    font-weight: normal;
font-size: 14px;
line-height: 18px;
/* display: flex;
align-items: center; */
color:${p => {
    if(p.riskProfile.includes('Low')){
        return '#3AB65C'
    }else if(p.riskProfile.includes('Mid')){
        return '#3C3AB6'
    }else return '#B63A3A'
} };
margin-left:10px;
}
}
`
export const StyledMenu = styled(Menu)`
cursor: pointer;
`
export const StyledMore = styled(More)`
position: relative;
left: 10px;
`
export const StyledArrowDownRight = styled(ArrowDownRight)``
export const StyledArrowLeft = styled(ArrowLeft)``
export const StyledArrowUp = styled(ArrowUp)``
