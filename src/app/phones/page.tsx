import PhoneCart from "@/components/PhoneCart";

const PhonesPage = () => {
    return(
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Phones Page</h1>
            <p className="text-center mt-4">This is where you can find all the latest phones.</p>   
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 p-6">
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
    )
}

export default PhonesPage;