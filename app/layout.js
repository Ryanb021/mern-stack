import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MERN Stack',
  description: 'Project created by BATMAN using NEXT.js 13',
  keywords: 'Awesome Project!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>Link</a></li>
              <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
