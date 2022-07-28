import React from "react";
import "./DoctorSection.css";
import Doctor from "./Doctor.js";

const doctors = [
  {
    doctorname: "Dr. Abc Xyz1",
    doctorspl: "XYZ",
    doctor_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi.",
    doctor_img:"https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130",
  },
  {
    doctorname: "Dr. Abc Xyz2",
    doctorspl: "XYZ",
    doctor_desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    doctor_img:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    doctorname: "Dr. Abc Xyz2",
    doctorspl: "XYZ",
    doctor_desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    doctor_img:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    doctorname: "Dr. Abc Xyz2",
    doctorspl: "XYZ",
    doctor_desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    doctor_img:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    doctorname: "Dr. Abc Xyz2",
    doctorspl: "XYZ",
    doctor_desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    doctor_img:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const DoctorSection = () => {
  return (
    <div>
      <div className="doctorheading text-center">Doctors</div>
      <div className="doctor-section">
          <section id="cards">
            <div className="container py-2">
              <div className="row">
                {doctors.map(function (item) {
                  return <Doctor item={item} key={item.doctorname} />;
                })}
              </div>
            </div>
          </section>
      </div>
    </div>
  );
};

export default DoctorSection;
