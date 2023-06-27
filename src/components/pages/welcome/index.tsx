import { useEffect, useState } from 'react';
import axios from 'axios';
import IconFont from '@components/Icon/index';

export default function Welcome() {
  const [day, setDay] = useState([]);
  useEffect(() => {
    getDay();
  }, []);
  const getDay = async () => {
    const {
      data: { result },
    } = await axios.get(`https://api.oick.cn/lishi/api.php`);
    const dayList = [result[0]];
    if (result.length > 1) {
      dayList.push(result.at(-1));
    }
    setDay(dayList);
  };
  return (
    day.length > 0 && (
      <div className="welcome h-card-shadow">
        <div className="welcome-day">
          {day?.map((item, index) => (
            <div key={index}>
              <div>
                <IconFont type="h-claw" /> <span>{item.date}</span>
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
