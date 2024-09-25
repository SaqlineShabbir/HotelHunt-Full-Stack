import Image from "next/image";

const Gallery = ({ gallery }) => {
  const newGallery = [...gallery];
  newGallery.shift();

  return (
    <section className="max-w-7xl mx-auto w-full px-4 my-8">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {/* Main Image */}
        <div className="w-full h-full">
          <Image
            height={600}
            width={800}
            src={gallery[0]}
            className="w-full h-auto object-cover rounded-md"
            alt="Main Gallery Image"
          />
        </div>

        {/* Secondary Images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {newGallery.map((gal, index) => (
            <Image
              key={index}
              height={300}
              width={300}
              src={gal}
              className="w-full h-auto object-cover rounded-md"
              alt={`Gallery Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
