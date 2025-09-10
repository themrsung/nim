type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: '주식의 기초',
    description: '금융소비자가 아닌, 투자자가 되는 법! - 이론 공부는 성공적인 투자의 기본입니다.',
    link: 'https://class101.net/ko/products/6889d4e4177e821d7f06a4c4',
    video:
      '/stock_essentials.mp4',
    id: 'project1',
  },
  // {
  //   name: '주식투자자를 위한 재무제표',
  //   description: '회계사가 아닌, 투자자가 알려주는 진짜 재무제표 분석법. - 실전에서 쓸모있는 지식만 담았습니다.',
  //   link: 'https://class101.net/ko/products/68ba9cdab2042c997ae62236',
  //   video:
  //     '/financial_statements.mp4',
  //   id: 'project2',
  // },
  {
    name: '미래 서버',
    description:
      '진짜 시장 경제를 구현한 마인크래프트 서버입니다.',
    link: 'https://discord.gg/QV6TT9Fyv3',
    video:
      '/mirae_server_720p.mp4',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Family Office',
    title: 'Portfolio Manager',
    start: '2016',
    end: '2022',
    link: '/',
    id: 'work1',
  },
  {
    company: '엘리시움 인베스트먼트',
    title: 'CEO',
    start: '2022',
    end: '2023',
    link: 'https://www.linkedin.com/company/eic-korea',
    id: 'work2',
  },
  {
    company: '스타일리더',
    title: 'Sales Professional',
    start: '2024',
    end: '2025',
    link: 'http://styleleader.co.kr',
    id: 'work3',
  },
  {
    company: '미래 리서치',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://www.linkedin.com/company/themrsung',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/themrsung',
  },
  {
    label: 'YouTube',
    link: 'https://youtube.com/@themrsung',
  },
  {
    label: 'Github',
    link: 'https://github.com/themrsung',
  },
]

export const EMAIL = 'biz@sjun.me'
