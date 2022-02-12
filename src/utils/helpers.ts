// function to generate img url
export const generateImgUrl = ({
  id,
  serverId,
  secret,
}: Record<'id' | 'serverId' | 'secret', string>) =>
  `http://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`;

export default null;
