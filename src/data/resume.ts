export const personalInfo = {
  name: "Bure Siddardha",
  email: "siddardha.b22@gmail.com",
  phone: "+91-9392273140",
  location: "IIT Jodhpur",
  socials: {
    linkedin: "https://www.linkedin.com/in/bure-siddardha-032531351",
    github: "https://github.com/Siddu-bure",
  },
  about:
    "AI Engineer & SDE with hands-on experience building enterprise-grade AI systems — MCP servers, domain-specific SLMs, and multi-cloud AI infrastructure. B.Tech in AI & Data Science at IIT Jodhpur. Passionate about bridging the gap between cutting-edge ML research and production-grade software engineering.",
};

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    school: "Indian Institute of Technology, Jodhpur",
    period: "2023 – 2027",
  },
  {
    degree: "Intermediate (SSC Board)",
    school: "Narayana Junior College",
    period: "2021 – 2023",
    score: "89.3%",
  },
  {
    degree: "Schooling (Board of Secondary Education)",
    school: "Narayana School",
    period: "2014 – 2021",
    score: "CGPA: 10/10",
  },
];

export const experience = [
  {
    title: "AI Engineer & Software Development Engineer",
    company: "EnterpriseSI",
    logo: "/logos/enterprisesi.png",
    location: "Bangalore, India (On-site)",
    period: "Feb 2026 – Jul 2026",
    points: [
      "Designed and built Banking MCP and Finance MCP servers exposing secure tool-calling interfaces over the Model Context Protocol (MCP), enabling LLM agents to access account, transaction, and financial-analysis workflows for enterprise banking.",
      "Developed a domain-specific Small Language Model (SLM) using knowledge distillation and LoRA/QLoRA fine-tuning on finance data, cutting model size and inference cost while retaining task accuracy.",
      "Deployed the SLM and MCP services to Microsoft Azure via containerized CI/CD pipelines, owning both AI engineering and SDE responsibilities end-to-end.",
      "Architected multi-cloud AI infrastructure across AWS, Azure, and GCP for enterprise agentic adoption — designing reusable MCP agent blueprints, orchestrating cross-cloud model deployment, and implementing governance guardrails that enabled business teams to safely adopt LLM-powered workflows in production.",
    ],
  },
  {
    title: "AI/ML Automation Intern — Compox.AI",
    company: "Pearl Tech Soft Solutions",
    logo: "/logos/pearltechsoft.png",
    location: "Remote",
    period: "May 2025 – Sep 2025",
    points: [
      "Built an AI automation pipeline (Compox.AI) integrating LLMs, RAG, Vector DBs, and MCP to auto-generate schemas, SQL scripts, validations, and complete UI screens; developed core MCP agents and an OCR-based schema extraction workflow, accelerating form-to-UI generation by 70%.",
      "Implemented Docker-based containerization for MCP services and vector DBs, ensuring reliable, reproducible development environments.",
    ],
  },
];

export const projects = [
  {
    title: "Temporal RAG — Timeline-Aware Question Answering",
    tech: "Python, DyG-RAG, Google Gemini API, Streamlit",
    period: "Dec 2025 – Jan 2026",
    points: [
      "Developed an AI question-answering system that extracts temporal relationships from documents to resolve when/who/what happened timeline queries.",
      "Built a dynamic temporal knowledge-graph pipeline ingesting structured JSON event data; shipped a Streamlit app with interactive Q&A, multi-project management, and HTML graph visualization.",
    ],
    links: { github: "https://github.com/Siddu-bure/Temporal_RAG" },
  },
  {
    title: "PDF RAG Chatbot — Google Gemini API & Gradio",
    tech: "Python, LangChain, Google Gemini API, ChromaDB, HuggingFace Embeddings, Gradio, PyMuPDF",
    period: "Oct 2025 – Nov 2025",
    points: [
      "Built a Retrieval-Augmented Generation (RAG) chatbot answering natural-language questions over uploaded PDFs.",
      "Engineered an end-to-end pipeline — PDF parsing, optimized chunking, embedding, and ChromaDB vector storage — with context-aware retrieval and chat-history memory, served through a Gradio web interface.",
    ],
    links: { github: "https://github.com/Siddu-bure/PDF-RAG-Chatbot-with-Google-Gemini-API-and-Gradio" },
  },
];

export const skills = {
  languages: ["C/C++", "Python", "SQL", "HTML/CSS/JS", "React"],
  toolsPlatforms: [
    "Git", "Docker", "Linux", "Microsoft Azure", "AWS EC2/S3/Bedrock",
    "PostgreSQL", "SQLite", "Neo4j", "Weaviate", "ChromaDB", "FAISS",
  ],
  aiMlLibraries: [
    "PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers",
    "PEFT (LoRA/QLoRA)", "Knowledge Distillation", "LangChain", "LangGraph",
    "RAG", "Model Context Protocol (MCP)", "scikit-learn", "Pandas",
    "NumPy", "OpenCV", "Streamlit", "Gradio", "Flask",
  ],
  coursework: [
    "Machine Learning", "Deep Learning", "Artificial Intelligence",
    "Data Structures & Algorithms", "Probability Statistics & Stochastic Processes",
    "Data Engineering",
  ],
};

export const achievements = [
  {
    title: "Adobe Hackathon",
    detail: "Qualified Stage 1 of the Adobe Hackathon",
    year: 2025,
  },
  {
    title: "PCS Outstanding Grade",
    detail: "Earned A (Outstanding) grade in the PCS course, one of only fifty recipients",
    year: 2025,
  },
];

export const responsibilities = [
  {
    title: "Head, Prometeo Tech Fest",
    period: "Jan 2025 – Mar 2025",
  },
  {
    title: "Core Member, The Groove Theory Dance Society, IIT Jodhpur",
    period: "Jan 2023 – Present",
  },
];
