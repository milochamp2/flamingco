export function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-border-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-text-light">
          &copy; 2026 Flamingo Digital. Built for plumbers who want to grow.{" "}
          <a
            href="mailto:hello@flamingodigital.com"
            className="text-magenta hover:text-magenta-hover transition-colors"
          >
            hello@flamingodigital.com
          </a>
        </p>
      </div>
    </footer>
  );
}
