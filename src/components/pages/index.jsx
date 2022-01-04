import { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Row, Col, Menu } from "antd";
import Index from "@pages/index/index";
import AboutMe from "@pages/aboutMe/index";
import Classify from "@pages/classify/index";
import Footer from "@pages/footer/index";
import Mark from "@pages/footer/index";
import Bilibili from "@pages/bilibili/index";
import { STATION, ROTER } from "@utils/variable";
import "./index.less";
const { SubMenu } = Menu;
const App = () => {
  return (
    <div className="layout">
      <div className="layout-row">
        <div className="title">
          <div className="title-left">
            <div className="title-name">{STATION.name}</div>
            <div className="title-dec">{STATION.dec}</div>
          </div>
        </div>
        <Router>
          <div className="nav">
            <Menu mode="horizontal" defaultSelectedKeys="index">
              {ROTER?.map((item) => {
                return item.child?.length > 0 ? (
                  <SubMenu key="SubMenu" title="小前端">
                    {item.child.map((cItem) => (
                      <Menu.Item key={cItem.key}>
                        <Link to={cItem.path}>{cItem.name}</Link>
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
                  <Route path="/bilibili" element={<Bilibili />}></Route>
                  <Route path="/mark" element={<Mark />}></Route>
                  <Route path="/index" element={<Index />}></Route>
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
        </Router>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
