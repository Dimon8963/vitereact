import Students from '../list.json';

function List() {



  return (
    <>
        <div className={'filters'}>
            <label>Filter by absences
                <input type="range" min="0" max="200" step="1" defaultValue="0"/>
            </label>
            <label>Filter by name
                <input type="text"/>
            </label>
            <label>Filter by city
                <select>
                    <option value="0">Tyshivka</option>
                    <option value="1">Kyiv</option>
                    <option value="2">Lviv</option>
                    <option value="3">Kharkiv</option>
                </select>
            </label>
            <button>Sort by absences ASC</button>
            <button>Sort by absences DESC</button>
        </div>

        <h1>Students</h1>
        <div className={"users"}>
            {Students.map((student) => (
                <div className={"user"}>
                    <p>
                        {student.name}
                    </p>
                    <p>
                        {student.absences}
                    </p>
                    <p>
                        {student.city}
                    </p>
                </div>
        ))}
      </div>
    </>
  );
}

export default List;