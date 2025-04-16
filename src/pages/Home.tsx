import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Layout from '../components/Layout';
import Container from '../components/ui/Container';
import Divider from '../components/ui/Divider';

const Home = () => {
  return (
    <Layout fullWidth>
      <div className="min-h-screen bg-amber-50">
        <Background imageUrl={backgrounds.home}>
          <Container>
            <div className="min-h-screen flex justify-center items-end py-20">
              <div className="flex flex-row flex-wrap items-center justify-center text-black mb-8 ">
                <div className="bg-yellow-100 p-2 h-[74px] sm:rounded-l-lg">
                  <p>Hotel or Destination</p>
                  <select
                    name="select"
                    id="select"
                    className="w-full border-1 border-black rounded-lg p-1"
                  >
                    <option value="Select">Select</option>
                  </select>
                </div>
                <div className="bg-yellow-200 p-2">
                  <p>Arrival</p>
                  <input
                    type="date"
                    className="border-1 border-black rounded-lg p-1"
                  />
                </div>
                <div className="bg-yellow-300 p-2">
                  <p>Departure</p>
                  <input
                    type="date"
                    className="border-1 border-black rounded-lg p-1"
                  />
                </div>
                <div className="bg-yellow-400 p-2 min-h-[74px] flex items-center sm:rounded-r-lg">
                  <button type="button">Book</button>
                </div>
              </div>
            </div>
          </Container>
        </Background>
        <Container className="flex justify-center items-center sm:p-20">
          <div className="h-full w-[75%] flex flex-col justify-center items-center text-black text-center gap-10">
            <h2 className="text-4xl uppercase">
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
          <div className="h-[50vw] flex flex-col justify-between items-center text-black ">
            <h1 className="text-4xl uppercase mt-5">Your Stay</h1>
            <div className="flex flex-row justify-between items-center w-full h-full">
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
                  className="w-full p-2 bg-amber-200 rounded-lg"
                >
                  Explore our rooms
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
