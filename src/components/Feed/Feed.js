import { Posts } from './Posts';
import { PostBox } from './PostBox';
import {Container, Header} from './styles';

export const Feed = () => {
  return (
    <Container>
      <Header><p>Home</p></Header>
      <PostBox />
      <Posts />
      <Posts />
    </Container>
  )
}
