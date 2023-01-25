import { browserHistory } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useHistory, useLocation } from "react";
export const addQuery = (bookname, bookisncode) => {
  history.push(`${bookname}`);
};
