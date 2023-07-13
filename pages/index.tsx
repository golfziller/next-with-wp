import { GetServerSideProps, NextPage } from 'next'
import client from '@/lib/apollo'
import {gql} from '@apollo/client'

type Post = {
  title: string
  content: string
}
type PostQuery = {
  posts: {
    nodes: Post[]
  }
}

const aa: NextPage<{
  repo: Post[]
}> =( {repo }) => {
  return (
    <div>
   <p className='text-blue-500'>Index</p>
    {
      repo.map((item,index) =><div key={index}>
        <p>{item.title}</p>
        <div dangerouslySetInnerHTML={{ __html: item.content }} />
      </div>)
    }
   </div>
  )
}
export const getServerSideProps: GetServerSideProps<{ repo: Post[] }> = async () => {
 
  const query = gql`{
    posts {
      nodes {
        title,
        content
      }
    }
  }`;
  const { data  } = await client.query<PostQuery>({
    query: query
  })
 
  return {
    props: { repo: data.posts.nodes }
  }
}
 
export default aa