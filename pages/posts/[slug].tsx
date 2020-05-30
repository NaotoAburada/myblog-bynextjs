import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import PreviousArticle from '../../components/previous-article'
import BackArticle from '../../components/back-article'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import { Breadcrumbs } from '@material-ui/core';

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post: React.FC<Props> = ({ post, morePosts, preview }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

//  let previousArticle = post
  let linkpostpre = -1
  let linkpostback = morePosts.length
  for (let i = 0; i < morePosts.length; i++) {
    if (post?.slug === morePosts[i].slug) {
      if(i !== 0) {
        linkpostpre = i - 1
      }
      linkpostback = i + 1
    }
  }

  //  previousArticle = morePosts[linkpostpre + 1]

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
              <div className="flex">
                {linkpostpre === -1 ? (
                  <PreviousArticle
                    post={morePosts[linkpostpre]} linknumber={linkpostpre}
                  />
                ) : (
                  <PreviousArticle
                    post={morePosts[linkpostpre]}
                  />
                )}
                {linkpostback === morePosts.length ? (
                  <BackArticle
                    post={morePosts[linkpostpre]} linknumber={0}
                  />
                ) : (
                  <BackArticle
                    post={morePosts[linkpostback]}
                  />
                )}
              </div>
            </article>
           </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await markdownToHtml(post.content || '')

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: allPosts, 
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
