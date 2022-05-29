import React, { Fragment, useEffect, useState } from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from './Header';
import './Home.css';

function Home(props) {

    const [getData, setData] = useState([]);

    useEffect(() => {
        setData(props.location.state)
        // console.log("props", props);
    }
        , [])

    // console.log("getData", getData);

    return (
        <Fragment >
            <Header />
            <div className="bgRegistration">
                <Container>
                    <Row style={{ display: "flex", justifyContent: "center" }}>
                        <Col lg={10}>
                            {getData ? <>
                                <Table striped hover responsive>
                                    <thead className='tableHeading'>
                                        <tr>
                                            <th>#</th>
                                            <th colSpan={2}> User Details</th>

                                        </tr>
                                    </thead>
                                    <tbody className="table_body">

                                        <tr>
                                            <td>1</td>
                                            <td>User name</td>

                                            <td>{getData.username}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Email</td>
                                            <td>{getData.email}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td >Phone</td>
                                            <td>{getData.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td >Country</td>
                                            <td>{getData.country}</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td >Address</td>
                                            <td>{getData.address}</td>
                                        </tr>
                                    </tbody>
                                </Table></> : <><div className="table_body text-center p-3    ">
                                    Please fill the registration form  &#9203;</div></>}

                        </Col>
                    </Row>
                </Container>
            </div> </Fragment>
    )
}

export default Home 