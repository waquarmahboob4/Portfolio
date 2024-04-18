const DarkThemeScript = () => {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
      if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      `,
    }} />
  );
};

export default DarkThemeScript;
