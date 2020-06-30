import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';

const Header = ({ siteTitle }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            {siteTitle}
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                HOME
            </OptionLink>
            <OptionLink to='/blog-feed'>
                BLOG FEED
            </OptionLink>
            <OptionLink to='/about'>
                ABOUT
            </OptionLink>
            <OptionLink to='/instagram'>
                INSTAGRAM
            </OptionLink>
        </OptionsContainer>      
    </HeaderContainer>

)

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `#1dcaff`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
