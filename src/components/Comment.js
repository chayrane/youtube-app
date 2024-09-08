import { formatNumber, timeAgo } from "../utils/helpers";

export const Comment = ({ comment }) => {
  if (!comment) {
    return null; // Or return a fallback UI
  }

  const {
    authorDisplayName,
    authorProfileImageUrl,
    updatedAt,
    textDisplay,
    likeCount,
  } = comment;

  return (
    <div className="my-3 flex gap-3">
      <div className="">
        <img
          className="w-[48px] max-w-[48px] rounded-full"
          src={authorProfileImageUrl}
          alt="profile-image"
        />
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <p className="font-bold">{authorDisplayName}</p>
          <p className="px-2 text-sm bg-gray-200 rounded-lg">
            {timeAgo(updatedAt)}
          </p>
        </div>
        <p
          className=" text-sm"
          dangerouslySetInnerHTML={{ __html: textDisplay }}
        />
        <div className="flex">
          <p className="my-1 px-2 py-[3px] text-sm rounded-lg bg-gray-200">
            👍🏻 {formatNumber(likeCount)} likes
          </p>
        </div>
      </div>
    </div>
  );
};
