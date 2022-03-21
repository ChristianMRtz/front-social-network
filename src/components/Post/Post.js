import { Comments } from './Comments';
import { PostStructure } from './PostStructure';
import {Container, Header} from './styles';

export const Post = () => {
  return (
    <Container>
      <Header><p>Post</p></Header>
      <PostStructure />
      <Comments />
      <Comments />
      <Comments />
    </Container>
  )
}
