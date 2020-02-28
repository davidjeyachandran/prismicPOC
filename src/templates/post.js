import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

// import Layout from "../components/shared/components/Layout"
export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allBlogs(uid: $uid) {
        edges {
          node {
            title
            categories
            body
          }
        }
      }
    }
  }
`
const post = ({ data }) => {
  const doc = data.prismic.allBlogs.edges.slice(0, 1).pop()
  if (!doc) return null
  return (
    <div className="mx-auto px-16">
      {RichText.render(doc.node.title)}
      {RichText.render(doc.node.categories)}
      {RichText.render(doc.node.body)}
    </div>
  )
}
export default post
