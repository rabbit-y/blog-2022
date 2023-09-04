import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from 'antd';
import { setRouterKey } from '@/store';
import { ROTER } from '@utils/variable';
import { scroll } from '@utils/index';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routerKey = useSelector(({ routerKey }) => routerKey);
  const dispatch = useDispatch();
  useEffect(() => {
    const key = '/' + location.pathname.split('/')[1];
    dispatch(setRouterKey(key));
  }, []);
  // 导航跳转
  const menuClick = ({ key }) => {
    navigate(key);
    dispatch(setRouterKey(key));
    // 滚动处理
    scroll(0, 0);
  };
  return (
    <div className="nav h-card-shadow">
      <Menu mode="horizontal" selectedKeys={[routerKey]} items={ROTER} onClick={menuClick} />
    </div>
  );
};
export default Nav;
