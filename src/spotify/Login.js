import React from 'react';
import { Container} from 'react-bootstrap';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=e7d28c76d59b462a933bfaa9ea29b95b&response_type=code&redirect_uri=http://localhost-3000&scope=stream%20user-read-email%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
      </Container>
    )
  }