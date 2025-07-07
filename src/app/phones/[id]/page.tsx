import PhoneDetailsCart from '@/components/PhoneDetailsCart';
import { use } from 'react';

const PhoneDetailsPage = ({params}:{ params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <section className="container mx-auto mt-10 bg-base-100 shadow rounded-lg">
      <PhoneDetailsCart id={id} />
    </section>
  );
}

export default PhoneDetailsPage;