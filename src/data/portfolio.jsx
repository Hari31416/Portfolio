import {
    SiPython, SiDocker, SiJavascript, SiApacheairflow, SiMongodb,
    SiPytorch, SiTensorflow, SiSelenium, SiGithub,
    SiHuggingface, SiFastapi, SiLangchain, SiRedis,
    SiTypescript, SiReact, SiPostgresql, SiTailwindcss
} from "react-icons/si";
import { FaGitAlt, FaAws, FaLinkedinIn, FaKaggle, FaGoodreadsG } from "react-icons/fa";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { ImBook } from "react-icons/im";
import { Bot, CreditCard, LineChart, Terminal, Database, Cloud } from "lucide-react";

import TorchLight from "../assets/images/torchlight.png";
import transformer from "../assets/images/transformer.png";
import ReVision from "../assets/images/revision.webp";
import RagOptimize from "../assets/images/ragoptimize.png";
import CelestialClassify from "../assets/images/celestialclassify.png";
import BookRecommender from "../assets/images/book_recommender.webp";
import pystock from "../assets/images/pystock.png";
import optionalyzer from "../assets/images/optionalyzer.png";
import DeepDream from "../assets/images/deepdream.jpg";
import LightingProduct from "../assets/images/lightingproduct.jpg";
import Hangman from "../assets/images/hangman.png";
import VidScribe from "../assets/images/vidscribe.png";
import FormFoundry from "../assets/images/formfoundry.png";
import md2pdf from "../assets/images/md2pdf.png";
import sandbox from "../assets/images/sandbox.png";
import deepagents from "../assets/images/deepagents.png";
import advanced_rag from "../assets/images/advanced_rag.png";
import chatbot_aws from "../assets/images/chatbot_aws.png";
import chatbot_azure from "../assets/images/chatbot_azure.png";
import local_voice_chat from "../assets/images/local_voice_chat.png";

export const homeConfig = {
  greeting: "Hello There! I'm Harikesh Kushwaha",
  titles: [
    "An AI Engineer",
  ],
  about: {
    start:
      "I am an IIT Delhi alumnus and AI Engineer at KPMG, specializing in Generative AI, LLMs, and scalable data-driven systems. With over two years of experience, I enjoy solving high-impact problems and turning innovative ideas into production-ready AI solutions used across government and enterprise ecosystems.",
    exit: "I am fluent in Python, SQL, and the modern Python data science ecosystem. My expertise spans machine learning, Generative AI, and large language models, with a strong focus on building scalable, production-ready systems. I’m deeply interested in state-of-the-art algorithms, emerging research, and the practical engineering required to translate them into impactful real-world applications.",
  },
  workTimeline: [
    {
      id: "work-2",
      title: "AI Engineer",
      company: "KPMG",
      description:
        "Developing next-generation conversational AI solutions for Indian government platforms, harnessing agentic AI to make public services more accessible, efficient, and impactful for millions of citizens.",
      date: "2025-present",
      icon: Bot,
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
      icon: CreditCard,
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
      icon: LineChart,
      tags: ["python", "mssql", "airflow", "flask", "scikit", "azure", "ml"],
    },
  ],
};

export const skillsConfig = {
  mainSkills: [
    { id: "skills-0", icon: SiPython, text: "Python" },
    { id: "skills-ts", icon: SiTypescript, text: "TypeScript" },
    { id: "skills-react", icon: SiReact, text: "React" },
    { id: "skills-1", icon: SiFastapi, text: "FastAPI" },
    { id: "skills-2", icon: SiLangchain, text: "LangChain" },
    { id: "skills-4", icon: SiPytorch, text: "PyTorch" },
    { id: "skills-6", icon: SiHuggingface, text: "HuggingFace" },
    { id: "skills-13", icon: SiDocker, text: "Docker" },
  ],
  complementarySkills: [
    { id: "skills-postgres", icon: SiPostgresql, text: "PostgreSQL" },
    { id: "skills-tailwind", icon: SiTailwindcss, text: "Tailwind CSS" },
    { id: "skills-20", icon: SiRedis, text: "Redis" },
    { id: "skills-7", icon: SiTensorflow, text: "TensorFlow" },
    { id: "skills-5", icon: FaGitAlt, text: "Git" },
    { id: "skills-8", icon: SiGithub, text: "GitHub" },
    { id: "skills-10", icon: Terminal, text: "Bash" },
    { id: "skills-11", icon: SiMongodb, text: "MongoDB" },
    { id: "skills-12", icon: SiApacheairflow, text: "Airflow" },
    { id: "skills-15", icon: SiSelenium, text: "Selenium" },
    { id: "skills-16", icon: Database, text: "MSSQL" },
    { id: "skills-18", icon: Cloud, text: "Azure" },
    { id: "skills-19", icon: FaAws, text: "AWS" },
  ],
};

