'use client'

const PhoneCartSkeleton = () => {
  return (
    <div className="card bg-white rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
      <div className="absolute top-2 right-2 z-10 bg-white p-1 rounded-full shadow opacity-50">
        <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
      </div>

      {/* Image Skeleton */}
      <figure className="p-4 flex justify-center items-center h-40">
        <div className="w-full h-full rounded-xl bg-gray-200 animate-pulse" />
      </figure>

      {/* Content Skeleton */}
      <div className="card-body pt-0">
        <div className="h-4 w-3/4 bg-gray-200 rounded-md animate-pulse mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      {/* Button Skeleton */}
      <div className="btn btn-sm w-full bg-gray-200 text-transparent cursor-default rounded-b-xl animate-pulse">
        Loading...
      </div>
    </div>
  )
}

export default PhoneCartSkeleton
