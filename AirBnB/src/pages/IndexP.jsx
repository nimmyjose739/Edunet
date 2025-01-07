import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function IndexP() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div>
      {/* Search Section */}
      <div className="container mt-4">
        <div className="search-section d-flex align-items-center">
          {/* Check-In */}
          <div className="search-column me-3">
            <label htmlFor="check-in" className="search-heading">
              Check-In
            </label>
            <DatePicker
              id="check-in"
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select Check-In Date"
              className="form-control"
            />
          </div>

          {/* Check-Out */}
          <div className="search-column me-3">
            <label htmlFor="check-out" className="search-heading">
              Check-Out
            </label>
            <DatePicker
              id="check-out"
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select Check-Out Date"
              className="form-control"
              minDate={checkInDate}
            />
          </div>

          {/* Guests */}
          <div className="search-column me-3">
            <label htmlFor="guests" className="search-heading">
              Guests
            </label>
            <select id="guests" className="form-control">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="search-button-column">
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>

      {/* Trending Destinations */}
      <div className="container mt-4">
        <div className="row">
          <h2>Trending Destinations</h2>
          <h6>Most trending places to visit in India</h6>
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="./src/image/img1.avif"
                  alt="New Delhi"
                  className="card-img"
                />
                <div className="card-overlay">
                  <h5 className="card-title">New Delhi 🇮🇳</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="./src/image/kumarakom.jpg"
                  alt="Bangalore"
                  className="card-img"
                />
                <div className="card-overlay">
                  <h5 className="card-title">Bangalore 🇮🇳</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="./src/image/img3.avif"
                  alt="Mumbai"
                  className="card-img"
                />
                <div className="card-overlay">
                  <h5 className="card-title">Mumbai 🇮🇳</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home Booking Section */}
      <div className="container mt-4">
        <div className="row">
          <h3>Home Booking</h3>
          <p>
            Find the perfect stay for your next adventure.
          </p>

          {/* Property 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src=".\src\image\h1.jpg"
                className="card-img-top"
                alt="Cozy Cottage"
              />
              <div className="card-body">
                <h5 className="card-title">Cozy Cottage</h5>
                <p className="card-text">
                  A charming cottage in the hills, perfect for a peaceful
                  getaway.
                </p>
                <p className="text-muted">₹4,000 / night</p>
              </div>
            </div>
          </div>

          {/* Property 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src=".\src\image\h2.jpg"
                className="card-img-top"
                alt="Luxury Villa"
              />
              <div className="card-body">
                <h5 className="card-title">Luxury Villa</h5>
                <p className="card-text">
                  A luxurious villa with a private pool and stunning views.
                </p>
                <p className="text-muted">₹10,000 / night</p>
              </div>
            </div>
          </div>

          {/* Property 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src=".\src\image\h3.png"
                className="card-img-top"
                alt="Beachfront Apartment"
              />
              <div className="card-body">
                <h5 className="card-title">Beachfront Apartment</h5>
                <p className="card-text">
                  An apartment right on the beach, ideal for relaxation and
                  sunsets.
                </p>
                <p className="text-muted">₹6,000 / night</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* booking details */}

              {/* Amenities Section */}
        <div className="container mt-4 Booking-dtl-cont">
          <div className="row">
            <h3>Get Specific with Your Favourite Amenities</h3>
            <p className="text-muted">
              Choose from top features like these – and more – for a personalised stay.
            </p>
            <div className="row">
              {/* Amenities */}
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-swimmer amenity-icon"></i> Pool
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-car amenity-icon"></i> Free Parking
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-tshirt amenity-icon"></i> Washing Machine
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-wind amenity-icon"></i> AC
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-fire amenity-icon"></i> Fireplace
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-tv amenity-icon"></i> TV
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-thermometer-half amenity-icon"></i> Heating
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="amenity-box">
                  <i className="fas fa-utensils amenity-icon"></i> Barbecue 
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Question and Answer Section */}
        <div className="container mt-4 qna-cnt">
          <div className="row">
            <h2>Questions and Answers</h2>
            <p className="text-muted">Find answers to the most common queries about your stay.</p>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="accordion" id="faqAccordion">
                {/* Question 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is the cancellation policy?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Our cancellation policy allows free cancellations up to 48 hours before check-in. After that, a 50% fee applies.
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Are pets allowed on the property?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we welcome pets at select properties. Be sure to check the listing details for pet-friendly options.
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Is Wi-Fi available at all locations?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, high-speed Wi-Fi is available at all properties unless stated otherwise in the listing description.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  );
}
