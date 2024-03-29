import React, {Component} from 'react';
import './App.css';
import {Content, Drawer, Header, Layout, Navigation} from 'react-mdl';
import Main from '../components/main';
import {Link} from 'react-router-dom';
import FooterOwn from "../components/Footer/FooterOwn";

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color"
                            title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>}
                            scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                        <Main/>
                    </Content>
                    <FooterOwn />
                </Layout>
            </div>

        );
    }
}

export default App;
