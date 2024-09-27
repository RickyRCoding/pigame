import Link from "next/link";

export default function Home() {
  return (
    <div className="start">
      <h1 className="title">Pi Game</h1>
      <h3>So ... (scroll to continue idiot)</h3>
      <div className="space"></div>
      <h3>You think that your that one nerdy kid...</h3>
      <div className="space"></div>
      <h3>that knows like a bajilion digits of pi.</h3>
      <div className="space"></div>
      <h3
        style={{
          marginBottom: "9rem",
        }}
      >
        I'll be the one to decide that.
      </h3>
      <Link href="/settings" className="button">
        Try me!
      </Link>
    </div>
  );
}
