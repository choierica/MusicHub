import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Title" scroll>
                  <Navigation>
                      <Link to="/aboutme"> About Me</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/aboutme"> About Me</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main></Main>
              </Content>
          </Layout>
      </div>
  );
}

export default App;
