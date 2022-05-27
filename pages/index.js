import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Seo from '../components/Seo';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`movies/${title}/${id}`);
  };
  return (
    <>
      <Seo title={'Home'} />
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
