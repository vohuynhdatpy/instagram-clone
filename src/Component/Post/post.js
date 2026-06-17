import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Post = () => {
  return (
            <div className="post">
            <div className="postInfo">
            <img className="postInfoImg" src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"></img>
            <div className="postInfoImgusername">Sơn Tùng M-TP</div>
            <div className="timingInfo">.36 min</div>
            </div>
            <div className="postImg">
            <img
                className="postImhage"
                src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"
            ></img>
            </div>
            <div className="iconsBlock">
            <div className="leftIcon">
                <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
                <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
                <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            
                <div>
                <BookmarkBorderOutlinedIcon  sx={{ fontSize: "25px" }} />
                </div>
            </div>
            <div className="likeSection">
            <div className="imagesLike">  
            <img  className="likeImg" src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"></img>
            <img  className="likeImg2" src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"></img>

            </div>
            <div className="no0fLikes">566,112,456 likes</div>
            </div>
            <div className="postAbout">
            <div className="postAboutName">Sơn Tùng M-TP</div>
            <div className="infoComment">Baby I love you so much</div>
            </div>
            <div className="no0fCooment">View All 458 Comments</div>
            <div className="addComment">Add a comment...</div>
        </div>
            
 
        
        

  )
}

export default Post 
