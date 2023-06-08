import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/state";
import NavBar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const dispatch = useDispatch();
  const { fetchItems } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
