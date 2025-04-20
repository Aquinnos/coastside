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
            <div className="min-h-screen flex justify-center items-end">
              <div className="flex flex-col sm:flex-row flex-wrap max-w-4xl items-center justify-center  text-center py-20 my-5 px-5 opacity-70 gap-5 bg-white text-black rounded-lg">
                <h2 className="text-4xl uppercase">✍️ We’re Here for You</h2>
              </div>
            </div>
          </Container>
        </Background>
        <Container>
          <div className="min-h-full flex flex-col justify-between items-center text-black gap-10 py-20">
            <h2 className="text-3xl sm:text-4xl uppercase mt-5 text-center">
              Contact us
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full">
              <form
                action="post"
                className="flex flex-col justify-center items-center w-4xl bg-amber-100 rounded-lg shadow-md"
              >
                <div className="p-5 w-full px-20">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="p-5 px-20 w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="p-5 px-20 w-full">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <div className="p-5 px-20 w-full">
                  <button
                    type="submit"
                    className="w-full p-2 bg-amber-200 rounded-lg hover:bg-amber-300 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
