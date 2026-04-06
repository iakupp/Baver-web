"use client";
import { useState } from "react";

import contactTypes from "../../types/contactForm";
import ButtonComponent from "../shared/Button";

import {FormDataLabels} from "@/app/messages/sk.json";
import { toast } from "sonner";

const { FirstName, LastName, Email, Mobile } = FormDataLabels;

const Form = () => {
const [formData, setFormData] = useState<contactTypes>({
    firstNameInput: "",
    lastNameInput: "",
    emailInput: "",
    mobileInput: "",
    messageInput: "",
});
    
const [errors, setErrors] = useState<Record<string, string>>({});
const [submitted, setSubmitted] = useState(false);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern = /^(\+?\d{9,13})$/;
    
const submitForm = async () => {

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstNameInput,
        lastName: formData.lastNameInput,
        email: formData.emailInput,
        mobile: formData.mobileInput,
        message: formData.messageInput,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      toast.error("Chyba pri odosielaní. Skúste to prosím znovu.");
      return;
    }

    toast.success("Správa bola úspešne odoslaná.");

    setFormData({
      firstNameInput: "",
      lastNameInput: "",
      emailInput: "",
      mobileInput: "",
      messageInput: "",
    });

  } catch (error) {
      toast.error("Chyba pri odosielaní. Skúste to prosím znovu.");
      console.log(error)
  }
};
    
const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstNameInput.trim())
      newErrors.firstNameInput = "Vyplňte meno.";

    if (!formData.lastNameInput.trim())
      newErrors.lastNameInput = "Vyplňte priezvisko.";

    if (!formData.emailInput.trim())
      newErrors.emailInput = "Vyplňte email.";
    else if (!emailPattern.test(formData.emailInput))
      newErrors.emailInput = "Neplatný email.";

    if (!formData.mobileInput.trim())
      newErrors.mobileInput = "Vyplňte telefon.";
    else if (!mobilePattern.test(formData.mobileInput))
      newErrors.mobileInput = "Neplatné číslo.";

    if (!formData.messageInput.trim())
      newErrors.messageInput = "Vyplňte správu.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
    
const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitted) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
};
    
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      submitForm();
    }
};

return (
    <form id="kontakt"
        onSubmit={handleSubmit}
        className="
        w-full max-w-[1168px] mx-auto lg:px-0

        grid gap-4
        md:grid-cols-2
      "
    >
      {/* INPUT */}
      {[
        {
          id: "firstName",
          name: "firstNameInput",
          label: FirstName,
          placeholder: FirstName,
        },
        {
          id: "lastName",
          name: "lastNameInput",
          label: LastName,
          placeholder: LastName,
        },
        {
          id: "email",
          name: "emailInput",
          label: Email,
          placeholder: Email,
        },
        {
          id: "mobile",
          name: "mobileInput",
          label: Mobile,
          placeholder: Mobile,
        },
      ].map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="text-sm mb-1 text-dark">
            {field.label}
          </label>

          <input
            id={field.id}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
                  className={`border rounded-lg px-4 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)] ${errors[field.name] ? "border-red-500" : "border-gray-300"}`}/>

        {errors[field.name] && (
            <p className="text-red-500 text-xs mt-1">
            {errors[field.name]}
            </p>
        )}
        </div>
))}

      {/* TEXTAREA */}
    <div className="flex flex-col md:col-span-2">
        <label className="text-sm mb-1 text-dark">
        {FormDataLabels.Message}
        </label>

        <textarea
          name="messageInput"
          value={formData.messageInput}
          onChange={handleChange}
          placeholder={FormDataLabels.Message}
          rows={5}
          className={`
            border rounded-lg px-4 py-2 text-sm
            outline-none transition
            focus:ring-2 focus:ring-[var(--color-primary)] resize-none

            ${
              errors.messageInput
                ? "border-red-500"
                : "border-gray-300"
            }
          `}
        />

        {errors.messageInput && (
          <p className="text-red-500 text-xs mt-1">
            {errors.messageInput}
          </p>
        )}
      </div>

      {/* BUTTON */}
      <div className="md:col-span-2 mt-4 flex justify-center md:justify-end">
        <ButtonComponent
          type="submit"
          label="Odoslať správu"
        />
      </div>
    </form>
  );
};

export default Form;