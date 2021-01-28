
import styled from 'styled-components'
import { device } from '../../../../device'

export const StyledDivisionsContainer = styled.section`
display: grid;
grid-column-gap: 26px;
grid-row-gap: 26px;
padding: 0 18px;
margin-bottom:25px;
grid-template-columns: unset;
    grid-template-rows: unset;
@media ${device.tablet}{
    grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr 230px auto;
}
`
