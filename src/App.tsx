import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import PageHeader from "./header/PageHeader";
import PropertyTypes from "./sidebar/PropertyTypes";
import SearchSection from "./search/SearchSection";
import SelectedProperties from "./selectedProperties/SelectedProperties";
import SearchResults from "./SearchResults/SearchResults";
function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <PageHeader />
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <PropertyTypes />
        </Col>
        <Col span={20}>
          <SearchSection />
          <SelectedProperties />
          <SearchResults />
        </Col>
      </Row>
    </div>
  );
}

export default App;
