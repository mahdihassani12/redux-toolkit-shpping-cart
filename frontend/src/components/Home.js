import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

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
                <img src={require(`../assets/images/${product.image}`)} />
                <h3>{product.name}</h3>
                <div className="details">
                  <span>${product.price}</span>
                  <span>{product.desc}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
