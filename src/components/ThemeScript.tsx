import Script from 'next/script'

export function ThemeScript() {
    return (
        <Script
            id="theme-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = savedTheme || (prefersDark ? 'dark' : 'light');
            
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            }
          })();
        `,
            }}
        />
    )
}
