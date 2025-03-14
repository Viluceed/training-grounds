import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';

function EditPostForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCurrentPost() {
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
  }, [id])

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        const { id } = await response.json();
        navigate(`/posts/${id}`);
      } else {
        console.error("Error encountered.");
      }
    } catch (e) {
      console.error("Error encountered.", e);
    }
  };

  if (!post) return <h1 className="text-white">Something went wrong</h1>

  return (
    <Container>
      <h1 className="text-white">Edit Post</h1>
      <Card className="text-start">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="titleInput">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="string"
              value={post.title}
              placeholder="Enter Title"
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
            />
            <Form.Text className="text-muted">
              Be creative!
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="contentInput">
            <Form.Label>Body</Form.Label>
            <Form.Control
              type="title"
              value={post.content}
              placeholder="Say something"
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Post
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default EditPostForm;