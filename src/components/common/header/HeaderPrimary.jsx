import { Link } from 'react-router-dom';

export const HeaderPrimary = () => {
  return (
    <section className="border-b border-b-gray-500 py-4">
      <div className="container mx-auto px-4">
        <h1 className="font-semibold text-2xl">
          <Link to="/" title="Home">
            Contact Manager
          </Link>
        </h1>
      </div>
    </section>
  );
};
