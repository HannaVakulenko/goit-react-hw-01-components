import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    #3f4c6b 0%,
    #3f4c6b 90%
  );
  color: #ffffff;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
h1,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}
h2 {
  margin: 0 auto;
  padding: 24px 0;
  text-align: center;
  background-color: #3f4c6b;
  box-shadow: 8px 8px 8px -8px #000000, -4px 0px 8px 0px #000000;
  margin-left: -16px;
  margin-right: -16px;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
img {
	display: block;
	max-width: 100%;
	height: auto;
  object-fit: cover;
}
`;
