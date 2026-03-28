const butEngine = document.getElementById("engine");
const nameCar = document.querySelector(".name_car");
const characteristic = document.querySelector(".characteristic");
const nameModel = document.querySelector(".back_text");
const logo = document.getElementById("logo");
const photo = document.getElementById("photo");

class Car {
    constructor(name, model, power, acceleration, price, transmission, color, photo, logo) {
        this._bannerName = name;
        this._fullName = model;
        this._power = power;
        this._acceleration = acceleration;
        this._price = price;
        this._transmission = transmission;
        this._color = color;
        this._photo = photo;
        this._logo = logo;
        if (typeof model !== "string") {
            throw "Модель должна быть строкой";
        }
        if (typeof power !== "number" || power < 0) {
            throw "Мощность должна быть числом и больше 0";
        }
        if (typeof acceleration !== "number" || acceleration <= 0) {
            throw "Разгон должен быть числом и больше 0";
        }
        if (typeof price !== "number" || price < 0) {
            throw "Цена должна быть числом и больше 0";
        }
        if (typeof transmission !== "string") {
            throw "Трансмиссия должна быть строкой";
        }
        if (typeof color !== "string") {
            throw "Цвет должен быть строкой";
        }
        if (typeof photo !== "string") {
            throw "Фото должен быть строкой";
        }
        if (typeof logo !== "string") {
            throw "лого должен быть строкой";
        }
    }

    displayInfo() {
        console.log(`Модель ${this._fullName}`);
        console.log(`Название модели ${this._bannerName}`);
        console.log(`Мощность: ${this._power}лс`);
        console.log(`Разгон от 0 до 100 ${this._acceleration}с`);
        console.log(`Начальная цена в долларах $${this._price.toLocaleString()}`);
        console.log(`Коробка передач ${this._transmission}`);
        console.log(`Базовый цвет ${this._color}`);
        console.log("-".repeat(40));
    }

    getModel() {
        return `<h2>${this._fullName}</h2>`;
    }

    getName() {
        return `<h1>${this._bannerName}</h1>`;
    }

    getPhoto() {
        return `<img src="${this._photo}" alt="Автомобиль" />`;
    }

    getLogo() {
        return `<img src="${this._logo}" alt="Лого автомобиля" />`;
    }
    getHTMLInfo() {
        let htmlStroke = `<ul>
                            <li>
                                <p>Мощность: ${this._power} л.с.</p>
                            </li>
                            <li>
                                <p>Разгон 0-100: ${this._acceleration} с.</p>
                            </li>
                            <li>
                                <p>Цена: $${this._price.toLocaleString()}</p>
                            </li>
                            <li>
                                <p>Коробка передач: ${this._transmission}</p>
                            </li>
                            <li>
                                <p>Цвет: ${this._color}</p>
                            </li>
                        </ul>`;
        return htmlStroke;
    }
}

class BMW extends Car {
    constructor(
        name,
        model,
        power,
        acceleration,
        price,
        transmission,
        color,
        mPerformance = false,
        photo,
        logo,
    ) {
        super(name, model, power, acceleration, price, transmission, color, photo, logo);
        this._mPerformance = mPerformance;
    }
    displayInfo() {
        console.log(`Имеет М пакет ${this._mPerformance}`);
        super.displayInfo();
    }

    getHTMLInfo() {
        let base = super.getHTMLInfo();
        return base.replace(
            "</ul>",
            `<li>
                    <p>М пакет: ${this._mPerformance ? "да" : "нет"}</p>
                </li>
            </ul>`,
        );
    }
}

class BMWM4Competition extends BMW {
    constructor(color = "green", launchControl, soundEngine) {
        super(
            "M4 COMPETITION",
            "BMW M4 Competition",
            523,
            3.4,
            91500,
            "8-ступ.",
            color,
            true,
            "assets/Cars/M4.png",
            "assets/logo/logoBMW.png",
        );
        this._launch = launchControl;
        this._sound = soundEngine;
        if (typeof launchControl !== "boolean") {
            throw "Лаунч должен быть булевым";
        }
        if (typeof soundEngine !== "string") {
            throw "Звук должен быть строкой";
        }
    }
    displayInfo() {
        console.log(`Лаунч контроль ${this._launch ? "Да" : "Нет"}`);
        super.displayInfo();
    }
    soundEngine() {
        let sound = new Audio("sounds/bmwSound.mp3");
        sound.volume = 1;
        sound.currentTime = 0;
        sound.play().catch((error) => {
            console.error("Ошибка звук не запускается", error.message);
        });
        setTimeout(function () {
            sound.pause();
            sound.currentTime = 0;
        }, 5000);
    }

    getHTMLInfo() {
        let base = super.getHTMLInfo();
        return base.replace(
            "</ul>",
            `   <li>
                        <p>Лаунч контроль: ${this._launch ? "да" : "нет"}</p>
                    </li>
                </ul>`,
        );
    }
}

class BMWM5Competition extends BMW {
    constructor(color = "blue", launchControl, soundEngine) {
        super(
            "M5 COMPETITION",
            "BMW M5 Competition",
            625,
            3.4,
            120000,
            "8-ступ.",
            color,
            true,
            "assets/Cars/M5.png",
            "assets/logo/logoBMW.png",
        );
        this._launch = launchControl;
        this._sound = soundEngine;
        if (typeof launchControl !== "boolean") {
            throw "Лаунч должен быть булевым";
        }
        if (typeof soundEngine !== "string") {
            throw "Звук должен быть строкой";
        }
    }
    displayInfo() {
        console.log(`Лаунч контроль ${this._launch ? "Да" : "Нет"}`);
        super.displayInfo();
    }
    soundEngine() {
        let sound = new Audio("sounds/M5.mp3");
        sound.volume = 1;
        sound.currentTime = 0;
        sound.play().catch((error) => {
            console.error("Ошибка звук не запускается", error.message);
        });
        setTimeout(function () {
            sound.pause();
            sound.currentTime = 0;
        }, 5000);
    }

    getHTMLInfo() {
        let base = super.getHTMLInfo();
        return base.replace(
            "</ul>",
            `   <li>
                        <p>Лаунч контроль: ${this._launch ? "да" : "нет"}</p>
                    </li>
                </ul>`,
        );
    }
}

let bmwM4 = new BMWM4Competition("зеленый", true, "sounds/bmwSound.mp3");
if (nameCar) nameCar.innerHTML = bmwM4.getModel();
if (nameModel) nameModel.innerHTML = bmwM4.getName();
if (characteristic) characteristic.innerHTML = bmwM4.getHTMLInfo();
if (photo) photo.innerHTML = bmwM4.getPhoto();
if (logo) logo.innerHTML = bmwM4.getLogo();

butEngine.addEventListener("click", function () {
    bmwM4.soundEngine();
    let img = photo.querySelector("img");
    let smokes = [];
    img.classList.add("shake");
    let smokeInterval = setInterval(() => {
        let smoke = document.createElement("div");
        smoke.classList.add("smoke");
        smoke.style.right = `${5 + Math.random() * 10}%`;
        smoke.style.bottom = `${10 + Math.random() * 10}%`;
        smoke.style.height = `${20 + Math.random() * 150}px`;
        smoke.style.width = `${20 + Math.random() * 150}px`;
        photo.appendChild(smoke);
        smokes.push(smoke);
    }, 10);

    setTimeout(function () {
        clearInterval(smokeInterval);
        img.classList.remove("shake");
    }, 5000);
    setTimeout(function () {
        smokes.forEach((smoke) => smoke.remove());
    }, 8000);
});
