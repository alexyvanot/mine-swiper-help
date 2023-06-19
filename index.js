// case 0 = normal (pas de bombe autour)
// case 1 = une bombe autour de la case
// case 2 = deux bombes autour de la case
// case 3 = trois bombes autour de la case
// case 4 = quatre bombes autour de la case
// case -1 = une bombe

// grille de 10x10
let fs = require('fs');
let json = require('./grille.json');

function isBombToLeft(x, y, tileMap) {
  
}

function isBombToRight(x, y, tileMap) {
    
}

function isBombToTop(x, y, tileMap) {
    
}

function isBombToBottom(x, y, tileMap) {
    
}

function isBombToTopLeft(x, y, tileMap) {
    
}

function isBombToTopRight(x, y, tileMap) {
    
}

function isBombToBottomLeft(x, y, tileMap) {
    
}

function isBombToBottomRight(x, y, tileMap) {
    
}

function getNumberOfBombsAround(x, y, tileMap) {
    var numberOfBombs = 0;
    if (isBombToLeft(x, y, tileMap)) {
        numberOfBombs++;
    }
    if (isBombToRight(x, y, tileMap)) {
        numberOfBombs++;
    }
    if (isBombToTop(x, y, tileMap)) {
        numberOfBombs++;
    }
    if (isBombToBottom(x, y, tileMap)) {
        numberOfBombs++;
    }
    if (isBombToTopLeft(x, y, tileMap)) {
        numberOfBombs++;
    }
    if (isBombToTopRight(x, y, tileMap)) {
        numberOfBombs++;
    }
    if (isBombToBottomLeft(x, y, tileMap)) {
        numberOfBombs++;
    }
    if (isBombToBottomRight(x, y, tileMap)) {
        numberOfBombs++;
    }
    return numberOfBombs;
}

function getTileValue(x, y, tileMap) {
    if (tileMap[y][x] == -1) {
        return -1;
    }
    return getNumberOfBombsAround(x, y, tileMap);
}

function fillRandomlyTileMap(tileMap) {
    let bomb = -1;
    let normal = 0;
    
}

function changeZeroToCellNumber(tileMap) {
    for (let y = 0; y < tileMap.length; y++) {
        for (let x = 0; x < tileMap[y].length; x++) {
            if (tileMap[y][x] == 0) {
                tileMap[y][x] = getTileValue(x, y, tileMap);
            }
        }
    }
    return tileMap;
}

function resetTileMap(tileMap) {
    for (let y = 0; y < tileMap.length; y++) {
        for (let x = 0; x < tileMap[y].length; x++) {
            tileMap[y][x] = 0;
        }
    }
    return tileMap;
}

function isBomb(x, y, tileMap) {
    return tileMap[y][x] == -1;
}

let tileMap = json[0].tileMap;
//resetTileMap(tileMap);
//fillRandomlyTileMap(tileMap);
//changeZeroToCellNumber(tileMap);
fs.writeFileSync('./grille.json', JSON.stringify(json, null, 2));











