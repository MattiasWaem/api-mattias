import { Request, Response, NextFunction } from 'express';
// import fs
import fs from 'fs';



interface Menu {
    id: number;
    voorgerecht: string;
    hoofdgerecht: string;
    nagerecht: string;
    prijs: number;
}


export const getMenus = (req: Request, res: Response, next: NextFunction) => {
    const menus: Menu[] = require('../db-mattias.json');
    res.status(200).json(menus);
};

export const addMenu = (req: Request, res: Response, next: NextFunction) => {
    const menus: Menu[] = require('../db-mattias.json');
    const newMenu: Menu = {
        id: menus.length + 1,
        voorgerecht: req.body.voorgerecht,
        hoofdgerecht: req.body.hoofdgerecht,
        nagerecht: req.body.nagerecht,
        prijs: req.body.prijs,
    };
    menus.push(newMenu);

    fs.writeFile('src/db-mattias.json', JSON.stringify(menus), (err) => {
        if (err) {
            console.log(err);
        }
    });

    res.status(200).json(menus);
}

export const deleteMenu = (req: Request, res: Response, next: NextFunction) => {
    const menus: Menu[] = require('../db-mattias.json');
    const menuId: number = parseInt(req.params.id);
    const menuIndex: number = menus.findIndex(menu => menu.id === menuId);
    menus.splice(menuIndex, 1);

    fs.writeFile('src/db-mattias.json', JSON.stringify(menus), (err) => {
        if (err) {
            console.log(err);
        }
    });

    res.status(200).json(menus);
}

export const updateMenu = (req: Request, res: Response, next: NextFunction) => {
    // read from file db.json and return all ingredients as json
    // file directory is src/db-mattias.json
    const menus: Menu[] = require('../db-mattias.json');
    const menuId: number = parseInt(req.params.id);
    const menuIndex: number = menus.findIndex(menu => menu.id === menuId);

    fs.writeFile('src/db-mattias.json', JSON.stringify(menus), (err) => {
        if (err) {
            console.log(err);
        }
    });

    const menu: Menu = {
        id: menuId,
        voorgerecht: req.body.voorgerecht,
        hoofdgerecht: req.body.hoofdgerecht,
        nagerecht: req.body.nagerecht,
        prijs: req.body.prijs,
    };
    menus[menuIndex] = menu;
    res.status(200).json(menus);
}

// Get ingredient by id
export const getMenuById = (req: Request, res: Response, next: NextFunction) => {
    // read from file db.json and return all ingredients as json
    // file directory is src/db-mattias.json
    const menus: Menu[] = require('../db-mattias.json');
    const menuId: number = parseInt(req.params.id);
    const ing = menus.find(menu => menu.id === menuId);
    res.status(200).json(ing);
}




export default {
    getMenus,
    addMenu,
    deleteMenu,
    updateMenu,
    getMenuById
}
