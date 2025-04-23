import Layout from '../components/Layout';
import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Container from '../components/ui/Container';
import Divider from '../components/ui/Divider';

const Events = () => {
  return (
    <Layout fullWidth>
      <div>
        <Background imageUrl={backgrounds.events}>
          <Container>
            <div className="min-h-screen flex justify-center items-end">
              <div className="flex flex-col sm:flex-row flex-wrap max-w-4xl items-center justify-center  text-center py-20 my-5 px-5 opacity-70 gap-5 bg-white text-black rounded-lg">
                <h2 className="text-4xl uppercase">
                  🕊 Unforgettable Occasions
                </h2>
                <p className="text-lg md:text-center ">
                  Celebrate life’s most meaningful moments with us. Whether
                  you’re dreaming of a romantic wedding, planning a corporate
                  retreat, or organizing an intimate family gathering — our
                  dedicated team is here to make it truly special.
                </p>
              </div>
            </div>
          </Container>
        </Background>
        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-4xl uppercase mt-5">🎶 Live Music Nights</h2>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full">
              <div className="p-5 flex-1/2">
                <img
                  src={backgrounds.musicnight}
                  alt="Hotel"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 flex-1/2 flex flex-col gap-2 items-center sm:items-start">
                <h3 className="text-xl uppercase text-center sm:text-left">
                  Good music. Great vibes. Coastal breeze.
                </h3>
                <p className="text-center sm:text-justify ">
                  Join us every weekend as our terrace transforms into a cozy
                  stage for unforgettable musical moments. From soft acoustic
                  sets and soulful jazz, to piano classics under the stars — our
                  Live Music Nights are designed to help you unwind, connect,
                  and enjoy the moment. Sip on signature cocktails, savor
                  gourmet bites, and let the music guide your evening. Whether
                  you’re here with friends, family, or someone special, it’s the
                  perfect way to end the day.
                </p>
                <button
                  type="button"
                  className="w-full p-2 bg-amber-200 rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Free entry for hotel guests
                </button>
              </div>
            </div>
          </div>
        </Container>

        <Divider />

        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-4xl uppercase mt-5">🧘 Wellness Retreats</h2>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center w-full h-full">
              <div className="p-5 flex-1/2">
                <img src={backgrounds.spa} alt="Hotel" className="rounded-lg" />
              </div>
              <div className="p-5 flex-1/2 flex flex-col gap-2 items-center sm:items-start">
                <h3 className="text-xl uppercase text-center sm:text-left">
                  Find your balance by the sea.
                </h3>
                <p className="text-center sm:text-justify ">
                  Step away from the noise and reconnect with yourself. Our
                  carefully designed wellness retreats combine coastal calm with
                  professional care — including guided yoga and meditation
                  sessions, personalized spa treatments, and nourishing cuisine.
                  Whether you're joining a group retreat or creating a custom
                  solo escape, every element is curated to relax your body,
                  clear your mind, and uplift your spirit. Enjoy serene views,
                  soothing sounds of nature, and moments made just for you.
                </p>
                <button
                  type="button"
                  className="w-full p-2 bg-amber-200 rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Custom packages available
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Events;
