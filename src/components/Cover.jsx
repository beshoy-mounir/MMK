import coverImage from '../assets/cover.jpeg';

{
  /* <div className="h-screen w-full bg-[url(./assets/cover.jpeg)] bg-contain bg-no-repeat"> */
}

export default function Cover() {
  return (
    <>
      <div>
        <img src={coverImage} alt="" />
      </div>
    </>
  );
}
