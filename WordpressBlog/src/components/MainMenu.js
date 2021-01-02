import React from "react"
import {graphql, StaticQuery, Link} from "gatsby"
import styles from "../style/menu.module.scss"
import SiteInfo from "./siteInfo";

const MainMenu = () => {
    return (
        <StaticQuery query={graphql`
{
allWordpressWpApiMenusMenusItems(filter:{
  name:{
    eq:"Main menu"
  }
}) {
  edges {
    node {
      name
     items{
      title
      object_slug
    }
    }
  }
}
}
    `} render={props =>(
            <div className={styles.mainMenu}>
                <SiteInfo />
                <div className={styles.link}>
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>(
                    <Link to={`/${item.object_slug}`} key={item.title}>
                        {item.title}
                    </Link>
                ))}
                </div>
            </div>
        )}/>
    )
}

export default MainMenu