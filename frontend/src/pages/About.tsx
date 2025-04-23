import Layout from '../components/Layout';
import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Container from '../components/ui/Container';

const About = () => {
  return (
    <Layout fullWidth>
      <div>
        <Background imageUrl={backgrounds.about}>
          <Container>
            <div className="min-h-screen flex justify-center items-end">
              <div className="flex flex-col sm:flex-row flex-wrap max-w-4xl items-center justify-center  text-center py-20 my-5 px-5 opacity-70 gap-5 bg-white text-black rounded-lg">
                <h2 className="text-4xl uppercase">
                  🌴 Coastside – Where the Sea Meets Serenity
                </h2>
              </div>
            </div>
          </Container>
        </Background>
        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-3xl sm:text-4xl uppercase mt-5 text-center">
              🏞 About us
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center w-full h-full">
              <div className="p-5">
                <img
                  src={backgrounds.homeSection2}
                  alt="Hotel"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 items-center">
                <p className="text-center sm:text-justify">
                  Nestled along the calm waters of the Imerovigli River,
                  Riverside Hotel was designed to offer more than just a place
                  to stay — it’s a place to slow down, reconnect, and feel at
                  home. Here, history and nature meet. Surrounded by charming
                  cobblestone streets and river views, our hotel reflects the
                  timeless character of the Imerovigli village — quiet, warm,
                  and full of soul. With handcrafted interiors, locally sourced
                  cuisine, and thoughtful hospitality, Riverside is a
                  destination for those who value authentic moments and peaceful
                  escapes.
                </p>
                <button
                  type="button"
                  className="w-full p-2 bg-amber-200 rounded-lg hover:bg-amber-300 transition-colors"
                  onClick={() => {
                    window.location.href = '/';
                  }}
                >
                  Explore our website
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default About;
