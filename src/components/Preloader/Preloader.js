function Preloader({ isLoading }) {
  return (
    <div className={'preloader' + (isLoading ? ' preloader_visible' : '')}>
      <div className="preloader__ring-one"></div>
      <div className="preloader__ring-two"></div>
      <div className="preloader__ring-three"></div>
      <div className="preloader__ring-four"></div>
    </div>
  );
}

export default Preloader;