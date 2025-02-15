"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";
import Carousel from "@/components/UI/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen p-0">
      {/* INTRO */}
      <div className="py-3">
        {/* INTRO TEXT */}
        <section className="text-center p-6 bg-white lg:w-full lg:grid lg:grid-cols-1 md:grid-cols-2 gap-1">
          <h1 className="text-4xl font-bold text-gray-900">
            Web design acessível para negócios locais, pequenas e médias
            empresas.
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Somos um pequeno estúdio local que cria websites profissionais para
            pequenas e médias empresas. Invista no seu negócio tendo um site
            moderno, rápido e aumente a sua visibilidade online.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Desenvolvo{" "}
            <span className="font-semibold">websites personalizados</span>:
          </p>
          {/* Lista de Serviços */}
          <ul className="mt-4 text-left max-w-md mx-auto space-y-1">
            {[
              "Hotéis e Pousadas",
              "Restaurantes e Menus Online",
              "Papelarias",
              "Imobiliárias",
              "Barbeiros e Cabeleireiros",
              "Oficinas Mecânicas",
              "Construtoras",
              "Jardineiros e Paisagismo",
              "Lojas Online",
              "Catálogos Online",
              "Blogs",
              "E mais...",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center text-lg text-gray-800"
              >
                <ChevronRightIcon className="h-5 w-5 text-blue-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA (Call to Action) */}
          <Link
            className="mt-5 bg-red-600 text-white font-bold rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 hover:bg-red-700 text-lg sm:text-base px-3 py-4  lg:w-[360px] m-auto"
            href="/contact"
            rel="noopener noreferrer"
          >
            <CheckBadgeIcon className="h-6 w-6" />
            SOLICITAR ORÇAMENTO
          </Link>
          {/* <button className="mt-6 flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition w-[360px] m-auto">
            <LightBulbIcon className="h-6 w-6 text-yellow-300" />
            Peça já o seu orçamento gratuito!
          </button>*/}
        </section>

        <div></div>
      </div>
      <Carousel />
      {/* CARROUSSEL */}
      {/* PROCESSO */}
      {/* 
        1 - ORÇAMENTO E APRESENTAÇÂO DE PLANO
        2 - Apresentação de 1o sketch
        3 - Revisão (consoante plano escolhido)
        4 - Site online e manutenção consequente (consoante plano escolhido)
      */}
      <section className="px-2 lg:px-20 py-12 bg-gray-100 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Processo</h2>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* First Item */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
            <Image
              src="/img/interview.jpg"
              alt="Item 1"
              width={300}
              height={300}
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Entrevista Inicial
            </h3>
            <p className="text-gray-600 mt-2">
              Começamos com uma conversa inicial para perceber quais são os
              requisitos e desafios práticos para avaliar qual é a melhor
              solução. É apresentado um plano com o respecivo orçamento.
            </p>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
            <Image
              src="/img/presentation.jpg"
              alt="Item 2"
              width={300}
              height={300}
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Apresentação
            </h3>
            <p className="text-gray-600 mt-2">
              É apresentado o produto para ser revisto com o cliente e
              devidamente corrigido.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {/* Third Item */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
            <Image
              src="/img/revisions.jpg"
              alt="Item 3"
              width={300}
              height={300}
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">Revisões</h3>
            <p className="text-gray-600 mt-2">
              Corrigimos o site para fazer o mesmo ir ao encontro às
              espectativas do cliente. O número de revisões irá variar consoante
              o plano.
            </p>
          </div>

          {/* Fourth Item */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
            <Image
              src="/img/online.jpg"
              alt="Item 4"
              width={300}
              height={300}
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Colocação online!
            </h3>
            <p className="text-gray-600 mt-2">
              O site é colocado online e dá-se a conclusão do trabalho, ou, caso
              o cliente escolha o plano com manutenção, é alinhado com o mesmo
              como e quando se procederá à edição periódica do site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
