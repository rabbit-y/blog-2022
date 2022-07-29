import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Row, Col, Spin } from "antd";

import { RoutersList } from "@/router/router";

import AboutMe from "@pages/aboutMe/index";
import Footer from "@pages/footer/index";
import Listen from "@pages/listen/index";
import Welcome from "@pages/welcome/index";
import Nav from "@pages/nav/index";
import "./index.less";

const App = () => {
  return (
    <div className="layout">
      <div className="layout-row">
        <Nav />
        <Row wrap={false}>
          <Col flex="280px" className="h-media">
            <div className="sider">
              <AboutMe />
              <Listen />
              <Welcome />
            </div>
          </Col>
          <Col flex="auto">
            <div className="content">
              <Routes>
                {RoutersList.map((item, index) => (
                  <Route
                    path={item.path}
                    key={index}
                    element={
                      <Suspense fallback={<Spin />}>
                        <item.element />
                      </Suspense>
                    }
                  >
                    {item.child?.map((childItem, childIndex) => (
                      <Route
                        path={childItem.path}
                        key={childIndex}
                        element={
                          <Suspense fallback={<Spin />}>
                            <childItem.element />
                          </Suspense>
                        }
                      />
                    ))}
                  </Route>
                ))}
                <Route path="/" element={<Navigate to="/mark" />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};
export default App;
