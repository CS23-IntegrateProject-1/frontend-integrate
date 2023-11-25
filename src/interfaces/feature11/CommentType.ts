export interface ArticleComment {
  commentId: number;
  content: string;
  create_date: string;
  articleId: number;
  userId: number;
}

export interface CommentItemProps extends ModalComponentProps {
  article?: { topic: string };
  articleId?: number;
  commentId?: number;
  content?: string;
  create_date?: string;
  user?: {
    profile_picture: File | null;
    username: string;
  };
  userID?: number;
  onEdit?: (comment: CommentItemProps) => void;
}

export interface CommentItem {
  article?: { topic: string };
  articleId?: number;
  commentId?: number;
  content?: string;
  create_date?: string;
  user?: {
    profile_picture: File | null;
    username: string;
  };
  userID?: number;
  onEdit?: (comment: CommentItemProps) => void;
}
export interface ModalComponentProps {
  isOpen?: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export interface EditCommentModalProps extends ModalComponentProps {
  article?: { topic: string };
  articleId?: number;
  commentId?: number;
  content?: string;
  create_date?: string;
  user?: {
    profile_picture: File | null;
    username: string;
  };
  userID?: number;
  // comment?: CommentItemProps;
  
  // onEditComment: (comment: CommentItemProps) => void;
}
