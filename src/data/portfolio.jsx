import {
    SiPython, SiDocker, SiJavascript,
    SiHtml5, SiApacheairflow, SiMongodb,
    SiPytorch, SiTensorflow, SiSelenium, SiGithub,
    SiHuggingface, SiFastapi, SiLangchain
} from "react-icons/si";
import { FaGitAlt, FaAws, FaLinkedinIn, FaKaggle, FaGoodreadsG } from "react-icons/fa";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { ImBook } from "react-icons/im";
import { Bot, CreditCard, LineChart, Terminal, Database, Cloud } from "lucide-react";

import TorchLight from "../assets/images/torchlight.png";
import transformer from "../assets/images/transformer.png";
import FoodVision from "../assets/images/food_vision.png";
import ReVision from "../assets/images/revision.webp";
import NNet from "../assets/images/nnet.png";
import RagOptimize from "../assets/images/ragoptimize.png";
import CelestialClassify from "../assets/images/celestialclassify.png";
import BookRecommender from "../assets/images/book_recommender.webp";
import pystock from "../assets/images/pystock.png";
import optionalyzer from "../assets/images/optionalyzer.png";
import DeepDream from "../assets/images/deepdream.jpg";
import LightingProduct from "../assets/images/lightingproduct.jpg";
import Contrails_Identification from "../assets/images/contrails_identification.jpg";
import Hangman from "../assets/images/hangman.png";
import NLPDisasterTweets from "../assets/images/disaster_tweets.png";
import DigitRecognizer from "../assets/images/MNIST.png";
import HousePrices from "../assets/images/house_price.jpeg";
import SpeechRecognition from "../assets/images/speech.png";
import VidScribe from "../assets/images/vidscribe.png";
import MultimodalChatbot from "../assets/images/chatbot.png";
import Vault from "../assets/images/vault.png";

export const homeConfig = {
  greeting: "Hello There! I'm Harikesh Kushwaha",
  titles: [
    "A Data Scientist",
    "An AI Engineer",
    "A Machine Learning Specialist",
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
        { id: "skills-1", icon: SiFastapi, text: "FastAPI" },
        { id: "skills-2", icon: SiLangchain, text: "LangChain" },
        { id: "skills-4", icon: SiPytorch, text: "PyTorch" },
        { id: "skills-6", icon: SiHuggingface, text: "HuggingFace" },
        { id: "skills-13", icon: SiDocker, text: "Docker" },
    ],
    complementarySkills: [
        { id: "skills-5", icon: FaGitAlt, text: "Git" },
        { id: "skills-7", icon: SiTensorflow, text: "TensorFlow" },
        { id: "skills-8", icon: SiGithub, text: "GitHub" },
        { id: "skills-10", icon: Terminal, text: "Bash" },
        { id: "skills-11", icon: SiMongodb, text: "MongoDB" },
        { id: "skills-12", icon: SiApacheairflow, text: "Airflow" },
        { id: "skills-14", icon: SiJavascript, text: "JavaScript" },
        { id: "skills-15", icon: SiSelenium, text: "Selenium" },
        { id: "skills-16", icon: Database, text: "MSSQL" },
        { id: "skills-17", icon: SiHtml5, text: "HTML 5" },
        { id: "skills-18", icon: Cloud, text: "Azure" },
        { id: "skills-19", icon: FaAws, text: "AWS" },
    ],
};

export const projectConfig = [
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
        id: "project-multimodal",
        title: "Multimodal Chatbot",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/multimodal-chatbot", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/multimodal-chatbot/fork", icon: BiGitRepoForked },
        ],
        image: MultimodalChatbot,
        description: "A full-stack multimodal AI chatbot supporting text-based chat with LLMs, vision chat with user-provided images, and Python data analysis on uploaded CSVs.",
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
        id: "project-vault",
        title: "Vault",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/Vault", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/Vault/fork", icon: BiGitRepoForked },
        ],
        image: Vault,
        description: "A MERN Stack Multi-Tool Application featuring secure authentication, role-based access control, and modular mini-apps like ConnectVault and TasteVault.",
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
        id: "project-19",
        title: "NNet",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/NNet", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/NNet/fork", icon: BiGitRepoForked },
        ],
        image: NNet,
        description: "A module for constructing and optimizing an arbitrary neural network architecture using Python and NumPy, with backpropagation and gradient descent.",
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
        id: "project-8",
        title: "FoodVision",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/Portfolio/tree/main/projects/Food%20Vision", icon: AiFillGithub },
            { name: "website", url: "https://huggingface.co/spaces/hari31416/FoodVision", icon: AiFillEye },
        ],
        image: FoodVision,
        description: "Using Transfer Learning with EfficientNet to classify 101 types food images.",
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
        id: "project-6-disaster",
        title: "NLP With Disaster Tweets",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/Portfolio/tree/main/projects/Disaster_Tweets", icon: AiFillGithub },
        ],
        image: NLPDisasterTweets,
        description: "Implementing Google's DeepDream algorithm using PyTorch.",
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
        id: "project-4",
        title: "Contrails Identification",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/Identify_Contrails", icon: AiFillGithub },
            { name: "fork", url: "https://github.com/Hari31416/Identify_Contrails/fork", icon: BiGitRepoForked },
        ],
        image: Contrails_Identification,
        description: "Training ML models to identify contrails in satellite images using image segmentation.",
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
    {
        id: "project-2",
        title: "Digit Recognizer",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/Portfolio/tree/main/projects/MNIST_Digits", icon: AiFillGithub },
        ],
        image: DigitRecognizer,
        description: "Training a CNN model to recognize handwritten digits.",
        target: "_blank",
    },
    {
        id: "project-1",
        title: "House Prices Prediction",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/Portfolio/tree/main/projects/Housing_Price", icon: AiFillGithub },
        ],
        image: HousePrices,
        description: "Predicting house prices using regression models.",
        target: "_blank",
    },
    {
        id: "project-0",
        title: "TensorFlow Speech Recognition Challenge",
        links: [
            { name: "repo", url: "https://github.com/Hari31416/Portfolio/tree/main/projects/TensorFlow_Speech_Recognition", icon: AiFillGithub },
        ],
        image: SpeechRecognition,
        description: "Training a nueral networks to recognize spoken words.",
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
