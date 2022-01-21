import { Suspense, lazy, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Row, Col, Menu } from "antd";

import { STATION, ROTER } from "@utils/variable";
import { RoutersList, AdminRoutersList } from "@/router/router";
import { api } from "@api/index";

import AboutMe from "@pages/aboutMe/index";
import Footer from "@pages/footer/index";
import Classify from "@pages/classify/index";
import Loading from "@components/Loading/index";
import { useSelector } from 'react-redux';
import "./index.less";

const Admin = lazy(() => import("@pages/admin/index"));

const { SubMenu } = Menu;
const App = () => {
  const typeList = useSelector(state => state.types);
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <div className="layout">
                <div className="layout-row">
                  <div className="title">
                    <div className="title-left">
                      <div className="title-name">{STATION.name}</div>
                      <div className="title-dec">{STATION.dec}</div>
                    </div>
                  </div>
                  <div className="nav">
                    <Menu mode="horizontal" defaultSelectedKeys="index">
                      {ROTER?.map((item) => {
                        return item.child?.length > 0 ? (
                          <SubMenu key="SubMenu" title="小前端">
                            {typeList?.map((cItem) => (
                              <Menu.Item key={cItem.id}>
                                <Link
                                  to={item.path + "/" + cItem.id}
                                  state={{ typeName: cItem.name }}
                                >
                                  {cItem.name}
                                </Link>
                              </Menu.Item>
                            ))}
                          </SubMenu>
                        ) : (
                          <Menu.Item key={item.key}>
                            <Link to={item.path}>{item.name}</Link>
                          </Menu.Item>
                        );
                      })}
                    </Menu>
                  </div>
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
                          <Classify list={typeList} />
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
      </Routes>
    </Router>
  );
};
export default App;
