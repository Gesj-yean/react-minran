export interface MessageType {
  id: string | number;
  avatar: string;
  userName: string;
  title: string;
  content?: string;
  tag?: string[];
  likeNum: number;
  commentNum: number;
  isLike: boolean;
  isFollow: boolean;
  isStar: boolean;
}
