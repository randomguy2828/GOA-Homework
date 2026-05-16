// let motorcycle = {
//   model: "Yamaha YZF-R7",
//   year: 2024,
//   specs: {
//     engine: {
//       type: "CP2 (Crossplane)",
//       displacement: "689cc",
//       horsepower: 73.4,
//       cooling: "Liquid-cooled"
//     },
//     chassis: {
//       frame: "Diamond frame",
//       suspension: {
//         front: "Inverted fork",
//         rear: "Link-type Monocross"
//       },
//       brakes: {
//         front: "Dual 298mm discs",
//         rear: "Single 245mm disc"
//       }
//     }
//   }
// }

// მოახდინეთ ამ ობიექტის დესტრუქცია მაქსიმალურად. 

let motorcycle = {
    model: "Yamaha YZF-R7",
    year: 2024,
    specs: {
        engine: {
            type: "CP2 (Crossplane)",
            displacement: "689cc",
            horsepower: 73.4,
            cooling: "Liquid-cooled"
        },
        chassis: {
            frame: "Diamond frame",
            suspension: {
                front: "Inverted fork",
                rear: "Link-type Monocross"
            },
            brakes: {
                front: "Dual 298mm discs",
                rear: "Single 245mm disc"
            }
        }
    }
}

let{
    model,
    year,
    specs:{
        engine:{type, displacement, horsepower, cooling},
        chassis:{
            frame,
            suspension:{front: rame1, rear: rame2},
            brakes:{front: rame3, rear: rame4}
        }
    }
} = motorcycle

