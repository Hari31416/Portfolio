import React from "react";
import { MdAutoGraph } from "react-icons/md";
import { FaCreditCard, FaRobot } from "react-icons/fa";

const homeConfig = {
  greeting: (
    <h1 className="heading">
      Hello There! I'm <strong className="main-name"> Harikesh Kushwaha</strong>
    </h1>
  ),
  titles: [
    "A Data Scientist",
    "An AI Engineer",
    "A Machine Learning Specialist",
  ],
  about: {
    start:
      "I am an IIT Delhi alumnus with over two years of experience in AI and data science, currently working as an AI Engineer at KPMG. I am driven by the challenge of building innovative solutions and harnessing the power of data to create real-world impact.",
    exit: "I am fluent in Python, SQL, and the modern Python data science ecosystem. My expertise spans machine learning, generative AI, and large language models, with a deep interest in state-of-the-art algorithms, cutting-edge research, and their practical applications.",
  },
  workTimeline: [
    {
      id: "work-2",
      title: "AI Engineer",
      company: "KPMG",
      description:
        "Developing next-generation conversational AI solutions for Indian government platforms, harnessing agentic AI to make public services more accessible, efficient, and impactful for millions of citizens.",
      date: "2025-present",
      icon: <FaRobot />,
      tags: [
        "generative-ai",
        "llm",
        "rag",
        "python",
        "pytorch",
        "langchain",
        "nlp",
        "agentic-ai",
      ],
    },
    {
      id: "work-1",
      title: "Senior Analyst",
      company: "Paisabazaar",
      description:
        "Developed and deployed machine learning models for credit risk and fraud detection.",
      date: "2024-2025",
      icon: <FaCreditCard />,
      tags: [
        "ml",
        "hive",
        "python",
        "scikit",
        "pandas",
        "sql",
        "credit-risk",
        "llm",
        "rag",
      ],
    },
    {
      id: "work-0",
      title: "Junior Data Scientist",
      company: "Nuvoretail Enlytical",
      description:
        "Automated and optimized bidding process for AMS. Build models, microservices, and dashboards.",
      date: "2023-2024",
      icon: <MdAutoGraph />,
      tags: ["python", "mssql", "airflow", "flask", "scikit", "azure", "ml"],
    },
  ],
};

export default homeConfig;
