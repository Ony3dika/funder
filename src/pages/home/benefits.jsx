import { BsLightningFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";
import { FaBookBookmark } from "react-icons/fa6";

const Benefits = () => {
  let benefits = [
    {
      icon: <BsLightningFill size={"2rem"} />,
      caption: "Secure Funding",
      text: "Confidence through milestone-based fund releases",
    },
    {
      icon: <FaUsers size={"2rem"} />,
      caption: "Connections",
      text: "Expand network and collaborate with like-minded individuals",
    },
    {
      icon: <BsFillRocketFill size={"2rem"} />,
      caption: "Resources",
      text: "Guidance via advisory services, forums, and educational content",
    },
    {
      icon: <FaBookBookmark size={"2rem"} />,
      caption: "Diverse Opportunities",
      text: "Wide-ranging, carefully vetted investment prospects",
    },
  ];
  return (
    <main className='container mx-auto lg:px-48 px-5 lg:mt-32 mt-20'>
      <p className='text-purple text-center font-bold'>Benefits</p>
      <p className='font-bold lg:text-4xl text-2xl mt-3 text-center'>
        Unlocking Opportunities
      </p>
      <p className='text-center text-text mt-3'>
        Security, Access, and Resources for Entrepreneurs and Investors
      </p>

      <section className='mt-10 flex lg:flex-row flex-col h-fit  items-center justify-between'>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className='lg:basis-[23%] w-[85%] rounded-lg lg:my-0 my-5 p-6 lg:py-6 py-12 bg-white shadow-lg shadow-black/10'
          >
            <div className='mt-5 text-purple flex lg:block justify-center'>
              {benefit.icon}
            </div>
            <p className='font-bold mt-10 lg:text-start text-center'>
              {benefit.caption}
            </p>

            <p className='text-text mt-2 lg:text-start text-center'>
              {benefit.text}
            </p>
          </div>
        ))}
      </section>

      <section></section>
    </main>
  );
};

export default Benefits;
