import Layout from '../components/Layout';
import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Container from '../components/ui/Container';
import Divider from '../components/ui/Divider';

const Rooms = () => {
  return (
    <Layout fullWidth>
      <div className="min-h-screen">
        <Background imageUrl={backgrounds.rooms}>
          <Container>
            <div className="min-h-screen flex justify-center items-end">
              <div className="flex flex-col sm:flex-row flex-wrap max-w-4xl items-center justify-center  text-center py-20 px-5 my-5 bg-white rounded-lg background-blur-sm gap-5 text-black">
                <h2 className="text-3xl sm:text-4xl uppercase">Our Rooms</h2>
                <p className="sm:text-lg md:text-center ">
                  Experience the perfect blend of comfort and style in our
                  thoughtfully designed rooms. Each room is a sanctuary of
                  relaxation, featuring modern amenities and stunning views.
                  From cozy singles to spacious suites, we have the perfect
                  space for every traveler. Enjoy a restful night’s sleep and
                  wake up refreshed, ready to explore all that Coastside has to
                  offer.
                </p>
              </div>
            </div>
          </Container>
        </Background>
        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-3xl sm:text-4xl uppercase mt-5 text-center">
              🛏 Deluxe Garden Retreat
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full">
              <div className="p-5 flex-1/2">
                <img
                  src={backgrounds.homeSection2}
                  alt="Hotel"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 flex-1/2 flex flex-col gap-2 items-center sm:items-start">
                <h3 className="text-xl uppercase">
                  Spacious comfort with a view.
                </h3>
                <p className="text-center sm:text-justify">
                  Enjoy a tranquil escape with views of the ocean and mountains.
                  This room blends natural design with luxury touches to create
                  a peaceful setting for your getaway.
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

        <Divider />

        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-3xl sm:text-4xl uppercase mt-5 text-center">
              🛏 Cozy Escape
            </h2>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center w-full h-full">
              <div className="p-5 flex-1/2">
                <img
                  src={backgrounds.homeSection3}
                  alt="Hotel"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 flex-1/2 flex flex-col gap-2 items-center sm:items-start">
                <h3 className="text-xl uppercase ">
                  Small details, big comfort.
                </h3>
                <p className="text-center sm:text-justify">
                  Warm and inviting, this room offers everything you need for a
                  relaxing stay — perfect for couples looking to unwind in a
                  peaceful coastal setting.
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

        <Divider />

        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-3xl sm:text-4xl uppercase mt-5 text-center ">
              Compare Room Features
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-stretch w-full h-full text-black gap-8 mb-20 p-5">
            <div className="p-8 max-w-md flex-1 flex flex-col justify-center items-center bg-amber-200 rounded-lg min-h-[600px]">
              <h3 className="text-3xl text-center mb-6">-- Deluxe --</h3>
              <p className="text-center mb-6">
                Ideal for guests who want a little more room, more light, and
                breathtaking views. The Deluxe offers comfort without
                compromise.
              </p>
              <ul className="space-y-3">
                <li>
                  🏞 Mountain & Sea View – dual view for an elevated experience
                </li>
                <li>🛋 Extra Spacious – more room to stretch out and relax</li>
                <li>🌐 Free High-Speed Wi-Fi – always connected</li>
                <li>📺 Apple TV & 150+ Channels – premium entertainment</li>
                <li>
                  🛏 Beds made & ready on arrival – with fresh linen and towels
                </li>
                <li>🧴 Luxury Cowshed Spa Toiletries – for a boutique feel</li>
                <li>🚗 Private Parking Spot – easy and secure</li>
                <li>⏱ Check-in at 4 PM / Check-out at 10 AM</li>
              </ul>
            </div>
            <div className="p-8 max-w-md flex-1 flex flex-col justify-center items-center bg-amber-200 rounded-lg min-h-[600px]">
              <h3 className="text-3xl text-center mb-6">-- Cozy --</h3>
              <p className="text-center mb-6">
                Perfect for couples or solo travelers looking for quiet comfort
                surrounded by nature — with all the essentials.
              </p>
              <ul className="space-y-3">
                <li>🌄 Mountain & Sea View – peaceful natural surroundings</li>
                <li>🛏 Spacious Design – cozy yet open layout</li>
                <li>🌐 Free High-Speed Wi-Fi – stay connected effortlessly</li>
                <li>📺 Apple TV & 150+ Channels – unwind after a day out</li>
                <li>🧺 Beds freshly prepared for your arrival</li>
                <li>🧴 Cowshed Spa Toiletries – gentle, natural care</li>
                <li>🚘 Private Parking Available</li>
                <li>⏱ Check-in at 4 PM / Check-out at 10 AM</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Rooms;
