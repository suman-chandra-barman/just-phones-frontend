'use client';

import { useSignupMutation } from '@/redux/features/user/userApi';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type SignupFormInputs = {
  name: string;
  email: string;
  password: string;
  contactNo: string;
};

const  SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const [signup, { isLoading }] = useSignupMutation();

  const router = useRouter();

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      const res = await signup(data).unwrap();
      console.log("Signup success:", res);
      toast.success("Signup successful!");
      router.push('/login'); 
    } catch (error: any) {
      toast.error(error?.data?.message || "Signup failed!");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md shadow-xl bg-base-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold">Register</h2>
        <p className="label-text mb-6 mt-2">Create a new account to get started.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Sam Barman"
              className="input input-bordered w-full"
              {...register('name', { required: 'Full name is required' })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="tel"
              placeholder="01XXXXXXXXX"
              className="input input-bordered w-full"
              {...register('contactNo', {
                required: 'Contact number is required',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Invalid contact number',
                },
              })}
            />
            {errors.contactNo && (
              <p className="text-red-500 text-sm mt-1">{errors.contactNo.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-[#ff4c11] w-full text-white" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;