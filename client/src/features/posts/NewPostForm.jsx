import { API_URL } from "../../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const postData = { title, content };
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData),
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

  return (
    <Container>
      <h1 className="text-white">Create New Post</h1>
      <Card className="text-start">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="titleInput">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="string"
              value={title}
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
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
              value={content}
              placeholder="Say something"
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Post
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default NewPostForm;