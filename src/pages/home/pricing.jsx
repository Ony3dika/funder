import { PiLightning } from "react-icons/pi";
import { PiRocket } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Pricing = () => {
  let prices = [
    {
      price: "$0",
      icon: <PiLightning size={"2rem"} className='text-purple' />,
      name: "Basic",
      txt: "Perfect for beginners",
      heading: "Perfect for beginners",
      details: (
        <ul className='leading-10'>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            User Profiles & Listings
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Escrow Service & Milestone Tracking
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Integrated Messaging System
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Analytics Dashboard
          </li>
          <li className='flex items-center'>
            <IoCloseOutline size={"1.3rem"} className='mr-2 text-gray-500' />
            Premium Plans & Advisory Services
          </li>
          <li className='flex items-center'>
            {" "}
            <IoCloseOutline size={"1.3rem"} className='mr-2 text-gray-500' />
            Community Forum Access
          </li>
          <li className='flex items-center'>
            <IoCloseOutline size={"1.3rem"} className='mr-2 text-gray-500' />
            Customizable White Label Solutions
          </li>
          <li className='flex items-center'>
            {" "}
            <IoCloseOutline size={"1.3rem"} className='mr-2 text-gray-500' />
            Advanced Security Features
          </li>
        </ul>
      ),

      btn: (
        <button className='rounded-full px-5 py-3 mt-8 text-purple bg-[#f0f3f9]'>
          Get Started
        </button>
      ),
    },
    {
      price: "$50",
      icon: <SlPeople size={"2rem"} className='text-purple' />,
      name: "Pro",
      txt: "Balanced features and value",
      heading: "Balanced features and value",
      details: (
        <ul className='leading-10'>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            User Profiles & Listings
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Escrow Service & Milestone Tracking
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Integrated Messaging System
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Analytics Dashboard
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Premium Plans & Advisory Services
          </li>
          <li className='flex items-center'>
            {" "}
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Community Forum Access
          </li>
          <li className='flex items-center'>
            <IoCloseOutline size={"1.3rem"} className='mr-2 text-gray-500' />
            Customizable White Label Solutions
          </li>
          <li className='flex items-center'>
            {" "}
            <IoCloseOutline size={"1.3rem"} className='mr-2 text-gray-500' />
            Advanced Security Features
          </li>
        </ul>
      ),

      btn: (
        <button className='rounded-full px-5 py-3 mt-8 bg-purple shadow-lg shadow-purple/60 text-[#f0f3f9]'>
          Upgrade Now
        </button>
      ),
    },
    {
      price: "$100",
      icon: <PiRocket size={"2rem"} className='text-purple' />,
      name: "Premium",
      txt: "Maximize your project's potential",
      heading: "Maximize your project's potential",
      details: (
        <ul className='leading-10'>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            User Profiles & Listings
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Escrow Service & Milestone Tracking
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Integrated Messaging System
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Analytics Dashboard
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Premium Plans & Advisory Services
          </li>
          <li className='flex items-center'>
            {" "}
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Community Forum Access
          </li>
          <li className='flex items-center'>
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Customizable White Label Solutions
          </li>
          <li className='flex items-center'>
            {" "}
            <IoCheckmarkOutline size={"1.3rem"} className='mr-2 text-purple' />
            Advanced Security Features
          </li>
        </ul>
      ),
      btn: (
        <button className='rounded-full px-5 py-3 mt-8 text-purple bg-[#f0f3f9]'>
          Unlock Now
        </button>
      ),
    },
  ];
  return (
    <main className='container mx-auto lg:px-48 px-5 lg:mt-56 mt-20'>
      <p className='text-purple text-center font-bold'>Pricing</p>
      <p className='font-bold lg:text-4xl text-2xl mt-3 text-center'>
        Elevate Your Funding Experience
      </p>
      <p className='text-center text-text mt-3'>
        Discover the perfect plan to support your venture&apos;s growth and
        success
      </p>

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-10'>
        {prices.map((price, index) => (
          <div
            className={`h-fit rounded-lg p-5 py-8 lg:my-0 my-4 ${index === 1 ? "bg-white shadow-3lg shadow-gray-200" : ""}`}
            key={index}
          >
            <div className='flex justify-between items-center'>
              <p className='font-bold text-4xl'>{price.price}</p>
              {price.icon}
            </div>
            <p className='font-bold text-lg mt-3'>{price.name}</p>

            <p className='mt-3 text-text'>{price.heading}</p>

            <section className='text-text mt-6 lg:text-base text-xs'>
              {price.details}
            </section>

            {price.btn}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Pricing;
