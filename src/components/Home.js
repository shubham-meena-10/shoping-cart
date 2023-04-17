import { useDispatch } from "react-redux";
import { addToCart } from "../services/slices/cartSlice";
import { useGetAllProductsQuery } from "../services/Apis/productsApi";
import NavBar from "./NavBar";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const dispatch = useDispatch();
  const { data: proInfo, isLoading, isSuccess } = useGetAllProductsQuery();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <NavBar />
      <div className="home-container">
        {isSuccess ? (
          <>

            <h2>New Arrivals</h2>
            <div className="products">
              {proInfo &&
                proInfo?.products?.map((product) => (
                  <div key={product.id} className="product">
                    <h3 className="text-center">{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title} height={'200px'} width={'200px'} />
                    <div className="details d-flex justify-content-center pt-2">
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </>
        ) : isLoading ? (
          <Loader />
        ) : (
          <ErrorPage />
        )}
      </div>
    </>
  );
};

export default Home;
