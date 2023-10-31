import {ReactElement } from "react";

export interface BadgeInterface {
  text: string;
  filled?: boolean;
}

export interface ButtonInterface {
  text: string;
  filled?: boolean;
  type: "primary" | "secondary";
  href: string;
  icon?: JSX.Element;
}

export interface CardInterface {
  indicator?: string;
  badge?: BadgeInterface;
  image?: string[];
  title: string;
  subtitle: string;
  body: string;
  btn: ButtonInterface;
}

export interface IAuth {
  userId: string;
  username: string;
  token: string;
  getAuth: boolean;
}

export interface IAuthContext {
  auth: IAuth;
  setAuth: (state: IAuth) => void;
  logoutUser: { () : void } | null;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ImageSliderProps {
  images: string[];
}

export interface CardDetailsModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactElement|ReactElement[];
}
