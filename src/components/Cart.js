import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <section className="frame-parent26">
        <div className="frame-parent27">
          <div className="shopping-cart-parent">
            <div className="art-title">{`Shopping cart `}</div>
            <div className="frame-child28" />
          </div>
          <div className="frame-parent28">
            <div className="frame-wrapper3">
              <div className="frame-wrapper4">
                <div className="frame-wrapper5">
                  <div className="button-group">
                    <img className="button-icon" alt="" src="/button@2x.png" />
                    <div className="art-title-parent">
                      <div className="art-title">Art Title</div>
                      <div className="size-parent">
                        <div className="art-title">size</div>
                        <div className="art-title">Quantity</div>
                        <div className="art-title">1250 ETB</div>
                      </div>
                      <button className="button-wrapper">
                        <div className="button17">
                          <div className="button18">Remove</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-child28" />
            <div className="frame-wrapper6">
              <div className="frame-wrapper7">
                <div className="frame-wrapper5">
                  <div className="button-group">
                    <img className="button-icon" alt="" src="/button@2x.png" />
                    <div className="art-title-group">
                      <div className="art-title">Art Title</div>
                      <div className="size-parent">
                        <div className="art-title">size</div>
                        <div className="art-title">Quantity</div>
                        <div className="art-title">1250 ETB</div>
                      </div>
                      <button className="button-wrapper">
                        <div className="button19">
                          <div className="button18">Remove</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent10">
          <div className="frame-child28" />
          <div className="size-parent">
            <div className="art-title">Sub Total</div>
            <div className="art-title">2500 ETB</div>
          </div>
          <button className="button21">
            <div className="button18">Go To Checkout</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
