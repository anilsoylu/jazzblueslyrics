// WordPress Type Definitions

// Base WordPress entity interface
interface WPEntity {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  template: string
  meta: {
    _acf_changed: boolean
    [key: string]: any
  }
  class_list: string[]
  _links: {
    self: {
      href: string
      targetHints?: {
        allow: string[]
      }
    }[]
    collection: {
      href: string
    }[]
    about: {
      href: string
    }[]
    "wp:attachment": {
      href: string
    }[]
    curies: {
      name: string
      href: string
      templated: boolean
    }[]
    [key: string]: any
  }
  [key: string]: any
}

// Standard WordPress post type
export interface Post extends WPEntity {
  content: {
    rendered: string
    protected?: boolean
  }
  excerpt: {
    rendered: string
    protected?: boolean
  }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  format: string
  categories: number[]
  tags: number[]
}

// WordPress page type
export interface Page extends WPEntity {
  parent: number
  menu_order: number
  comment_status: string
  ping_status: string
  content: {
    rendered: string
    protected?: boolean
  }
  excerpt: {
    rendered: string
    protected?: boolean
  }
  featured_media: number
}

// WordPress category
export interface Category extends WPEntity {
  description: string
  parent: number
  count: number
  taxonomy: string
}

// WordPress tag
export interface Tag extends WPEntity {
  description: string
  count: number
  taxonomy: string
}

// WordPress author (user)
export interface Author extends WPEntity {
  name: string
  description: string
  url: string
  avatar_urls: {
    [key: string]: string
  }
}

// WordPress media
export interface FeaturedMedia extends WPEntity {
  alt_text: string
  caption: {
    rendered: string
  }
  description: {
    rendered: string
  }
  media_type: string
  mime_type: string
  media_details: {
    width: number
    height: number
    file: string
    sizes: {
      [key: string]: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
    }
  }
  source_url: string
}

// Custom Post Type: Ads List
export interface AdsList extends WPEntity {
  acf: {
    bonus: string
    type: string
    image: string
    link: string
  }
}

// Custom Post Type: Company List - Updated based on your data
export interface CompanyList extends WPEntity {
  acf: {
    price?: string
    price_type?: string
    link?: string
  }
}
