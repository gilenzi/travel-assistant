import Header from '$layout/Header/Header';
import {ReactNode} from 'react';
import {LayoutContainer} from './styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}
