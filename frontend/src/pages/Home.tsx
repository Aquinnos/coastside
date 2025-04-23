'use client';

import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Layout from '../components/Layout';
import Container from '../components/ui/Container';
import Divider from '../components/ui/Divider';
import Carousel from '../components/ui/Carousel';
import { slideData } from '../data/images';

const Home = () => {
  return (
    <Layout fullWidth>
      <div className="min-h-screen bg-amber-50">
        <Background imageUrl={backgrounds.home}>
          <Container>
            <div className="min-h-screen flex justify-center items-end py-20">
              <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 w-full max-w-3xl">
                <h3 className="text-xl font-semibold mb-4 text-amber-300">
                  Book Your Stay
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="select"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Hotel or Destination
                    </label>
                    <div className="relative">
                      <select
                        name="select"
                        id="select"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all appearance-none text-black"
                      >
                        <option value="">Select location</option>
                        <option value="coastside-main">
                          Coastside Main Hotel
                        </option>
                        <option value="coastside-beach">
                          Coastside Beach Resort
                        </option>
                        <option value="coastside-mountain">
                          Coastside Mountain Lodge
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="arrival"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      id="arrival"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all text-black"
                    />
                  </div>

                  <div className="flex-1 ">
                    <label
                      htmlFor="departure"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Departure Date
                    </label>
                    <input
                      type="date"
                      id="departure"
                      className="w-full p-3 border border-gray-300  rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all text-black"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="bg-amber-200 hover:bg-amber-300 text-black px-8 py-3 rounded-lg font-medium shadow-md transition-colors flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </Background>
        <Container className="flex justify-center items-center sm:py-20 ">
          <div className="h-full w-[80%] flex flex-col justify-center items-center text-black text-center gap-10 py-10">
            <h2 className="text-3xl sm:text-4xl uppercase">
              Welcome to <span className="text-yellow-500">Coastside</span>
            </h2>
            <p>
              Discover a place where the calm rhythm of the coast meets warm
              hospitality and timeless charm. At Coastside, we believe that true
              comfort lies in the details — a soft bed, a welcoming smile, and
              the sound of nature just outside your window. Our hotel was
              created for those who seek more than just a place to sleep.
              Whether you're here for relaxation, inspiration, or a special
              occasion, Coastside is your home away from home. Let the sea
              breeze refresh your mind and the cozy atmosphere help you unwind.
              Your journey begins here — and we’re here to make it
              unforgettable.
            </p>
          </div>
        </Container>

        <Divider />

        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-3xl sm:text-4xl uppercase mt-5">🛏 Your Stay</h2>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full">
              <div className="p-5 flex-1/2">
                <img
                  src={backgrounds.homeSection1}
                  alt="Hotel"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 flex-1/2 flex flex-col gap-2">
                <h3 className="text-xl uppercase">
                  Comfort. Style. Simplicity.
                </h3>
                <p>
                  Relax in spacious, elegant rooms designed to help you unwind.
                  Whether you're here for one night or a full escape — your
                  comfort comes first.
                </p>
                <button
                  type="button"
                  className="w-full p-2 bg-amber-200 rounded-lg hover:bg-amber-300 transition-colors"
                  onClick={() => {
                    window.location.href = '/rooms';
                  }}
                >
                  Explore our rooms
                </button>
              </div>
            </div>
          </div>
        </Container>

        <Divider />

        <Container>
          <div className="relative overflow-hidden w-full h-full py-20 flex flex-col justify-center items-center gap-10">
            <h2 className="text-3xl sm:text-4xl uppercase text-black">
              🎉 What’s On
            </h2>
            <Carousel slides={slideData} />
          </div>
        </Container>

        <Divider />

        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-3xl sm:text-4xl uppercase mt-5 max-[497px]:text-center">
              🛏 Savor the Experience
            </h2>
            <div className="flex flex-col sm:flex-row-reverse items-center w-full h-full">
              <div className="p-5 flex-1/2">
                <img
                  src={backgrounds.homeSection3}
                  alt="Hotel"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 flex-1/2 flex flex-col gap-2">
                <h3 className="text-xl uppercase">
                  Crafted with passion, served with care.
                </h3>
                <p>
                  Our chefs bring together local ingredients and creative flair
                  to offer a culinary journey inspired by the coast. From
                  elegant plates to bold flavors — every bite tells a story.
                </p>
                <button
                  type="button"
                  className="w-full p-2 bg-amber-200 rounded-lg hover:bg-amber-300 transition-colors "
                  onClick={() => {
                    window.location.href = '/about';
                  }}
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
