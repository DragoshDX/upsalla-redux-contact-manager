import { Link } from 'react-router-dom';
import { Layout } from '../layouts/Layout';

export const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <Link to="/contacts">Contact</Link>
      </div>
    </Layout>
  );
};
