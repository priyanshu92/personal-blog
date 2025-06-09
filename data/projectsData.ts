interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  techStack?: string[]
}

const projectsData: Project[] = [
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
]

export default projectsData
