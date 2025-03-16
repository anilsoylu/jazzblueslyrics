import { GlobalData } from "@/data/global"
import { newContentText } from "@/data/detail"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

      {/*
            <div className="prose dark:prose-invert mx-auto max-w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ node, ...props }) => (
                  <Table>
                    {caption && <TableCaption>{caption}</TableCaption>}
                    {props.children}
                  </Table>
                ),
                thead: ({ node, ...props }) => (
                  <TableHeader>{props.children}</TableHeader>
                ),
                tbody: ({ node, ...props }) => (
                  <TableBody>{props.children}</TableBody>
                ),
                tr: ({ node, ...props }) => <TableRow>{props.children}</TableRow>,
                td: ({ node, ...props }) => (
                  <TableCell>{props.children}</TableCell>
                ),
                th: ({ node, ...props }) => (
                  <TableHead>{props.children}</TableHead>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
            */}
    </div>
  )
}

export default MyCompanies
