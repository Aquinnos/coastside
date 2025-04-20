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
      </div>
    </Layout>
  );
};

export default About;
