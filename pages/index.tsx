import { Card } from "../components/card/Card";
import { CardBody } from "../components/card/CardBody";
import { CardHeader } from "../components/card/CardHeader";
import { CoinList } from "../components/portFolio";
import { PortfolioCoinList } from "../components/portFolio/PortfolioCoinList";
import { Input } from "../components/Input";
import { Layout } from "../components/layout";
import { Table } from "../components/table/Table";
import { TableBody } from "../components/table/TableBody";
import { TableHead } from "../components/table/TableHead";

const Home = () => {
  return (
    <Layout>
      <CoinList />
    </Layout>
  );
};

export default Home;
