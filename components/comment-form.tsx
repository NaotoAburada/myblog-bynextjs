import React, { ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CMSBlogComment from "../types/cms-blogcomment";

type Props = {
  blogid: string;
  //  addComment: (comment: CMSBlogComment) => void;
  //  updateComment: () => Promise<boolean>;
};

type CMSBlog = {
  blogid: string;
  comment: string;
};

export type Comments = {
  commentLi: {
    id: string;
    comment: string;
  }[];
};

const CommentForm: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");
  const [comment, setComment] = React.useState("");

  const handleChangeComment = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentPost = () => {
    console.log(comment);
    const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/comment";

    const blogcomment: CMSBlog = {
      blogid: props.blogid,
      comment: comment,
    };

    const body = JSON.stringify(blogcomment);
    // API呼び出しの準備
    fetch(cmsurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": "770a59a7-f2c5-420a-a8db-2a2989e3333d",
      },
      body,
    }).then(
      function (res: Response) {},
      function (error: Response) {}
    );

    setComment("");
    // const tmp: CMSBlogComment = {
    //   id: blogcomment.blogid,
    //   comment: blogcomment.comment,
    // };

    // props.addComment(tmp);
    // ここは必ずAPI更新後に呼ぶ
    // props.updateComment();

    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        コメント投稿
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle id="form-dialog-title">コメント</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            type="text"
            name="comment"
            value={comment}
            onChange={handleChangeComment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCommentPost} color="primary">
            投稿
          </Button>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CommentForm;
