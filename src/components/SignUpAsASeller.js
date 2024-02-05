import "./SignUpAsASeller.css";

const SignUpAsASeller = () => {
  return (
    <div className="sign-up-as-a-seller">
      <section className="frame-parent35">
        <div className="frame-parent36">
          <div className="create-an-account-group">
            <b className="create-an-account1">{`Create an account `}</b>
            <div className="ellipse-group">
              <div className="frame-child46" />
              <div className="seller">Seller</div>
              <img className="user-check-icon" alt="" src="/usercheck@2x.png" />
            </div>
          </div>
          <div className="frame-child47" />
        </div>
        <div className="frame-parent37">
          <div className="frame-parent38">
            <div className="email-group">
              <div className="write-a-short">Email</div>
              <input className="frame-child48" type="text" />
            </div>
            <div className="add-your-portfolio-parent">
              <div className="add-your-portfolio">Add your Portfolio</div>
              <input className="frame-child49" type="text" />
              <div className="paperclip" />
            </div>
            <div className="email-group">
              <div className="write-a-short">
                write a short description about yourself
              </div>
              <textarea className="frame-child50" />
            </div>
          </div>
          <div className="rectangle-parent13">
            <input className="rectangle-input1" type="checkbox" />
            <div className="write-a-short">
              <span>{`Accept the `}</span>
              <span className="terms-of-use1">terms of use</span>
              <span>{` and `}</span>
              <span className="terms-of-use1">{`privacy policy `}</span>
            </div>
          </div>
          <div className="frame-child47" />
          <button className="button27">
            <div className="button28">{`Submit `}</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUpAsASeller;
