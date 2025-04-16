import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Layout from '../components/Layout';
import Container from '../components/ui/Container';

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
        <Container>
          <div className="h-[50vw]">
            <div></div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
