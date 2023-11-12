import { Input, Typography } from "@material-tailwind/react";
import React from "react";

const ConnectForm = () => {
  return (
    <div>
      <form
        className="mt-3 flex flex-col gap-4 w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Full Name
            </Typography>
            <Input
              placeholder="Enter your name"
              className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Email Address
            </Typography>
            <Input
              maxLength={4}
              placeholder="Enter your email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Subject
            </Typography>
            <Input
              placeholder="Enter your subject"
              className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Phone
            </Typography>
            <Input
              maxLength={4}
              placeholder="+880 1795 937735"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Your message
          </Typography>
          <textarea
            id="exampleTextarea"
            name="exampleTextarea"
            rows="6"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black focus:shadow-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button className="bg-[#17C3B2] text-white min-w-[250px] mx-auto mt-4 py-2 px-4 rounded-md hover:opacity-80 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ConnectForm;
