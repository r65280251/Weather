let weather = document.querySelector("#weather");
let rounded = document.querySelector("#rounded");
let bttn = document.querySelector("#bttn");
let form = document.querySelector("#form");
let formInput = document.querySelector("#input");
let section2 = document.querySelector("#section2");

bttn.addEventListener("click", () =>{
    e.preventDefault();
})

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let location = formInput.value.trim();

    if (location === "") return;

    let weatherData = await data(location);

    if (weatherData) {
        displayData(weatherData);
    }
});



async function data(location) {

    try {
        let response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=0613b03039e74ca29ad165014262810&q=${encodeURIComponent(location)}&aqi=yes`
        );

        let weatherData = await response.json();
        console.log(weatherData);
        if (!response.ok) {
            throw new Error(weatherData.error.message);
        }

        return weatherData;

    } catch (error) {
        console.log("API Error:", error);
        return null;
    }
}


function displayData(weatherData) {



    const div = document.createElement("div");

    div.innerHTML = `
    <div class="flex items-center justify-center md:gap-x-64 lg:gap-80 max-w-full">

        <div>
            <div class=" max-w-full ">

                <div>

                    <div id="rounded" class="rounded h-40 w-40 md:h-50 md:w-50 lg:h-75 lg:w-75">
    ${(() => {

    if (weatherData.current.condition.text === "Smoky haze") {
        return `<img src="./cloud.svg">`;

    } else if (weatherData.current.condition.text === "Cloudy") {
        return `<img src="./cloud.svg">`;

    }  else if (weatherData.current.condition.text === "Sunny") {
        return `<img src="./sun.svg">`;

    }else if (weatherData.current.condition.text === "Patchy rain nearby") {
        return `<img src="./Rainy.svg">`;

    } else if (weatherData.current.condition.text === "Smoke") {
        return `<img src="./Smoke.svg">`;

    } else if (weatherData.current.condition.text === "Overcast") {
    } else if (weatherData.current.condition.text === "Moderate or heavy rain shower") {
        return `<img src="./Rainy.svg">`;

    } else if (weatherData.current.condition.text === "Overcast") {
        return `<img src="./Overcast.svg">`;

    } else if (weatherData.current.condition.text === "Light Rain Shower") {
        return `<img src="./Light Rain Shower.svg">`;

    } else if (weatherData.current.condition.text === "Fog") {
        return `<img src="./Fog.svg">`;

    }
     else if (weatherData.current.condition.text === "Mist") {
        return `<img src="./mist file.svg">`;

    } else if (weatherData.current.condition.text === "Clear") {
        return `<img class="border rounded-full border-black/20" src="./sun.svg">`;

    } else if (weatherData.current.condition.text === "Partly Cloudy") {
        return `<img src="./partly cloudy.svg">`;

    }
    else {
        return `<img src="./default.svg">`;
    }

})()}
                    
                    </div>
                </div>
            </div>
            
            <div id="form2" action="" class="items-center justify-center flex">
                <mark class="text-md font-bold p-2 px-4 rounded">${weatherData.current.condition.text
}</mark>
            </div>
        </div>
        

        <div class="">
            <h2 class="text-7xl px-4 font-semibold font-mono">${weatherData.current.
            temp_c
        }</h2>
            <div class="flex items-center justify-center ">
            <p class="px-4 font-semibold font-mono">${weatherData.location.name}</p>
            <p class="px-4 font-semibold font-mono">${weatherData.location.region}</p>
            </div>
            <p class="px-4 font-semibold border rounded md:py-2 border-slate-800 bg-slate-900 font-mono">Updated-at:${weatherData.current.last_updated
}</p>
            </div>
        </div>
    </div>    
    `;

    const div2 = document.createElement("div");

    div2.innerHTML = `<div
                class="flex-1 md:flex p-6 items-center md:justify-start mt-8 borer text-center md:flex-wrap md:p-16 bg-slate-900 ">

                <div class="flex-1 items-center justify-between gap-4 ">

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border border-slate-800 rounded-2xl p-2"><img class="h-9 w-9 scale-175" src="HeadtIndex.svg" alt="">
                        </div>heatindex: ${weatherData.current.heatindex_c}
                    </div>

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl bg-sky-400"><img class="h-9 w-9" src="Hot Temperature.svg" alt="">
                        </div>Feels-Like: ${weatherData.current.feelslike_c}
                    </div>

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl "><img class="h-9 w-9 " src="sun.svg" alt="">
                        </div>Humidity: ${weatherData.current.humidity}
                    </div>

                </div>


                <div class="flex-1 items-center justify-between gap-4 ">

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl"><img class="h-9 w-9" src="Rainy.svg" alt="">
                        </div>precipitate: ${weatherData.current.precip_in}
                    </div>

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl"><img class="h-9 w-9" src="Smoke.svg" alt="">
                        </div>Pressur_Mb: ${weatherData.current.pressure_mb}
                    </div>

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl"><img class="h-9 w-9" src="Snow.svg" alt="">
                        </div>dewpoint_temp: ${weatherData.current.dewpoint_c}
                    </div>

                </div>

                <div class="flex-1 items-center justify-between gap-4 ">

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl overflow-hidden"><img class="h-9 w-9 scale-175" src="cloud.svg" alt="">
                        </div>Cloud: ${weatherData.current.cloud}
                    </div>

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl"><img class="h-9 w-9 scale-175" src="Overcast.svg" alt="">
                        </div>Wind_kph: ${weatherData.current.wind_kph}
                    </div>

                    <div
                        class="border border-slate-800 max-w-3xl font-semibold flex items-center gap-2 md:h-20 rounded-2xl px-4 p-2 m-2">
                        <div class="border p-2 border-slate-800 rounded-2xl"><img class="h-9 w-9" src="mist file.svg" alt="">
                        </div>Wind_mph: ${weatherData.current.wind_mph}
                    </div>

                </div>




            </div>`
    weather.innerHTML = "";
    weather.append(div);
    section2.innerHTML = "";
    section2.append(div2);
}

displayData(punjab)