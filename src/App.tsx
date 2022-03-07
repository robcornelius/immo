import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import PageHeader from "./header/PageHeader";
import PropertyTypesComponent from "./sidebar/PropertyTypes";
import SearchSection from "./search/SearchSection";
import SearchResults from "./SearchResults/SearchResults";
import SeaarchResultProvider from "./contexts/propertyType";
import PropertyDetailsProvider from "./contexts/propertyDetails";
function App() {
  return (
    <SeaarchResultProvider>
      <PropertyDetailsProvider>
        <div className="App">
          <Row>
            <Col span={24}>
              <PageHeader />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <PropertyTypesComponent />
            </Col>
            <Col span={20}>
              <SearchSection />
              <SearchResults />
            </Col>
          </Row>
        </div>
      </PropertyDetailsProvider>
    </SeaarchResultProvider>
  );
}

export default App;
