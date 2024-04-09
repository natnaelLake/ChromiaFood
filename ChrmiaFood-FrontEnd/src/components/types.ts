// import { Buffer } from "buffer";
import { ReactNode } from "react";
export type User = {
  name: string;
  id: number;
  account: number;
};
export type PostDto = {
  timestamp: number;
  user: User;
  content: string;
};
export type GetPostsReturnType = {
  pointer: number;
  posts: PostDto[];
};

export type UsersDto = {
  name: string;
  id: string;
};
export type GetUsersReturnType = {
  pointer: number;
  users: UsersDto[];
};
export interface defaultComponentProps {
  children: ReactNode;
}

export interface RegisterComponentProps {
  handleLoginLinkClick: () => void;
}


export interface LoginComponentProps {
  handleSignupLinkClick: () => void;
}
