import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/logo-home.svg'
import { ReactComponent as SearchLogo } from '../../assets/icons/search.svg'
import { ReactComponent as NotificationLogo } from '../../assets/icons/notification.svg'
import { ReactComponent as ProfileLogo } from '../../assets/icons/profile.svg'
import { ReactComponent as ProfileMenuLogo } from '../../assets/icons/down.svg'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as EntriesIcon } from '../../assets/icons/entries.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as DivisionsIcon } from '../../assets/icons/divisions.svg'
import { device } from '../../device'

export const StyledNavBar = styled.nav`

@media (max-width: 1023px){
    position: sticky;
    top: 0;
    z-index: 3;
    background: #fff;
}

.navbar__container {
    box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
    background: #FFFFFF;
    display: flex;
align-items: center;
justify-content: space-between;
padding: 0 22px 4px 22px;
}

.nav__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    p{
        font-size: 14px;
        color: #000000;
        display:none;

        @media ${device.laptop}{
            display: block
        }
    }

    :hover {
        opacity:.7
    }
}

.nav__nav_left{
    display: flex;
}

.nav__nav_links{
    margin-left: 10px;
        display:none;
        @media (min-width:450px){
        display: flex;
        margin-left: 10px;
    }
    @media (min-width:600px){
        display: flex;
        margin-left: 50px;
    }
}

.nav__nav_link{
    text-decoration:none;
    display: flex;
    align-items:center;
    padding: 15px;
    font-size: 14px;
    font-weight: 400;
    color: #778699;
    span {
        margin-left: 8px;
    };

    :hover {
        background-color: #DEEFFF;
        box-shadow: 0px 4px 0px #006FD6;
        color:#006FD6;
        .svg-body {
            fill:#006FD6;
        };
    }
}

.nav__nav_link__active {
    background-color: #DEEFFF;
    color:#006FD6;
    box-shadow: 0px 4px 0px #006FD6;
    .svg-body {
        fill:#006FD6;
    };
}

.nav__nav_right{
    display: flex;
    align-items: center;


    @media ${device.tablet}{
        margin-left: 50px;
    }
}

.nav_nav__search{
position: relative;
display: none;
@media ${device.tablet}{
        display: flex;
    }
}
.nav_search{
    background: #FFFFFF;
    border: 1px solid #DCE1E7;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    height: 36px;
    width: 176px;
    padding: 0 5px 0 35px;
}
.nav__nav_profile{
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
    padding:4px;

    :active, :focus{
        outline:2px solid;
    }
}

.nav__breadcrumb{
    display: flex;
    align-items: center;
    text-transform: capitalize;
    /* font-family: DM Sans; */
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    line-height: 22px;
    color: #778699;
    margin: 19px 30px;

    a {
        text-decoration: none;

        :hover{
            text-decoration: underline;
        }
    }
}
.breadcrumb_module{
}
.nav__mobile_navbar{
    position: fixed;
    left: ${p => p.isSideNavOpen ? '0px' : '-250px'};
    transition: left .2s ease-in-out;
    top: 48px;
    width: 250px;
    z-index: 3;
    height: 100%;
    background: white;
    box-shadow: 0px 4px 30px rgb(192 192 192 / 25%);

    @media (min-width: 450px) {
        display:none
    }
}
`

export const StyledBrandLogo = styled(Logo)`
fill:red;
`;
export const StyledSearchLogo = styled(SearchLogo)`
position: absolute;
left: 16px;
bottom:11px;
`;
export const StyledNotificationLogo = styled(NotificationLogo)`
margin: 0 10px;

@media ${device.tablet}{
    margin: 0 32px;
}
`;
export const StyledProfileLogo = styled(ProfileLogo)`
 width:25px;
@media ${device.tablet}{
    width:32px;
}
`;
export const StyledHomeLogo = styled(HomeIcon)`
&:hover .svg-body {
fill:red;
};
`;
export const StyledEntriesLogo = styled(EntriesIcon)`
&:hover .svg-body {
};`
export const StyledMenuLogo = styled(MenuIcon)`
height:18px;
width:18px;
@media (min-width: 499px){
    display:none
}
&:hover .svg-body {
};
`;
export const StyledDivisionsLogo = styled(DivisionsIcon)`
&:hover .svg-body {
};
`;
export const StyledProfileMenuArrow = styled(ProfileMenuLogo)`
margin-left:${p => p.isbreadcrumb !== true && '5px'};
transform:${p => p.isbreadcrumb && 'rotate(270deg)'};
margin: ${p => p.isbreadcrumb && '0 5px'};

.svg-body {
        fill:#0A5685;
    };
`;
