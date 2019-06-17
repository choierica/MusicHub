import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/Main';

class App extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Header className="header-color"
                            title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MusicHub</Link>}
                            scroll
                            style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                        <Navigation
                            style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                            <Link to="/aboutme"> About Me</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="MusicHub">
                        <Navigation>
                            <Link to="/aboutme"> About Me</Link>
                        </Navigation>
                        <Navigation>
                            <Link to="/question"> Questions </Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                        <Main/>
                    </Content>
                </Layout>
            </div>

        );
    }
}

export default App;
