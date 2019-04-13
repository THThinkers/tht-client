import React from 'react';
import styled from 'styled-components';
import ToHome from './ToHome';

const Layout = styled.div`
  margin: 0px auto;
  width: 1366px;
  display: relative;
`;

const EtcLayout: React.SFC = ({ children }) => {
  return (
    <Layout>
      <ToHome />
      {children}
    </Layout>
  );
};

export default EtcLayout;
