import { ApiReferenceReact } from '@scalar/api-reference-react';
import React from 'react';
import '@scalar/api-reference-react/style.css';

interface Props {
  specUrl: string;
}

export const ScalarDocs = ({ specUrl }: Props) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Initial check
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    // Observer for class changes on html
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const config = {
    spec: {
      url: specUrl,
    },
    // Use a standard theme that supports dark mode well
    theme: 'purple',
    layout: 'modern',
    hideClientButton: false,
    darkMode: isDark,
  } as const;

  return (
    <div className={isDark ? 'dark-mode h-full w-full' : 'h-full w-full'}>
      <ApiReferenceReact configuration={config} />
    </div>
  );
};
