import { Movie } from "../../type.ts";
import YouTube from "react-youtube";

// export type Props = {
//   title: string;
//   fetchUrl: string;
//   isLargeRow?: boolean;
// };

type LayoutProps = {
  title: string;
  isLargeRow?: boolean;
  movies: Movie[];
  // 追加
  trailerUrl: string | null;
  handleClick: (movie: Movie) => void;
};

// 追加
type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Layout = ({
  title,
  movies,
  isLargeRow,
  // 追加
  handleClick,
  trailerUrl,
}: LayoutProps) => {
  const image_url = "https://image.tmdb.org/t/p/original";
  // 追加
  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="ml-5 text-white">
      <h2>{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {movies.map((movie) => (
          // ①DOM表示にmapを使う際はkeyを必ず設定する
          <img
            key={movie.id}
            className={`object-contain w-full max-h-24 m-2 transform transition-transform duration-450 ${
              isLargeRow ? "max-h-60 hover:scale-110" : "hover:scale-108"
            }`}
            // ②使用する画像を使い分ける
            src={`${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            // 追加
            onClick={() => handleClick(movie)}
            alt={movie.name}
          />
        ))}
      </div>
      {/* 追加 */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
