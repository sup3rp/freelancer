import React, { useState } from "react";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <section>
      <h1 className="p-2 max-w-[630px] mx-auto mt-[10px]">Contacto</h1>
      <ContactForm />
    </section>
  );
}
