import { useSelector } from 'react-redux';
import Footer from '@pages/footer/index';
import AboutMe from '@pages/aboutMe/index';

const Home = () => {
  const info = useSelector(({ info }) => info);
  return (
    <div className="home">
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
