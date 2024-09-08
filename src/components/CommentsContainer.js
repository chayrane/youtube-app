import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { CommentsList } from "./CommentsList";

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const getVideoCommentThreads = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const jsonResponse = await response.json();

    const commentThreads = jsonResponse.items.map((commentThread) => {
      const topLevelComment = commentThread.snippet.topLevelComment.snippet;
      return {
        ...topLevelComment,
        replies: commentThread.replies
          ? commentThread.replies.comments.map((reply) => {
              const { snippet } = reply;
              return { ...snippet };
            })
          : [],
      };
    });

    setComments(commentThreads);
  };

  useEffect(() => {
    getVideoCommentThreads();
  }, [videoId]);

  return (
    <div className="mt-3">
      <h1 className="pt-2 pb-1 text-2xl font-bold border border-white border-b-black">
        Comments
      </h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;

/**
******* Comment Response Structure ********

comments: {
            "items": [
              {
                "snippet": {
                  "topLevelComment": {
                    "snippet": {
                      "authorDisplayName": "Author Name",
                      "authorProfileImageUrl": "Profile Image URL",
                      "textDisplay": "Comment Text",
                      "publishedAt": "2024-09-06T14:55:42Z",
                      "id": "Comment ID"
                    }
                  },
                  "replies": {
                    "comments": [
                      {
                        "snippet": {
                          "authorDisplayName": "Reply Author",
                          "authorProfileImageUrl": "Reply Author Profile Image URL",
                          "textDisplay": "Reply Text",
                          "publishedAt": "2024-09-06T14:55:42Z",
                          "id": "Reply ID"
                        },
                      }
                    ]
                  }
                }
              }
            ]
          }
 */
