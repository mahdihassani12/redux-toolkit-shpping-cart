import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <img src={ require(`../assets/images/${product.image}`) } />
                <h3>{product.name}</h3>
                <div className="details">
                  <span>${product.price}</span>
                  <span>{product.desc}</span>
                </div>
                <button>Add to cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
