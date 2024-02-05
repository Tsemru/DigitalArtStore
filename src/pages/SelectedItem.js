import { useState, useCallback } from "react";
import Cart from "../components/Cart";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SelectedItem.css";

const SelectedItem = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBrowseArtClick = useCallback(() => {
    navigate("/browse-art");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  const onButton4Click = useCallback(() => {
    navigate("/browse-art");
  }, [navigate]);

  return (
    <>
      <div className="selected-item">
        <header className="header2">
          <div className="header-text2">
            <button className="logo2" onClick={onLogoClick}>
              <img className="logo-inner" alt="" src="/group-1@2x.png" />
              <div className="habesha-art-store2">Habesha Art Store</div>
            </button>
            <div className="links-container">
              <nav className="links2">
                <div className="component-14">
                  <a className="browse-art25" onClick={onBrowseArtClick}>
                    Browse Art
                  </a>
                </div>
                <div className="component-14">
                  <a className="browse-art26">Features</a>
                </div>
                <div className="component-102">
                  <div className="frame-parent43">
                    <div className="component-1-container">
                      <div className="component-15">
                        <a className="browse-art27">Animals</a>
                      </div>
                      <div className="component-14">
                        <a className="browse-art28">{`Abstract `}</a>
                      </div>
                      <div className="component-14">
                        <a className="browse-art28">{`Fantasy `}</a>
                      </div>
                      <div className="component-14">
                        <a className="browse-art28">{`Space `}</a>
                      </div>
                      <div className="component-14">
                        <a className="browse-art28">painting</a>
                      </div>
                      <div className="component-15">
                        <a className="browse-art27">Contemporary Art</a>
                      </div>
                    </div>
                    <div className="component-7-container">
                      <div className="component-14">
                        <a className="browse-art27">Minimalistic</a>
                      </div>
                      <div className="component-14">
                        <a className="browse-art27">Retro</a>
                      </div>
                      <div className="component-14">
                        <a className="browse-art27">Retro</a>
                      </div>
                    </div>
                  </div>
                  <div className="categories-container">
                    <div className="categories2">Categories</div>
                    <img
                      className="chevron-down-icon2"
                      alt=""
                      src="/chevrondown@2x.png"
                    />
                  </div>
                </div>
                <div className="component-14">
                  <a className="browse-art26">About As</a>
                </div>
              </nav>
              <div className="cart-bell2">
                <img className="chevron-down-icon2" alt="" src="/bell@2x.png" />
                <button className="shopping-cart3">
                  <img className="vector-icon12" alt="" src="/vector@2x.png" />
                  <img className="vector-icon13" alt="" src="/vector@2x.png" />
                  <img className="vector-icon14" alt="" src="/vector.svg" />
                </button>
                <button className="button31" onClick={onButtonClick} />
              </div>
              <img className="menu-icon2" alt="" src="/menu.svg" />
            </div>
          </div>
        </header>
        <section className="body">
          <img className="body-child" alt="" src="/rectangle-89@2x.png" />
          <div className="frame-parent44">
            <div className="rectangle-wrapper14">
              <img
                className="frame-child57"
                alt=""
                src="/rectangle-91@2x.png"
              />
            </div>
            <button className="button32">
              <div className="button33">info</div>
            </button>
          </div>
          <div className="price1">
            <div className="frame-parent45">
              <div className="button-parent1">
                <input className="button34" type="radio" />
                <div className="component-1-container">
                  <div className="the-art-title">The Art Title</div>
                  <div className="the-artists-name">the artists name</div>
                </div>
              </div>
              <div className="pick-a-size-parent">
                <b className="pick-a-size">Pick a size</b>
                <div className="frame-parent46">
                  <button className="m-45-32cm-wrapper">
                    <div className="m-45">M 45 * 32cm</div>
                  </button>
                  <button className="m-45-32cm-wrapper">
                    <div className="m-45">L 67.5 * 48cm</div>
                  </button>
                  <button className="m-45-32cm-wrapper">
                    <div className="m-45">XL 90 * 64cm</div>
                  </button>
                </div>
              </div>
              <div className="birrr-parent">
                <div className="the-art-title">1500 Birrr</div>
                <div className="button-parent2">
                  <button className="button35" onClick={openCart}>
                    <div className="button36">Add to cart</div>
                  </button>
                  <div className="stars">
                    <img className="star-2-icon" alt="" src="/star-2.svg" />
                    <img className="star-3-icon" alt="" src="/star-3.svg" />
                    <img className="star-3-icon" alt="" src="/star-4.svg" />
                    <img className="star-3-icon" alt="" src="/star-5.svg" />
                    <img className="star-2-icon" alt="" src="/star-6.svg" />
                  </div>
                  <div className="the-art-title">4.5/5</div>
                </div>
              </div>
              <div className="rate-this-art-parent">
                <div className="the-art-title">Rate this art</div>
                <div className="stars">
                  <img className="star-2-icon1" alt="" src="/star-2@2x.png" />
                  <img className="star-3-icon1" alt="" src="/star-3@2x.png" />
                  <img className="star-3-icon1" alt="" src="/star-4@2x.png" />
                  <img className="star-3-icon1" alt="" src="/star-5@2x.png" />
                  <img className="star-2-icon1" alt="" src="/star-6@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="item">
          <b className="pick-a-size">Similar Arts...</b>
          <section className="art">
            <div className="frame-parent47">
              <div className="frame-parent48">
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent51">
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent54">
              <div className="frame-parent48">
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent48">
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent61">
              <div className="frame-parent48">
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent49">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent49">
                <div className="frame-parent48">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent48">
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper15">
                    <img
                      className="frame-child58"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button className="button37" onClick={onButton4Click}>
            <div className="button33">Show more</div>
          </button>
        </section>
        <section className="footer2">
          <div className="frame-parent68">
            <div className="ha-container">
              <h2 className="ha2">Habesha Arts</h2>
              <div className="every-stroke-tells3">
                Every Stroke tells a story.
              </div>
              <div className="group-parent3">
                <div className="rectangle-parent14">
                  <div className="group-child5" />
                  <img className="vector-icon15" alt="" src="/vector@2x.png" />
                </div>
                <div className="rectangle-parent14">
                  <div className="group-child5" />
                  <img className="vector-icon16" alt="" src="/vector@2x.png" />
                </div>
                <div className="rectangle-parent14">
                  <div className="group-child5" />
                  <img className="vector-icon17" alt="" src="/vector@2x.png" />
                </div>
                <button className="rectangle-parent17">
                  <div className="group-child5" />
                  <b className="in2">in</b>
                </button>
              </div>
            </div>
            <div className="frame-wrapper9">
              <div className="group-parent4">
                <div className="careers-container">
                  <div className="careers2">Careers</div>
                  <div className="contact-us2">Contact us</div>
                  <div className="support2">Support</div>
                  <div className="company2">Company</div>
                  <div className="about2">About</div>
                </div>
                <div className="quick-link-container">
                  <div className="quick-link2">Quick Link</div>
                  <div className="share-location2">Share Location</div>
                  <div className="features2">Features</div>
                  <div className="faqs2">FAQs</div>
                </div>
                <div className="privacy-policy-container">
                  <div className="privacy-policy4">Privacy Policy</div>
                  <div className="terms-conditions2">{`Terms & conditions`}</div>
                  <div className="legal2">Legal</div>
                  <a className="sign-up-as1">Sign up as a Seller</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isCartOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCart}
        >
          <Cart onClose={closeCart} />
        </PortalPopup>
      )}
    </>
  );
};

export default SelectedItem;
