const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-4">
      <div className="grid grid-cols-2 imageshowCase">
        {/* <img src={img} className="h-[400px]" alt="" />
        <img src={img} className="h-[400px]" alt="" />
        <img src={img} className="h-[400px]" alt="" />
        <img src={img} className="h-[400px]" alt="" /> */}

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {/* <img src={img} className="h-[400px]" alt="" />
          <img src={img} className="h-[400px]" alt="" />
          <img src={img} className="h-[400px]" alt="" />
          <img src={img} className="h-[400px]" alt="" />
          <img src={img} className="h-[400px]" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
