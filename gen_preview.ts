import fs from 'fs';
import { pythonTrackData } from './src/context/tracks/pythonData';

const ids = ['python-20', 'python-40', 'python-60', 'python-80', 'python-100'];

let md = '# Content Previews (Lessons 20, 40, 60, 80, 100)\n\n';
md += 'The data for these lessons is already uniquely generated in `pythonData.ts`. It includes all the required structures (Concept, Examples, Mistakes, Challenges, etc.).\n\n';

ids.forEach(id => {
  const l = pythonTrackData.find(x => x.lesson_slug === id || x.id === id);
  if (l) {
    md += `## ${l.title} (Type: ${l.lesson_type})\n`;
    md += `**Context:** ${l.content?.context}\n\n`;
    md += `**Description:** ${l.content?.description}\n\n`;
    md += `**Prototype:**\n\`\`\`python\n${l.content?.prototype}\n\`\`\`\n\n`;
    md += `**Expected Output:** ${l.expected_output}\n\n`;
    
    md += `### Quick Practical Examples (${l.quick_practical_examples?.length})\n`;
    l.quick_practical_examples?.forEach((ex: any) => {
      md += `- **[${ex.type.toUpperCase()}]** ${ex.title}: ${ex.explanation}\n`;
      if (ex.code) md += `  \`\`\`python\n  ${ex.code}\n  \`\`\`\n`;
    });
    
    md += `\n---\n\n`;
  }
});

fs.writeFileSync('../preview_milestones_clean.md', md, 'utf8');
