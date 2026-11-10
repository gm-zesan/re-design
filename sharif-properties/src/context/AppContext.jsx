import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('sharif_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('sharif_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('sharif_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // ignore storage errors
    }
    return 'light';
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('sharif_theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    try {
      localStorage.setItem('sharif_favorites', JSON.stringify(favorites));
    } catch {
      // ignore storage errors
    }
  }, [favorites]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('sharif_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('sharif_user');
      }
    } catch {
      // ignore
    }
  }, [user]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev ? null : null));
    }, 3500);
  };

  const toggleFavorite = (slug) => {
    setFavorites((prev) => {
      const exists = prev.includes(slug);
      const next = exists ? prev.filter((s) => s !== slug) : [...prev, slug];
      showToast(exists ? 'Removed from saved properties' : 'Saved to your shortlist');
      return next;
    });
  };

  const isFavorite = (slug) => favorites.includes(slug);

  const loginUser = (profile) => {
    setUser(profile);
    showToast(`Welcome, ${profile.name || profile.email}`);
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Signed out successfully');
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        user,
        loginUser,
        logoutUser,
        toast,
        showToast,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 no-print">
          <div
            className={`px-5 py-2.5 rounded-md shadow-elevated text-sm font-medium border ${toast.type === 'error'
                ? 'bg-brand-magenta text-white border-brand-magentaDark'
                : 'bg-brand-navy text-white border-brand-cobalt'
              }`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
