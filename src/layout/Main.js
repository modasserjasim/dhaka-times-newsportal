import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav.js';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div style={{ background: "#ddd", }} className="py-5">
                <Container>
                    <Row>
                        <Col className='d-none d-lg-block' lg="2">
                            <LeftSideNav></LeftSideNav>
                        </Col>
                        <Col lg="7" className='bg-white shadow rounded'>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg="3">
                            <RightSideNav></RightSideNav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;