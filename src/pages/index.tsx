import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FloatButton } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { RoutersList } from '@/router/router';
import Nav from '@pages/nav/index';
import Loading from '@components/Loading';
const Home = lazy(() => import('@pages/home/index'));

const App = () => {
  return (
    <div className="layout">
      <Nav />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <div className="h-body">
                <div className="cont">
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
                        {/* {item.child?.map((childItem, childIndex) => (
                          <Route
                            path={childItem.path}
                            key={childIndex}
                            element={
                              <Suspense fallback={<Spin />}>
                                <childItem.element />
                              </Suspense>
                            }
                          />
                        ))} */}
                      </Route>
                    ))}
                  </Routes>
                  <FloatButton.Group shape="circle" style={{ right: 20 }}>
                    <FloatButton
                      icon={<SyncOutlined />}
                      onClick={() => {
                        window.location.reload();
                      }}
                    />
                    <FloatButton.BackTop type="primary" />
                  </FloatButton.Group>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
