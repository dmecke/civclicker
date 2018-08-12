import Requirement from "./component/building/Requirement";

export default {
    special_resource: {
        food: 'skin',
        wood: 'herb',
        stone: 'ore',
    },
    building: {
        tent: {
            requirements: [
                new Requirement('skin', 2),
                new Requirement('wood', 2),
            ],
            effect: '+1 max pop.',
        },
        hut: {
            requirements: [
                new Requirement('skin', 1),
                new Requirement('wood', 20),
            ],
            effect: '+3 max pop.',
        },
        barn: {
            requirements: [
                new Requirement('wood', 100),
            ],
            effect: 'store +200 food',
        },
        wood_stockpile: {
            requirements: [
                new Requirement('wood', 100),
            ],
            effect: 'store +200 wood',
        },
        stone_stockpile: {
            requirements: [
                new Requirement('wood', 100),
            ],
            effect: 'store +200 stone',
        },
    },
}
