export default function Footer() {
  return (
    <>
      <footer className="bg-indigo-200 relative inset-x-0 bottom-0 h-10 md:h-17 dark:bg-dark-900">
        <div className=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-dark sm:text-center dark:text-dark ">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-dark-500 dark:text-dark-400 sm:mt-0">
            <li>
              <a href="/#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
