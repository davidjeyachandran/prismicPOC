import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { RichText } from "prismic-reactjs"
// import Layout from "../components/shared/components/Layout"
// import BlogPost from "../components/BlogPage/BlogPost"
const blogQuery = graphql`
  {
    prismic {
      allBlogs {
        edges {
          node {
            title
            categories
            excerpt
            body
            ... on PRISMIC_Blog {
              _meta {
                uid
                lang
                type
              }
            }
          }
        }
      }
    }
  }
`
const blog = ({ data }) => {
  const posts = data.prismic.allBlogs.edges
  return (
    <StaticQuery
      query={`${blogQuery}`}
      render={data => (
        <div className="mx-auto px-16 mt-8">
          {posts.map(post => {
            return (
              <div key={post.node._meta.uid}>
                {console.log(post.node)}
                {RichText.render(post.node.title)}

                <p style={{ fontSize: "10px" }}>{post.node._meta.uid}</p>
                <p>{post.node.excerpt}</p>
                {RichText.render(post.node.body)}
              </div>
            )
          })}
        </div>
      )}
    />
  )
}
export default blog
