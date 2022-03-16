import React from 'react';
import { MdocSiteContext } from '@mdoc/theme';
import Header from './Header';
import Menu from './Menu';
import Container from './Container';

const Doc = props => {
  const { config, menus, currentPageName } = React.useContext(MdocSiteContext);
  const hasMenu = !!menus.length;

  return (
    <>
      <Header />
      {hasMenu && <Menu config={config} menus={menus} />}
      <Container hasMenu={hasMenu} currentPageName={currentPageName}>
        {props.children}
      </Container>
    </>
  );
};

export default Doc;
