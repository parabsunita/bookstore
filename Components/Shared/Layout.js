import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {props.children}
    </>
  );
}
