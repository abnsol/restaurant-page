import "../styles/menu.css";

export function menuDomLoad(){
    const content = document.querySelector("#content");
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }

    const menuGrid = document.createElement("div"); 
    menuGrid.setAttribute('id','menuGrid');
    menu.forEach(food => {
        const grid = document.createElement("div");
        grid.setAttribute("class","grids")

        const picture = document.createElement("div");
        picture.setAttribute("style",`background: url(${food.image}) center/cover no-repeat;`);
        picture.setAttribute('class','menu-grid');

        const name = document.createElement("div");
        const price = document.createElement("div");
        const description = document.createElement("div");
        name.textContent = food.name;
        price.textContent = food.price;
        description.textContent = food.description;

        grid.appendChild(name);
        grid.appendChild(picture);
        grid.appendChild(description);
        grid.appendChild(price);
        menuGrid.appendChild(grid);
    });
    content.appendChild(menuGrid);

}


class Food {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

let menu = [
    new Food("Kitfo", "price $3.00", "Finely minced raw beef seasoned with spiced butter and mitmita.","https://media.cnn.com/api/v1/images/stellar/prod/190205150343-kitfo.jpg?q=w_1600,h_900,x_0,y_0,c_fill"),
    new Food("Bayenetu", "price $3.50", "A platter of various vegan dishes served on injera.",'https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-yetsom-beyaynetu.jpg'),
    new Food("Doro Wot", "price $2.50", "A spicy chicken stew with boiled eggs, simmered in a rich berbere sauce.","https://afrifoodnetwork.com/wp-content/uploads/2021/09/Doro-wat-Ethiopian-chicken-stew.jpg"),
    new Food("Shiro", "price $1.80", "A chickpea stew seasoned with garlic, ginger, and berbere.",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWqkrLrW0ekRPzeb37xguOkpHImhQx02HTw&s'),
    new Food("Tibs", "price $2.70", "Sautéed meat, usually beef or lamb, cooked with onions, garlic, and peppers.",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynBkTWv3TDW3-Cmob2ITWMT2h4mnR2FXmBg&s'),
    new Food("Gomen", "price $1.60", "Collard greens sautéed with garlic, ginger, and mild spices.",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3SLHs2h0dkeTnbARTD3bhEpSxVIP6TCeuA&s'),
    new Food("Chechebsa", "price $1.20", "Fried flatbread mixed with berbere and spiced butter.",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmWgz4V_RrExALfTQ5tzfZSfL1xAG3L7PKg&s'),
    new Food("Firfir", "price $2.00", "Shredded injera mixed with spicy berbere sauce.",'https://i0.wp.com/abyssiniaeats.com/wp-content/uploads/2024/02/ethiopoian-firfir-e1707231506871.jpg?fit=949%2C814&ssl=1'),
    new Food("Misir Wot", "price $1.90", "Spiced red lentil stew, rich in flavor with a berbere kick.",'https://i.cbc.ca/1.6672807.1670013499!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/misir-wot-lentil-stew.jpg'),
    new Food("Fossolia", "price $1.40", "Green beans and carrots sautéed with onions and spices.",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhchjrE0OgSfP19CJ_71YeoRhYqtQsIZ_qg&s'),
    new Food("Genfo", "price $1.30", "Thick porridge made from barley or wheat, served with spiced butter.",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUQutwUQLwM84nK7sKgmRgFXdhi1VGYRQHA&s'),
    new Food("Alcha", "price $1.50", "A mild and flavorful stew made with turmeric and vegetables.","https://middlebury.coop/wp-content/uploads/2022/03/Kik-Alicha.-SS.-Low-Res.jpg"),
    new Food("Dulet", "price $2.30","myfavorite" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7__QQ2Wy1qLQKMEtHDu-Dk9W7xP1MaWWirw&s")
];
