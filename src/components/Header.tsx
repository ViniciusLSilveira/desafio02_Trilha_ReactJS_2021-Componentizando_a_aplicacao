import { useState, useEffect } from 'react';
import { GenreResponseProps } from './SideBar';

import { api } from '../services/api';

import '../styles/header.scss';

interface HeaderProps {
  selectedGenreId: number;
}

export function Header({ selectedGenreId }: HeaderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <header>
      <span className='category'>
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
