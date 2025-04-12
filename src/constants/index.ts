import { StatusEnum } from "@/interfaces";

export const PaginationConstant = {
    page: 1,
    limit: 10
}

export const DeliveryFSMConstant: Record<StatusEnum, {
    next: StatusEnum | null,
    allowed: StatusEnum[]
}> = {
    created: {
        next: StatusEnum.paid,
        allowed: [StatusEnum.cancelled, StatusEnum.paid]
    },
    'payment settled': {
        next: StatusEnum.shipped,
        allowed: [StatusEnum.cancelled, StatusEnum.shipped]
    },
    shipped: {
        next: StatusEnum.delivered,
        allowed: [StatusEnum.cancelled, StatusEnum.delivered]
    },
    delivered: {
        next: null,
        allowed: []
    },
    cancelled: {
        next: null,
        allowed: []
    },
}

export const statusConstant: Record<StatusEnum, string> = {
    created: 'Create',
    'payment settled': 'Mark as paid',
    shipped: 'Mark as Shipped',
    delivered: 'Mark as delivered',
    cancelled: 'Cancel',
}


export const StatesConstant = [
    {
        name: "Abia",
        cities: ["Aba", "Umuahia", "Ohafia", "Arochukwu"]
    },
    {
        name: "Adamawa",
        cities: ["Yola", "Mubi", "Numan", "Jimeta"]
    },
    {
        name: "Akwa Ibom",
        cities: ["Uyo", "Ikot Ekpene", "Eket", "Oron"]
    },
    {
        name: "Anambra",
        cities: ["Awka", "Onitsha", "Nnewi", "Ekwulobia"]
    },
    {
        name: "Bauchi",
        cities: ["Bauchi", "Azare", "Misau", "Darazo"]
    },
    {
        name: "Bayelsa",
        cities: ["Yenagoa", "Brass", "Ogbia", "Amassoma"]
    },
    {
        name: "Benue",
        cities: ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala"]
    },
    {
        name: "Borno",
        cities: ["Maiduguri", "Biu", "Dikwa", "Gwoza"]
    },
    {
        name: "Cross River",
        cities: ["Calabar", "Ikom", "Obudu", "Ogoja"]
    },
    {
        name: "Delta",
        cities: ["Asaba", "Warri", "Sapele", "Ughelli"]
    },
    {
        name: "Ebonyi",
        cities: ["Abakaliki", "Afikpo", "Onueke", "Ezzamgbo"]
    },
    {
        name: "Edo",
        cities: ["Benin City", "Auchi", "Ekpoma", "Uromi"]
    },
    {
        name: "Ekiti",
        cities: ["Ado-Ekiti", "Ikere", "Iworoko", "Ilupeju"]
    },
    {
        name: "Enugu",
        cities: ["Enugu", "Nsukka", "Udi", "Agbani"]
    },
    {
        name: "Gombe",
        cities: ["Gombe", "Kaltungo", "Dukku", "Billiri"]
    },
    {
        name: "Imo",
        cities: ["Owerri", "Orlu", "Okigwe", "Mbaise"]
    },
    {
        name: "Jigawa",
        cities: ["Dutse", "Hadejia", "Kazaure", "Gumel"]
    },
    {
        name: "Kaduna",
        cities: ["Kaduna", "Zaria", "Kafanchan", "Soba"]
    },
    {
        name: "Kano",
        cities: ["Kano", "Wudil", "Bichi", "Rano"]
    },
    {
        name: "Katsina",
        cities: ["Katsina", "Daura", "Funtua", "Malumfashi"]
    },
    {
        name: "Kebbi",
        cities: ["Birnin Kebbi", "Argungu", "Zuru", "Yelwa"]
    },
    {
        name: "Kogi",
        cities: ["Lokoja", "Okene", "Kabba", "Idah"]
    },
    {
        name: "Kwara",
        cities: ["Ilorin", "Offa", "Omu-Aran", "Patigi"]
    },
    {
        name: "Lagos",
        cities: ["Ikeja", "Ikorodu", "Epe", "Badagry"]
    },
    {
        name: "Nasarawa",
        cities: ["Lafia", "Keffi", "Akwanga", "Nasarawa"]
    },
    {
        name: "Niger",
        cities: ["Minna", "Bida", "Kontagora", "Suleja"]
    },
    {
        name: "Ogun",
        cities: ["Abeokuta", "Ijebu-Ode", "Sagamu", "Ota"]
    },
    {
        name: "Ondo",
        cities: ["Akure", "Owo", "Ondo", "Ikare"]
    },
    {
        name: "Osun",
        cities: ["Osogbo", "Ife", "Ilesa", "Ede"]
    },
    {
        name: "Oyo",
        cities: ["Ibadan", "Ogbomosho", "Oyo", "Iseyin"]
    },
    {
        name: "Plateau",
        cities: ["Jos", "Barkin Ladi", "Pankshin", "Shendam"]
    },
    {
        name: "Rivers",
        cities: ["Port Harcourt", "Bonny", "Opobo", "Ahoada"]
    },
    {
        name: "Sokoto",
        cities: ["Sokoto", "Tambuwal", "Gwadabawa", "Illela"]
    },
    {
        name: "Taraba",
        cities: ["Jalingo", "Wukari", "Gembu", "Bali"]
    },
    {
        name: "Yobe",
        cities: ["Damaturu", "Potiskum", "Nguru", "Gashua"]
    },
    {
        name: "Zamfara",
        cities: ["Gusau", "Kaura Namoda", "Talata Mafara", "Zurmi"]
    },
    {
        name: "FCT (Federal Capital Territory)",
        cities: ["Abuja"]
    }
];

