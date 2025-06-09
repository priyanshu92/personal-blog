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
    description: `Implemented user authentication for bing.com using OpenIdConnect.`,
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
]

export default projectsData
