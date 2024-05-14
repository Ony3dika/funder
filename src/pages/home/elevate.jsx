import img3 from "../../assets/email.png";
import img4 from "../../assets/feat.png";
import img5 from "../../assets/world.png";
import img6 from "../../assets/sub.png";

const Elevate = () => {
  return (
    <main className='container mx-auto lg:px-60 px-5 lg:mt-56 mt-20'>
      <p className='text-center font-bold text-3xl lg:text-6xl'>
        Elevate Your <br /> Experience
      </p>
      <p className='text-text mt-3 text-center text-xl'>
        with FunderFindNG&apos;s Key Features
      </p>

      <section className='lg:grid grid-cols-3 h-fit gap-4 mt-10 lg:mx-12 mx-4'>
        <div className='bg-white shadow-3lg shadow-gray-200 col-span-2 flex px-4 items-center justify-end lg:my-0 my-5 pb-8 flex-col h-80 rounded-lg'>
          <img src={img3} className='h-60 object-contain' alt='' />
          <p className='text-2xl font-semibold text-center'>Messaging</p>

          <p className='mt-1 text-md text-text'>
            Clear communication between parties
          </p>
        </div>

        <div className='bg-white shadow-3lg shadow-gray-200 rounded-lg flex px-4 flex-col items-center justify-end lg:my-0 my-5 pb-8 h-80'>
          <img src={img4} className='h-48' alt='' />
          <p className='text-2xl font-semibold text-center'>
            Analytics Dashboard
          </p>

          <p className='mt-1 text-md text-text text-center'>
            Stay informed of your projects&apos; progress
          </p>
        </div>

        <div className='bg-white shadow-3lg shadow-gray-200 rounded-lg h-80 flex px-4 flex-col items-center justify-end pb-8'>
        <img src={img5} alt="" />
          <p className='text-2xl font-semibold text-center'>Premium Plans</p>

          <p className='mt-1 text-md text-text text-center'>
            Unlock exclusive benefits for your ventures
          </p>
        </div>

        <div className='bg-white shadow-3lg shadow-gray-200 rounded-lg col-span-2 flex-col flex px-4 items-center lg:my-0 my-5 h-80 justify-end pb-8'>
          <p className='text-2xl font-semibold text-center'>
            Robust Security Measures
          </p>

          <p className='mt-1 text-md text-text text-center'>
            Uncompromised protection for transactions and data
          </p>

          <img src={img6} className="h-44 mt-5 object-contain" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Elevate;
