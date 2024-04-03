import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import Checkbox from '@mui/material/Checkbox';
import Students from '../list.json'; // Імпорт даних студентів
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import { incrementHeartClicks, decrementHeartClicks } from '../redux/actions.jsx'; // для збільшення/зменшення кількості натискань на серце

// Компонент для фільтрації за містом
const CityFilter = ({ onChange }) => {
    const options = useMemo(() => {
        // Отримання унікальних міст з даних студентів
        const uniqueCities = [...new Set(Students.map(item => item.city))];
        // Створення списку опцій для вибору міста
        return uniqueCities.map(city => (
            <option key={city} value={city}>{city}</option>
        ));
    }, []);

    return (
        <select onChange={onChange}>
            <option value="">All Cities</option>
            {options}
        </select>
    );
};

CityFilter.propTypes = {
    onChange: PropTypes.func.isRequired
};

// Компонент для відображення інформації про студента
const StudentComponent = ({ student, dragState, onDragStart, onDragOver, onDrop }) => {
    const [isDragging, setIsDragging] = useState(false); // Стан для відстеження перетягування
    const [isFavorite, setIsFavorite] = useState(false); // Стан для відстеження обраного студента
    const heartClicks = useSelector(state => state.heartClicks); // Отримання кількості натискань на серце зі стейту
    const dispatch = useDispatch(); // Отримання функції диспетчера Redux

    // Обробник події початку перетягування
    const handleDragStart = (e) => {
        setIsDragging(true); // Встановлення стану перетягування
        onDragStart(student.id); // Виклик функції початку перетягування
        e.dataTransfer.effectAllowed = 'move';
    };

    // Обробник події завершення перетягування
    const handleDragEnd = () => {
        setIsDragging(false); // Завершення перетягування
    };

    // Обробник кліку на іконці серця
    const handleOnClick = () => {
        if (isFavorite) {
            dispatch(decrementHeartClicks()); // Зменшення кількості натискань на серце
        } else {
            dispatch(incrementHeartClicks()); // Збільшення кількості натискань на серце
        }
        setIsFavorite(!isFavorite); // Зміна стану обраного студента
    };

    // Клас для компонента студента з урахуванням перетягування
    let className = isDragging ? 'user dragging' : 'user';

    return (
        <div
            className={className}
            draggable={dragState}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={onDragOver}
            onDrop={onDrop}
            id={student.id}
        >
            <p>{student.id}</p>
            <p>{student.name}</p>
            <p>{student.absences}</p>
            <p>{student.city}</p>
            {/* Відображення іконки серця залежно від стану */}
            <div onClick={handleOnClick}>
                {isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </div>
        </div>
    );
};

StudentComponent.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        absences: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired
    }).isRequired,
    dragState: PropTypes.bool.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired
};

// Підключення мемоїзованого компонента студента
const Student = React.memo(StudentComponent);

// Головний компонент списку студентів
const List = () => {
    const [selectedCity, setSelectedCity] = useState(''); // Стан для обраного міста
    const [sortDirection, setSortDirection] = useState(null); // Стан для напрямку сортування
    const [dragState, setDragState] = useState(false); // Стан для визначення перетягування
    const [draggedId, setDraggedId] = useState(null); // Стан для ID перетягуваного елемента
    const [overId, setOverId] = useState(null); // Стан для ID над яким проводиться перетягування
    const [students, setStudents] = useState(Students); // Стан для даних студентів

    // Обробник події початку перетягування
    const handleDragStart = (id) => {
        setDraggedId(id); // Встановлення ID перетягуваного елемента
    };

    // Обробник події завершення перетягування
    const handleDragEnd = () => {
        setDraggedId(null);
        setOverId(null); // Скидання ID перетягування та над яким елементом перетягують
    };

    // Обробник події перетягування над елементом
    const handleDragOver = (e) => {
        e.preventDefault();
        setOverId(parseInt(e.currentTarget.id, 10)); // Встановлення ID елементу над яким проводиться перетягування
    };

    // Обробник події відпускання елемента
    const handleDrop = () => {
        if (draggedId && overId && draggedId !== overId) {
            setStudents(prevStudents => replaceDraggedAndOverItems(prevStudents, draggedId, parseInt(overId, 10))); // Перестановка елементів
        }
    };

    // Функція для перестановки елементів при перетягуванні
    const replaceDraggedAndOverItems = (students, draggedId, overId) => {
        const indexDragged = students.findIndex(student => student.id === draggedId);
        const indexOver = students.findIndex(student => student.id === overId);
        if (indexDragged < 0 || indexOver < 0) return students; // Перевірка наявності валідних індексів

        const newStudents = [...students];
        [newStudents[indexDragged], newStudents[indexOver]] = [newStudents[indexOver], newStudents[indexDragged]]; // Перестановка елементів у масиві
        return newStudents;
    };

    // Обробник зміни стану перетягування
    const handleDragStateChange = useCallback(() => {
        setDragState(prev => !prev); // Зміна стану перетягування
    }, []);

    // Обробник зміни обраного міста
    const handleCityChange = useCallback((event) => {
        setSelectedCity(event.target.value); // Зміна обраного міста
    }, []);

    // Обробник сортування
    const handleSort = useCallback((direction) => {
        setSortDirection(direction); // Зміна напрямку сортування
    }, []);

    // Обробник очищення сортування та фільтрації
    const handleClear = useCallback(() => {
        setSelectedCity(''); // Очищення обраного міста
        setSortDirection(null); // Скидання напрямку сортування
    }, []);

    // Відфільтровані та відсортовані студенти
    const sortedFilteredStudents = useMemo(() => {
        let filteredStudents = students; // Використання стану для фільтрації студентів

        if (selectedCity) {
            filteredStudents = filteredStudents.filter(student => student.city === selectedCity); // Фільтрація за містом
        }

        if (sortDirection) {
            filteredStudents = [...filteredStudents].sort((a, b) =>
                sortDirection === 'up' ? a.absences - b.absences : b.absences - a.absences
            ); // Сортування за кількістю пропущених занять
        }

        return filteredStudents;
    }, [selectedCity, sortDirection, students]); // Додавання студентів до залежностей

    // Перевірка, чи є студенти для відображення
    if (!sortedFilteredStudents.length) {
        return <p>Немає студентів для відображення.</p>;
    }

    return (
        <>
            <div className="filters">
                {/* Фільтр за містом */}
                <label>
                    Фільтрувати за містом
                    <CityFilter onChange={handleCityChange} />
                </label>
                {/* Кнопки для сортування */}
                <button className="filterButton" onClick={() => handleSort('down')}>
                    Absences <ArrowDownwardIcon />
                </button>
                <button className="filterButton" onClick={() => handleSort('up')}>
                    Absences <ArrowUpwardIcon />
                </button>
                {/* Кнопка для очищення сортування */}
                <button className="filterButton" onClick={handleClear}>
                    Clear sorting <HighlightOffIcon />
                </button>
                {/* Чекбокс для включення/виключення перетягування */}
                <Checkbox icon={<ToggleOffIcon />} checkedIcon={<ToggleOnIcon />} onClick={handleDragStateChange} />
            </div>
            {/* Відображення списку студентів */}
            <div className="users">
                {sortedFilteredStudents.map(student => (
                    <Student
                        key={student.id}
                        student={student}
                        dragState={dragState}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                        onDrop={handleDrop}
                    />
                ))}
            </div>
        </>
    );
};

export default List;
