const Hero = () => {
  return (
    <main className='bg-gray-400 text-white bg container mx-auto lg:px-60 px-5 h-[80vh] flex justify-center items-center flex-col'>
      <p className='lg:text-6xl text-4xl head'>FunderFindNG</p>
      <p className='lg:text-xl text-md text-center mt-5 text-white/60'>
        Crowdfunding for the future
      </p>

      <button className='lg:mt-10 mt-5 lg:px-6 px-10 py-3 rounded-full text-base font-bold bg-purple shadow-lg shadow-white/20'>
        Explore FunderFindNG
      </button>
    </main>
  );
};

export default Hero;
