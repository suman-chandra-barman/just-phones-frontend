'use client'

const PhoneDetailsSkeleton = () => {
  return (
    <section className="container mx-auto mt-10 bg-base-100 shadow rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6 animate-pulse">
        {/* Left - Image */}
        <div className="p-2 md:p-6 flex-1 border-r border-gray-200">
          <div className="w-full h-96 bg-gray-200 rounded-xl"></div>
        </div>

        {/* Right - Content */}
        <div className="p-2 md:p-6 flex-2 space-y-3 w-full">
          <div className="flex justify-between items-start">
            <div className="h-6 w-48 bg-gray-200 rounded-md"></div>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
            </div>
          </div>

          <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
          <div className="h-4 w-52 bg-gray-200 rounded-md"></div>
          <div className="h-4 w-36 bg-gray-200 rounded-md"></div>
          <div className="h-8 w-32 bg-gray-300 rounded-md"></div>
          <div className="h-3 w-48 bg-gray-200 rounded-md"></div>

          {/* Divider */}
          <div className="h-1 bg-gray-100 my-4" />

          {/* Key Specifications */}
          <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
          <div className="h-5 w-28 bg-gray-200 rounded-md"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-20 bg-gray-200 rounded-md"></div>
                <div className="h-3 w-16 bg-gray-100 rounded-md"></div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-1 bg-gray-100 my-4" />

          {/* Extras */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-28 bg-gray-200 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhoneDetailsSkeleton
