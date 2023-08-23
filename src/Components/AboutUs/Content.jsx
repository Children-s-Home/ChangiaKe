import pImage from "/images/aboutUsParagraph.png"

function Content() {
  return (
    <div className="content-container">
      <h1 className="title">About <span>Us</span></h1>
      <div className="content">
        <p>
          Changia was formed in 2023 in response to the founders&apos; struggle
          to find volunteering opportunities during their university&apos;s
          Community-based Learning period. Realizing the difficulty of finding
          suitable establishments, they decided to create a platform to
          facilitate community engagement. Their primary goals included
          enlisting and verifying children&apos;s homes in Nairobi, showcasing
          their needs to potential donors, and making the process of giving back
          easier for everyone. With the support of their friends, they formed a
          dedicated team and developed a comprehensive product aimed at creating
          a meaningful impact. They welcome questions, ideas, feedback, or
          simply a friendly greeting from users of their platform.
        </p>
        <img src={pImage} alt="" />
      </div>
    </div>
  );
}

export default Content;
