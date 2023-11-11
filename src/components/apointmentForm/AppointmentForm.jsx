import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

const AppointmentForm = () => {
  const departments = [
    { id: 1, name: "Dental Care" },
    { id: 2, name: "Neurology" },
    { id: 3, name: "Crutches" },
  ];

  const doctors = [
    { id: 1, name: "Dr. Jamal" },
    { id: 2, name: "Dr. Kamal" },
    { id: 3, name: "Dr. Rahim" },
  ];
  return (
    <div className="relative z-10" data-aos="fade-up" data-aos-duration="3000">
      <div className="bg-white p-6 rounded-lg">
        <div className="text-center">
          <h1 className="text-xl lg:text-3xl">Make an Appointment</h1>
        </div>
        <form className="mt-12 flex flex-col gap-4 z-10">
          <div className="flex items-center gap-4">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Name
              </Typography>
              <Input
                maxLength={5}
                containerProps={{ className: "min-w-[72px]" }}
                placeholder="Enter your name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Email
              </Typography>
              <Input
                maxLength={4}
                containerProps={{ className: "min-w-[72px]" }}
                placeholder="Enter your email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Phone
              </Typography>
              <Input
                maxLength={5}
                containerProps={{ className: "min-w-[72px]" }}
                placeholder="+880 1795 937735"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Date
              </Typography>
              <Input
                type="date"
                containerProps={{ className: "min-w-[170px]" }}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Department
              </Typography>
              <div className="relative">
                <select
                  id="department"
                  name="department"
                  className="block appearance-none w-full border-t border-b p-2 pl-3 pr-8 leading-5 focus:outline-none focus:border-t-gray-900 focus:bg-white focus:shadow-md sm:text-sm sm:leading-5 bg-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select a department
                  </option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-t-blue-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Doctor
              </Typography>
              <div className="relative">
                <select
                  id="department"
                  name="department"
                  className="block appearance-none w-full border-t border-b p-2 pl-3 pr-8 leading-5 focus:outline-none focus:border-t-gray-900 focus:bg-white focus:shadow-md sm:text-sm sm:leading-5 bg-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select a doctor
                  </option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-t-blue-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Write something about you
            </Typography>
            <textarea
              id="exampleTextarea"
              name="exampleTextarea"
              rows="4"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black focus:shadow-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button className="bg-[#17C3B2] text-white py-2 px-4 rounded-md hover:bg-[#066158] transition duration-300">
            Check Available Doctors
          </button>
        </form>
      </div>
      <div className="w-60 h-60 bg-white opacity-50 rounded-full animate-ping absolute z-[-1] -left-[15%] bottom-[1%]"></div>
    </div>
  );
};

export default AppointmentForm;
