import { PiMagicWandLight } from "react-icons/pi";

const Footer = () => {
  return (
    <main className='container mx-auto lg:px-40 px-5 lg:mt-56 mt-20 h-56'>
      <div className='flex justify-center'>
        <PiMagicWandLight size={"2.5rem"} className='text-purple' />
      </div>
      <p className='lg:text-5xl text-3xl mt-5 head text-center'>
        Join FunderFindNG Today
      </p>

      <div className='flex justify-center items-center mt-5'>
        <button className='px-5 py-3 rounded-full text-white font-bold bg-purple shadow-lg shadow-purple/60'>
          Join Now
        </button>
      </div>

      <section className='flex lg:flex-row flex-col justify-between h-64 mt-20 pb-10'>
        <div className='basis-1/5'>
          <p className='text-text'>Get In Touch</p>
        </div>

        <div className='basis-1/3 flex justify-between lg:justify-around'>
          <ul className='text-text leading-8'>
            <li>Product</li>
            <li>Features</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Docs</li>
          </ul>

          <ul className='text-text leading-8'>
            <li>Resources</li>
            <li>Community</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Footer;
