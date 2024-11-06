import { FormEvent, useState } from 'react';
import { useSignUpMutation } from '../../redux/authentication/authApi';
import {
  SetEmail,
  SetName,
  SetPassword,
} from '../../redux/authentication/RegisterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { registrationSchema } from '../../validation/registerValidation';
import { z } from 'zod';

interface ValidationErrors {
  [key: string]: string | undefined;
}

const RegisterForm = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector(
    (state: RootState) => state.register
  );

  const [signUp] = useSignUpMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      registrationSchema.parse({ name, email, password });
      const user = await signUp({ name, email, password });
      console.log('user data:', user);

      dispatch(SetName(''))
      dispatch(SetEmail(''))
      dispatch(SetPassword(''))
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Capture Zod validation errors and map them to the validationErrors state
        const validationErrors: ValidationErrors = {};
        err.errors.forEach((error) => {
          validationErrors[error.path[0]] = error.message;
        });

        // Update the state with validation errors
        setErrors(validationErrors);
      }
    }
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
        </div>

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
