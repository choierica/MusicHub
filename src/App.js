import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList, FooterDropDownSection} from 'react-mdl';
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
                    <Content>
                        <div className="page-content"/>
                        <Main/>
                        <Footer size="mega">
                            <FooterSection type="middle">
                                <FooterDropDownSection title="Features">
                                    <FooterLinkList>
                                        <a href="/aboutme">About</a>
                                        <a href="/">Terms</a>
                                        <a href="/">Partners</a>
                                        <a href="/">Updates</a>
                                    </FooterLinkList>
                                </FooterDropDownSection>
                                <FooterDropDownSection title="Details">
                                    <FooterLinkList>
                                        <a href="/">Specs</a>
                                        <a href="/">Tools</a>
                                        <a href="/">Resources</a>
                                    </FooterLinkList>
                                </FooterDropDownSection>
                                <FooterDropDownSection title="Technology">
                                    <FooterLinkList>
                                        <a href="/">How it works</a>
                                        <a href="/">Patterns</a>
                                        <a href="/">Usage</a>
                                        <a href="/">Products</a>
                                        <a href="/">Contracts</a>
                                    </FooterLinkList>
                                </FooterDropDownSection>
                                <FooterDropDownSection title="FAQ">
                                    <FooterLinkList>
                                        <a href="/">Questions</a>
                                        <a href="/">Answers</a>
                                        <a href="/">Contact Us</a>
                                    </FooterLinkList>
                                </FooterDropDownSection>
                            </FooterSection>
                            <FooterSection type="bottom" logo="Title">
                                <FooterLinkList>
                                    <a href="/">Help</a>
                                    <a href="/">Privacy & Terms</a>
                                </FooterLinkList>
                            </FooterSection>
                        </Footer>
                    </Content>
                </Layout>
            </div>

        );
    }
}

export default App;
