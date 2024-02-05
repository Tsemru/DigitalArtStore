import "./EditProfile.css";

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <section className="edit-profile-parent">
        <div className="full-name">Edit Profile</div>
        <div className="rectangle-parent11">
          <div className="frame-child31" />
          <div className="ellipse-div" />
        </div>
      </section>
      <section className="frame-parent29">
        <div className="frame-parent30">
          <div className="full-name-parent">
            <div className="full-name">Full Name</div>
            <input className="frame-child32" type="text" />
          </div>
          <div className="full-name-parent">
            <div className="full-name">User Name</div>
            <input className="frame-child32" type="text" />
          </div>
          <div className="bio-parent">
            <div className="full-name">Bio</div>
            <textarea className="frame-child34" />
          </div>
          <div className="full-name-parent">
            <div className="full-name">Social Link</div>
            <input className="frame-child32" type="text" />
          </div>
          <div className="full-name-parent">
            <div className="full-name">Social Link</div>
            <input className="frame-child32" type="text" />
          </div>
        </div>
        <button className="button23">
          <div className="button24">Save</div>
        </button>
      </section>
    </div>
  );
};

export default EditProfile;
