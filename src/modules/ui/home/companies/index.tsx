import { GlobalData } from "@/data/global"
import { newContentText } from "@/data/detail"

type MyCompaniesProps = {
  content?: string
  title?: string
  className?: string
  caption?: string
}

const MyCompanies = ({
  content = newContentText,
  title = GlobalData.title,
  className = "",
  caption = "",
}: MyCompaniesProps = {}) => {
  return (
    <div id="companies-title" className="container px-4 md:px-6">
      <article
        className="prose dark:prose-invert mx-auto max-w-full cursor-default"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default MyCompanies
