import { useState, useCallback, useEffect } from "react";
import Cart from "../components/Cart";
import PortalPopup from "../components/PortalPopup";
import SignUpAsASeller from "../components/SignUpAsASeller";
import { useNavigate } from "react-router-dom";
import "./LandingResponsive.css";

const LandingResponsive = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSignUpAsASellerOpen, setSignUpAsASellerOpen] = useState(false);
  const navigate = useNavigate();

  const onBrowseArtClick = useCallback(() => {
    navigate("/browse-art");
  }, [navigate]);

  const onBrowseArt1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='service']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/browse-art");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whatWeDo']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openSignUpAsASeller = useCallback(() => {
    setSignUpAsASellerOpen(true);
  }, []);

  const closeSignUpAsASeller = useCallback(() => {
    setSignUpAsASellerOpen(false);
  }, []);

  return (
    <>
      <div className="landing-responsive">
        <header className="header1">
          <div className="header-text1">
            <button className="logo1">
              <img className="logo-item" alt="" src="/group-1@2x.png" />
              <div className="habesha-art-store1">Habesha Art Store</div>
            </button>
            <div className="links-group">
              <nav className="links1">
                <div className="component-12">
                  <a className="browse-art13" onClick={onBrowseArtClick}>
                    Browse Art
                  </a>
                </div>
                <div className="component-12">
                  <a className="browse-art13" onClick={onBrowseArt1Click}>
                    Features
                  </a>
                </div>
                <div className="component-101">
                  <div className="frame-parent15">
                    <div className="component-1-group">
                      <div className="component-13">
                        <a className="browse-art15">Animals</a>
                      </div>
                      <div className="component-12">
                        <a className="browse-art16">{`Abstract `}</a>
                      </div>
                      <div className="component-12">
                        <a className="browse-art16">{`Fantasy `}</a>
                      </div>
                      <div className="component-12">
                        <a className="browse-art16">{`Space `}</a>
                      </div>
                      <div className="component-12">
                        <a className="browse-art16">painting</a>
                      </div>
                      <div className="component-13">
                        <a className="browse-art15">Contemporary Art</a>
                      </div>
                    </div>
                    <div className="component-7-group">
                      <div className="component-12">
                        <a className="browse-art15">Minimalistic</a>
                      </div>
                      <div className="component-12">
                        <a className="browse-art15">Retro</a>
                      </div>
                      <div className="component-12">
                        <a className="browse-art15">Retro</a>
                      </div>
                    </div>
                  </div>
                  <div className="categories-group">
                    <div className="categories1">Categories</div>
                    <img
                      className="chevron-down-icon1"
                      alt=""
                      src="/chevrondown@2x.png"
                    />
                  </div>
                </div>
                <div className="component-12">
                  <a className="browse-art24">About As</a>
                </div>
              </nav>
              <div className="cart-bell1">
                <img className="chevron-down-icon1" alt="" src="/bell@2x.png" />
                <button className="shopping-cart1" onClick={openCart}>
                  <img className="vector-icon6" alt="" src="/vector@2x.png" />
                  <img className="vector-icon7" alt="" src="/vector@2x.png" />
                  <img className="vector-icon8" alt="" src="/vector.svg" />
                </button>
                <button className="button4" onClick={onButtonClick} />
              </div>
              <img className="menu-icon1" alt="" src="/menu.svg" />
            </div>
          </div>
        </header>
        <main className="hero">
          <section className="hero-text">
            <div className="every-stroke-tells-a-story-wrapper">
              <h1 className="every-stroke-tells1">
                every stroke tells a story.
              </h1>
            </div>
            <h3 className="meticulously-collected-from">
              meticulously collected from the heart of Ethiopia
            </h3>
            <div className="button-parent">
              <button className="button5" onClick={onButton1Click}>
                <div className="button6">Shop now</div>
              </button>
              <button className="button7" onClick={onButton2Click}>
                <div className="button6">Learn more</div>
              </button>
            </div>
          </section>
          <div className="hero-inner">
            <img className="frame-child15" alt="" src="/rectangle-35@2x.png" />
          </div>
        </main>
        <section className="service" data-scroll-to="service">
          <section className="servises">
            <div className="servises-text">
              <b className="services">Services</b>
              <h1 className="all-your-favorite">
                All Your Favorite artworks in print
              </h1>
            </div>
            <div className="services-image">
              <div className="from-anywhere">
                <img
                  className="destination-1-icon"
                  alt=""
                  src="/destination-1@2x.png"
                />
                <div className="anywher-text">
                  <h3 className="easy-booking">From Anywhere</h3>
                  <div className="what-looked-like">
                    What looked like a small patch of purple grass, above five
                    feet.
                  </div>
                </div>
              </div>
              <div className="booking">
                <img
                  className="destination-1-icon"
                  alt=""
                  src="/booking-1@2x.png"
                />
                <div className="anywher-text">
                  <h3 className="easy-booking">Easy Booking</h3>
                  <div className="what-looked-like">
                    Square, was moving across the sand in their direction.
                  </div>
                </div>
              </div>
              <div className="from-anywhere">
                <img className="cloudy-1-icon" alt="" src="/cloudy-1@2x.png" />
                <div className="anywher-text">
                  <h3 className="easy-booking">Fast Delivery</h3>
                  <div className="what-looked-like">
                    What looked like a small patch of purple grass, above five
                    feet.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="what-we-do" data-scroll-to="whatWeDo">
          <div className="what-we-do-parent">
            <h1 className="see-the-hottest">What we do..</h1>
            <div className="we-curate-a">
              {" "}
              we curate a haven for artistic souls, offering a diverse palette
              of premium art supplies, tools, and inspiration.
            </div>
          </div>
          <div className="frame-parent16">
            <div className="parent">
              <img className="icon" alt="" src="/6160883-1@2x.png" />
              <div className="promote-artists-parent">
                <h2 className="promote-artists">{`promote artists `}</h2>
                <div className="promote-ethiopian-artists">
                  promote Ethiopian artists to the wide world .
                </div>
              </div>
            </div>
            <div className="parent">
              <img className="icon" alt="" src="/5124566-1@2x.png" />
              <div className="promote-artists-parent">
                <div className="print-art">
                  <span className="print-art1">print art</span>
                  <span className="span">{` `}</span>
                </div>
                <div className="promote-ethiopian-artists">
                  print art works that are availably for sell on our platform.
                </div>
              </div>
            </div>
            <div className="parent">
              <img
                className="sandy-bus-26-single-03-1-icon"
                alt=""
                src="/sandy-bus26-single03-1@2x.png"
              />
              <div className="promote-artists-parent">
                <div className="print-art">
                  <span className="print-art1">sell art</span>
                  <span className="span">{` `}</span>
                </div>
                <div className="promote-ethiopian-artists">
                  Sell printed arts that are created by Ethiopian artists for
                  the world.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-as">
          <div className="frame-parent17">
            <div className="about-us-parent">
              <div className="about-us">About us</div>
              <div className="operating-from-the-container">
                <p className="operating-from-the">
                  Operating from the heart of Ethiopia, our platform is a
                  digital canvas showcasing the evolution of art in a nation
                  rich with diverse cultures and deep history. In a landscape
                  where ancient paintings once adorned church walls, a new
                  chapter unfolds – the era of digital art.
                </p>
                <p className="operating-from-the"></p>
                <p className="operating-from-the">
                  We celebrate Ethiopia's talented digital artists, providing a
                  space where their creations transform into tangible prints.
                  Beyond being a marketplace, we're building a community where
                  artists share their stories, and enthusiasts explore,
                  appreciate, and collect one-of-a-kind digital masterpieces.
                  Join us in this journey, where tradition meets innovation, and
                  Ethiopian art finds a place in the digital spotlight.
                </p>
              </div>
            </div>
            <button className="button9" data-animate-on-scroll>
              <div className="button10">Contact as</div>
            </button>
          </div>
          <img className="frame-icon" alt="" src="/frame@2x.png" />
        </section>
        <section className="the-hotest-pics">
          <div className="promote-artists-parent">
            <h1 className="see-the-hottest">See the hottest picks..</h1>
            <div className="explore-appreciate-and">
              Explore, appreciate, and be captivated by the top digital art
              works, meticulously collected from the heart of Ethiopia
            </div>
          </div>
          <section className="hot-pics-items">
            <div className="rectangle-parent1">
              <img className="frame-child16" alt="" src="/1 art@2x.png" />
              <img className="frame-child16" alt="" src="/1 art1@2x.png" />
            </div>
            <div className="rectangle-parent1">
              <img className="frame-child16" alt="" src="/1 art2@2x.png" />
              <img className="frame-child16" alt="" src="/1 art3@2x.png" />
            </div>
            <div className="rectangle-parent1">
              <img className="frame-child16" alt="" src="/1 art4@2x.png" />
              <img className="frame-child16" alt="" src="/1 art5@2x.png" />
            </div>
          </section>
        </section>
        <section className="comment2">
          <form className="comment3">
            <div className="subscribe-to-our-newsletter-group">
              <b className="subscribe-to-our1">subscribe to our newsletter</b>
              <h1 className="tell-us-whats1">{`Tell us what’s missing, we Value your Comments.. `}</h1>
            </div>
            <div className="frame-parent18">
              <input
                className="frame-child22"
                placeholder="Your Email"
                type="email"
              />
              <button className="button11">
                <div className="button6">Comment</div>
              </button>
            </div>
          </form>
        </section>
        <section className="footer1">
          <div className="frame-parent19">
            <div className="ha-group">
              <h2 className="ha1">Habesha Arts</h2>
              <div className="every-stroke-tells2">
                Every Stroke tells a story.
              </div>
              <div className="group-parent1">
                <div className="rectangle-parent4">
                  <div className="group-child1" />
                  <img className="vector-icon9" alt="" src="/vector@2x.png" />
                </div>
                <div className="rectangle-parent4">
                  <div className="group-child1" />
                  <img className="vector-icon10" alt="" src="/vector@2x.png" />
                </div>
                <div className="rectangle-parent4">
                  <div className="group-child1" />
                  <img className="vector-icon11" alt="" src="/vector@2x.png" />
                </div>
                <button className="rectangle-parent7">
                  <div className="group-child1" />
                  <b className="in1">in</b>
                </button>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="group-parent2">
                <div className="careers-group">
                  <div className="careers1">Careers</div>
                  <div className="contact-us1">Contact us</div>
                  <div className="support1">Support</div>
                  <div className="company1">Company</div>
                  <div className="about1">About</div>
                </div>
                <div className="quick-link-group">
                  <div className="quick-link1">Quick Link</div>
                  <div className="share-location1">Share Location</div>
                  <div className="features1">Features</div>
                  <div className="faqs1">FAQs</div>
                </div>
                <div className="privacy-policy-group">
                  <div className="privacy-policy1">Privacy Policy</div>
                  <div className="terms-conditions1">{`Terms & conditions`}</div>
                  <div className="legal1">Legal</div>
                  <a className="sign-up-as" onClick={openSignUpAsASeller}>
                    Sign up as a Seller
                  </a>
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
      {isSignUpAsASellerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpAsASeller}
        >
          <SignUpAsASeller onClose={closeSignUpAsASeller} />
        </PortalPopup>
      )}
    </>
  );
};

export default LandingResponsive;
