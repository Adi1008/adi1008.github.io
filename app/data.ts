type Publication = {
  title: string
  authors: string
  venue: string
  year: string
  doi: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  date: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Asymmetric ether solvents for high-rate lithium metal batteries',
    authors:
      'Il Rok Choi, Yuelang Chen, Aditya Shah, Jacob Florian, Chad Serrao, John Holoubek, Hao Lyu, Elizabeth Zhang, Jun Ho Lee, Yangju Lin, Sang Cheol Kim, Hyunchang Park, Pu Zhang, Junyoung Lee, Jian Qin, Yi Cui, Zhenan Bao',
    venue: 'Nature Energy',
    year: '2025',
    doi: 'https://doi.org/10.1038/s41560-025-01716-w',
    id: 'pub-1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Planetary equilibrium temperature',
    description:
      'Estimating the temperature of a planet with an energy balance',
    date: 'March 2023',
    link: '/blog/planetary-equilibrium-temperature',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=thYcPkYAAAAJ',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/adi1008',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/adi1008',
  },
]

export const EMAIL = 'aditya.shah@stanford.edu'

export const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=thYcPkYAAAAJ'
