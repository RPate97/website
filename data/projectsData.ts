interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Token.js',
    description: `Integrate 60+ LLMs with one TypeScript SDK using OpenAI's format. Free and open source. No proxy server required.`,
    imgSrc: '',
    href: 'https://github.com/token-js/token.js',
  },
  {
    title: 'Sphinx DevOps Platform',
    description: `Opensource and self hosted deployment platform for Solidity smart contracts. Protocol audited by Spearbit and deployed across 50+ networks.`,
    imgSrc: '',
    href: 'https://github.com/sphinx-labs/sphinx',
  },
]

export default projectsData
