import * as React from "react";
import "./dashBoard.css";
import ServiceCard from "./ServicesCard";
export const Dashboard = () => {
  return (
    <div>
      <div className="bikeService">
        {/* <img
          className="bikeServiceImg"
          alt="service"
          src="https://media.istockphoto.com/vectors/original-vector-illustration-in-retro-style-vector-id1216789369?k=20&m=1216789369&s=612x612&w=0&h=fXSawBHrkb7twCQFShLfurTgn7R23yXtpWJXu5CW0ys="
        /> */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://img.freepik.com/free-vector/motorcycle-repair-maintenance-service_1150-43150.jpg?w=1380&t=st=1660877925~exp=1660878525~hmac=1a31838a21224756ea05313fc1584564123829d54223dbbbe6194dcf9d685809"
                className="bikeServiceImg"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                className="bikeServiceImg"
                src="https://img.freepik.com/free-photo/bike-creation-workshop_23-2148866654.jpg?w=996&t=st=1660878059~exp=1660878659~hmac=b6ab346ca4b7fc6a876e6136e1d3915a3d5d80e03ed8239c0e0f01feb9e5b9c4"
                // class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                className="bikeServiceImg"
                src="https://as1.ftcdn.net/v2/jpg/01/43/46/40/1000_F_143464078_DQQq4EESzderOVEN2ZS7Fzy7VHQj1T24.jpg"
                // class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ backgroundColor: "black" }}
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
              style={{ backgroundColor: "black" }}
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <ServiceCard />
      </div>
    </div>
  );
};
