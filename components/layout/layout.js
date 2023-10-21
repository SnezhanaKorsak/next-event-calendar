import { Fragment } from "react";
import MainHeader from "@/components/layout/mainHeader";

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader/>
      <main>
        {props.children}
      </main>
    </Fragment>
  );
}