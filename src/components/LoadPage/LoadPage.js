const { default: Preloader } = require("../Preloader/Preloader");

function LoadPage() {
  return (
    <section className="load-page">
      <Preloader isLoading={true} />
    </section>
  );
}

export default LoadPage;