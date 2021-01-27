import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/logo-home.svg'
import { ReactComponent as SearchLogo } from '../../assets/icons/search.svg'
import { ReactComponent as NotificationLogo } from '../../assets/icons/notification.svg'
import { ReactComponent as ProfileLogo } from '../../assets/icons/profile.svg'
import { ReactComponent as ProfileMenuLogo } from '../../assets/icons/down.svg'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from './constant'


export const StyledNavBar = styled.nav`



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
    }

    :hover {
        opacity:.7
    }
}

.nav__nav_left{
    display: flex;
}

.nav__nav_links{
    display: flex;
    margin-left: 50px;
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
        .svg-body {
            fill:#006FD6;
        };
    }
}

.nav__nav_link__active {
    background-color: #DEEFFF;
    /* border-bottom: 4px solid#006FD6; */
    box-shadow: 0px 4px 0px #006FD6;
    .svg-body {
        fill:#006FD6;
    };
}

.nav__nav_right{
    display: flex;
    align-items: center;
}

.nav_nav__search{
position: relative;
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
    margin-left: 5px;
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
margin: 0 32px;
`;
export const StyledProfileLogo = styled(ProfileLogo)`
`;
export const StyledProfileMenuArrow = styled(ProfileMenuLogo)`
margin-left:5px;
transform:${p => p.isBreadCrumb && 'rotate(270deg)'};
`;

export const NavBar = () => {
    return (
        <StyledNavBar>
            <div className="navbar__container">
            <div className="nav__nav_left">
                <Link to="/" className="nav__logo" alt="home">
                    <StyledBrandLogo />
                    <p>FE Engineer Test 1</p>
                </Link>
                <nav className="nav__nav_links">
                    {
                        navigationLinks.map(link => {
                            const { icon, text, to } = link
                            return <NavLink to={to} key={text} className="nav__nav_link" activeClassName="nav__nav_link__active" exact>
                                {icon} <span>{text}</span>
                            </NavLink>
                        })
                    }
                </nav>
            </div>
            <div className="nav__nav_right">
                <div className="nav_nav__search">
                    <input type="text" className="nav_search"/>
                    <StyledSearchLogo/>
                </div>
                <StyledNotificationLogo role="button" tabIndex='0'/>

                <div className="nav__nav_profile" role="button" tabIndex='0'>
                    <StyledProfileLogo/>
                    <StyledProfileMenuArrow/>
                </div>
            </div>
            </div>

            <div className="nav__breadcrumb">
                <Link to="/">{window.location.pathname.replace('/', '') || 'Home'}</Link>

                <StyledProfileMenuArrow isBreadCrumb={true}/>

                <Link to="/" className="breadcrumb_module">Module</Link>
            </div>
        </StyledNavBar>
    )
}
