import React, { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I grow my business?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel anytime from your account settings. Your plan will remain active until the end of the current billing period.",
    },
    {
      question: "How do I contact the support?",
      answer:
        "You can contact support via email or live chat. We're available 24/7 to help with your queries.",
    },
    {
      question: "Is a credit card required?",
      answer:
        "A credit card is required only when you choose a paid plan. Free trials do not require payment details.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div class="bg-white flex justify-center items-center  mt-12 mb-14">
        <div class="w-300 bg-black rounded-4xl text-white text-center">
          <h1 class="text-5xl font-bold pt-16">Frequestly Asked Questions</h1>
          <p class="text-xl pt-6 pb-16">
            There are many variations of passages of Lorem Ipsum available.
          </p>

          {faqs.map((faq, index) => (
            <div
              key={index}
              class="bg-gray-800 ml-60 mr-60 rounded-xl p-6 mb-6 text-start"
            >
              <div
                class="flex justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h2 class="text-2xl font-semibold">{faq.question}</h2>
                <p class="text-4xl font-semibold">
                  {openIndex === index ? "-" : "+"}
                </p>
              </div>

              <div
                class={`transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                {openIndex === index && (
                  <p class="text-gray-300">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
