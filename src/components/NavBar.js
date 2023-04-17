import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown, FaShoppingBag } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { removeFromCart, clearCart } from "../services/slices/cartSlice";
import logo from '../Assests/logo.png'

function NavBar() {
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [showDropdown, setShowDropdown] = useState(false);
    const [showButton, setShowButton] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    useEffect(() => {
        if (cart?.cartItems?.length > 0) {
            setShowButton(true);
        }
    }, [cart])

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className='nav-image'>
            <Navbar fixed="top" variant='light' className='nav-color'>
                <Container className=''>
                    <Navbar.Brand as={Link} to="/home"><img className='logo-img' src={logo} alt='' /></Navbar.Brand>
                    <Nav className="d-flex align-items-center">
                        <Nav.Link as={Link} to="/home" className={"underline mx-3" + (url === "/home" || url === "/" ? " active" : "")}>Home</Nav.Link>
                        <NavDropdown
                            onClick={() => { navigate('/cart') }}
                            title={<span className='d-flex'><FaCartArrowDown size='40px' className='underline-2 mb-0' />
                                <span className='d-flex justify-content-center align-items-center cart-count'>
                                    {cartTotalQuantity}</span>
                            </span>}

                            id='nav-dropdown'
                            show={showDropdown}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div>
                                <NavDropdown.Item id="style-1">
                                    <span className='d-flex justify-content-center align-items-center'>
                                        <div className="">
                                            {showButton && <button className='remove-btn' onClick={() => handleClearCart()}>Remove All</button>}
                                        </div>
                                    </span>
                                </NavDropdown.Item>
                                {cart?.cartItems?.length > 0 ?
                                    cart?.cartItems?.map((items) => {
                                        return (
                                            <>
                                                <NavDropdown.Item key={items.id} id="style-1">
                                                    <span className='d-flex justify-content-between align-items-center'>
                                                        <div onClick={() => navigate('/cart')}>
                                                            <img src={items?.thumbnail} height={'20px'} width={'30px'} alt="" />
                                                            <h6>{items?.title}</h6>
                                                        </div>
                                                        <button onClick={() => handleRemoveFromCart(items)} className='remove-btn'>Remove</button>
                                                    </span>
                                                </NavDropdown.Item>
                                            </>
                                        )
                                    }) : <div className="d-block justify-content-center">
                                        <div className="d-block">
                                            <div className="d-flex justify-content-center">
                                                <FaShoppingBag size={130} color="#4B2673" style={{ opacity: "0.5" }} />
                                            </div>
                                            <div className="d-flex justify-content-center pt-3">
                                                <h2 style={{ color: '#4B2673', fontWeight: "700" }}>Cart Is Empty</h2>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
