// code z-inex for css bug
document.querySelectorAll(".box").forEach((div, index) => {
    div.id = `box-${index}`; // تنظیم نام ID برابر با نام کلاس
    div.onmouseover = function () {
        this.style.zIndex = "1"; // تنظیم zIndex فقط برای همان عنصری که موس روی آن می‌رود
    };
    div.onmouseout = function () {
        this.style.zIndex = "auto"; // بازگرداندن مقدار اولیه هنگام خارج شدن موس
    };
});

// list active
// let all_list = document.getElementById("ul_list");
// let childDiv = all_list.children;

let Smart_Switches = document.querySelector("#SmartSwitches");
let Smart_Smoke_detector = document.querySelector("#SmartSmokedetector");
let smart_Door_Window_Sensors = document.querySelector("#smartDoorWindowSensors");
let Smart_Leak_Sensors = document.querySelector("#SmartLeakSensors");
let Smart_Energy_Meter = document.querySelector("#SmartEnergyMeter");
let Smart_Lighting = document.querySelector("#SmartLighting");
let Security_Camera = document.querySelector("#SecurityCamera");

let Actiive_Smart_Switches = document.querySelector("#Smart_Switches");
let Actiive_Smart_Smoke_detector = document.querySelector("#Smart_Smoke_detector");
let Actiive_smart_Door_Window_Sensors = document.querySelector("#smart_Door_Window_Sensors");
let Actiive_SmartـLeakـSensors = document.querySelector("#SmartـLeakـSensors");
let Actiive_Smart_Energy_Meter = document.querySelector("#Smart_Energy_Meter");
let Actiive_Smart_Lighting = document.querySelector("#Smart_Lighting");
let Actiive_Security_Camera = document.querySelector("#Security_Camera");

defalt_active = Smart_Switches.classList = "Actiive";

// list Smart Switches Actiive
Actiive_Smart_Smoke_detector.classList.add("none"); //heden box smart Door Window Sensors
Actiive_smart_Door_Window_Sensors.classList.add("none"); //heden box smart Door Window Sensors
Actiive_SmartـLeakـSensors.classList.add("none"); //heden box Smart Leak Sensors
Actiive_Smart_Energy_Meter.classList.add("none"); //heden box Smart Energy Meter
Actiive_Smart_Lighting.classList.add("none"); //heden box Smart Lighting
Actiive_Security_Camera.classList.add("none");//heden box Security_Camera

// list Smart_Switches Actiive
Smart_Switches.onclick = () => {
    Smart_Switches.classList.add("Actiive");
    smart_Door_Window_Sensors.classList.remove("Actiive");
    Smart_Leak_Sensors.classList.remove("Actiive");
    Smart_Smoke_detector.classList.remove("Actiive");
    Smart_Energy_Meter.classList.remove("Actiive");
    Smart_Lighting.classList.remove("Actiive");
    Security_Camera.classList.remove("Actiive");
    Actiive_Smart_Smoke_detector.classList.add("none");
    Actiive_SmartـLeakـSensors.classList.add("none");
    Actiive_Smart_Switches.classList.remove("none");
    Actiive_smart_Door_Window_Sensors.classList.add("none");
    Actiive_Smart_Lighting.classList.add("none");
    Actiive_Security_Camera.classList.add("none");
    Actiive_Smart_Energy_Meter.classList.add("none");
}

// list Smart Smoke detector Actiive
Smart_Smoke_detector.onclick = () => {
    Actiive_Smart_Switches.classList.add("none");
    smart_Door_Window_Sensors.classList.remove("Actiive");
    Smart_Leak_Sensors.classList.remove("Actiive");
    Smart_Switches.classList.remove("Actiive");
    Smart_Energy_Meter.classList.remove("Actiive");
    Smart_Lighting.classList.remove("Actiive");
    Security_Camera.classList.remove("Actiive");
    Smart_Smoke_detector.classList.add("Actiive");
    Actiive_SmartـLeakـSensors.classList.add("none");
    Actiive_Smart_Smoke_detector.classList.remove("none");
    Actiive_smart_Door_Window_Sensors.classList.add("none");
    Actiive_Smart_Lighting.classList.add("none");
    Actiive_Security_Camera.classList.add("none");
    Actiive_Smart_Energy_Meter.classList.add("none");
}

