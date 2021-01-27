import styled from 'styled-components'

import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg'
import {ReactComponent as EntriesIcon} from '../../assets/icons/entries.svg'
import {ReactComponent as DivisionsIcon} from '../../assets/icons/divisions.svg'

export const StyledHomeLogo = styled(HomeIcon)`
&:hover .svg-body {
fill:red;
};
`;
export const StyledEntriesLogo = styled(EntriesIcon)`
&:hover .svg-body {
fill:red;
};
`;
export const StyledDivisionsLogo = styled(DivisionsIcon)`
&:hover .svg-body {
fill:red;
};
`;
export const navigationLinks = [
    {
        icon: <StyledHomeLogo/>,
        text: 'Home',
        to:'/'
    },
    {
        icon: <StyledEntriesLogo/>,
        text: 'Entries',
        to:'/entries'
    },
    {
        icon: <StyledDivisionsLogo/>,
        text: 'Divisions',
        to:'/divisions'
    },
]
