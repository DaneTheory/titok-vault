import React, { useState } from "react";
import { Input } from "antd";
import { Button, Tooltip } from "antd";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./styles.css"


function SearchField() {
    return (
        <Row justify="space-between" align="middle" className="full-width secret-search-row">
            <Col align={"center"} flex={1}>
                <Input placeholder="All Secrets" className="full-width"/>
            </Col>
            <Col align={"center"}>
                <Tooltip title="Add Secret" className="secret-search-field-button">
                    <Button
                        type="gost"
                        shape="circle"
                        icon={<PlusOutlined />}
                    />
                </Tooltip>
            </Col>
        </Row>
    );
}

export default SearchField;
