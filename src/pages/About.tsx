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
            <div></div>
          </Container>
        </Background>
      </div>
    </Layout>
  );
};

export default About;
