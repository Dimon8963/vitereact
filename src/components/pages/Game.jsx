// Імпортуємо потрібні модулі та компоненти
import React, { useState, useEffect } from 'react';
import Board from './Game/Board.jsx';
import './Game/games.css';

// Головний компонент гри
function Game() {
    // Створюємо стан для даних форми, масиву квадратів, поточного гравця, переможця та статусу гри
    const [formData, setFormData] = useState({
        player1: '',
        player2: ''
    });
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);

    // Функція для обробки зміни значення у формі
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Функція для обробки кліку по квадрату
    const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const squaresCopy = squares.slice();
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    };

    // Функція для початку гри
    const handleStartGame = () => {
        const { player1, player2 } = formData;
        if (player1 && player2) {
            setSquares(Array(9).fill(null)); // Очищаємо ігрове поле
            setXIsNext(true); // Встановлюємо початкового гравця
            setWinner(null); // Скидаємо переможця
            setGameStarted(true); // Додати цей рядок
        } else {
            alert('Введіть імена обох гравців!');
        }
    };

    // Використовуємо useEffect для визначення переможця після кожного ходу
    useEffect(() => {
        const winner = calculateWinner(squares);
        setWinner(winner);
    }, [squares]);

    // Визначаємо ім'я переможця
    let winnerName;
    if (winner === 'X' || winner === 'O') {
        winnerName = winner === 'X' ? formData.player1 : formData.player2;
    }

    // Рендеримо компонент гри
    return (
        <div className="game">
            <div className="game-info">
                {winner && winner !== 'Draw' && <div>Переміг {winnerName}</div>}
                {winner === 'Draw' && <div>Нічия</div>}
                {!winner && gameStarted && <div>Хід гравця {xIsNext ? formData.player1 : formData.player2}</div>}
                {winner === null && !gameStarted && (
                    <div>
                        <input type="text" name="player1" placeholder="Ім'я першого гравця" value={formData.player1} onChange={handleChange} />
                        <br />
                        <input type="text" name="player2" placeholder="Ім'я другого гравця" value={formData.player2} onChange={handleChange} />
                        <br />
                        <button onClick={handleStartGame}>Почати гру</button>
                    </div>
                )}
                {winner && (
                    <button onClick={() => window.location.reload()}>Перезагрузити сторінку</button>
                )}
            </div>
            {gameStarted && !winner && (
                <div className="game-board">
                    <Board squares={squares} onClick={handleClick} />
                </div>
            )}
        </div>
    );
}

// Функція для визначення переможця
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Перевіряємо, чи є переможець
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    // Перевіряємо, чи є нічия
    if (!squares.includes(null)) {
        return 'Draw';
    }

    return null;
}

// Експортуємо компонент Game
export default Game;