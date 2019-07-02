const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogComponent = path.resolve(`./src/templates/blog-post.js`)
  const pageComponent = path.resolve(`./src/templates/page.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // split content into posts and pages based on collection
    const content = {
      blog: [],
      pages: [],
    }
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      const collection = edge.node.fields.collection;
      // add to the correct array based on collection
      if(content[collection]) {
        content[collection].push(edge);
      }
    })

    const posts = content.blog
    // generate the posts
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.fields.slug,
        component: pageComponent,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // generate the pages
    content.pages.forEach((page, index) => {
      createPage({
        path: page.node.fields.slug,
        component: pageComponent,
        context: {
          slug: page.node.fields.slug,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    
    // Get the parent node
    const parent = getNode(node.parent)

    // Create a collection field on the node based on the sourceInstanceName
    // to allow us to distinguish posts and pages
    // idea taken from https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
