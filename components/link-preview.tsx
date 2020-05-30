import React from 'react'
import DateFormater from './date-formater'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  slug: string
}

const LinkPreview: React.FC<Props> = ({
  title,
  date,
  slug,
}) => {
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div>
        <DateFormater dateString={date} />
      </div>
    </div>
  )
}

export default LinkPreview
