import { BsStars } from "react-icons/bs";
import { IoDocumentLock } from "react-icons/io5";
import { PiStepsFill } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import img1 from "../../assets/sftww.png";
import img2 from "../../assets/dash.avif";
const Feature = () => {
  let features = [
    {
      caption: "User Profile Precision",
      icon: <BsStars size={"1.4rem"} />,
    },
    {
      caption: "Secure Milestone Tracking",
      icon: <IoDocumentLock size={"1.4rem"} />,
    },
    {
      caption: "Diverse Project Listings",
      icon: <PiStepsFill size={"1.4rem"} />,
    },
    {
      caption: "Diverse Project Listings",
      icon: <BsFillSendFill size={"1.4rem"} />,
    },
  ];
  return (
    <main className='container mx-auto lg:px-60 px-5 lg:mt-56 mt-20'>
      <section className='flex lg:flex-row flex-col'>
        {" "}
        <div className='basis-1/2'>
          <p className='text-purple font-bold '>Feature Highlight</p>
          <p className='font-bold lg:text-4xl text-2xl mt-5 '>
            Profile Precision Meets Milestone Assurance
          </p>
          <p className='mt-5 text-text'>
            Experience transparent and secure crowdfunding with our user
            profiles, project listings, escrow service, and milestone tracking.
            Gain clarity and confidence in every step of your journey. With
            FunderFindNG, your vision is secure and on track for success!
          </p>

          <div className='mt-10 grid gap-6 grid-cols-1 lg:grid-cols-2'>
            {features.map((feature, index) => (
              <div key={index} className='flex items-center text-text'>
                <div className='mr-3 text-purple'>{feature.icon}</div>{" "}
                <p>{feature.caption}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Section 2 */}
        <div className='basis-1/2 lg:mt-0 mt-10 flex items-end'>
          <img src={img1} alt='' />
        </div>
      </section>

      {/* Community & Learning */}
      <section className='flex lg:flex-row flex-col lg:mt-60 mt-24'>
        <div className='basis-1/2'>
          <p className='text-purple font-bold '>Community & Learning</p>
          <p className='font-bold lg:text-4xl text-2xl mt-5 '>
            Amplify Your Impact
          </p>
          <p className='mt-5 text-text'>
            Engage, learn, and grow with our supportive community and resources
          </p>

          <div className='mt-10 text-text'>
            <div className='flex items-center'>
              <BsStars className='text-purple mr-1' size={"1.5rem"} />
              <p>Learning & Collaboration</p>
            </div>

            <div className='flex items-center mt-5'>
              <IoDocumentLock className='text-purple mr-1' size={"1.5rem"} />
              <p>Networking Opportunities</p>
            </div>

            <div className='flex items-center mt-5'>
              <PiStepsFill className='text-purple mr-1' size={"1.5rem"} />
              <p>Valuable Guidance & Mentorship</p>
            </div>
          </div>
        </div>

        <div className='basis-1/2 flex items-baseline lg:mt-0 mt-10'>
          <img src={img2}  alt="" />
        </div>
      </section>
    </main>
  );
};

export default Feature;
