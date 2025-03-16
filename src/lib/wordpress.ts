import querystring from "query-string"
import { revalidateTag } from "next/cache"

import type {
  Post,
  Category,
  Tag,
  Page,
  Author,
  FeaturedMedia,
  AdsList,
  CompanyList,
} from "./wordpress.d"

const baseUrl = process.env.WORDPRESS_URL

if (!baseUrl) {
  throw new Error("WORDPRESS_URL environment variable is not defined")
}

interface FetchOptions {
  next?: {
    revalidate?: number | false
    tags?: string[]
  }
}

function getUrl(path: string, query?: Record<string, any>) {
  const params = query ? querystring.stringify(query) : null
  return `${baseUrl}${path}${params ? `?${params}` : ""}`
}

const defaultFetchOptions: FetchOptions = {
  next: {
    tags: ["wordpress"],
    revalidate: 3600,
  },
}

class WordPressAPIError extends Error {
  constructor(message: string, public status: number, public endpoint: string) {
    super(message)
    this.name = "WordPressAPIError"
  }
}

async function wordpressFetch<T>(
  url: string,
  options: FetchOptions = {},
  useCache: boolean = true
): Promise<T> {
  const userAgent = "Next.js WordPress Client"

  const response = await fetch(url, {
    ...defaultFetchOptions,
    ...options,
    headers: {
      "User-Agent": userAgent,
    },
  })

  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API request failed: ${response.statusText}`,
      response.status,
      url
    )
  }

  return response.json()
}

export async function getAllAdsLists(params?: {
  per_page?: number
}): Promise<AdsList[]> {
  const query: Record<string, any> = {
    per_page: params?.per_page || 100,
  }

  const url = getUrl("/wp-json/wp/v2/ads-list", query)
  return wordpressFetch<AdsList[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "ads-list"],
      revalidate: 0,
    },
  })
}

export async function getAdsListById(id: number): Promise<AdsList> {
  const url = getUrl(`/wp-json/wp/v2/ads-list/${id}`)
  const response = await wordpressFetch<AdsList>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `ads-list-${id}`],
    },
  })

  return response
}

export async function getAdsListBySlug(slug: string): Promise<AdsList> {
  const url = getUrl("/wp-json/wp/v2/ads-list", { slug })
  const response = await wordpressFetch<AdsList[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `ads-list-${slug}`],
    },
  })

  return response[0]
}

export async function getAllCompanyLists(params?: {
  per_page?: number
}): Promise<CompanyList[]> {
  const url = getUrl("/wp-json/wp/v2/company-list")
  return wordpressFetch<CompanyList[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "company-list"],
    },
  })
}

export async function getCompanyListById(id: number): Promise<CompanyList> {
  const url = getUrl(`/wp-json/wp/v2/company-list/${id}`)
  const response = await wordpressFetch<CompanyList>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `company-list-${id}`],
    },
  })

  return response
}

export async function getCompanyListBySlug(slug: string): Promise<CompanyList> {
  const url = getUrl("/wp-json/wp/v2/company-list", { slug })
  const response = await wordpressFetch<CompanyList[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `company-list-${slug}`],
    },
  })

  return response[0]
}

export async function getAllPosts(filterParams?: {
  author?: string
  tag?: string
  category?: string
  search?: string
}): Promise<Post[]> {
  const query: Record<string, any> = {
    _embed: true,
    per_page: 100,
  }

  if (filterParams?.search) {
    query.search = filterParams.search

    if (filterParams?.author) {
      query.author = filterParams.author
    }
    if (filterParams?.tag) {
      query.tags = filterParams.tag
    }
    if (filterParams?.category) {
      query.categories = filterParams.category
    }
  } else {
    if (filterParams?.author) {
      query.author = filterParams.author
    }
    if (filterParams?.tag) {
      query.tags = filterParams.tag
    }
    if (filterParams?.category) {
      query.categories = filterParams.category
    }
  }

  const url = getUrl("/wp-json/wp/v2/posts", query)
  return wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "posts"],
      revalidate: 0,
    },
  })
}

export async function getPostById(id: number): Promise<Post> {
  const url = getUrl(`/wp-json/wp/v2/posts/${id}`)
  const response = await wordpressFetch<Post>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `post-${id}`],
    },
  })

  return response
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const url = getUrl("/wp-json/wp/v2/posts", { slug })
  const response = await wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `post-${slug}`],
    },
  })

  return response[0]
}

export async function getAllCategories(): Promise<Category[]> {
  const url = getUrl("/wp-json/wp/v2/categories")
  const response = await wordpressFetch<Category[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "categories"],
      revalidate: 0,
    },
  })

  return response
}

export async function getCategoryById(id: number): Promise<Category> {
  const url = getUrl(`/wp-json/wp/v2/categories/${id}`)
  const response = await wordpressFetch<Category>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `category-${id}`],
    },
  })

  return response
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const url = getUrl("/wp-json/wp/v2/categories", { slug })
  const response = await wordpressFetch<Category[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `category-${slug}`],
    },
  })

  return response[0]
}

export async function getAllTags(): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags")
  const response = await wordpressFetch<Tag[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "tags"],
    },
  })

  return response
}

export async function getTagById(id: number): Promise<Tag> {
  const url = getUrl(`/wp-json/wp/v2/tags/${id}`)
  const response = await wordpressFetch<Tag>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `tag-${id}`],
    },
  })

  return response
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  const url = getUrl("/wp-json/wp/v2/tags", { slug })
  const response = await wordpressFetch<Tag[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `tag-${slug}`],
    },
  })

  return response[0]
}

export async function getAllPages(): Promise<Page[]> {
  const url = getUrl("/wp-json/wp/v2/pages")
  const response = await wordpressFetch<Page[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "pages"],
    },
  })

  return response
}

export async function getPageById(id: number): Promise<Page> {
  const url = getUrl(`/wp-json/wp/v2/pages/${id}`)
  const response = await wordpressFetch<Page>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `page-${id}`],
    },
  })

  return response
}

export async function getPageBySlug(slug: string): Promise<Page> {
  const url = getUrl("/wp-json/wp/v2/pages", { slug })
  const response = await wordpressFetch<Page[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `page-${slug}`],
    },
  })

  return response[0]
}

export async function getAllAuthors(): Promise<Author[]> {
  const url = getUrl("/wp-json/wp/v2/users")
  const response = await wordpressFetch<Author[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "authors"],
    },
  })

  return response
}

export async function getAuthorById(id: number): Promise<Author> {
  const url = getUrl(`/wp-json/wp/v2/users/${id}`)
  const response = await wordpressFetch<Author>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `author-${id}`],
    },
  })

  return response
}

export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia> {
  const url = getUrl(`/wp-json/wp/v2/media/${id}`)
  const response = await wordpressFetch<FeaturedMedia>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `media-${id}`],
    },
  })

  return response
}

export async function revalidateWordPressData(tags: string[] = ["wordpress"]) {
  try {
    for (const tag of tags) {
      revalidateTag(tag)
    }
  } catch (error) {
    console.error("Failed to revalidate WordPress data:", error)
    throw new Error("Failed to revalidate WordPress data")
  }
}

export { WordPressAPIError }
export type { AdsList, CompanyList }
