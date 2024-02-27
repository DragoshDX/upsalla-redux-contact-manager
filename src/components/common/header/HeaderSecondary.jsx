import { Button } from '../../ui';

export const HeaderSecondary = () => {
  return (
    <section className="bg-gray-200 py-2 border-b border-b-gray-500">
      <div className="container mx-auto px-4">
        <Button title="Add Contact" skin="success">
          Add Contact
        </Button>
        add contact daca e logat <br></br>
        login daca e nelogat (componenta)
      </div>
    </section>
  );
};
