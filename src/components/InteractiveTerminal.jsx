import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

const InteractiveTerminal = ({ portfolioData }) => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Thabiso Matsaba DevOps Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands' },
    { type: 'output', content: '' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const commands = {
    help: () => ({
      output: [
        '',
        '📋 Available Commands:',
        '  help                 - Show this help message',
        '  clear                - Clear the terminal',
        '  about                - Display information about Thabiso',
        '  skills [--cloud|--container|--cicd|--all]  - Show technical skills',
        '  projects [--docker|--aws|--gcp|--all]    - List projects',
        '  experience [--devops|--all]           - Show work experience',
        '  certifications       - List certifications',
        '  contact              - Get contact information',
        '  whoami               - Display current user info',
        '  resume               - Download CV/Resume',
        ''
      ]
    }),

    clear: () => {
      setHistory([]);
      return { output: [] };
    },

    about: () => ({
      output: [
        '',
        '👨‍💻 About Thabiso Matsaba',
        '═══════════════════════════════════════════',
        portfolioData.about.description,
        ''
      ]
    }),

    skills: (args) => {
      const flag = args[0];
      let filtered = portfolioData.skills;

      if (flag === '--cloud') {
        filtered = portfolioData.skills.filter(s => 
          s.category.toLowerCase().includes('cloud') || 
          s.category.toLowerCase().includes('devops')
        );
      } else if (flag === '--container') {
        filtered = portfolioData.skills.filter(s => 
          s.category.toLowerCase().includes('container') || 
          s.category.toLowerCase().includes('orchestration')
        );
      } else if (flag === '--cicd') {
        filtered = portfolioData.skills.filter(s => 
          s.category.toLowerCase().includes('ci/cd')
        );
      }

      const output = ['', '🛠️  Technical Skills', '═══════════════════════════════════════════'];
      
      filtered.forEach(skillCategory => {
        output.push('');
        output.push(`📌 ${skillCategory.category}:`);
        output.push(`   ${skillCategory.items.join(', ')}`);
      });
      
      output.push('');
      return { output };
    },

    projects: (args) => {
      const flag = args[0];
      let filtered = portfolioData.projects;

      if (flag === '--docker') {
        filtered = portfolioData.projects.filter(p => 
          p.tags.some(tag => tag.toLowerCase().includes('docker'))
        );
      } else if (flag === '--aws') {
        filtered = portfolioData.projects.filter(p => 
          p.tags.some(tag => tag.toLowerCase().includes('aws'))
        );
      } else if (flag === '--gcp') {
        filtered = portfolioData.projects.filter(p => 
          p.tags.some(tag => tag.toLowerCase().includes('gcp') || tag.toLowerCase().includes('kubernetes'))
        );
      }

      const output = ['', '🚀 Projects', '═══════════════════════════════════════════'];
      
      filtered.forEach((project, idx) => {
        output.push('');
        output.push(`${idx + 1}. ${project.title}`);
        output.push(`   ${project.description}`);
        output.push(`   Tech Stack: ${project.tags.join(', ')}`);
        output.push(`   GitHub: ${project.githubUrl}`);
      });
      
      output.push('');
      return { output };
    },

    experience: (args) => {
      const flag = args[0];
      let filtered = portfolioData.experience;

      if (flag === '--devops') {
        filtered = portfolioData.experience.filter(e => 
          e.role.toLowerCase().includes('devops') || 
          e.role.toLowerCase().includes('cloud')
        );
      }

      const output = ['', '💼 Work Experience', '═══════════════════════════════════════════'];
      
      filtered.forEach((job, idx) => {
        output.push('');
        output.push(`${idx + 1}. ${job.role}`);
        output.push(`   Company: ${job.company}`);
        output.push(`   Duration: ${job.dates}`);
        output.push('   Key Achievements:');
        job.description.forEach(desc => {
          output.push(`   • ${desc}`);
        });
      });
      
      output.push('');
      return { output };
    },

    certifications: () => {
      const output = ['', '🏆 Certifications', '═══════════════════════════════════════════'];
      
      portfolioData.certifications.forEach((cert, idx) => {
        output.push('');
        output.push(`${idx + 1}. ${cert.title}`);
        output.push(`   Issuer: ${cert.issuer}`);
        if (cert.url) {
          output.push(`   Credential: ${cert.url}`);
        }
      });
      
      output.push('');
      return { output };
    },

    contact: () => ({
      output: [
        '',
        '📧 Contact Information',
        '═══════════════════════════════════════════',
        `Email:    ${portfolioData.contact.email}`,
        `LinkedIn: ${portfolioData.contact.linkedin}`,
        `GitHub:   ${portfolioData.contact.github}`,
        ''
      ]
    }),

    whoami: () => ({
      output: [
        '',
        `${portfolioData.name} - ${portfolioData.title}`,
        portfolioData.bio,
        ''
      ]
    }),

    resume: () => ({
      output: [
        '',
        '📄 Resume Download',
        '═══════════════════════════════════════════',
        'Opening resume in new tab...',
        `URL: ${portfolioData.cvUrl}`,
        ''
      ],
      action: () => window.open(portfolioData.cvUrl, '_blank')
    })
  };

  /**
   * FIX 2: Batched state updates for efficiency.
   * Instead of calling setHistory multiple times in a loop, we build
   * an array of new history items and call setHistory ONCE.
   */
  const executeCommand = (input) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add command to command history (for arrow keys)
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    // This array will hold all new lines to be added to the display
    const newHistory = [{ type: 'command', content: trimmed }];

    // Parse command and arguments
    const [cmd, ...args] = trimmed.toLowerCase().split(' ');

    // Execute command
    if (commands[cmd]) {
      const result = commands[cmd](args);
      
      // Add all output lines to our newHistory array
      if (result.output && result.output.length > 0) {
        result.output.forEach(line => {
          newHistory.push({ type: 'output', content: line });
        });
      }

      // Execute any additional actions
      if (result.action) {
        result.action();
      }
    } else {
      // Add error lines to our newHistory array
      newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
      newHistory.push({ type: 'output', content: 'Type "help" to see available commands' });
      newHistory.push({ type: 'output', content: '' });
    }

    // Now, update the state just once with all the new lines
    setHistory(prev => [...prev, ...newHistory]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    executeCommand(currentInput);
    setCurrentInput('');
  };

  /**
   * FIX 1: Removed 'Enter' key logic from handleKeyDown.
   * This function now *only* handles arrow keys and Tab.
   * The 'Enter' key is handled separately by handleSubmit.
   */
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => 
        cmd.startsWith(currentInput.toLowerCase())
      );
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 dark:bg-black rounded-lg shadow-2xl overflow-hidden border border-gray-700 dark:border-gray-600">
      {/* Terminal Header */}
      <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-700 dark:border-gray-600">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 ml-4 text-gray-400 dark:text-gray-500">
          <Terminal className="w-4 h-4" />
          <span className="text-sm font-mono">thabiso@devops-terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        className="p-4 h-96 overflow-y-auto font-mono text-sm bg-gray-900 dark:bg-black"
        onClick={() => inputRef.current?.focus()}
        style={{ cursor: 'text' }}
      >
        {history.map((item, idx) => (
          <div key={idx} className="mb-1">
            {item.type === 'command' && (
              <div className="flex items-start gap-2 text-green-400 dark:text-green-500">
                <span className="text-cyan-400 dark:text-cyan-500">visitor@terminal:~$</span>
                <span>{item.content}</span>
              </div>
            )}
            {item.type === 'output' && (
              <div className="text-gray-300 dark:text-gray-400 whitespace-pre-wrap">
                {item.content}
              </div>
            )}
            {item.type === 'error' && (
              <div className="text-red-400 dark:text-red-500">
                {item.content}
              </div>
            )}
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-start gap-2">
          <span className="text-cyan-400 dark:text-cyan-500">visitor@terminal:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            /**
             * FIX 1 (continued): Updated onKeyDown prop.
             * It now correctly calls handleSubmit for 'Enter' and
             * handleKeyDown for all other special keys.
             */
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              } else {
                handleKeyDown(e);
              }
            }}
            className="flex-1 bg-transparent outline-none text-green-400 dark:text-green-500 caret-green-400 dark:caret-green-500"
            autoComplete="off"
            spellCheck="false"
          />
        </div>

        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Footer with Hints */}
      <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-700 dark:border-gray-600">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span>💡 Tip: Try "skills --cloud" or "projects --docker"</span>
          <span>Press ↑/↓ for command history | Tab for autocomplete</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;