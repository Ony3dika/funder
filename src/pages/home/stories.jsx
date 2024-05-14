const Stories = () => {
  return (
    <main className='container mx-auto lg:px-60 px-5 mt-10 flex flex-col items-center lg:flex-row h-64'>
      <section className='basis-1/3'>
        <p className='text-2xl font-semibold'>Where Success Stories Align</p>

        <p className='mt-5 text-md text-text'>
          Trusted by top start-ups and renowned investors who have achieved
          success through FunderFindNG. Join our esteemed community today.
        </p>

        <button className='lg:mt-10 mt-5 lg:px-6 px-10 py-3 rounded-full text-base text-white font-bold bg-purple shadow-lg shadow-purple/70'>
          Explore More
        </button>
      </section>
      <section className='basis-2/3 bg-green-400'></section>
    </main>
  );
};

export default Stories;
