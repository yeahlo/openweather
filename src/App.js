import React, {useState, useEffect} from 'react';

export default props => {

    const [city, setCity] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if("geolocation" in navigator) {
            console.log('fetch')
            navigator.geolocation.getCurrentPosition(position => {
                console.log('position',position)
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=47662866449dfa871ce12fb8f6394f78&units=metric')
                    .then(raw => raw.json())
                    .then(json => setData(json))
            });
        }
    }, [])

    const load = () => {
        //fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=47662866449dfa871ce12fb8f6394f78&units=metric')
        fetch('city.json')
            .then(raw => raw.json())
            .then(json => setData(json))
    }

    const createDom = () => {
        return <table>
            <tr>
                <td>
                    temperature :
                </td>
                <td>
                    {data.main.temp}
                </td>
            </tr>
            {data.weather.map(w =>
                <tr key={w.id}>
                    <td>
                        icon
                    </td>
                    <td>
                        <img  src={' http://openweathermap.org/img/wn/' + w.icon + '@2x.png'}/>
                    </td>
                </tr>)
            }
        </table>
    }

    return <div>
        <input onInput={e => setCity(e.currentTarget.value)} placeholder={"Ville"}/>
        <button onClick={() => load()}>valider</button>
        {data && createDom()}
    </div>
}
