import "./ArtInfo.css";

const ArtInfo = () => {
  return (
    <div className="art-info">
      <section className="frame-section">
        <div className="frame-parent24">
          <div className="rectangle-parent9">
            <img className="frame-child27" alt="" src="/rectangle-106@2x.png" />
            <div className="frame-wrapper2">
              <div className="title-group">
                <div className="date">Title</div>
                <div className="date">Date</div>
              </div>
            </div>
          </div>
          <div className="frame-parent25">
            <div className="total-sales-count-parent">
              <div className="date">Total Sales Count</div>
              <div className="date">12</div>
            </div>
            <div className="total-income-parent">
              <div className="date">Total income</div>
              <div className="date">7500 birr</div>
            </div>
          </div>
        </div>
        <button className="button15">
          <div className="button16">close</div>
        </button>
      </section>
    </div>
  );
};

export default ArtInfo;
