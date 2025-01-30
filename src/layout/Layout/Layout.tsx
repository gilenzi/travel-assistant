import {ReactNode} from 'react';
import {LayoutContainer} from './styles';
import Header from '../Header/Header';

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
