/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from "./MainMenu"
import "../style/global.scss"

const Layout = ({ children }) => (
    <div>
        <MainMenu/>
        {children}
    </div>
)
export default Layout
