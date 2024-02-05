import { useState, useCallback } from "react";
import Cart from "../components/Cart";
import PortalPopup from "../components/PortalPopup";
import AddArt from "../components/AddArt";
import EditProfile from "../components/EditProfile";
import ArtInfo from "../components/ArtInfo";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isAddArtOpen, setAddArtOpen] = useState(false);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isArtInfoOpen, setArtInfoOpen] = useState(false);
  const [isArtInfo1Open, setArtInfo1Open] = useState(false);
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBrowseArtClick = useCallback(() => {
    navigate("/browse-art");
  }, [navigate]);

  const onBrowseArt11Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  const openAddArt = useCallback(() => {
    setAddArtOpen(true);
  }, []);

  const closeAddArt = useCallback(() => {
    setAddArtOpen(false);
  }, []);

  const openEditProfile = useCallback(() => {
    setEditProfileOpen(true);
  }, []);

  const closeEditProfile = useCallback(() => {
    setEditProfileOpen(false);
  }, []);

  const openArtInfo = useCallback(() => {
    setArtInfoOpen(true);
  }, []);

  const closeArtInfo = useCallback(() => {
    setArtInfoOpen(false);
  }, []);

  const openArtInfo1 = useCallback(() => {
    setArtInfo1Open(true);
  }, []);

  const closeArtInfo1 = useCallback(() => {
    setArtInfo1Open(false);
  }, []);

  return (
    <>
      <div className="profile-page">
        <section className="profile-frame">
          <div className="header-parent">
            <header className="header3">
              <div className="header-text3">
                <button className="logo3" onClick={onLogoClick}>
                  <img className="group-icon" alt="" src="/group-1@2x.png" />
                  <div className="habesha-art-store3">Habesha Art Store</div>
                </button>
                <div className="links-parent1">
                  <nav className="links3">
                    <div className="component-16">
                      <a className="browse-art37" onClick={onBrowseArtClick}>
                        Browse Art
                      </a>
                    </div>
                    <div className="component-16">
                      <a className="browse-art38">Features</a>
                    </div>
                    <div className="component-103">
                      <div className="frame-parent69">
                        <div className="component-1-parent1">
                          <div className="component-17">
                            <a className="browse-art39">Animals</a>
                          </div>
                          <div className="component-16">
                            <a className="browse-art40">{`Abstract `}</a>
                          </div>
                          <div className="component-16">
                            <a className="browse-art40">{`Fantasy `}</a>
                          </div>
                          <div className="component-16">
                            <a className="browse-art40">{`Space `}</a>
                          </div>
                          <div className="component-16">
                            <a className="browse-art40">painting</a>
                          </div>
                          <div className="component-17">
                            <a className="browse-art39">Contemporary Art</a>
                          </div>
                        </div>
                        <div className="component-7-parent1">
                          <div className="component-16">
                            <a className="browse-art39">Minimalistic</a>
                          </div>
                          <div className="component-16">
                            <a className="browse-art39">Retro</a>
                          </div>
                          <div className="component-16">
                            <a className="browse-art39">Retro</a>
                          </div>
                        </div>
                      </div>
                      <div className="categories-parent1">
                        <div className="categories3">Categories</div>
                        <img
                          className="chevron-down-icon3"
                          alt=""
                          src="/chevrondown@2x.png"
                        />
                      </div>
                    </div>
                    <div className="component-16">
                      <a className="browse-art37" onClick={onBrowseArt11Click}>
                        About As
                      </a>
                    </div>
                  </nav>
                  <div className="cart-bell3">
                    <img
                      className="chevron-down-icon3"
                      alt=""
                      src="/bell@2x.png"
                    />
                    <button className="shopping-cart4" onClick={openCart}>
                      <img
                        className="vector-icon18"
                        alt=""
                        src="/vector@2x.png"
                      />
                      <img
                        className="vector-icon19"
                        alt=""
                        src="/vector@2x.png"
                      />
                      <img className="vector-icon20" alt="" src="/vector.svg" />
                    </button>
                    <button className="button39" />
                  </div>
                  <img className="menu-icon3" alt="" src="/menu.svg" />
                </div>
              </div>
            </header>
            <div className="rectangle-parent18">
              <img
                className="frame-child82"
                alt=""
                src="/rectangle-102@2x.png"
              />
              <img className="ellipse-icon" alt="" src="/ellipse-3@2x.png" />
            </div>
          </div>
          <div className="button-parent3">
            <button className="button40" onClick={openAddArt}>
              <div className="button41">Add Art</div>
            </button>
            <button className="button40" onClick={openEditProfile}>
              <div className="button41">Edit Profile</div>
            </button>
          </div>
          <div className="tsemru-fikremariam-parent">
            <div className="tsemru-fikremariam">Tsemru Fikremariam</div>
            <div className="tsemru">@tsemru</div>
          </div>
          <div className="frame-parent70">
            <div className="frame-parent71">
              <div className="total-sales-count-group">
                <div className="tsemru-fikremariam">Total Sales Count</div>
                <div className="tsemru-fikremariam">12</div>
              </div>
              <div className="total-income-group">
                <div className="tsemru-fikremariam">Total income</div>
                <div className="tsemru-fikremariam">7500 birr</div>
              </div>
            </div>
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="wwwrehndvcsmiinstagramcom-parent">
              <div className="tsemru-fikremariam">
                www.rehndvcsmi/instagram.com
              </div>
              <div className="tsemru-fikremariam">www.rehndvcsmi/x.com</div>
            </div>
          </div>
        </section>
        <div className="profile-content">
          <div className="listed-arts-parent">
            <div className="tsemru-fikremariam">Listed Arts</div>
            <div className="frame-child83" />
          </div>
          <div className="frame-parent72">
            <div className="frame-parent73">
              <div className="frame-parent74">
                <div className="rectangle-wrapper39" onClick={openArtInfo}>
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
                <div className="rectangle-wrapper39" onClick={openArtInfo1}>
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
              </div>
              <div className="frame-parent74">
                <div className="rectangle-wrapper41">
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
                <div className="rectangle-wrapper41">
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="frame-parent76">
              <div className="frame-parent77">
                <div className="rectangle-wrapper43">
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
                <div className="rectangle-wrapper43">
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
              </div>
              <div className="frame-parent78">
                <div className="rectangle-wrapper43">
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
                <div className="rectangle-wrapper43">
                  <img
                    className="frame-child84"
                    alt=""
                    src="/rectangle-84@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
      {isAddArtOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddArt}
        >
          <AddArt onClose={closeAddArt} />
        </PortalPopup>
      )}
      {isEditProfileOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditProfile}
        >
          <EditProfile onClose={closeEditProfile} />
        </PortalPopup>
      )}
      {isArtInfoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeArtInfo}
        >
          <ArtInfo onClose={closeArtInfo} />
        </PortalPopup>
      )}
      {isArtInfo1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeArtInfo1}
        >
          <ArtInfo onClose={closeArtInfo1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfilePage;
