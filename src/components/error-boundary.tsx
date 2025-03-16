"use client"
import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Page error:", {
      error,
      errorInfo,
      timestamp: new Date().toISOString(),
    })
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">
                Beklenmeyen Bir Hata Oluştu
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {this.state.error?.message ||
                  "Sayfa yüklenirken bir hata oluştu."}
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false })
                  window.location.reload()
                }}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Sayfayı Yenile
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
