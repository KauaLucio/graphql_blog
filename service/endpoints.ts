import { gql } from '@apollo/client';


export const getPosts = gql`
query GetArticles {
  articles(orderBy: createdAt_DESC) {
    id
    title
    slug
    category {
      slug
      name
    }
    comments {
      id
      name
      email
      comment
    }
    createdAt
    content {
      text
    }
    thumbnail {
      url
    }
    author {
      id
      name
      description
      photo {
        id
      }
    }
  }
}

`

export const getSinglePost = gql`
query GetSinglePost($slug: String) {
  article(where: {slug: $slug}) {
    id
    title
    slug
    category {
      slug
      name
    }
    comments {
      id
      name
      email
      comment
    }
    createdAt
    content {
      text
    }
    thumbnail {
      url
    }
    author {
      id
      name
      description
      photo {
        url
      }
    }
  }
}
`

export const getPostBySearch = gql`
query getPostsBySearch($str: String) {
  articles(orderBy: createdAt_DESC, where: {_search: $str }) {
    id
    title
    slug
    category {
      name
      slug
    }
    createdAt
    content {
      text
    }
    thumbnail {
      url
    }
    author {
      id
      name
      description
      photo {
        url
      }
    }
  }
}
`

export const getCategories =  gql`
query getCategories {
  categories {
    id
    name
    slug
    articles {
      id
      slug
    }
  }
}
`

export const getPostsByCategory = gql`
query GetPostsByCategory($slug: String) {
  articles(orderBy: createdAt_DESC, where: { category: { slug: $slug} }) {
    id
    title
    slug
    category {
      slug
      name
    }
    createdAt
    content {
      text
    }
    thumbnail {
      url
    }
    author {
      id
      name
      description
      photo {
        url
      }
    }
  }
}
`

export const addComments = gql`
mutation addComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
  createComment(data: {
      name: $name, 
      email: $email, 
      comment: $comment, 
      article: { 
        connect: { slug: $slug } 
      } 
    }) {
    id
  }
}
`