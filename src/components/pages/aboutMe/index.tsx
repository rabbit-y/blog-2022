import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import { ABOUTLINK } from '@utils/variable';

const About = () => {
  const user = useSelector(({ types }) => types);
  return (
    <div className="about h-card-shadow">
      <div className="about-header">
        <img src={user.avatar} alt="头像" />
      </div>
      <div className="about-user">
        <span>{user.nickname}</span>
        <div>{user.other && JSON.parse(user.other).dec}</div>
      </div>
      <div className="about-link">
        {ABOUTLINK.map((item) =>
          item.url ? (
            <div
              key={item.name}
              className="about-link-btn h-link-cur"
              onClick={() => {
                window.open(item.url);
              }}
            >
              {item.icon}
            </div>
          ) : (
            <Popover
              key={item.name}
              content={
                <div className="about-link-cont">
                  <img src={item.image} alt={item.name} />
                </div>
              }
            >
              <div className="about-link-btn">{item.icon}</div>
            </Popover>
          ),
        )}
      </div>
    </div>
  );
};
export default About;
