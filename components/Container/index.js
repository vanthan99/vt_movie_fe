import { Col, Row } from "antd";
import React from "react";

const Container = (props) => {
    
    return (
        <Row justify='center' {...props}>
            <Col span={18}>
                {props.children}
            </Col>
        </Row>
    );
}

export default Container;