import React, { useContext, useState, useEffect } from "react";

interface SitesProviderProps {
  children: React.ReactNode;
}

interface SitesContextProps {
  sites: Array<{ title: string; url: string }>;
  addSite: (title: string, url: string) => void;
  removeSite: (title: string) => void;
}

const SitesContext = React.createContext({} as SitesContextProps);

export const SitesProvider = ({ children }: SitesProviderProps) => {
  const [sites, setSites] = useState<Array<{ title: string; url: string }>>([]);

  useEffect(() => {
    if (!localStorage.getItem("sites")) {
      localStorage.setItem("sites", JSON.stringify(sites));
    } else {
      setSites(JSON.parse(localStorage.getItem("sites") || ""));
    }
  }, []);

  const addSite = async (title: string, url: string) => {
    setSites((sites) => [...sites, { title: title, url: url }]);

    localStorage.setItem(
      "sites",
      JSON.stringify([...sites, { title: title, url: url }])
    );
  };

  const removeSite = (title: string) => {
    setSites((sites) =>
      sites.filter((siteElement) => siteElement.title != title)
    );
    localStorage.setItem(
      "sites",
      JSON.stringify(sites.filter((siteElement) => siteElement.title != title))
    );
  };

  return (
    <SitesContext.Provider value={{ sites, addSite, removeSite }}>
      {children}
    </SitesContext.Provider>
  );
};

export const useSites = () => {
  const sitesContext = useContext(SitesContext);

  return sitesContext;
};
