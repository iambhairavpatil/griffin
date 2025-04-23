import React from "react";

const About: React.FC = () => {
  const links = [
    { label: "Our Products", img: "./images/slide4.png" },
    { label: "Our Stores", img: "./images/slide4.png" },
    { label: "Careers", img: "./images/slide4.png" },
  ];

  const cards = [
    { title: "Product Packing", desc: "Lorem ipsum dolor sit amet" },
    { title: "24x7 Support", desc: "Lorem ipsum dolor sit amet" },
    { title: "Delivery in 5 Days", desc: "Lorem ipsum dolor sit amet" },
    { title: "Payment Secure", desc: "Lorem ipsum dolor sit amet" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative text-center" style={{ height: '460px' }}>
        <img
          src="./images/p6.jpg"
          alt="Passion Perfume"
          className="w-100"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <div className="position-absolute bottom-0 start-0 w-100 bg-danger text-white text-start py-2 px-5">
          <strong>About Us</strong>
        </div>
      </section>

      {/* About Text + Image */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-3">About The Griffin</h2>
              <p>The Griffin Original is not just a brand — it’s a symbol of timeless elegance, individuality, and handcrafted luxury. Founded with a vision to redefine fashion, we create premium perfumes, bespoke clothing, and refined lifestyle accessories that embody sophistication and creativity.</p>

<p>Born in India, The Griffin Original stands at the crossroads of heritage and innovation. Every product we craft tells a story — one of precision, passion, and purposeful design. We believe in quality over quantity, artistry over mass production, and integrity over trends.

Our mission is to elevate your personal style through luxurious experiences that inspire confidence and self-expression. We invite you to be a part of a movement that honors craftsmanship and celebrates uniqueness.
</p>
<p>The Griffin Original — FEEL THE RICHNESS</p>
            </div>
            <div className="col-md-6">
              <img
                src="./images/product1.png"
                alt="Perfume Bottles in Snow"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Factories */}
      <section className="row g-0 align-items-center" style={{ background: '#E6DED8' }}>
  <div className="col-md-6">
    <img
      src="./images/slide4.png"
      alt="Model"
      className="img-fluid w-100"
      style={{ height: '400px', objectFit: 'cover' }}
    />
  </div>
  <div className="col-md-6 p-4">
    <h5>OUR FACTORIES</h5>
    <h2>Our ethical approach.</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
  </div>
</section>

      {/* Middle Image Banner */}
      <section style={{ height: '500px' }}>
        <img
          src="./images/product1.png"
          style={{ height: '100%', objectFit: 'cover' }}
          className="img-fluid w-100"
          alt="Perfumes in snow"
        />
      </section>

      {/* Our Quality */}
      <section className="container-fluid p-0">
        <div className="row g-0 align-items-center">
          <div className="col-md-6 p-5">
            <h5>OUR QUALITY</h5>
            <h2>Designed to last.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="col-md-6">
            <img src="./images/p6.jpg" className="img-fluid w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Fragrance bottle" />
          </div>
        </div>
      </section>

      {/* More to Explore */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="mb-4">More to Explore</h3>
          <div className="row justify-content-center">
            {links.map((item, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-4">
                <img src={item.img} alt={item.label} className="img-fluid mb-2" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            {cards.map((card, index) => (
              <div key={index} className="col-6 col-md-3 mb-4">
                <div className="p-3 border rounded bg-white h-100">
                  <h6>{card.title}</h6>
                  <small>{card.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
