import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <section className="frame-parent31">
        <div className="frame-parent32">
          <div className="create-an-account-parent">
            <b className="create-an-account">{`Create an account `}</b>
            <div className="ellipse-parent">
              <div className="frame-child37" />
              <div className="customer">Customer</div>
              <img className="user-icon" alt="" src="/user@2x.png" />
            </div>
          </div>
          <div className="frame-child38" />
        </div>
        <div className="frame-parent33">
          <div className="frame-parent34">
            <div className="first-name-parent">
              <div className="first-name">First Name</div>
              <input className="frame-child39" type="text" />
            </div>
            <div className="first-name-parent">
              <div className="first-name">Last Name</div>
              <input className="frame-child39" type="text" />
            </div>
            <div className="first-name-parent">
              <div className="first-name">Email</div>
              <input className="frame-child39" type="text" />
            </div>
            <div className="first-name-parent">
              <div className="first-name">Password</div>
              <input className="frame-child39" type="text" />
            </div>
            <div className="first-name-parent">
              <div className="first-name">Reinsert Password</div>
              <input className="frame-child39" type="text" />
            </div>
          </div>
          <div className="rectangle-parent12">
            <div className="frame-child44" />
            <div className="first-name">
              <span>{`Accept the `}</span>
              <span className="terms-of-use">terms of use</span>
              <span>{` and `}</span>
              <span className="terms-of-use">{`privacy policy `}</span>
            </div>
          </div>
          <div className="frame-child38" />
          <div className="already-have-an">{`Already have an account `}</div>
          <button className="button25">
            <div className="button26">create an account</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
