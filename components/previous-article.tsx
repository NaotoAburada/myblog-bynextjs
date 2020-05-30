import React from 'react'
import LinkPreview from './link-preview'
import PostType from '../types/post'
import { Link } from '@material-ui/core';

type Props = {
  post : PostType
  linknumber? : number
}

const PreviousArticle: React.FC<Props> = ({ post, linknumber = 0 }) => {
  return (
    <section>
      <h4>
        PreviousArticle
      </h4>
      <Link>
        {linknumber === -1 ? (
          <div>リンク先なし</div>
        ) : (
          <LinkPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
            />
        )}
      </Link>
    </section>
  )
}

export default PreviousArticle
