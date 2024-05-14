import girl from "../../assets/girl.jpg";

const Community = () => {
  let communityStories = [
    {
      name: "Jasmine L",
      position: "Entrepreneur",
      story:
        "FunderFindNG transformed my startup journey with milestone funding, making it secure and rewarding.",
      headshot: girl,
    },

    {
      name: "Olivia P",
      position: "Entrepreneur",
      story:
        "The community engagement and education resources are a definite game-changer!",
      headshot: girl,
    },

    {
      name: "Daniel S",
      position: "Entrepreneur",
      story:
        "The support and advice I received have proven invaluable for getting my business off the ground.",
      headshot: girl,
    },

    {
      name: "Steven W",
      position: "Investor",
      story:
        "I discovered FunderFindNG as a reliable platform that opens up amazing opportunities for investors like me.",
      headshot: girl,
    },

    {
      name: "Anthony K",
      position: "Investor",
      story:
        "FunderFindNG provides a secure and transparent environment, making it easy for me to support new and innovative projects.",
      headshot: girl,
    },

    {
      name: "Rachel L",
      position: "Investor",
      story:
        "Insights and analytics tools on FunderFindNG make investment decisions so much easier.",
      headshot: girl,
    },
  ];

  return (
    <main className='container mx-auto lg:px-60 px-5 lg:mt-56 mt-20'>
      <p className='text-purple text-center font-bold'>Join the Community</p>
      <p className='font-bold lg:text-4xl text-2xl mt-3 text-center'>
        Community Success Stories
      </p>

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-0 mx-4 mt-10'>
        {communityStories.map((story, index) => (
          <div
            className='rounded-lg h-60 p-6 bg-white shadow-gray-200 shadow-lg'
            key={index}
          >
            <div className='flex'>
              <img src={story.headshot} className='h-14 rounded-full' alt='' />
              <p className='ml-4 font-bold'>{story.name}</p>
            </div>

            <p className='mt-5 text-black/80'>{story.story}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Community;
