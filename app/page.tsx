import Link from "next/link";

export default function Home() {
  return (
    <div className="start">
      <h1 className="title">Pi Game</h1>
      <h3>So ... (scroll to continue)</h3>
      <div className="space"></div>
      <h3>You think that you&apos;re that one nerdy guy...</h3>
      <div className="space"></div>
      <h3>who knows like a bajilion digits of pi.</h3>
      <div className="space"></div>
      <h3
        style={{
          marginBottom: "9rem",
        }}
      >
        I&apos;ll be the one to decide that.
      </h3>
      <Link href="/typing" className="button">
        Try me!
      </Link>
    </div>
  );
}
