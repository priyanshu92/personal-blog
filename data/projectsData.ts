interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  techStack?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Power Pages',
    description: `Worked on pro-dev authoring tools for Power Pages. Created a [Claude Code plugin](https://aka.ms/ppskills)`,
    imgSrc: '/static/images/power-pages.svg',
    href: 'https://powerpages.microsoft.com',
    techStack: ['C#', 'Typescript'],
  },
  {
    title: 'Bing.com',
    description: `Implemented user authentication for bing.com using OpenIdConnect and OAuth 2.1 protocols. This involved integrating with Microsoft identity platform to enable secure sign-in. Implemented a custom cookie serializer to ensure small cookie size for performance optimization.`,
    imgSrc: '/static/images/bing.png',
    href: 'https://www.bing.com',
    techStack: ['C#', 'ASP.NET Core', 'OpenIdConnect'],
  },
  {
    title: 'E2E Testing Framework for Copilot',
    description: `Implemented an end-to-end testing framework for Copilot using Playwright. The framework supports JSON based test authoring for easy test creation.`,
    imgSrc: '/static/images/copilot.png',
    techStack: ['C#', 'Playwright', 'Azure DevOps'],
  },
  {
    title: 'Industrial Data Diagnostics',
    description: `Industrial Data Diagnostics delivers next-generation insights into asset health and overall performance. This cloud-based solution provides Comparative Performance Analytics and Industry Peer Benchmarking to uncover the true cost, reliability and availability of assets.`,
    imgSrc: '/static/images/idd.png',
    href: 'https://www.gevernova.com/software/products/asset-performance-management',
    techStack: ['C#', 'ASP.NET Core', 'Sql Server'],
  },
  {
    title: 'APM Scheduler Dashboard',
    description: `A react based dashboard for APM Scheduler. It provides a user-friendly interface for managing and monitoring scheduled tasks including real time progress for on-going tasks using SignalR.`,
    imgSrc: '/static/images/idd.png',
    href: 'https://www.gevernova.com/software/products/asset-performance-management',
    techStack: ['Typescript', 'React', 'SignalR'],
  },
  {
    title: 'Order Management System (OMS)',
    description: `Infosys uses OMS to manage the financial and personnel details of projects.`,
    imgSrc: '/static/images/infy.webp',
    href: 'https://www.infosys.com',
    techStack: ['C#', 'ASP.NET', 'Sql Server'],
  },
]

export default projectsData