export const nigeriaStatesConstant = [
    {
        name: "Abia",
        cities: [
            { name: "Aba", zipcode: "450001", population: 534265 },
            { name: "Umuahia", zipcode: "440001", population: 359230 },
            { name: "Ohafia", zipcode: "441001", population: 150032 },
            { name: "Arochukwu", zipcode: "442001", population: 127483 }
        ]
    },
    {
        name: "Adamawa",
        cities: [
            { name: "Yola", zipcode: "640001", population: 392869 },
            { name: "Mubi", zipcode: "650001", population: 264301 },
            { name: "Numan", zipcode: "642001", population: 141200 },
            { name: "Jimeta", zipcode: "641001", population: 320712 }
        ]
    },
    {
        name: "Akwa Ibom",
        cities: [
            { name: "Uyo", zipcode: "520001", population: 500998 },
            { name: "Ikot Ekpene", zipcode: "521001", population: 254316 },
            { name: "Eket", zipcode: "523001", population: 180534 },
            { name: "Oron", zipcode: "524001", population: 143221 }
        ]
    },
    {
        name: "Anambra",
        cities: [
            { name: "Awka", zipcode: "420001", population: 355900 },
            { name: "Onitsha", zipcode: "430001", population: 763500 },
            { name: "Nnewi", zipcode: "435001", population: 391227 },
            { name: "Ekwulobia", zipcode: "421001", population: 170345 }
        ]
    },
    {
        name: "Bauchi",
        cities: [
            { name: "Bauchi", zipcode: "740001", population: 495875 },
            { name: "Azare", zipcode: "741001", population: 216472 },
            { name: "Misau", zipcode: "742001", population: 130112 },
            { name: "Darazo", zipcode: "743001", population: 103441 }
        ]
    },
    {
        name: "Bayelsa",
        cities: [
            { name: "Yenagoa", zipcode: "560001", population: 266008 },
            { name: "Brass", zipcode: "562001", population: 110094 },
            { name: "Ogbia", zipcode: "561001", population: 150320 },
            { name: "Amassoma", zipcode: "563001", population: 95012 }
        ]
    },
    {
        name: "Benue",
        cities: [
            { name: "Makurdi", zipcode: "970001", population: 345763 },
            { name: "Gboko", zipcode: "972001", population: 290112 },
            { name: "Otukpo", zipcode: "973001", population: 231085 },
            { name: "Katsina-Ala", zipcode: "974001", population: 194502 }
        ]
    },
    {
        name: "Lagos",
        cities: [
            { name: "Ikeja", zipcode: "100001", population: 313196 },
            { name: "Ikorodu", zipcode: "104001", population: 535619 },
            { name: "Epe", zipcode: "106001", population: 181409 },
            { name: "Badagry", zipcode: "103001", population: 241093 }
        ]
    },
    {
        name: "Kano",
        cities: [
            { name: "Kano", zipcode: "700001", population: 1300000 },
            { name: "Wudil", zipcode: "701001", population: 220341 },
            { name: "Bichi", zipcode: "702001", population: 180932 },
            { name: "Rano", zipcode: "703001", population: 143276 }
        ]
    },
    {
        name: "Kaduna",
        cities: [
            { name: "Kaduna", zipcode: "800001", population: 760084 },
            { name: "Zaria", zipcode: "801001", population: 408198 },
            { name: "Kafanchan", zipcode: "802001", population: 195062 },
            { name: "Soba", zipcode: "803001", population: 123087 }
        ]
    },
    {
        name: "Rivers",
        cities: [
            { name: "Port Harcourt", zipcode: "500001", population: 538558 },
            { name: "Bonny", zipcode: "502001", population: 182043 },
            { name: "Opobo", zipcode: "503001", population: 125084 },
            { name: "Ahoada", zipcode: "504001", population: 101287 }
        ]
    },
    {
        name: "Oyo",
        cities: [
            { name: "Ibadan", zipcode: "200001", population: 1087165 },
            { name: "Ogbomosho", zipcode: "203001", population: 723198 },
            { name: "Oyo", zipcode: "202001", population: 500056 },
            { name: "Iseyin", zipcode: "204001", population: 312982 }
        ]
    },
    {
        name: "FCT",
        cities: [
            { name: "Abuja", zipcode: "900001", population: 1235880 }
        ]
    }
];

