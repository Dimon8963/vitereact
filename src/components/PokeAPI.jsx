import React, { useState, useEffect } from 'react';
import '../main.css'; // Імпорт CSS файлу для стилів

const PokemonInfo = () => {
    // Створення стану для списку покемонів, завантаження та помилок
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Ефект, який викликається при монтуванні компонента
    useEffect(() => {
        // Асинхронна функція для отримання даних з PokeAPI
        const fetchData = async () => {
            try {
                // Виконання запиту до API
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
                // Перевірка успішності запиту
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                // Отримання даних у форматі JSON
                const data = await response.json();
                // Встановлення отриманих даних у стан компонента
                setPokemonList(data.results);
                // Встановлення стану завантаження в значення "false"
                setLoading(false);
            } catch (error) {
                // Обробка помилок під час отримання даних
                setError(error);
                // Встановлення стану завантаження в значення "false"
                setLoading(false);
            }
        };

        // Виклик функції для отримання даних
        fetchData();
    }, []);

    // Перевірка стану завантаження: якщо true, виводиться повідомлення "Loading..."
    if (loading) return <p>Loading...</p>;
    // Перевірка наявності помилок: якщо true, виводиться повідомлення про помилку
    if (error) return <p>Error: {error.message}</p>;

    // Виведення списку покемонів
    return (
        <div>
            {/* Заголовок списку покемонів з класом для стилізації */}
            <h1 className="pokemon-title">Pokemon List</h1>
            {/* Контейнер для карточок покемонів */}
            <div className="pokemon-container">
                {/* Ітерація по списку покемонів для виведення карточок */}
                {pokemonList.map((pokemon, index) => (
                    <div key={index} className="pokemon-card">
                        {/* Виведення імені покемона */}
                        <h2>{pokemon.name}</h2>
                        {/* Виведення зображення покемона згідно з індексом */}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Експорт компонента PokemonInfo
export default PokemonInfo;
