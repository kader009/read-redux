import { FormEvent } from 'react';
import { useSignUpMutation } from '../../redux/authentication/authApi';
import {
  SetEmail,
  SetName,
  SetPassword,
} from '../../redux/authentication/RegisterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector(
    (state: RootState) => state.register
  );

  const [signUp] = useSignUpMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = await signUp({ name, email, password });
    // Handle form submission logic here
    console.log('user data:', user);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
        </h2>

        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => dispatch(SetName(e.target.value))}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => dispatch(SetEmail(e.target.value))}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(SetPassword(e.target.value))}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
