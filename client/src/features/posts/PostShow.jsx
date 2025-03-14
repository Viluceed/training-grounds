import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function PostShow() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`)
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          setError(true)
          throw response;
        }
      } catch (e) {
        console.error("ERROR: " + e);
      }
    }
    fetchCurrentPost();
  }, [id]);

  if (!post) return <h2 className="text-white">Something went wrong.</h2>

  return (
    <Container className="d-flex justify-content-start">
      <Card className="d-flex justify-content-start p-0 w-100 m-3 text-start">
        <Card.Header className="h3 fw-bold d-flex justify-content-between">
          {post.title}
          <Button as={Link} to={`/posts/${post.id}/edit`} variant="primary"> Edit</Button>
        </Card.Header>
        <Card.Body>
          <p>
            {post.content}
          </p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between text-xs">
          <Button size="sm" variant="secondary" onClick={() => navigate(-1)}>Back</Button>
          Views: {post.views}
        </Card.Footer>
      </Card>
    </Container>
  )

}

export default PostShow;