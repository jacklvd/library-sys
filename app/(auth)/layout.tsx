import { ReactNode } from 'react'
import Image from 'next/image'

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">
              KnowledgeAddict
            </h1>
          </div>
        </div>
        <div>{children}</div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="auth illustration"
          height={1000}
          width={1000}
          className="object-cover size-full"
        />
      </section>
    </main>
  )
}

export default Layout
