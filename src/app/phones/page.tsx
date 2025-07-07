"use client";

import PhoneCart from "@/components/PhoneCart";
import PhoneCartSkeleton from "@/components/PhoneCartSkeleton";
import { useGetAllPhonesQuery } from "@/redux/features/phones/phonesApi";
import { TPhone } from "@/types/common";
import { useEffect, useState } from "react";

const PhonesPage = () => {
  const {data, isLoading } = useGetAllPhonesQuery({});
  const [phonesData, setPhonesData] = useState<TPhone[]>([]);

  useEffect(() => {
    if (data?.data) {
      setPhonesData(data.data);
    }
  }, [data?.data]);

  return (
    <section className="bg-base-100 mt-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Phones</h1>
        <p className="mt-4">{phonesData.length} items found in Phones</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 my-10">
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <PhoneCartSkeleton key={index} />
            ))
          ) : phonesData.length > 0 ? (
            phonesData.map((phone) => <PhoneCart key={phone._id} phone={phone}/>)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No phones available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhonesPage;
