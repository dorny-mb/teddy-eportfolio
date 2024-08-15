import { PageWrap } from "../../layout";
import { Header, MyExperience } from "./components";

const Home = () => {
  return (
    <>
      <Header />
      <PageWrap>
        <MyExperience />
      </PageWrap>
    </>
  );
};
export default Home;
