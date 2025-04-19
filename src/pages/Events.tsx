import Layout from '../components/Layout';
import Background from '../components/Background';
import { backgrounds } from '../data/images';
import Container from '../components/ui/Container';

const Events = () => {
  return (
    <Layout fullWidth>
      <div>
        <Background imageUrl={backgrounds.events}>
          <Container>
            <div></div>
          </Container>
        </Background>
      </div>
    </Layout>
  );
};

export default Events;
