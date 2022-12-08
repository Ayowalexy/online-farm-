import Head from "next/head";
import Image from "next/image";
import Login from "./Auth/login";
import styles from "../styles/Home.module.css";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Login />
      
    </>
  );
}
