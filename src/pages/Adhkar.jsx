function Adhkar() {
  const morningUrl = 'https://www.youtube.com/embed/wjTuA9gygsM?si=CXsfMrVQ44F_nCum';
  const eveningUrl = 'https://www.youtube.com/embed/hetRq6j-0c8?si=I22UzpPqWtNh0Ooz';

  return (
    <section className="section-panel video-section">
      <div className="video-block">
        <div className="card-panel">
          <h3>Morning Adhkar</h3>
          <p>Start your day with the best morning remembrances.</p>
        </div>
        <iframe
          title="Morning Adhkar"
          src={morningUrl}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="video-block">
        <div className="card-panel">
          <h3>Evening Adhkar</h3>
          <p>Wind down with evening adhkar recitation and reflection.</p>
        </div>
        <iframe
          title="Evening Adhkar"
          src={eveningUrl}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Adhkar;
