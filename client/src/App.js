import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
import Content from "./components/Content"
import {Link} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Header className="header-color"
                            title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MusicHub</Link>}
                            scroll
                            style={{background: 'url(https://res.cloudinary.com/duehwryfv/image/upload/v1560760548/teddy-kelley-106391-unsplash_rtabcg.jpg) center / cover'}}>
                        <Navigation>
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
                    <Content/>
                </Layout>
            </div>

        );
    }
}

export default App;

