import React, { useContext, useState, useEffect } from "react";

interface NotesProviderProps {
  children: React.ReactNode;
}

interface NotesContextProps {
  notes: Array<{ title: string; body: string }>;
  addNote: (title: string, body: string) => void;
  removeNote: (title: string) => void;
}

const NotesContext = React.createContext({} as NotesContextProps);

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Array<{ title: string; body: string }>>(
    []
  );

  useEffect(() => {
    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      setNotes(JSON.parse(localStorage.getItem("notes") || ""));
    }
  }, []);

  const addNote = async (title: string, body: string) => {
    setNotes((notes) => [...notes, { title: title, body: body }]);

    localStorage.setItem(
      "tasks",
      JSON.stringify([...notes, { title: title, body: body }])
    );
  };

  const removeNote = (title: string) => {
    setNotes((notes) =>
      notes.filter((noteElement) => noteElement.title != title)
    );
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((noteElement) => noteElement.title != title))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const notesContext = useContext(NotesContext);

  return notesContext;
};
