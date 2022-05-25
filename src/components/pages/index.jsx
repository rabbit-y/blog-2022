import { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Row, Col, Menu } from "antd";

import { RoutersList, AdminRoutersList } from "@/router/router";

import AboutMe from "@pages/aboutMe/index";
import Footer from "@pages/footer/index";
import Classify from "@pages/classify/index";
import Nav from "@pages/nav/index";
import Loading from "@components/Loading/index";
import Login from "@pages/login/index";
import Register from "@pages/register/index";

import "./index.less";

const Admin = lazy(() => import("@pages/admin/index"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <div className="layout">
                <div className="layout-row">
                  <Nav />
                  <Row wrap={false}>
                    <Col flex="auto">
                      <div className="content">
                        <Routes>
                          {RoutersList.map((item, index) => (
                            <Route
                              path={item.path}
                              key={index}
                              element={
                                <Suspense fallback={<Loading />}>
                                  <item.element />
                                </Suspense>
                              }
                            >
                              {item.child?.map((childItem, childIndex) => (
                                <Route
                                  path={childItem.path}
                                  key={childIndex}
                                  element={
                                    <Suspense fallback={<Loading />}>
                                      <childItem.element />
                                    </Suspense>
                                  }
                                />
                              ))}
                            </Route>
                          ))}
                          <Route path="/" element={<Navigate to="/index" />} />
                        </Routes>
                      </div>
                    </Col>
                    <Col flex="320px">
                      <div className="sider">
                        <div>
                          <AboutMe />
                        </div>
                        <div>
                          <Classify />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="foot">
                    <Footer />
                  </div>
                </div>
              </div>
            </Suspense>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <Suspense fallback={<Loading />}>
              <Admin />
            </Suspense>
          }
        >
          {AdminRoutersList.map((item, index) => {
            return (
              <Route
                path={item.path}
                key={index}
                element={
                  <Suspense fallback={<Loading />}>
                    <item.element />
                  </Suspense>
                }
              >
                {item.child?.map((childItem, childIndex) => (
                  <Route
                    path={childItem.path}
                    key={childIndex}
                    element={
                      <Suspense fallback={<Loading />}>
                        <childItem.element />
                      </Suspense>
                    }
                  />
                ))}
              </Route>
            );
          })}
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
export default App;
