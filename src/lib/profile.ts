import { Code } from "lucide-react";

export const PROFILE = {
  name: "Mohit Kumar Sahu",
  email: "mohit26lnct@gmail.com",
  linkedin: "https://linkedin.com/in/mohitkumar1221",
  github: "https://github.com/Mohitkumarsahu1221",
  location: "Bhopal, Madhya Pradesh, India",
};

export type Project = {
  title: string;
  short: string;
  full: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "E-commerce Customer Segmentation",
    short: "RFM analysis + K-Means clustering to segment customers by value and behavior.",
    full:
      "Segmented an e-commerce customer base using RFM (Recency, Frequency, Monetary) features and K-Means clustering, then visualized cluster profiles to surface high-value and at-risk customer groups for targeted retention strategy.",
    tags: ["Python", "Scikit-learn", "Seaborn", "Plotly"],
  },
  {
    title: "Movie Recommender",
    short: "Content-based recommendation engine with an interactive Streamlit interface.",
    full:
      "Built a content-based movie recommender using metadata similarity (genres, cast, keywords) computed with Pandas and NumPy, wrapped in a Streamlit app for real-time recommendations from a simple title search.",
    tags: ["Pandas", "NumPy", "Streamlit"],
  },
  {
    title: "Grievance Handling System",
    short: "Role-based Django platform with automated escalation for unresolved cases.",
    full:
      "Designed a role-based grievance management platform (admin / employee / customer) in Django with SQLite and Bootstrap. Implemented automatic escalation via Python threading for grievances unresolved after 2+ days, hardened access control, and modeled 2,000+ records with Django ORM, schema migrations, and ER diagrams.",
    tags: ["Django", "SQLite", "MySQL", "Python Threading"],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "C++", "Java", "JavaScript","SQL"] },
  { label: "Frameworks & Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "FastAPI", "Node.js", "Django", "REST APIs"] },
  { label: "Machine Learning/Deep Learning", items: ["PyTorch", "Scikit-learn", "NumPy", "Pandas", "Model Training", "Fine-tuning", "Model Evaluation", "Optimization", "Data Preprocessing"] },
  { label: "AI/GenAI Stack", items: ["LangChain", "LangGraph", "Hugging Face", "OpenAI API", "Mistral API", "RAG", "Prompt Engineering", "Embeddings", "Agentic AI", "MCP"] },
  { label: "Databases", items: ["MySQL", "MongoDB", "Pinecone"] }
];

export type TimelineEntry = {
  date: string;
  title: string;
  sub: string;
  points?: string[];
};

export const education: TimelineEntry[] = [
  { date: "Nov 2022 – Jul 2026", title: "B.Tech, CSE (AI/ML)", sub: "Lakshmi Narain College of Technology, Bhopal" },
  { date: "2022", title: "Senior Secondary", sub: "St. Aloysius Sr. Sec. School, Jabalpur" },
  { date: "2020", title: "Secondary", sub: "St. Aloysius Sr. Sec. School, Jabalpur" },
];

export const experience: TimelineEntry[] = [
  {
    date: "Feb 2025 – Apr 2025 · Remote",
    title: "Django Developer Intern",
    sub: "Infosys Springboard",
    points: [
      "Built a role-based Grievance Handling System (Django, SQLite, Bootstrap) covering admin, employee, and customer flows",
      "Implemented automatic escalation via Python threading for grievances unresolved after 2+ days",
      "Hardened access control and permissions across roles",
      "Modeled 2,000+ records with Django ORM; authored schema migrations and ER diagrams",
    ],
  },
];