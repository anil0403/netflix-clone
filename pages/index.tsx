import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import NavBar from "@/components/navbar";
import BillBoard from "@/components/billboard";
import MovieList from "@/components/movielist";
import useMovieList from "@/hooks/useMovieList";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Home() {
  const { data: movies = [] } = useMovieList();
  return (
    <>
      <NavBar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="Trending now" data={movies} />
      </div>
    </>
  );
}
