import '../styles/header.scss';

interface selectedGenreProps {
  selectedGenre: {
    title: string;
  }
}

export function Header(props: selectedGenreProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>
  )
}