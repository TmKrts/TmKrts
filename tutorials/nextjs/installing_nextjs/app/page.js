import LikeButton from './like-button';

function Header({ title }) {
    return (<h1>{ title ? title : 'Default title' }</h1>)
}

export default function HomePage() {
    const names = ['Tim Kaerts', 'Bo Mollee', 'Rik Kaers'];

    return (
        <div>
            <Header title="React" />
            <Header title="A new title" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );                 
}
