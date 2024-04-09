import './FoodsMenu.css';
const NewFoods = () => {
  return (
    <div className="menu" style={{ paddingTop: 67 }}>
      <div className="heading">
        <h1>Coder's Restaurant</h1>
        <h3>&mdash; MENU &mdash; </h3>
      </div>
      <div className="food-items">
        <img src="https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg" />
        <div className="details">
          <div className="details-sub">
            <h5>Veg burger</h5>
            <h5 className="price"> ₹59/- </h5>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit reiciendis
            nam non quia! Earum eveniet minus. Facilis explicabo natus nihil
            voluptatem eveniet pariatur.
          </p>
          <button>Order Now</button>
        </div>
      </div>

      <div className="food-items">
        <img src="https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg" />
        <div className="details">
          <div className="details-sub">
            <h5>Manchow Soup</h5>
            <h5 className="price"> ₹65/- </h5>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            quibusdam facilis, magni consectetur necessitatibus.
          </p>
          <button>Order Now</button>
        </div>
      </div>

      <div className="food-items">
        <img src="https://i.pinimg.com/236x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg" />
        <div className="details">
          <div className="details-sub">
            <h5>Sandwich</h5>
            <h5 className="price"> ₹65/- </h5>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            reiciendis nam non quia! Earum eveniet quia minus nemo.
          </p>
          <button>Order Now</button>
        </div>
      </div>

      <div className="food-items">
        <img src="https://i.pinimg.com/236x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg" />
        <div className="details">
          <div className="details-sub">
            <h5>Chhole Bhature</h5>
            <h5 className="price"> ₹99/- </h5>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor sit
            amet consectetur adipisicing elit.
          </p>
          <button>Order Now</button>
        </div>
      </div>

      <div className="food-items">
        <img src="https://i.pinimg.com/236x/03/96/92/039692971d6fd5e5d04fe24420d57a44.jpg" />
        <div className="details">
          <div className="details-sub">
            <h5>Noodals</h5>
            <h5 className="price"> ₹120/- </h5>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit lorem
            ipsum, dolor sit amet consectetur adipisicing elit
          </p>
          <button>Order Now</button>
        </div>
      </div>

      <div className="food-items">
        <img src="https://i.pinimg.com/236x/03/96/92/039692971d6fd5e5d04fe24420d57a44.jpg" />
        <div className="details">
          <div className="details-sub">
            <h5>Chilli Paneer</h5>
            <h5 className="price"> ₹180/- </h5>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewFoods;
