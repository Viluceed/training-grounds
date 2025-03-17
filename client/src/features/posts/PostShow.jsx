import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";
import { formatDate } from "../../utils/helpers/applicationHelper";
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

  const handleDeletePost = async () => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "DELETE"
      })

      if (response.ok) {
        navigate("/posts");
      } else {
        throw response;
      }
    } catch (e) {
      console.error("ERROR: ", e)
    }
  }

  if (!post) return <h2 className="text-white">Something went wrong.</h2>

  return (
    <Container className="d-flex justify-content-start">
      <Card
        bg='dark'
        border="info"
        className="d-flex justify-content-start p-0 w-100 m-3 text-start"
        key='dark'
        text='white'
      >
        <Card.Header className="h3 fw-bold d-flex justify-content-between align-items-center">
          {post.title}
          <Button as={Link} to={`/posts/${post.id}/edit`} variant="info"> Edit</Button>
        </Card.Header>
        <Card.Body>
          <p>
            {post.content}
          </p>
          <p className="text-secondary fst-italic m-0" style={{ fontSize: " 12px" }} >
            {formatDate(post.created_at)}
            Views: {post.views}
          </p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between text-xs">
          <Button size="sm" variant="secondary" onClick={() => navigate(-1)}>Back</Button>
          <Button size="sm" variant="danger" onClick={handleDeletePost}>Delete</Button>
        </Card.Footer>
      </Card>
    </Container>
  )

}

export default PostShow;