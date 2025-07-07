import PhoneCart from "@/components/PhoneCart";

const PhonesPage = () => {
    return(
        <section className="bg-base-100 mt-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold">Phones</h1>
                <p className="mt-4">This is where you can find all the latest phones.</p>   
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 my-10">
                    <PhoneCart/>
                    <PhoneCart/>    
                    <PhoneCart/>
                    <PhoneCart/>  
                    <PhoneCart/>
                    <PhoneCart/>
                    <PhoneCart/>
                    <PhoneCart/>    
                    <PhoneCart/>
                    <PhoneCart/>  
                    <PhoneCart/>
                    <PhoneCart/>    
                </div>
            </div>
        </section>
    )
}

export default PhonesPage;