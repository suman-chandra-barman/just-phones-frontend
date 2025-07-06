'use client'

import { useForm } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login Data:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md shadow-xl bg-base-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <p className="label-text mb-6">Log in to your account to continue.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
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

          {/* Submit Button */}
          <button type="submit" className="btn bg-[#ff4c11] w-full text-white">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <a href="/signup" className="link">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;