import {rad} from './utils';

type WallDef = [x: number, y: number];
type BoxDef = [x: number, y: number, angle: number, width: number, height: number];
type WheelDef = [x: number, y: number, power: number, centerX?: number, centerY?: number, size?: number];
type JumperDef = [x: number, y: number, size: number, temporary?: boolean];

export type StageDef = {
    walls: WallDef[][];
    boxes: BoxDef[];
    wheels: WheelDef[];
    jumpers?: JumperDef[];
    goalY: number;
    zoomY: number;
}

export const stages: StageDef[] = [
    {
        goalY: 115,
        zoomY: 113,
        walls: [
            [ // left
                [16.5, -50],
                [9.25, -50],
                [9.25, 0],
                [9.25, 43],
                [4.25, 50],
                [9.25, 53],
                [9.25, 75],
                [12, 80],
                [12, 83],
                [12, 84],
                [14, 86],
                [12, 84],
                [9.25, 86],
                [9.25, 90],
                [11, 88],
                [9.25, 90],
                [11, 95],
                [9, 99],
                [11, 103],
                [12.625, 107],
                [8.7, 107],
                [8.7, 120],


            ],
            [ // right
                [16.5, -50],
                [16.5, 50],
                [19.5, 54],
                [18.5, 56],
                [19.5, 58],
                [16.5, 61],
                [16.5, 75],
                [13, 80],
                [13, 83],
                [16.5, 86],
                [16.5, 88],
                [14, 90],
                [12, 90],
                [15, 95],
                [17, 99],
                [19, 103],
                [17, 107],
                [16.7, 110],
                [10.7, 110],
                [10.7, 120],

            ],
            [
                [16.5, 52.5],
                [17.5, 54],
                [16.5, 56],
                [17.5, 58],
                [16.5, 59],
                [15.5, 56],
                [16.5, 52.5],
            ],
            [
                [9.25, 45.5],
                [6.25, 49.5],
                [9.25, 51],
                [14.5, 50.5],
                [9.25, 45.5],
            ],
            [
                [9.25, 26], [11.0625, 27.5]
            ],
            [
                [16.5, 26], [14.6875, 27.5]
            ],
            [
                [11.0625, 30], [12.875, 28.5], [14.6875, 30]
            ],
            [
                [9.25, 31], [11.0625, 32.5]
            ],
            [
                [16.5, 31], [14.6875, 32.5]
            ],
            [
                [11.0625, 35], [12.875, 33.5], [14.6875, 35]
            ],


        ],
        wheels: [
            [10.7, 10, 10, 0, 0, 0.5],
            [14.7, 10, -10, 0, 0, 0.5],
            [12.7, 10, 10, 0, 0, 0.5],

            [10.7, 14, -3],
            [14.7, 14, 3],

            [11.20, 44, -5, 0, 0, 0.5],

            [10.3, 75, 8, 0, 0, 1],
            [15.2, 75, -8, 0, 0, 1],

            [13, 80, -10, 0, 0, 0.5],


            [10.7, 110, -10, 0, 0, 0.5],
            [12.7, 110, -10, 0, 0, 0.5],
            [14.7, 110, -10, 0, 0, 0.5],
            [16.7, 110, -10, 0, 0, 0.5],

            [14, 89, -5, 0, 0, 1],
            [10, 89, 15, 0, 0, 1],

            // [12.175, 80, 2.5, 0, 0, 0.75],
        ],
        boxes: [
            // x, y, angle, width, height
            [9.25, 18, rad(45), 0.15, 0.15],
            [11.25, 18, rad(45), 0.15, 0.15],
            [13.25, 18, rad(45), 0.15, 0.15],
            [15.25, 18, rad(45), 0.15, 0.15],

            [10.5, 19, rad(45), 0.15, 0.15],
            [12.5, 19, rad(45), 0.15, 0.15],
            [14.5, 19, rad(45), 0.15, 0.15],
            [16.5, 19, rad(45), 0.15, 0.15],

            [9.25, 20, rad(45), 0.15, 0.15],
            [11.25, 20, rad(45), 0.15, 0.15],
            [13.25, 20, rad(45), 0.15, 0.15],
            [15.25, 20, rad(45), 0.15, 0.15],

            [10.5, 21, rad(45), 0.15, 0.15],
            [12.5, 21, rad(45), 0.15, 0.15],
            [14.5, 21, rad(45), 0.15, 0.15],
            [16.5, 21, rad(45), 0.15, 0.15],

            [9.25, 22, rad(45), 0.15, 0.15],
            [11.25, 22, rad(45), 0.15, 0.15],
            [13.25, 22, rad(45), 0.15, 0.15],
            [15.25, 22, rad(45), 0.15, 0.15],

            [10.5, 23, rad(45), 0.15, 0.15],
            [12.5, 23, rad(45), 0.15, 0.15],
            [14.5, 23, rad(45), 0.15, 0.15],
            [16.5, 23, rad(45), 0.15, 0.15],

            [9.4, 39, rad(45), 3, 3],
            [16.5, 43, rad(45), 3, 3],
        ],
        jumpers: [
            [11, 65, 0.5, true],
            [13, 65, 0.5, true],
            [15, 65, 0.5, true],

            [12, 67.5, 0.5, true],
            [14, 67.5, 0.5, true],

            [13, 71, 0.8, true],

            [10.7, 77.5, 0.8, true],
            [14.7, 77.5, 0.8, true],

            [12.625, 80, 1.5, true],
            [12.625, 80, 1.2, true],


            [11, 95, 1.5, true],
            [15, 95, 1.5, true],
            [9, 99, 1.5, true],
            [12.625, 99, 1.5, true],
            [17, 99, 1.5, true],

            [11, 103, 1.5, true],
            [15, 103, 1.5, true],
            [19, 103, 1.5, true],

            [12.625, 107, 1.5, true],
            [17, 107, 1.5, true],

            [9.7, 113,1 ,true],
            [9.7, 113, 0.8 ,true],
        ]
    },

];
