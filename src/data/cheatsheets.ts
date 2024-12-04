import { Cheatsheet } from "@/types/cheatsheet"

export const SAMPLE_CHEATSHEETS: Cheatsheet[] = [
  {
    id: "git-basics",
    title: "Git Basics",
    description: "Essential Git commands and workflows for version control",
    category: "Tools",
    tags: ["git", "version-control", "cli"],
    content: "# Git Basics\n\n## Basic Commands\n\n```bash\ngit init # Initialize repository\ngit add . # Stage all changes\ngit commit -m \"message\" # Commit changes\n```",
    lastUpdated: "2024-01-20"
  },
  {
    id: "docker-commands",
    title: "Docker Commands",
    description: "Common Docker commands for container management",
    category: "DevOps",
    tags: ["docker", "containers", "devops"],
    content: "# Docker Commands\n\n## Container Management\n\n```bash\ndocker ps # List running containers\ndocker build -t name . # Build image\ndocker run name # Run container\n```",
    lastUpdated: "2024-01-20"
  },
  {
    id: "react-hooks",
    title: "React Hooks",
    description: "Common React hooks and their usage patterns",
    category: "Frameworks",
    tags: ["react", "javascript", "hooks"],
    content: "# React Hooks\n\n## useState\n\n```jsx\nconst [state, setState] = useState(initialState)\n```",
    lastUpdated: "2024-01-20"
  }
]
