import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>prefetch の設定</h1>
      <p>
        Link コンポーネントではデフォルトから prefetch
        の機能が設定されています。開発環境ではリンクにカーソルを当てるとリンク先のページに関する
        JavaScript ファイルなどがバックグランドで自動でダウンロードされます。
      </p>
      <Link href="/about" className="underline" prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
    </div>
  );
}
