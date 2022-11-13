import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Context/AuthContextProvider";
import { Avatar, AvatarBadge, Menu, MenuButton, Button } from "@chakra-ui/react";


// import { useEffect, useState } from "react";

// import { isAuth } from "../Redux/isAuth/action";
// import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  // const navigate = useNavigate();
  const {state} = useContext(Authcontext)

  
 // const [userName, setUserName] = useState("SignIn");

  return (
    <div id="nav">
      <div id="nav-up">
        <div id="nav-up-image">
          <a href="http://localhost:3000">
            {/* <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true" /> */}
            <img src="https://i.ibb.co/zFCWhqT/AQUALITY-PRODUCT-2022.png" />
          </a>
        </div>
        <div id="nav-up-right">
          <div id="nav-settings">
            <div id="save-app">
              <div style={{ display: "flex" }}>
                <img src="https://pixsector.com/cache/753f2096/avb4326d4ac628bc1c307.png" />
                <p>Save $3 with App</p>
              </div>
              <div className="dropdown" id="save-App">
                <h4 style={{ textAlign: "left", margin: "25px 0 -10px 20px" }}>
                  Download App!
                </h4>
                <p style={{ textAlign: "left", marginLeft: "20px" }}>
                  Save $3 with App & New User Only
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      marginLeft: "20px"
                    }}
                    src="https://images.all-free-download.com/images/graphiclarge/qr_code_198897.jpg"
                    alt=""
                  />
                  <div id="download">
                    <img
                      style={{
                        width: "125px",
                        height: "45px",
                        marginLeft: "5px"
                      }}
                      src="https://www.pikpng.com/pngl/m/506-5064409_apple-ios-download-on-apple-store-clipart.png"
                      alt=""
                    />
                    <img
                      style={{
                        width: "120px",
                        height: "40px",
                        marginLeft: "5px"
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Support Center</p>
            </div>
            <div>
              <p>Ship to US/USD</p>
            </div>
            <div id="lang">
              <p>Language</p>
              <div className="dropdown languages">
                <p>Global(English)</p>
                <p>France</p>
                <p>Espana</p>
                <p>Portugal</p>
                <p>Italia</p>
                <p>Duetschland</p>
                <p>Brasil</p>
                <p>Tukiye</p>
                <p>Polska</p>
                <p>Japan</p>
              </div>
            </div>
            <div id="country">
              <p>Country Website</p>
              <div className="dropdown languages">
                <p>Global(English)</p>
                <p>France</p>
                <p>Espana</p>
                <p>Portugal</p>
                <p>Italia</p>
                <p>Duetschland</p>
                <p>Brasil</p>
                <p>Tukiye</p>
                <p>Polska</p>
                <p>Japan</p>
              </div>
            </div>
          </div>
          <div id="nav-functions">
            <div id="input-box">
              <input type="text" placeholder="Search Gadgets" />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/search-1768073-1502246.png"
                alt=""
              />
            </div>
            <div id="signIn">
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "19px", height: "19px" }}
                  src="http://cdn.onlinewebfonts.com/svg/img_212095.png"
                  alt=""
                />
                <div> { state && state.token ?
               
       
               <Avatar name='Kent Dodds' src='https://lh3.googleusercontent.com/iow_V9M-7lmw82mgk3rQ_BSu9fYltNeGRp1XKHrDoGmlH9LvG8C2iuYIhZDajD8jGKsoA5-fHNP9DI_Y9lOMkwR6r6VEvr9tIAeTwtrLCv2vSTKuHjUXad0gWkVjs9e38B1N_gmcduxo1I3mhji5kduwRPCPuc30lhQYtYPI8qnQoKwggcL9ZtUd_1MAuNWw1kWflgHkT84lua7U4AsqstLmJEOBjziQSxt96U4xodwh1i8lLDxG6-MfWLatgJS8yFNMC6-V-jp7AhmSDT3A7dJj_c_86s5ElwK5SOVHRMzzC2FWZe5ZVRCPtUllSuaHWXg5r_XNKo1-CiGZFydigx7UJMqoZAG5mWJI67C_ycQ_mJO2hwF69nxKbhekipfrnzGzYiDQD9O41tEOP_D1tHRN8fYVCp7qBvs4UX4zLtWVUXvVst3v6ItTUB9dPSdq22duTKETUy05YtlMb9NTmLBitmloI6i8G68EIGwidndtuRgcYo4t0Eh0-AXXD6TKT2xrwd3iHVDgi9FyOvwL3qY7qOhCOCZTliZUjAjh54YvlWxpWtuKH9L6U65kgqrjVdenkZcw9Wj1HbQXev2vhcEom5lnyLNjpSQdSoTHX56VstyrzLyPNFd4p7nhEtcuPehMaf3JT0dnRDOvefrLDP3icvpmqnWV0BaaR-1-2nnDCS8t-V3g257AUy01ZujE9QECXzj3dPhxo61FET01ix9U8Eow7zmuO2zllyyK0sZ7VKK-wvNR4sY6E4o7XyR9gEXYEufSWo6FhULDgXTwQEmQ9Ve-7rfFVADOuB2whjLBmkfNRWFmLp2bTiSGAJV37_5CmM4evebbSF8Mc6o9EqJgGq8iRBwqN25xkIN-OnkVYx5LffC9ES3mleyXLaBfR12_FAhgaCG9H9N3AcJ7_x9vocPAQjAjLKSFy-60=w670-h893-no?authuser=0'>
               <AvatarBadge boxSize='1.25em' bg='green.500' />
             </Avatar>
                :
                <Link to='/login'>
                      <Menu  id={6}>
                <MenuButton 
                  as={Button}
                  colorScheme='teal' 
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  marginLeft="7px"
                  marginTop="-5px"
                  _hover={{ bg: 'gray.500' }}
                  _expanded={{ bg: 'blue.400' }}
                  _focus={{ boxShadow: 'outline' }}>
                  Sign In
                </MenuButton>
                </Menu>
                </Link>
                   }</div>
              </div>
              <div className="dropdown" id="sign-box">
                <p>Welcome to Gearbest</p>
                <Link to={"/login"}><button id="yellow-btn">Sign In</button></Link>
                <div id="google">
                  <div style={{ color: "grey" }}>or connect via</div>
                  <div id="signInDiv" style={{ marginLeft: "5px" }}></div>
                </div>
                <p
                  style={{
                    paddingTop: "22px",
                    borderTop: "1px solid rgb(196, 196, 196)"
                  }}
                >
                  Register on Gearbest: Earn 10 points
                </p>
                <Link to={"/signAuth"}><button id="blue-btn">Register</button></Link>
              </div>
            </div>
            <div id="favorites">
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "19px", height: "19px" }}
                  src="https://cdn-icons-png.flaticon.com/512/73/73814.png"
                  alt=""
                />
                <div>Favorites</div>
              </div>
              <div className="dropdown"></div>
            </div>
            <div id="cart">
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "19px", height: "19px" }}
                  src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                  alt=""
                />
                <div>Cart</div>
              </div>
              {/* <div className="dropdown">
                                
                            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div id="nav-down">
        <div id="category">
          <p style={{ marginTop: "5px", fontWeight: "bold", color:"white"}}>Category</p>
          <div
            className="dropdown languages"
            style={{
              position: "absolute",
              opacity: "0.8",
              backgroundColor: "white",
              color: "black",
              margin: "5px 0 0 -85px",
              width: "210px",
              height: "500px"
            }}
          >
            <p style={{ marginLeft: "5px" }}>Consumer Electronics</p>
            <p style={{ marginLeft: "5px" }}>Industrial & Scientific</p>
            <p style={{ marginLeft: "5px" }}>Cell Phones & Accessories</p>
            <p style={{ marginLeft: "5px" }}>Appliances</p>
            <p style={{ marginLeft: "5px" }}>Outdoors, Fitness & Sports</p>
            <p style={{ marginLeft: "5px" }}>Computer, Tablets & Office</p>
            <p style={{ marginLeft: "5px" }}>Health & Personal Care</p>
            <p style={{ marginLeft: "5px" }}>Home Improvement & Tools</p>
            <p style={{ marginLeft: "5px" }}>Drones, Toys & Hobbies</p>
            <p style={{ marginLeft: "5px" }}>Home & Garden</p>
            <p style={{ marginLeft: "5px" }}>Motor & Car Electronics</p>
            <p style={{ marginLeft: "5px" }}>Watches & Jewelry</p>
            <p style={{ marginLeft: "5px" }}>Gearbest Promotion</p>
          </div>
        </div>
        <div style={{ fontWeight: "bold" }}>COUPON</div>
        <div style={{ fontWeight: "bold" }}>SUPER DEALS</div>
        <div style={{ fontWeight: "bold" }}>APP ONLY</div>
        <div style={{ fontWeight: "bold" }}>NEW ARRIVALS</div>
      </div>
    </div>
  );
};
