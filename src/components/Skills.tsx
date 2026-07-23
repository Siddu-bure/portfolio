"use client";

import { skills } from "@/data/resume";
import Section from "@/components/Section";

const emojiMap: Record<string, string> = {
  "C/C++": "⚡",
  Python: "🐍",
  SQL: "🗄️",
  "HTML/CSS/JS": "🌐",
  React: "⚛️",
  Git: "🔀",
  Docker: "🐳",
  Linux: "🐧",
  "Microsoft Azure": "☁️",
  "AWS EC2/S3/Bedrock": "☁️",
  PostgreSQL: "🐘",
  SQLite: "💾",
  Neo4j: "🔗",
  Weaviate: "🧠",
  ChromaDB: "🎨",
  FAISS: "🔍",
  PyTorch: "🔥",
  TensorFlow: "📊",
  Keras: "🧩",
  "Hugging Face Transformers": "🤗",
  "PEFT (LoRA/QLoRA)": "🎯",
  "Knowledge Distillation": "🧪",
  LangChain: "⛓️",
  LangGraph: "🔀",
  RAG: "📚",
  "Model Context Protocol (MCP)": "🔌",
  "scikit-learn": "📈",
  Pandas: "🐼",
  NumPy: "🔢",
  OpenCV: "👁️",
  Streamlit: "📱",
  Gradio: "🎛️",
  Flask: "🍶",
  "Machine Learning": "🤖",
  "Deep Learning": "🧠",
  "Artificial Intelligence": "✨",
  "Data Structures & Algorithms": "📐",
  "Probability Statistics & Stochastic Processes": "📊",
  "Data Engineering": "🏗️",
};

const categories = [
  {
    key: "languages" as const,
    label: "Languages",
    color: "bg-primary/10 text-primary border-primary/20",
    glow: "shadow-primary/20",
  },
  {
    key: "toolsPlatforms" as const,
    label: "Tools & Platforms",
    color: "bg-accent/10 text-accent border-accent/20",
    glow: "shadow-accent/20",
  },
  {
    key: "aiMlLibraries" as const,
    label: "AI/ML & Libraries",
    color: "bg-accent2/10 text-accent2 border-accent2/20",
    glow: "shadow-accent2/20",
  },
  {
    key: "coursework" as const,
    label: "Coursework",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    glow: "shadow-emerald-500/20",
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills &amp; Coursework">
      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat.key}>
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-pulse" />
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills[cat.key].map((skill) => {
                const emoji = emojiMap[skill];
                return (
                  <span
                    key={skill}
                    className={`group relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border ${cat.color} hover:scale-110 hover:shadow-lg ${cat.glow} transition-all duration-300 cursor-default`}
                  >
                    {emoji && (
                      <span className="text-sm filter drop-shadow-sm">{emoji}</span>
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
