import Layout from '../components/Layout';
import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Container from '../components/ui/Container';

const Contact = () => {
  return (
    <Layout fullWidth>
      <div>
        <Background imageUrl={backgrounds.contact}>
          <Container>
            <div></div>
          </Container>
        </Background>
      </div>
    </Layout>
  );
};

export default Contact;
