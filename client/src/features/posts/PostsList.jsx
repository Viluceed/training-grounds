import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from "../../constants"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [, setError] = useState(null);

  // Fetch posts from API
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(`${API_URL}/posts`)

        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occured");
        console.error("ERROR: " + e)
      }
    }
    loadPosts();
  }, []);

  return (
    <Container>
      <h1 className='text-white'> POSTS </h1>
      <hr className='border-white border-2' />
      <Container className='d-flex justify-content-end'>
        <Button as={Link} to="/posts/new" variant='outline-info'>
          Create post
          <i className='ms-1 bi bi-plus-lg'></i>
        </Button>
      </Container>
      <Container className="d-flex justify-content-center flex-wrap">
        {posts.map((post) => (
          <Card
            bg='dark'
            border="info"
            className='p-0 m-3 text-start'
            key={post.id}
            text='white'
          >
            <Card.Header className='fw-bold'>{post.title}</Card.Header>
            <Card.Body>
              <Card.Title className='fs-6'>Views: {post.views}</Card.Title>
              <Card.Text>
                {post.content}
              </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end'>
              <Button as={Link} to={`/posts/${post.id}`} size='sm' variant='outline-info'>View</Button>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </Container >
  )
}

export default PostsList;