"use client";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {
  pageInfo: PageInfo;
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:iqbal.fachry19@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };
  const pageInfo: PageInfo = props.pageInfo;
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl px-6 sm:px-10 pt-24 pb-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 sm:space-y-10 w-full max-w-lg">
        <h4 className="text-xl sm:text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A] underline">Lets Talk.</span>
        </h4>

        <div className="space-y-3 sm:space-y-5">
          <div className="flex items-center space-x-4 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 animate-pulse flex-shrink-0" />
            <p className="text-base sm:text-xl truncate">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 animate-pulse flex-shrink-0" />
            <p className="text-base sm:text-xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput min-h-[100px]"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 sm:py-5 px-10 rounded-md text-black font-bold text-base sm:text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
