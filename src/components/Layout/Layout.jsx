import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLi, StyledLink, StyledList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledList>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/movies">Movies</StyledLink>
          </StyledLi>
        </StyledList>
      </StyledHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;