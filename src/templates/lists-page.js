import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

/*const ListsPage = ( {data} ) => {
    const { markdownRemark: post } = data;

    return(
      <div className="section">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{post.frontmatter.title}</h2>
        <p>{post.frontmatter.description}</p>
        {post.html}
      </div>
    );
};

export default ListsPage;

export const ListsPageQuery = graphql`
query ListsPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      templateKey
      description
    }
  }
}
`;*/


export const ListsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ListsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ListsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ListsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ListsPage

export const ListsPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
