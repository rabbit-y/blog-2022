import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';
import { RoutersList } from '@/router/router';
const AboutMe = lazy(() => import('@pages/aboutMe/index'));
const Footer = lazy(() => import('@pages/footer/index'));
const Listen = lazy(() => import('@pages/listen/index'));
const Welcome = lazy(() => import('@pages/welcome/index'));
const Nav = lazy(() => import('@pages/nav/index'));

const App = () => {
  return (
    <div className="layout">
      <div className="layout-row">
        <Suspense fallback={<></>}>
          <Nav />
        </Suspense>
        <Row wrap={false}>
          <Col flex="280px" className="h-media">
            <div className="sider">
              <Suspense fallback={<></>}>
                <AboutMe />
              </Suspense>
              <Suspense fallback={<></>}>
                <Listen />
              </Suspense>
              <Suspense fallback={<></>}>
                <Welcome />
              </Suspense>
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
        <Suspense fallback={<></>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};
export default App;
