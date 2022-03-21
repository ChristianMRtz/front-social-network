import { PostBox } from './PostBox';
import {Container, Header} from './styles';

export const Feed = () => {
  return (
    <Container>
      {/* Header */}
      <Header><h2>Home</h2></Header>
      {/* PostBox */}
      <PostBox />
      {/* Posts */}
    </Container>
  )
}
