
import { LearningSection } from './types';

export const SECTIONS: LearningSection[] = [
  {
    id: 'html',
    title: 'HTML',
    shortDesc: 'The backbone of every website. Learn to structure web content.',
    icon: 'fa-brands fa-html5',
    color: 'bg-orange-600',
    topics: [
      {
        category: 'Basics',
        title: '1. What is HTML?',
        content: 'HTML stands for HyperText Markup Language. It is used to create the structure of web pages. It is NOT a programming language, but a markup language that tells the browser how to display content like text, images, and links.',
        codeSnippet: '<!-- HTML Structure -->\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>'
      },
      {
        category: 'Basics',
        title: '2. Basic Structure',
        content: 'Every HTML document starts with <!DOCTYPE html> to tell the browser it is HTML5. The <html> element is the root, <head> contains meta info, and <body> contains the visible content.',
        codeSnippet: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n</body>\n</html>'
      },
      {
        category: 'Elements',
        title: '3. Tags & Elements',
        content: 'A tag is a command (<p>), and an element is the full thing (<p>Hello</p>). Tags come in two types:\n- Paired: <p></p>\n- Unpaired (Empty): <br>, <hr>',
        codeSnippet: '<p>This is a paired tag</p>\n<br> <!-- This is unpaired -->'
      },
      {
        category: 'Content',
        title: '4. Headings & Paragraphs',
        content: 'HTML has 6 levels of headings: h1 (largest) to h6 (smallest). Paragraphs are defined with the <p> tag.',
        codeSnippet: '<h1>Biggest Heading</h1>\n<h6>Smallest Heading</h6>\n<p>This is a paragraph of text.</p>'
      },
      {
        category: 'Content',
        title: '5. Text Formatting',
        content: 'Use these to change how text looks:\n- <b>: Bold\n- <i>: Italic\n- <u>: Underline\n- <strong>: Important text\n- <em>: Emphasized text',
        codeSnippet: '<b>Bold Text</b>\n<i>Italic Text</i>\n<strong>Strong Importance</strong>'
      },
      {
        category: 'Media',
        title: '6. Links & Images',
        content: '<a> tag creates links (Anchor). <img> tag displays images.\n\nAttributes:\n- href: The URL for the link.\n- src: The path to the image.\n- alt: Alternative text if image fails to load.',
        codeSnippet: '<a href="https://google.com">Visit Google</a>\n<img src="logo.png" alt="Company Logo">'
      },
      {
        category: 'Layout',
        title: '7. Lists',
        content: 'Lists come in two types:\n- Ordered List (<ol>): Numbered 1, 2, 3...\n- Unordered List (<ul>): Bullet points.',
        codeSnippet: '<ul>\n  <li>Item One</li>\n  <li>Item Two</li>\n</ul>'
      },
      {
        category: 'Layout',
        title: '8. Tables',
        content: 'Tables are used for data. Use <table>, <tr> for rows, <th> for headings, and <td> for data.',
        codeSnippet: '<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alex</td>\n    <td>20</td>\n  </tr>\n</table>'
      },
      {
        category: 'Forms',
        title: '9. Forms & Inputs',
        content: 'Forms collect user data. Use the <form> element and <input> tags for fields like text, password, and submit buttons.',
        codeSnippet: '<form>\n  <input type="text" placeholder="Username">\n  <input type="password">\n  <input type="submit" value="Login">\n</form>'
      },
      {
        category: 'Advanced',
        title: '10. Semantic HTML',
        content: 'Semantic tags have meaning! They help Google (SEO) and screen readers understand your page structure better.\n\nExamples: <header>, <nav>, <section>, <article>, <footer>',
        codeSnippet: '<header>\n  <nav>Navigation menu here</nav>\n</header>\n<footer>Copyright 2024</footer>'
      },
      {
        category: 'Advanced',
        title: '11. HTML Attributes',
        content: 'Attributes provide extra information about elements. They are always specified in the start tag (name="value"). Common ones: id, class, style, title.',
        codeSnippet: '<p class="text-blue" id="main-para">Hello World</p>'
      },
      {
        category: 'Advanced',
        title: '12. Block vs Inline',
        content: 'Block elements always start on a new line and take full width (div, p, h1). Inline elements do not start on a new line and only take as much width as necessary (span, a, img).',
        codeSnippet: '<div>Block Element</div>\n<span>Inline Element</span>'
      },
      {
        category: 'Advanced',
        title: '13. HTML5 Features',
        content: 'HTML5 introduced new powerful features like <audio>, <video>, <canvas>, Local Storage, and better input types like color and date.',
        codeSnippet: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>'
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    shortDesc: 'Make your websites look beautiful with colors, fonts, and layouts.',
    icon: 'fa-brands fa-css3-alt',
    color: 'bg-blue-600',
    topics: [
      {
        category: 'Basics',
        title: '1. What is CSS?',
        content: 'CSS (Cascading Style Sheets) is used to style HTML. While HTML is the skeleton, CSS is the skin and clothing that makes the website look beautiful.',
        codeSnippet: '/* Syntax */\nselector {\n  property: value;\n}'
      },
      {
        category: 'Basics',
        title: '2. Types of CSS',
        content: '1. Inline: style="" inside HTML tag.\n2. Internal: <style> in head.\n3. External: link to a .css file (Best practice).',
        codeSnippet: '<!-- External link -->\n<link rel="stylesheet" href="style.css">'
      },
      {
        category: 'Basics',
        title: '3. CSS Syntax',
        content: 'A CSS rule consists of a selector and a declaration block. The selector points to the HTML element, and the declaration defines the style.',
        codeSnippet: 'p {\n  color: red;\n  text-align: center;\n}'
      },
      {
        category: 'Basics',
        title: '4. Selectors',
        content: 'Basic selectors:\n- p: Element selector\n- .class: Class selector\n- #id: ID selector\n- h1, h2: Grouping selector',
        codeSnippet: '.student-info {\n  font-size: 16px;\n}\n#header-logo {\n  width: 50px;\n}'
      },
      {
        category: 'Styling',
        title: '5. Colors & Units',
        content: 'Colors can be Names (red), HEX (#ff0000), or RGB(255, 0, 0).\n\nUnits:\n- px: Absolute pixels\n- %: Percentage\n- rem/em: Relative to font size\n- vh/vw: Relative to viewport size',
        codeSnippet: 'body {\n  color: #333;\n  font-size: 1.2rem;\n}'
      },
      {
        category: 'Styling',
        title: '6. Box Model (V. Important)',
        content: 'Every element is a box. The Box Model consists of:\n1. Content (The text/image)\n2. Padding (Space inside border)\n3. Border (The edge)\n4. Margin (Space outside border)',
        codeSnippet: '.box {\n  margin: 10px;\n  padding: 20px;\n  border: 1px solid black;\n}'
      },
      {
        category: 'Styling',
        title: '7. Fonts & Text',
        content: 'Control your text with font-family, font-size, font-weight, text-align, and text-decoration.',
        codeSnippet: 'h1 {\n  font-family: Arial, sans-serif;\n  text-decoration: underline;\n  text-align: center;\n}'
      },
      {
        category: 'Layout',
        title: '8. Display & Position',
        content: 'Display controls layout (block, inline, none). Position controls where elements sit (static, relative, absolute, fixed, sticky).',
        codeSnippet: '.fixed-nav {\n  position: fixed;\n  top: 0;\n  display: flex;\n}'
      },
      {
        category: 'Layout',
        title: '9. Flexbox',
        content: 'Flexbox is a 1D layout model for making responsive rows or columns. Key properties: justify-content, align-items, flex-direction.',
        codeSnippet: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'
      },
      {
        category: 'Layout',
        title: '10. CSS Grid',
        content: 'Grid is a 2D layout system. It handles both columns and rows together, perfect for complex website structures.',
        codeSnippet: '.grid-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}'
      },
      {
        category: 'Advanced',
        title: '11. Responsive Design',
        content: 'Media Queries allow you to change styles based on screen size. This makes your website mobile-friendly.',
        codeSnippet: '@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n}'
      },
      {
        category: 'Advanced',
        title: '12. Pseudo Classes',
        content: 'Pseudo-classes define a special state of an element. Example: :hover when you move mouse over a link.',
        codeSnippet: 'a:hover {\n  color: orange;\n  text-decoration: none;\n}'
      },
      {
        category: 'Advanced',
        title: '13. Transitions & Animation',
        content: 'Transitions let you change property values smoothly over time. Animations allow for complex movement using keyframes.',
        codeSnippet: '.button {\n  transition: background 0.3s;\n}\n@keyframes move {\n  from {left: 0;} to {left: 100px;}\n}'
      },
      {
        category: 'Advanced',
        title: '14. Z-index & Overflow',
        content: 'Z-index controls the stack order (which element is on top). Overflow handles what happens if content is too big for its container.',
        codeSnippet: '.modal {\n  z-index: 100;\n}\n.container {\n  overflow: hidden;\n}'
      }
    ]
  },
  {
    id: 'python',
    title: 'Python',
    shortDesc: 'A beginner-friendly language known for its readability and power.',
    icon: 'fa-brands fa-python',
    color: 'bg-blue-500',
    topics: [
      {
        title: '1. What is Python?',
        content: 'Python is a high-level, interpreted, and general-purpose programming language. It is famous because its syntax is very close to English, making it perfect for students.',
        codeSnippet: '# Python is simple and readable\nprint("Python is awesome!")'
      },
      {
        title: '2. First Program',
        content: 'To start, you just need a text editor and the Python interpreter installed.',
        codeSnippet: 'print("Hello, World!")'
      }
    ]
  },
  {
    id: 'c',
    title: 'C Language',
    shortDesc: 'The mother of all modern languages. Great for learning logic.',
    icon: 'fa-solid fa-code',
    color: 'bg-indigo-600',
    topics: [
      {
        title: '1. What is C?',
        content: 'C is a procedural, structured, and compiled programming language developed by Dennis Ritchie.',
        codeSnippet: '#include <stdio.h>\n\nint main() {\n    printf("C Language is the foundation.");\n    return 0;\n}'
      }
    ]
  },
  {
    id: 'cpp',
    title: 'C++',
    shortDesc: 'C with Objects. Used for high-performance games and apps.',
    icon: 'fa-solid fa-laptop-code',
    color: 'bg-purple-600',
    topics: [
      {
        title: '1. What is C++?',
        content: 'C++ is an object-oriented, compiled language. It is an extension of C, adding modern features like Classes.',
        codeSnippet: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "C++: Fast and Powerful" << endl;\n    return 0;\n}'
      }
    ]
  },
  {
    id: 'java',
    title: 'Java',
    shortDesc: 'Write once, run anywhere. Powering millions of devices.',
    icon: 'fa-brands fa-java',
    color: 'bg-orange-500',
    topics: [
      {
        title: '1. What is Java?',
        content: 'Java is a high-level, object-oriented language. Its motto is "Write Once, Run Anywhere" (WORA).',
        codeSnippet: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java!");\n    }\n}'
      }
    ]
  },
  {
    id: 'os',
    title: 'OS Installation',
    shortDesc: 'Step-by-step guides for installing Windows, Linux, and Dual Boot.',
    icon: 'fa-solid fa-compact-disc',
    color: 'bg-slate-700',
    topics: [
      {
        category: 'Windows OS',
        title: '1. Windows Basics',
        content: 'Windows is the most popular GUI-based OS. Installation usually involves a bootable USB and a product key.',
      },
      {
        category: 'Linux Installation',
        title: '1. What is Linux?',
        content: 'Linux is a free, open-source operating system based on Unix.\n\nWhy Linux?\n- Free & open source\n- Fast and lightweight\n- Secure\n- Best for: Programming, Servers, Cybersecurity, Learning OS internals.\n\nCommon Linux Distributions (Distros): Ubuntu (Recommended), Linux Mint, Fedora, Debian, Arch Linux.',
      },
      {
        category: 'Linux Installation',
        title: '2. Requirements',
        content: 'Hardware Requirements (Basic):\n- RAM: Minimum 2–4 GB\n- Storage: Minimum 20–40 GB\n- Bootable USB (8 GB)\n\nSoftware Requirements:\n- Linux ISO file\n- Bootable USB tool (Rufus / Balena Etcher)',
      },
      {
        category: 'Linux Installation',
        title: '3. Booting & Live Mode',
        content: 'Linux Live Mode Concept: Most Linux distros offer a "Try Linux" option. This lets you run Linux WITHOUT installing it. No changes are made to your disk. It is perfect to test hardware compatibility.',
      },
      {
        category: 'Dual Booting',
        title: '1. What is Dual Boot?',
        content: 'Dual Boot allows two operating systems to exist on the same system. Use Windows for daily work and Linux for learning & development. At startup, you choose: Windows or Linux.',
      },
      {
        category: 'Dual Booting',
        title: '2. Preparing Disk',
        content: 'In Windows Disk Management, right-click your partition and click "Shrink Volume" (40-50 GB). Leave it as "Unallocated" space. Do NOT format this space.',
      }
    ]
  },
  {
    id: 'linux',
    title: 'Linux Commands',
    shortDesc: 'Master the terminal and become a power user.',
    icon: 'fa-brands fa-linux',
    color: 'bg-yellow-500',
    topics: [
      {
        category: 'Basic Concepts',
        title: '1. What are Linux Commands?',
        content: 'Linux commands are instructions given to the OS using the Terminal to perform tasks like file operations, system monitoring, and user management.\n\nStructure: command [options] [arguments]\nExample: ls -l /home',
        codeSnippet: 'ls -l /home'
      },
      {
        category: 'Navigation',
        title: '2. Directory Navigation',
        content: 'pwd: Present Working Directory\nls: List files\ncd: Change directory',
        codeSnippet: 'pwd\nls -l\nls -a\ncd Documents\ncd ..'
      },
      {
        category: 'File Management',
        title: '3. File & Directory Management',
        content: 'touch: Create file\nmkdir: Create folder\ncp: Copy\nmv: Move/Rename\nrm: Delete (⚠️ No recycle bin)',
        codeSnippet: 'touch file.txt\nmkdir folder\ncp file1.txt file2.txt\nrm -r folder'
      }
    ]
  }
];
