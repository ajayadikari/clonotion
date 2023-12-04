import React from 'react'

const CommentBox = ({img, name, userId, comment}) => {
    return (
        <div className="comment-box">
            <div className="profile">
                {img ? <img src={`${img}`} alt="" /> : <div className='emptyPic'></div>}
                <div className="info">
                <h4>{name}</h4>
                <p>{userId}</p>
                </div>
            </div>
            <div className="comment">{comment}</div>
        </div>
    )
}

export default CommentBox
