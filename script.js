const butEngine = document.getElementById("engine");
const nameCar = document.querySelector(".name_car");
const characteristic = document.querySelector(".characteristic");

class Car {
    constructor(model, power, acceleration, price, transmission, color) {
        this._model = model;
        this._power = power;
        this._acceleration = acceleration;
        this._price = price;
        this._transmission = transmission;
        this._color = color;
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
    }

    displayInfo() {
        console.log(`Модель ${this._model}`);
        console.log(`Мощность: ${this._power}лс`);
        console.log(`Разгон от 0 до 100 ${this._acceleration}с`);
        console.log(`Начальная цена в долларах $${this._price.toLocaleString()}`);
        console.log(`Коробка передач ${this._transmission}`);
        console.log(`Базовый цвет ${this._color}`);
        console.log("-".repeat(40));
    }

    getModel() {
        return `<h2>${this._model}</h2>`;
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
    constructor(model, power, acceleration, price, transmission, color, mPerformance = false) {
        super(model, power, acceleration, price, transmission, color);
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
        super("BMW M4 Competition", 523, 3.4, 91500, "8-ступ.", color, true);
        this._launch = true;
        this._sound = "sounds/bmwSound.mp3";
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
    }

    getHTMLInfo() {
        let base = super.getHTMLInfo();
        return base.replace(
            "</ul>",
            `   <li>
                        <p>лаунч контроль: ${this._launch ? "да" : "нет"}</p>
                    </li>
                </ul>`,
        );
    }
}

let bmwM4 = new BMWM4Competition("зеленый", true, "sounds/bmwSound.mp3");
if (nameCar) nameCar.innerHTML = bmwM4.getModel();
if (characteristic) characteristic.innerHTML = bmwM4.getHTMLInfo();

butEngine.addEventListener("click", function () {
    bmwM4.soundEngine();
});
