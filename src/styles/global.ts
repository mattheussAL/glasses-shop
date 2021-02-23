import  { createGlobalStyle } from 'styled-components';

// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import TelegramIcon from '@material-ui/icons/Telegram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #F4F5F8;
    --main: #BC1600;
    --white: #FFFFFF;
    --black: #232323;
    --str-black: #161616;
  }

  * {
   margin: 0;
   padding: 0;

   box-sizing: border-box;
   font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  @media (max-width: 1080px) { html { font-size: 93.75% } }
  @media (max-width: 720px) { html { font-size: 87.5% } }

  body, input {
    font-size: 1rem; // 1rem === 16px
    font-weight: 400;
  }

  body { background: var(--bg) }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
