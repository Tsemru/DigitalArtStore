import { useState, useCallback } from "react";
import Cart from "../components/Cart";
import PortalPopup from "../components/PortalPopup";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";
import "./BrowseArt.css";

const BrowseArt = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  const openSignUp = useCallback(() => {
    setSignUpOpen(true);
  }, []);

  const closeSignUp = useCallback(() => {
    setSignUpOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/selected-item");
  }, [navigate]);

  return (
    <>
      <div className="browse-art">
        <header className="header">
          <div className="header-text">
            <button className="logo" onClick={onLogoClick}>
              <img className="logo-child" alt="" src="/group-1@2x.png" />
              <h2 className="habesha-art-store">Habesha Art Store</h2>
            </button>
            <div className="links-parent">
              <nav className="links">
                <div className="component-1">
                  <a className="browse-art1">Browse Art</a>
                </div>
                <div className="component-2">
                  <a className="browse-art1">Features</a>
                </div>
                <div className="component-10">
                  <div className="frame-parent">
                    <div className="component-1-parent">
                      <div className="component-11">
                        <a className="browse-art3">Animals</a>
                      </div>
                      <div className="component-2">
                        <a className="browse-art4">{`Abstract `}</a>
                      </div>
                      <div className="component-2">
                        <a className="browse-art4">{`Fantasy `}</a>
                      </div>
                      <div className="component-2">
                        <a className="browse-art4">{`Space `}</a>
                      </div>
                      <div className="component-2">
                        <a className="browse-art4">painting</a>
                      </div>
                      <div className="component-11">
                        <a className="browse-art3">Contemporary Art</a>
                      </div>
                    </div>
                    <div className="component-7-parent">
                      <div className="component-2">
                        <a className="browse-art3">Minimalistic</a>
                      </div>
                      <div className="component-2">
                        <a className="browse-art3">Retro</a>
                      </div>
                      <div className="component-2">
                        <a className="browse-art3">Retro</a>
                      </div>
                    </div>
                  </div>
                  <div className="categories-parent">
                    <div className="categories">Categories</div>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevrondown@2x.png"
                    />
                  </div>
                </div>
                <div className="component-2">
                  <a className="browse-art1">About As</a>
                </div>
              </nav>
              <div className="cart-bell">
                <img className="chevron-down-icon" alt="" src="/bell@2x.png" />
                <button className="shopping-cart" onClick={openCart}>
                  <img className="vector-icon" alt="" src="/vector@2x.png" />
                  <img className="vector-icon1" alt="" src="/vector@2x.png" />
                  <img className="vector-icon2" alt="" src="/vector.svg" />
                </button>
                <button className="button" onClick={openSignUp}>
                  <div className="button1">Sign up</div>
                </button>
              </div>
              <img className="menu-icon" alt="" src="/menu.svg" />
            </div>
          </div>
        </header>
        <section className="browsed-art">
          <main className="side-text-parent">
            <div className="side-text">
              <div className="catagory-list">
                <button className="choose-a-category-wrapper">
                  <b className="choose-a-category">Choose a category</b>
                </button>
                <button className="animals-parent">
                  <a className="animals">Animals</a>
                  <a className="animals">{`Abstract `}</a>
                  <a className="animals">Fantasy</a>
                  <a className="animals">Space</a>
                  <a className="animals">painting</a>
                  <a className="animals">Contemporary Art</a>
                  <a className="animals">Minimalistic</a>
                  <a className="animals">Retro</a>
                  <a className="animals">Text Art</a>
                </button>
              </div>
              <div className="side-text-child" />
              <div className="type-list">
                <button className="choose-a-category-wrapper">
                  <b className="choose-a-category"> Type</b>
                </button>
                <button className="animals-parent">
                  <a className="animals">Blueprint</a>
                  <a className="animals">Illustration</a>
                  <a className="animals">{`Drawing `}</a>
                  <a className="animals">Painting</a>
                  <a className="animals">Photography</a>
                  <a className="animals">Text Art</a>
                </button>
              </div>
              <div className="side-text-child" />
              <div className="orentetion-list">
                <b className="orientation">Orientation:</b>
                <div className="frame-group">
                  <button className="check-circle-parent">
                    <input
                      className="check-circle"
                      checked={true}
                      type="radio"
                    />
                    <h2 className="all">All</h2>
                  </button>
                  <button className="frame-container">
                    <input className="frame-child" type="radio" />
                    <h2 className="all">Vertical</h2>
                  </button>
                  <button className="frame-button">
                    <input className="frame-child" type="radio" />
                    <h2 className="horizontal">Horizontal</h2>
                  </button>
                </div>
              </div>
            </div>
            <section className="art-list">
              <div className="frame-div">
                <div className="frame-parent1">
                  <div className="rectangle-wrapper">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent2">
                  <div className="rectangle-wrapper">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="frame-parent4">
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div
                    className="rectangle-wrapper3"
                    onClick={onFrameContainer1Click}
                  >
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent4">
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="frame-parent7">
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent7">
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="frame-parent7">
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent7">
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-84@2x.png"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div className="browsed-art-child" />
          <div className="frame-parent12">
            <div className="wrapper">
              <div className="div">1</div>
            </div>
            <div className="div">{` of `}</div>
            <div className="div">100</div>
            <img
              className="arrow-right-circle-icon"
              alt=""
              src="/arrowrightcircle@2x.png"
            />
          </div>
        </section>
        <section className="comment">
          <form className="comment1">
            <div className="subscribe-to-our-newsletter-parent">
              <b className="subscribe-to-our">subscribe to our newsletter</b>
              <h1 className="tell-us-whats">{`Tell us what’s missing, we Value your Comments.. `}</h1>
            </div>
            <div className="frame-parent13">
              <input
                className="frame-input"
                placeholder="Your Email"
                type="email"
              />
              <button className="button2">
                <div className="button3">Comment</div>
              </button>
            </div>
          </form>
        </section>
        <section className="footer">
          <div className="frame-parent14">
            <div className="ha-parent">
              <h2 className="ha">Habesha Arts</h2>
              <div className="every-stroke-tells">
                Every Stroke tells a story.
              </div>
              <div className="group-parent">
                <div className="rectangle-parent">
                  <div className="group-child" />
                  <img className="vector-icon3" alt="" src="/vector@2x.png" />
                </div>
                <div className="rectangle-parent">
                  <div className="group-child" />
                  <img className="vector-icon4" alt="" src="/vector@2x.png" />
                </div>
                <div className="rectangle-parent">
                  <div className="group-child" />
                  <img className="vector-icon5" alt="" src="/vector@2x.png" />
                </div>
                <button className="group-button">
                  <div className="group-child" />
                  <b className="in">in</b>
                </button>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="group-container">
                <div className="careers-parent">
                  <div className="careers">Careers</div>
                  <div className="contact-us">Contact us</div>
                  <div className="support">Support</div>
                  <div className="company">Company</div>
                  <div className="about">About</div>
                </div>
                <div className="quick-link-parent">
                  <div className="quick-link">Quick Link</div>
                  <div className="share-location">Share Location</div>
                  <div className="features">Features</div>
                  <div className="faqs">FAQs</div>
                </div>
                <div className="privacy-policy-parent">
                  <div className="privacy-policy">Privacy Policy</div>
                  <div className="terms-conditions">{`Terms & conditions`}</div>
                  <div className="legal">Legal</div>
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
      {isSignUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUp}
        >
          <SignUp onClose={closeSignUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default BrowseArt;
