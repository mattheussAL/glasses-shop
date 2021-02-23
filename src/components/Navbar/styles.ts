import styled from 'styled-components';

export const Header = styled.header`
 position: fixed;

 width: 100vw;
 height: 120px;

 color: var(--white);
 background: linear-gradient(
  to right, var(--main) 19%, var(--str-black) 10%
 );

 box-shadow: 0 0 8px var(--str-black);
 
 display: flex;
 align-items: center;
 justify-content: space-around;

 .logo {
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;

  cursor: pointer;

  span { color: var(--main) }
 }

 .menu-mobile {
  display: grid;
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content: center;

  svg {
   font-size: 3rem;
  }

  @media (max-width: 900px) { 
   position: absolute;

   width: 100vw;
   height: 100vh;

   top: 0;
   left: 0;
   right: 0;
   bottom: 0;

   background: var(--str-black);

   display: flex;
   align-items: center;
   justify-content: center;
  }
 }

 ul {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) { display: none }

  li {
   list-style: none;
   text-decoration: none;
   margin-right: 2rem;
   cursor: pointer;

   transition: all .2s ease-in;

   &:hover {
    transform: scale(1.1);
   }
  }

  .icon {
   padding: .4rem;
   border: none;
   border-radius: 4px;

   background: var(--main);
   cursor: pointer;
  }
 }
`;
