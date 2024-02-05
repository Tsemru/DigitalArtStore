import "./AddArt.css";

const AddArt = ({ onClose }) => {
  return (
    <div className="add-art">
      <section className="add-art-frame">
        <div className="add-art-for">Add Art For Sale</div>
        <div className="frame-parent20">
          <div className="frame-parent21">
            <div className="rectangle-parent8">
              <div className="frame-child23" />
              <div className="frame-parent22">
                <div className="title-parent">
                  <div className="add-art-for">Title</div>
                  <input className="rectangle-input" type="text" />
                </div>
                <div className="title-parent">
                  <div className="add-art-for">{`Description `}</div>
                  <textarea className="rectangle-textarea" />
                </div>
              </div>
              <img className="image-icon" alt="" src="/image@2x.png" />
            </div>
            <div className="frame-parent23">
              <div className="category-parent">
                <div className="add-art-for">Category</div>
                <input className="frame-child24" type="text" />
              </div>
              <div className="category-parent">
                <div className="add-art-for">Type</div>
                <input className="frame-child24" type="text" />
              </div>
              <div className="category-parent">
                <div className="add-art-for">Price</div>
                <input className="frame-child24" type="text" />
              </div>
            </div>
          </div>
          <button className="button13">
            <div className="button14">{`Submit `}</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddArt;