export const nigeriaCitiesByStatesConstant = {
    Abia: [
        { name: "Aba", zipcode: "450001", population: 534265 },
        { name: "Umuahia", zipcode: "440001", population: 359230 },
        { name: "Ohafia", zipcode: "441001", population: 150032 },
        { name: "Arochukwu", zipcode: "442001", population: 127483 }
    ],
    Adamawa: [
        { name: "Yola", zipcode: "640001", population: 392869 },
        { name: "Mubi", zipcode: "650001", population: 264301 },
        { name: "Numan", zipcode: "642001", population: 141200 },
        { name: "Jimeta", zipcode: "641001", population: 320712 }
    ],
    AkwaIbom: [
        { name: "Uyo", zipcode: "520001", population: 500998 },
        { name: "Ikot Ekpene", zipcode: "521001", population: 254316 },
        { name: "Eket", zipcode: "523001", population: 180534 },
        { name: "Oron", zipcode: "524001", population: 143221 }
    ],
    Anambra: [
        { name: "Awka", zipcode: "420001", population: 355900 },
        { name: "Onitsha", zipcode: "430001", population: 763500 },
        { name: "Nnewi", zipcode: "435001", population: 391227 },
        { name: "Ekwulobia", zipcode: "421001", population: 170345 }
    ],
    Bauchi: [
        { name: "Bauchi", zipcode: "740001", population: 495875 },
        { name: "Azare", zipcode: "741001", population: 216472 },
        { name: "Misau", zipcode: "742001", population: 130112 },
        { name: "Darazo", zipcode: "743001", population: 103441 }
    ],
    Bayelsa: [
        { name: "Yenagoa", zipcode: "560001", population: 266008 },
        { name: "Brass", zipcode: "562001", population: 110094 },
        { name: "Ogbia", zipcode: "561001", population: 150320 },
        { name: "Amassoma", zipcode: "563001", population: 95012 }
    ],
    Benue: [
        { name: "Makurdi", zipcode: "970001", population: 345763 },
        { name: "Gboko", zipcode: "972001", population: 290112 },
        { name: "Otukpo", zipcode: "973001", population: 231085 },
        { name: "Katsina-Ala", zipcode: "974001", population: 194502 }
    ],
    Borno: [
        { name: "Maiduguri", zipcode: "600001", population: 540356 },
        { name: "Bama", zipcode: "601001", population: 272341 },
        { name: "Konduga", zipcode: "602001", population: 130540 },
        { name: "Chibok", zipcode: "603001", population: 90532 }
    ],
    CrossRiver: [
        { name: "Calabar", zipcode: "540001", population: 450789 },
        { name: "Ogoja", zipcode: "541001", population: 160125 },
        { name: "Ikom", zipcode: "542001", population: 110341 },
        { name: "Obudu", zipcode: "543001", population: 89021 }
    ],
    Delta: [
        { name: "Warri", zipcode: "330001", population: 600332 },
        { name: "Asaba", zipcode: "320001", population: 420341 },
        { name: "Sapele", zipcode: "331001", population: 310128 },
        { name: "Ughelli", zipcode: "332001", population: 250421 }
    ],
    Ebonyi: [
        { name: "Abakaliki", zipcode: "840001", population: 320345 },
        { name: "Afikpo", zipcode: "841001", population: 200431 },
        { name: "Onicha", zipcode: "842001", population: 140215 },
        { name: "Ikwo", zipcode: "843001", population: 125034 }
    ],
    Edo: [
        { name: "Benin City", zipcode: "300001", population: 860541 },
        { name: "Auchi", zipcode: "301001", population: 310429 },
        { name: "Ekpoma", zipcode: "302001", population: 195430 },
        { name: "Uromi", zipcode: "303001", population: 150432 }
    ],
    Ekiti: [
        { name: "Ado-Ekiti", zipcode: "360001", population: 325432 },
        { name: "Ikere", zipcode: "361001", population: 210342 },
        { name: "Igbara-Odo", zipcode: "362001", population: 135032 },
        { name: "Iyin", zipcode: "363001", population: 95032 }
    ],
    Enugu: [
        { name: "Enugu", zipcode: "400001", population: 695243 },
        { name: "Nsukka", zipcode: "402001", population: 290432 },
        { name: "Oji River", zipcode: "403001", population: 125031 },
        { name: "Udi", zipcode: "404001", population: 111540 }
    ],
    FCT: [
        { name: "Abuja", zipcode: "900001", population: 1235880 }
    ],
    Gombe: [
        { name: "Gombe", zipcode: "760001", population: 321541 },
        { name: "Billiri", zipcode: "761001", population: 170214 },
        { name: "Dukku", zipcode: "762001", population: 140215 },
        { name: "Kaltungo", zipcode: "763001", population: 120032 }
    ],
    Imo: [
        { name: "Owerri", zipcode: "460001", population: 540765 },
        { name: "Orlu", zipcode: "461001", population: 290432 },
        { name: "Okigwe", zipcode: "462001", population: 205412 },
        { name: "Oguta", zipcode: "463001", population: 175023 }
    ],
    Jigawa: [
        { name: "Dutse", zipcode: "720001", population: 284321 },
        { name: "Hadejia", zipcode: "721001", population: 173456 },
        { name: "Gumel", zipcode: "722001", population: 120034 },
        { name: "Birnin Kudu", zipcode: "723001", population: 104023 }
    ],
    Kaduna: [
        { name: "Kaduna", zipcode: "800001", population: 760084 },
        { name: "Zaria", zipcode: "801001", population: 408198 },
        { name: "Kafanchan", zipcode: "802001", population: 195062 },
        { name: "Soba", zipcode: "803001", population: 123087 }
    ],
    Kano: [
        { name: "Kano", zipcode: "700001", population: 1300000 },
        { name: "Wudil", zipcode: "701001", population: 220341 },
        { name: "Bichi", zipcode: "702001", population: 180932 },
        { name: "Rano", zipcode: "703001", population: 143276 }
    ],
    Katsina: [
        { name: "Katsina", zipcode: "820001", population: 432109 },
        { name: "Daura", zipcode: "821001", population: 205434 },
        { name: "Funtua", zipcode: "822001", population: 150102 },
        { name: "Malumfashi", zipcode: "823001", population: 134561 }
    ],
    Kebbi: [
        { name: "Birnin Kebbi", zipcode: "860001", population: 310987 },
        { name: "Argungu", zipcode: "861001", population: 190430 },
        { name: "Zuru", zipcode: "862001", population: 130542 },
        { name: "Yauri", zipcode: "863001", population: 102432 }
    ],
    Kogi: [
        { name: "Lokoja", zipcode: "260001", population: 420765 },
        { name: "Idah", zipcode: "261001", population: 203409 },
        { name: "Okene", zipcode: "262001", population: 195320 },
        { name: "Kabba", zipcode: "263001", population: 164305 }
    ],
    Kwara: [
        { name: "Ilorin", zipcode: "240001", population: 820432 },
        { name: "Offa", zipcode: "241001", population: 170120 },
        { name: "Omu-Aran", zipcode: "242001", population: 134021 },
        { name: "Pategi", zipcode: "243001", population: 103211 }
    ],
    Lagos: [
        { name: "Ikeja", zipcode: "100001", population: 313196 },
        { name: "Ikorodu", zipcode: "104001", population: 535619 },
        { name: "Epe", zipcode: "106001", population: 181409 },
        { name: "Badagry", zipcode: "103001", population: 241093 }
    ],
    Nasarawa: [
        { name: "Lafia", zipcode: "950001", population: 347215 },
        { name: "Keffi", zipcode: "951001", population: 140312 },
        { name: "Akwanga", zipcode: "952001", population: 123091 },
        { name: "Karu", zipcode: "953001", population: 111023 }
    ],
    Niger: [
        { name: "Minna", zipcode: "920001", population: 450321 },
        { name: "Suleja", zipcode: "921001", population: 290432 },
        { name: "Kontagora", zipcode: "922001", population: 190134 },
        { name: "Bida", zipcode: "923001", population: 140210 }
    ],
    Ogun: [
        { name: "Abeokuta", zipcode: "110001", population: 605342 },
        { name: "Sagamu", zipcode: "111001", population: 205143 },
        { name: "Ijebu-Ode", zipcode: "112001", population: 184032 },
        { name: "Ota", zipcode: "113001", population: 153214 }
    ],
    Ondo: [
        { name: "Akure", zipcode: "340001", population: 495134 },
        { name: "Ondo Town", zipcode: "341001", population: 210543 },
        { name: "Owo", zipcode: "342001", population: 150324 },
        { name: "Ikare", zipcode: "343001", population: 120431 }
    ],
    Osun: [
        { name: "Osogbo", zipcode: "230001", population: 620431 },
        { name: "Ile-Ife", zipcode: "231001", population: 320543 },
        { name: "Ilesa", zipcode: "232001", population: 205432 },
        { name: "Ede", zipcode: "233001", population: 153211 }
    ],
    Oyo: [
        { name: "Ibadan", zipcode: "200001", population: 1087165 },
        { name: "Ogbomosho", zipcode: "203001", population: 723198 },
        { name: "Oyo", zipcode: "202001", population: 500056 },
        { name: "Iseyin", zipcode: "204001", population: 312982 }
    ],
    Plateau: [
        { name: "Jos", zipcode: "930001", population: 540321 },
        { name: "Barkin Ladi", zipcode: "931001", population: 170432 },
        { name: "Pankshin", zipcode: "932001", population: 130543 },
        { name: "Shendam", zipcode: "933001", population: 120430 }
    ],
    Rivers: [
        { name: "Port Harcourt", zipcode: "500001", population: 538558 },
        { name: "Bonny", zipcode: "502001", population: 182043 },
        { name: "Opobo", zipcode: "503001", population: 125084 },
        { name: "Ahoada", zipcode: "504001", population: 101287 }
    ],
    Sokoto: [
        { name: "Sokoto", zipcode: "840001", population: 460765 },
        { name: "Wamakko", zipcode: "841001", population: 150342 },
        { name: "Bodinga", zipcode: "842001", population: 132032 },
        { name: "Illela", zipcode: "843001", population: 110432 }
    ],
    Taraba: [
        { name: "Jalingo", zipcode: "660001", population: 320432 },
        { name: "Wukari", zipcode: "661001", population: 150210 },
        { name: "Sardauna", zipcode: "662001", population: 123041 },
        { name: "Bali", zipcode: "663001", population: 111232 }
    ],
    Yobe: [
        { name: "Damaturu", zipcode: "620001", population: 280432 },
        { name: "Potiskum", zipcode: "621001", population: 190432 },
        { name: "Nguru", zipcode: "622001", population: 150123 },
        { name: "Geidam", zipcode: "623001", population: 123045 }
    ],
    Zamfara: [
        { name: "Gusau", zipcode: "880001", population: 370432 },
        { name: "Kaura Namoda", zipcode: "881001", population: 190210 },
        { name: "Talata Mafara", zipcode: "882001", population: 150312 },
        { name: "Anka", zipcode: "883001", population: 123043 }
    ]
}
