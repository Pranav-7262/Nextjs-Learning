"use client";

import { useActionState } from "react";
import { contactAction } from "./contact.action";
import { useFormStatus } from "react-dom";

// // import { contactAction } from "./contact.action";

// export const contactAction = (formData) => {
//   const { fullName, email, message } = Object.fromEntries(formData.entries());
//   console.log("Form Data:", { fullName, email, message });
// };
const Contactpage = () => {
  const [state, formAction, isPending] = useActionState(contactAction, null); //used for form submission state management
  return (
    <div className="w-full">
      <h2 className="text-gray-700 bg-sky-500 p-2 m-2">Contact Page</h2>

      <form className="space-y-6" action={formAction}>
        <label htmlFor="fullName" className="text-sm font-medium">
          Enter Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="px-4 py-3 w-full"
          required
          placeholder="Enter full name"
        />

        <div>
          <label htmlFor="email" className="text-sm font-medium text-amber-300">
            Enter Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="px-4 py-3 w-full"
            required
            placeholder="Enter email"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Enter Message
          </label>
          <textarea
            name="message"
            id="message"
            className="px-4 py-3 w-full"
            required
            placeholder="Enter message"
          />
        </div>
        <Submit />
      </form>
      <section className="mt-4">
        {state && (
          <div>
            {state.success ? (
              <p className="text-green-500">{state.message}</p>
            ) : (
              <p className="text-red-500">{state.message}</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Contactpage;

const Submit = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <>
      <button
        disabled={pending}
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-400 transition animate-spin"
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};