// list Smart Smoke detector Actiive
smart_Door_Window_Sensors.onclick = () => {
    Smart_Smoke_detector.classList.remove("Actiive");
    Smart_Switches.classList.remove("Actiive");
    Smart_Leak_Sensors.classList.remove("Actiive");
    Smart_Energy_Meter.classList.remove("Actiive");
    Smart_Lighting.classList.remove("Actiive");
    Security_Camera.classList.remove("Actiive");
    smart_Door_Window_Sensors.classList.add("Actiive");
    Actiive_smart_Door_Window_Sensors.classList.remove("none");
    Actiive_Smart_Smoke_detector.classList.add("none");
    Actiive_Smart_Switches.classList.add("none");
    Actiive_SmartـLeakـSensors.classList.add("none");
    Actiive_Smart_Lighting.classList.add("none");
    Actiive_Security_Camera.classList.add("none");
    Actiive_Smart_Energy_Meter.classList.add("none");
}

// list Smart Leak Sensors
Smart_Leak_Sensors.onclick = () => {
    Smart_Smoke_detector.classList.remove("Actiive");
    smart_Door_Window_Sensors.classList.remove("Actiive");
    Smart_Switches.classList.remove("Actiive");
    Smart_Energy_Meter.classList.remove("Actiive");
    Smart_Lighting.classList.remove("Actiive");
    Security_Camera.classList.remove("Actiive");
    Smart_Leak_Sensors.classList.add("Actiive");
    Actiive_SmartـLeakـSensors.classList.remove("none");
    Actiive_Smart_Smoke_detector.classList.add("none");
    Actiive_Smart_Switches.classList.add("none");
    Actiive_smart_Door_Window_Sensors.classList.add("none");
    Actiive_Smart_Lighting.classList.add("none");
    Actiive_Security_Camera.classList.add("none");
    Actiive_Smart_Energy_Meter.classList.add("none");
}

// list Smart Energy Meter
Smart_Energy_Meter.onclick = () => {
    Smart_Smoke_detector.classList.remove("Actiive");
    smart_Door_Window_Sensors.classList.remove("Actiive");
    Smart_Switches.classList.remove("Actiive");
    Smart_Leak_Sensors.classList.remove("Actiive");
    Smart_Lighting.classList.remove("Actiive");
    Security_Camera.classList.remove("Actiive");
    Smart_Energy_Meter.classList.add("Actiive");
    Actiive_SmartـLeakـSensors.classList.add("none");
    Actiive_Smart_Smoke_detector.classList.add("none");
    Actiive_Smart_Switches.classList.add("none");
    Actiive_smart_Door_Window_Sensors.classList.add("none");
    Actiive_Smart_Lighting.classList.add("none");
    Actiive_Security_Camera.classList.add("none");
    Actiive_Smart_Energy_Meter.classList.remove("none")
}

// list Smart Lighting
Smart_Lighting.onclick = () => {
    Smart_Smoke_detector.classList.remove("Actiive");
    smart_Door_Window_Sensors.classList.remove("Actiive");
    Smart_Switches.classList.remove("Actiive");
    Smart_Leak_Sensors.classList.remove("Actiive");
    Smart_Energy_Meter.classList.remove("Actiive");
    Security_Camera.classList.remove("Actiive");
    Smart_Lighting.classList.add("Actiive");
    Actiive_SmartـLeakـSensors.classList.add("none");
    Actiive_Smart_Smoke_detector.classList.add("none");
    Actiive_Smart_Switches.classList.add("none");
    Actiive_smart_Door_Window_Sensors.classList.add("none");
    Actiive_Smart_Energy_Meter.classList.add("none");
    Actiive_Security_Camera.classList.add("none");
    Actiive_Smart_Lighting.classList.remove("none");
}

// list Security Camera
Security_Camera.onclick = () => {
    Smart_Smoke_detector.classList.remove("Actiive");
    smart_Door_Window_Sensors.classList.remove("Actiive");
    Smart_Switches.classList.remove("Actiive");
    Smart_Leak_Sensors.classList.remove("Actiive");
    Smart_Energy_Meter.classList.remove("Actiive");
    Smart_Lighting.classList.remove("Actiive");
    Security_Camera.classList.add("Actiive");
    Actiive_SmartـLeakـSensors.classList.add("none");
    Actiive_Smart_Smoke_detector.classList.add("none");
    Actiive_Smart_Switches.classList.add("none");
    Actiive_smart_Door_Window_Sensors.classList.add("none");
    Actiive_Smart_Energy_Meter.classList.add("none");
    Actiive_Smart_Lighting.classList.add("none");
    Actiive_Security_Camera.classList.remove("none");
}
