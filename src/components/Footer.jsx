function Footer() {
  return (

    <footer className="bg-black text-gray-500 py-8 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p>
          © 2026 Swapnil. All rights reserved.
        </p>

        <div className="flex gap-6">

          <a
            href="https://github.com/swapkneel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/swapnil-goswami-526aa6353"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=swapnilkumarmeerut@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://www.instagram.com/swap.kneel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>

        </div>

      </div>

    </footer>

  )
}

export default Footer