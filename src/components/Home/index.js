import Empty from "./Empty";
import Search from "./Search";
import WelcomeMessage from "./WelcomeMessage";
import ListOfResults from "./ListOfResults";
import Layout from "../Common/Layout";
const Home = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col space-y-10">
        <WelcomeMessage />
        <Search />
        <ListOfResults />
      </div>
    </Layout>
  );
};
export default Home;
