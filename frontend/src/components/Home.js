import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return <div className="container">Home Component</div>;
};

export default Home;
