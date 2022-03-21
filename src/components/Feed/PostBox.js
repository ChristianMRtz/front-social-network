import { Postbox, Div, Form, Avatar } from './styles'

export const PostBox = () => {
  return (
    <Postbox>
      <Form>
        <Div>
          <Avatar src="https://randomuser.me/api/portraits/men/67.jpg" alt="user" />
          <div className="columns">
            <input type="text" placeholder="What's happening?" />
            <input type="text" placeholder="User" />
          </div>
        </Div>
      </Form>
    </Postbox>
  )
}

