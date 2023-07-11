const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');

const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp');
const temp_status=documnet.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal=""){
        city_name.innerText=`plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=83645c7dd2271b41856c5914596234f8`; 
            const response=await fetch(url);
            const data=await response.json(); 
            const  arrData=[data];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;

            const tempMood=arrData[0].weather[0].main;
            //condition to check sunny or cloudy

            if(tempMood="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:blue;></i>";
            }

            datahide.classList.remove('data_hide');


            
        }catch{
            city_name.innerText=`plz write the city name properly`;
            datahide.classList.add('data_hide');
        }
};
}

submitBtn.addEventListener('click',getInfo);