"use client";
import React, { useState } from "react";

interface QueryFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<QueryFormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      debugger;
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      debugger;
      if (response.ok) {
        console.log("Query Submitted:", formData);
        //alert("Obrigado por entrar em contacto. Irei-lhe responder em breve.");
        setIsSubmitted(true);
      } else {
        alert("O envio da mensagem falhou. Por favor, tente novamente.");
      }
    } catch (error) {
      debugger;
      console.error("Error sending email: ", error);
      alert("Ocorreu um erro a enviar o seu pedido.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-[600px] mx-auto mt-10 p-6 bg-green-100 border border-green-400 text-green-800 rounded-xl">
        <h2 className="text-xl font-bold mb-4">
          Mensagem enviada com sucesso!
        </h2>
        <p>Obrigado por entrar em contacto. Irei responder em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto mt-[10px]">
      <p>
        Preencha o formulário abaixo para entrar em contacto sobre os meus
        serviços.
      </p>
      <div className="mt-[10px] mb-[14px]">
        <label htmlFor="name" className="block mb-[8px]">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-[8px] border-box rounded-xl text-black"
        />
      </div>
      <div className="mb-[14px]">
        <label htmlFor="email" className="block mb-[8px]">
          E-mail:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-[8px] border-box rounded-xl text-black"
        />
      </div>
      <div className="mb-[16px]">
        <label htmlFor="service" className="display-block mb-[8px]">
          Interessado no serviço:
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-[8px] border-box rounded-xl text-black"
        >
          <option value="">---Seleccione um serviço---</option>
          <option value="fullstack">Fullstack dev</option>
          <option value="staticsites">Criação de sites institucionais</option>
          <option value="store">Criação de lojas online</option>
          <option value="blog">Criação de blogs</option>
        </select>
      </div>
      <div className="mb-[14px]">
        <label htmlFor="message" className="block mb-[8px] rounded-xl">
          Mensagem:
        </label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-[8px] border-box rounded-xl text-black"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-2 bg-[#007BFF] text-white border-none rounded-md cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
