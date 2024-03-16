import './App.css'

const tahoe_peaks = [
    { name: 'Freel', elevation: 10891 },
    { name: 'Monument', elevation: 10067 },
    { name: 'Pyramid', elevation: 9983 },
    { name: 'Tallac', elevation: 9735 },
]

function App() {
    function List({ data, renderItem, renderEmpty }) {
        return !data.length ? (
            renderEmpty
        ) : (
            <ul>
                {data.map(item => (
                    <li key={item.name}>{renderItem(item)}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <List
                data={tahoe_peaks}
                renderEmpty={<h1>This list is empty</h1>}
                renderItem={item => (
                    <>
                        {item.name} - {item.elevation} ft.
                    </>
                )}
            />
        </div>
    )
}

export default App