export const projectConfig = [
    {
        id: "project-sandbox",
        title: "sandbox",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/sandbox", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/sandbox/fork", icon: BiGitRepoForked },
        ],
        image: sandbox,
        description: "A standalone compute-plane service for isolated code execution. Features session lifecycle management, command runs, workspace files, artifact exports, and microVM snapshots.",
        target: "_blank",
    },
    {
        id: "project-deepagents-microsandbox",
        title: "deepagents-microsandbox",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/deepagents-microsandbox", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/deepagents-microsandbox/fork", icon: BiGitRepoForked },
        ],
        image: deepagents,
        description: "An advanced agentic data analysis platform combining LLM reasoning with isolated code execution in microVMs to transform data, generate charts, and produce reports.",
        target: "_blank",
    },
    {
        id: "project-formfoundry",
        title: "FormFoundry",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/FormFoundry", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/FormFoundry/fork", icon: BiGitRepoForked },
        ],
        image: FormFoundry,
        description: "An enterprise-grade multilingual form-filling and AI data-extraction platform. Supports Bhashini & Sarvam voice APIs, dynamic PDF compilations, PostgreSQL, Redis, and Qdrant.",
        target: "_blank",
    },
    {
        id: "project-advanced-rag",
        title: "Advanced RAG",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/advanced-rag", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/advanced-rag/fork", icon: BiGitRepoForked },
        ],
        image: advanced_rag,
        description: "An enterprise-grade RAG platform featuring multi-hop reasoning, hybrid search with reciprocal rank fusion (RRF), and a real-time visual pipeline debugger.",
        target: "_blank",
    },
    {
        id: "project-chatbot-aws",
        title: "Chatbot AWS",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/chatbot-aws", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/chatbot-aws/fork", icon: BiGitRepoForked },
        ],
        image: chatbot_aws,
        description: "A production-grade serverless RAG chatbot on AWS. Features real-time streaming, async document ingestion, Cognito authentication, and AWS SAM single-step deployment.",
        target: "_blank",
    },
    {
        id: "project-chatbot-azure",
        title: "Chatbot Azure",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/chatbot-azure", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/chatbot-azure/fork", icon: BiGitRepoForked },
        ],
        image: chatbot_azure,
        description: "A secure, fully serverless AI Chatbot and RAG platform deployed natively on Azure with real-time response streaming and async document ingestion.",
        target: "_blank",
    },
    {
        id: "project-local-voice-chat",
        title: "Local Voice Chat",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/local-voice-chat", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/local-voice-chat/fork", icon: BiGitRepoForked },
        ],
        image: local_voice_chat,
        description: "A browser-native voice AI workbench in TypeScript. Supports conversational chat, local TTS, and local STT using multiple providers and edge-run models.",
        target: "_blank",
    },
    {
        id: "project-md2pdf",
        title: "md2pdf",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/md2pdf", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/md2pdf/fork", icon: BiGitRepoForked },
        ],
        image: md2pdf,
        description: "A lightweight, pure-Python Markdown-to-PDF compiler with zero external binary dependencies, published on PyPI.",
        target: "_blank",
    },
    {
        id: "project-vidscribe",
        title: "VidScribe",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/VidScribe", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/VidScribe/fork", icon: BiGitRepoForked },
        ],
        image: VidScribe,
        description: "VidScribe is an AI-powered tool that turns videos into structured, markdown-style notes with optional images extracted from the video.",
        target: "_blank",
    },
    {
        id: "project-17",
        title: "TorchLight",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/TorchLight", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/TorchLight/fork", icon: BiGitRepoForked },
        ],
        image: TorchLight,
        description: "A librray to visualize features learned by CNNs by optimizing images to maximize the activation to obtain arbitrary objectives.",
        target: "_blank",
    },
    {
        id: "project-15",
        title: "ReVision",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/ReVision", icon: AiFillGithub },
            { name: "website", url: "https://hari31416.notion.site/10a70e2c390f4e119cb709b712d3b168?v=8224d1d9652e48fd83100ab516a228d3&pvs=74", icon: AiFillEye },
            { name: "fork", url: "https://github.com/Hari31416/ReVision/fork", icon: BiGitRepoForked },
        ],
        image: ReVision,
        description: "Implementing various groundbreaking computer vision architecture from scratch using Tensorflow.",
        target: "_blank",
    },
    {
        id: "project-16",
        title: "Transformer From Scratch",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/transformer_from_scratch", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/transformer_from_scratch/fork", icon: BiGitRepoForked },
        ],
        image: transformer,
        description: "Implementing a encoder-decoder and decoder-only transformer architecture from scratch using PyTorch and training it on a language translation and lyrics generation task.",
        target: "_blank",
    },
    {
        id: "project-14",
        title: "RagOptimize",
        links: [
            { name: "repo", url: "https://github.com/BitwiseBrains/RagOptimize", icon: AiFillGithub },
        ],
        image: RagOptimize,
        description: "Fine-Tuning Mistral-7B on financial dataset and created a RAG to answer questions on a financial dataset or article.",
        target: "_blank",
    },
    {
        id: "project-13",
        title: "CelestialClassify",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/CelestialClassify", icon: AiFillGithub },
        ],
        image: CelestialClassify,
        description: "Training machine learning models to classify celestial objects using data from the SDSS",
        target: "_blank",
    },
    {
        id: "project-12",
        title: "Book Recommender",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/book_recommender", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/book_recommender/fork", icon: BiGitRepoForked },
        ],
        image: BookRecommender,
        description: "Building a book recommendation system using collaborative filtering, content-based filtering and matrix factorization.",
        target: "_blank",
    },
    {
        id: "project-11",
        title: "pystock",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/pystock", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/pystock/fork", icon: BiGitRepoForked },
            { name: "docs", url: "https://hari31416.github.io/pystock/html/index.html", icon: ImBook },
        ],
        image: pystock,
        description: "Creating a library for portfolio optimization using models like CAPM, SIM, FF3, and FF5",
        target: "_blank",
    },
    {
        id: "project-9",
        title: "LightingProduct",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/LightingProduct", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/LightingProduct/fork", icon: BiGitRepoForked },
            { name: "website", url: "https://huggingface.co/spaces/hari31416/LightingProduct", icon: AiFillEye },
            { name: "docs", url: "https://github.com/Hari31416/LightingProduct/blob/main/README.md", icon: ImBook },
        ],
        image: LightingProduct,
        description: "Parsing PDFs, extracting product information and creating an NLP model to predict whether a product is a lighting product or not.",
        target: "_blank",
    },


    {
        id: "project-6",
        title: "optionalyzer",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/optionalyzer", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/optionalyzer/fork", icon: BiGitRepoForked },
            { name: "docs", url: "https://github.com/Hari31416/optionalyzer/blob/main/Working_with_optionalyzer.ipynb", icon: ImBook },
        ],
        image: optionalyzer,
        description: "Creating a library for option pricing and greeks calculation using Black-Scholes model. Can be used for building option trading strategies.",
        target: "_blank",
    },

    {
        id: "project-5",
        title: "DeepDream",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/DeepDream", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/DeepDream/fork", icon: BiGitRepoForked },
        ],
        image: DeepDream,
        description: "Implementing Google's DeepDream algorithm using PyTorch.",
        target: "_blank",
    },

    {
        id: "project-3",
        title: "Hangman",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/hangman", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/hangman/fork", icon: BiGitRepoForked },
            { name: "docs", url: "https://github.com/Hari31416/hangman/blob/main/algorithm.md", icon: ImBook },
        ],
        image: Hangman,
        description: "Developing an advanced Hangman solver algorithm using ngram models with NLTK.",
        target: "_blank",
    },

];

export const footerConfig = {
    icons: [
        { id: "footer-0", url: "https://github.com/hari31416", icon: AiFillGithub },
        { id: "footer-1", url: "https://linkedin.com/in/hari31416", icon: FaLinkedinIn },
        { id: "footer-2", url: "https://www.kaggle.com/hari31416", icon: FaKaggle },
        { id: "footer-3", url: "https://goodreads.com/hari31416", icon: FaGoodreadsG },
    ],
};
