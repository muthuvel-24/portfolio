import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 text-center sm:text-left">
          Designed & Built by{' '}
          <span className="gradient-text font-semibold">Muthuvel S.</span>{' '}
          © 2026
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/muthuvel-24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg flex items-center justify-center"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/muthuvel2004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://leetcode.com/u/Muthuvel_S"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg flex items-center justify-center"
            aria-label="LeetCode"
          >
            <LeetCodeIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
