import React ,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from './constant'
import {
    StyledNavBar ,
    StyledHomeLogo,
    StyledEntriesLogo,
    StyledDivisionsLogo,
    StyledMenuLogo,
    StyledBrandLogo,
    StyledSearchLogo,
    StyledNotificationLogo,
    StyledProfileLogo,
    StyledProfileMenuArrow,
} from './NavBar.style'


export const NavBar = (props) => {
    const {handleSearch, searchInput} = props

const [isSideNavOpen, setIsSideNavOpen] = useState(false)

const handleToggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen)
}

const handleKeyPressOnNavMenu = (e) => {
    if(e.key === ' ' || e.key === 'Enter'){
        handleToggleSideNav()
    }
}

React.useEffect(() => {
   const handleEscKeyPress = () => {
       if(!isSideNavOpen){
           return
        }
       window.addEventListener('keyup', (e) => {
           e.key=== 'Escape' && setIsSideNavOpen(false)
       })
   }

   handleEscKeyPress()

   return () => window.removeEventListener("keyup", handleEscKeyPress);
}, [isSideNavOpen])

    const handleIconSelection = (text) => {
        switch (text) {
            case 'Home':
                return <StyledHomeLogo />;
            case 'Entries':
                return <StyledEntriesLogo />;
            case 'Divisions':
                return <StyledDivisionsLogo />
            default:
                return <StyledHomeLogo />
        }
    }



    return (
        <StyledNavBar
        isSideNavOpen={isSideNavOpen}
        >
            <div className="navbar__container">
                    <StyledMenuLogo
                    role="button"
                    tabIndex="0"
                    onClick={handleToggleSideNav}
                    onKeyDown = {handleKeyPressOnNavMenu}
                    />
                <div className="nav__nav_left">
                    <Link to="/" className="nav__logo" alt="home">
                        <StyledBrandLogo />
                        <p>FE Engineer Test 1</p>
                    </Link>
                    <nav className="nav__nav_links">
                        {
                            navigationLinks.map(link => {
                                const { text, to } = link
                                return <NavLink
                                to={to}
                                key={text}
                                className="nav__nav_link"
                                activeClassName="nav__nav_link__active"
                                data-testid={`test-${text}`}
                                exact>
                                    {handleIconSelection(text)} <span>{text}</span>
                                </NavLink>
                            })
                        }
                    </nav>
                </div>

                <div className="nav__nav_right">
                    <div className="nav_nav__search">
                        <input type="text"
                        className="nav_search"
                        onChange={handleSearch}
                        value={searchInput}
                        data-testid="nav-input"
                        />
                        <StyledSearchLogo />
                    </div>
                    <StyledNotificationLogo role="button" tabIndex='0' />

                    <div className="nav__nav_profile" role="button" tabIndex='0'>
                        <StyledProfileLogo />
                        <StyledProfileMenuArrow />
                    </div>
                </div>
            </div>

            <div className="nav__breadcrumb">
                <Link to="/">{window.location.pathname.replace('/', '') || 'Home'}</Link>

                <StyledProfileMenuArrow isbreadcrumb='true' />

                <Link to="/" className="breadcrumb_module">Module</Link>
            </div>

            <nav className="nav__mobile_navbar">
            {
                            navigationLinks.map(link => {
                                const { text, to } = link
                                return <NavLink
                                to={to}
                                key={text}
                                className="nav__nav_link"
                                activeClassName="nav__nav_link__active"
                                onClick={handleToggleSideNav}
                                exact>
                                    {handleIconSelection(text)} <span>{text}</span>
                                </NavLink>
                            })
                        }
            </nav>
        </StyledNavBar>
    )
}
