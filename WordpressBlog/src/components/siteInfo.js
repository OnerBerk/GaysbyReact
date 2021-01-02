import React from "react"
import {graphql, StaticQuery} from "gatsby"
import styles from "../style/menu.module.scss";


const SiteInfo = () => {
    return (
        <StaticQuery query={graphql`{
         allWordpressSiteMetadata{
           edges{
             node{
               name
               description
               }
           }
         }
        }`} render={props => (
            <div className={styles.siteInfo}>
                <div>
                    {props.allWordpressSiteMetadata.edges[0].node.name}
                </div>
                <div>
                    {props.allWordpressSiteMetadata.edges[0].node.description}
                </div>
            </div>
        )}

        />
    )
}
export default SiteInfo