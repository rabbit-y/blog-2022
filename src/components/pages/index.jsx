import {
  HashRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { Row, Col, Menu } from "antd";
import Index from "@pages/index/index";
import AboutMe from "@pages/aboutMe/index";
import Classify from "@pages/classify/index";
import "./index.less";
export default function App() {
  return (
    <div className="layout">
      <div className="layout-row">
        <div className="title">
          <div className="title-left">
            <div className="title-name">花呗の</div>
            <div className="title-dec">
              he tough road often leads to the top. 艰难的道路经常通往高处
            </div>
          </div>
        </div>
        <div className="nav">
          <Menu mode="horizontal">
            <Menu.Item key="index">首页</Menu.Item>
            <Menu.Item key="web">小前端</Menu.Item>
            <Menu.Item key="say">碎碎念</Menu.Item>
          </Menu>
        </div>
        <Row wrap={false}>
          <Col flex="auto">
            <div className="content">
              <Router>
                <Routes>
                  {/* <Route path="/login" component={Login}></Route> */}
                  {/* <Route path="/course" component={Course}></Route>
                      <Route path="/schedule/:schoolId" component={Schedule}></Route> */}
                  <Route path="/" element={<Index />}></Route>
                  {/* <Redirect from="/" to="/course" /> */}
                </Routes>
              </Router>
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
      </div>
    </div>
  );
}
