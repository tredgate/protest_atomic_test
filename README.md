# protest_atomic_test
Toto repo vylo vytvořeno pro přednášku Atomické testy pro komunitní skupinu [\[pro\:\]TEST\!](https://www.pro-test.info/).
V testech využíváme aplikaci [Tredgate Pmtool](http://tredgate.com/pmtool/)

Uživatel na testování:
**username**: protest_user
**password**: Protest23#

## Preconditions
Nainstalované nástroje
- [node.js LTS](https://nodejs.org/en)
- [Git Windows](https://git-scm.com/download/win)
- [Git Mac](https://git-scm.com/download/mac)
- [Visual Studio Code](https://code.visualstudio.com/)

## Postup na zprovoznění
1. Naclonuj si repository k sobě do počítače
2. V naclonované složce nainstaluj Cypress přes terminál/přikazový řádek
```
npm install cypress --save-dev
```
3. Spusť Cypress pomocí terminálu, příkazového řádku
```
npx cypress open
```
