import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
            earum quisquam. Deserunt molestiae omnis culpa quia beatae
            blanditiis, qui non magni fugit eaque, tempore explicabo repellendus
            iure! Nesciunt, eveniet voluptates. Veritatis, dolore! Minus,
            nostrum perspiciatis corporis magnam necessitatibus aliquam dolore
            tempora vitae inventore. Eius quos dicta incidunt sapiente sed
            facilis doloremque nostrum. Deleniti iure saepe inventore ea
          </p>
          <Link to="/">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-150">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
