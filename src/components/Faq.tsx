import { useTheme } from '@/contexts/ThemeContext';
import React, { useState } from 'react';
import '../styles/faq.scss';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
    {
        question: "What industries do you specialise in?",
        answer: "We work with a wide range of industries, including e-commerce, tech startups, healthcare, finance, and more. Our custom solutions are designed to adapt to the specific needs of your business, no matter the sector."
    },
    {
        question: "How long does a typical project take?",
        answer: "The timeline varies depending on the complexity of the project. Smaller projects, like a basic website, can take 4-6 weeks, while more complex systems or applications may take several months. We'll provide a detailed timeline once we understand your requirements."
    },
    {
        question: "Do you offer ongoing support after the project is completed?",
        answer: "Yes! We provide post-launch support ranging from 2 weeks to 3 months, depending on your chosen plan. We also offer ongoing maintenance services if you need continuous support and updates."
    },
    {
        question: "What’s your design process like?",
        answer: "Our design process is highly collaborative. We start with a deep dive into your brand and user needs, followed by wireframes and mockups. Once you approve the designs, we move into development, ensuring everything is aligned with your vision."
    },
    {
        question: "Can you help with redesigning an existing website?",
        answer: "Absolutely! We specialize in reimagining existing websites to improve their performance, user experience, and overall design. Whether you need a complete overhaul or targeted updates, we can help."
    },
    {
        question: "Do you work with pre-existing platforms like WordPress or Shopify?",
        answer: "Yes, we can work with platforms like WordPress and Shopify, but we also offer more advanced, custom-built solutions for businesses seeking more flexibility and scalability."
    },
    {
        question: "What makes your services different from other web development companies?",
        answer: "We offer fully tailored solutions, combining cutting-edge technology with a focus on exceptional user experience. Our personalized approach, along with competitive pricing, sets us apart by delivering high-quality results that drive real business impact."
    },
];

export default function Faq() {
    const { theme } = useTheme();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`faq-container ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="faq-title">// FAQs</div>
            <h2>Your questions, our answers</h2>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''} ${theme === 'dark' ? 'dark' : ''}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="question">
                            {item.question}
                            <FaChevronDown className="icon" />
                        </div>
                        <div className="answer">{item.answer}</div>
                    </div>
                ))}
            </div>
            <button className="consultation-btn">Schedule a consultation</button>
        </div>
    );
}
