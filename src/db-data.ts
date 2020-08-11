import { Person } from './app/model/person';
import { Course } from './app/model/course';
//iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
//category: 'BEGINNER'

export const COURSES: Course[] = [
    undefined,
    {
        id: 1,
        description: "Angular Core Deep Dive",

        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    },
    {
        id: 2,
        description: "RxJs In Practice Course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
    },

    {
        id: 3,
        description: 'NgRx In Depth',
        longDescription: "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        category: 'ADVANCED'
    },

    {
        id: 4,
        description: "Angular for Beginners",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
        category: 'BEGINNER',
        lessonsCount: 10
    },
    {
        id: 5,
        description: 'Angular Security Course',
        longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        category: 'ADVANCED',
        lessonsCount: 11
    },
    {
        id: 6,
        description: 'Angular PWA Course',
        longDescription: "<p class='course-description'>Learn Angular Progressive Web Applications, build the future of the Web Today.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
        category: 'ADVANCED',
        lessonsCount: 8
    },
    {
        id: 7,
        description: 'Angular Advanced Course',
        longDescription: "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
        category: 'ADVANCED'
    },
    {
        id: 8,
        description: 'Complete Typescript Course',
        longDescription: "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',

    },
    {
        id: 9,
        description: 'Angular Architecture Course',
        longDescription: "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
        category: 'BEGINNER'
    },
    {
        id: 10,
        description: "Angular Material Course",
        iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
        longDescription: "Build Applications with the official Angular Widget Library",
        category: 'ADVANCED'
    },
    undefined

];


export function findCourseById(courseId: number) {
    return COURSES.find(course => course.id === courseId);
}

export const PERSONS: Person[] = [
    {
        name: "Darien Gleason",
        dateOfBirth: "1974-8-30",
        streetAddress: "9089 Botsford Highway",
        city: "Schuppestad",
        state: "England,Scotland,Wales,Northern Ireland",
        zip: "JT7 OFI",
        userName: "Darien44",
        password: "ZgEg7R3U1LXRXNL",
        email: "Darien_Gleason@yahoo.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stushona/128.jpg"
    },
    {
        name: "Tyreek Turcotte",
        dateOfBirth: "1966-9-5",
        streetAddress: "8498 Gisselle Branch",
        city: "Starkshire",
        state: "Starkshire, VT ZG0 4CL",
        zip: "ZG0 4CL",
        userName: "Tyreek.Turcotte",
        password: "lxUP7yyw3gFQFjL",
        email: "Tyreek37@yahoo.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/aaroni/128.jpg"
    },
    {
        name: "Mrs. Savion Bins",
        dateOfBirth: "1973-8-22",
        streetAddress: "952 O'Keefe Coves",
        city: "Cloydshire",
        state: "Cloydshire, CA PV1 7EU",
        zip: "CA PV1 7EU",
        userName: "Savion25",
        password: "8fLA_wJgQ0g1g5X",
        email: "Savion23@yahoo.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg"
    },
    {
        name: "Dorothy Lebsack",
        dateOfBirth: "1980-6-29",
        streetAddress: "41191 Mayert Rest",
        city: "East Medafurt",
        state: "NH",
        zip: "HO1 9HO",
        userName: "Dorothy_Lebsack",
        password: "duBcoJDQGLKNL2L",
        email: "Dorothy.Lebsack@hotmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/GavicoInd/128.jpg"
    },
    {
        name: "Lester Herzog",
        dateOfBirth: "1988-4-23",
        streetAddress: "0396 Haley Mission",
        city: "Jaedenchester",
        state: "IN",
        zip: "XN83 0WZ",
        userName: "Lester.Herzog92",
        password: "aHxgBSkLEybvtBM",
        email: "Lester24@hotmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg"
    },
    {
        name: "Miguel Armstrong",
        dateOfBirth: "1989-10-11",
        streetAddress: "9302 Jast Mission",
        city: "East Tess",
        state: "NC",
        zip: "GY5 2UA",
        userName: "Miguel.Armstrong47",
        password: "nP4Pi3BsUxJJz50",
        email: "Miguel30@yahoo.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olgary/128.jpg"
    },
    {
        name: "Coleman Kshlerin",
        dateOfBirth: "1986-7-15",
        streetAddress: "222 Paucek Plains",
        city: "Tillmanberg, WV CF4 1OA",
        state: "WV",
        zip: "CF4 1OA",
        userName: "Coleman.Kshlerin",
        password: "KUfjYrfGrTq_66i",
        email: "Coleman_Kshlerin76@gmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gseguin/128.jpg"
    },
    {
        name: "Ms. Ted Hickle",
        dateOfBirth: "1962-3-2",
        streetAddress: "142 Otha Street",
        city: "Port Bernita, MT CN1 9EL",
        state: "MT",
        zip: "CN1 9EL",
        userName: "Ted49",
        password: "zPIHf1GTLMvZyUW",
        email: "Ted.Hickle79@hotmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nicollerich/128.jpg"
    },
    {
        name: "Maiya Bergnaum",
        dateOfBirth: "1976-11-11",
        streetAddress: "593 Keyshawn Summit",
        city: "Yostfurt",
        state: "KS",
        zip: "RN51 5YZ",
        userName: "Maiya.Bergnaum9",
        password: "6gBxuqrbIwMH2Rg",
        email: "Maiya.Bergnaum@gmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dicesales/128.jpg"
    },
    {
        name: "Jean Satterfield",
        dateOfBirth: "1989-4-13",
        streetAddress: "00527 Reva Groves",
        city: "Veumshire",
        state: "Veumshire",
        zip: "SC",
        userName: "Jean96",
        password: "tq8jhUKFZlyv7Uk",
        email: "Jean19@gmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stefooo/128.jpg"
    },

];

const lastPerson: Person = PERSONS.find((_, index: number, persons: Person[]) => index == persons.length - 1);

const firstPerson: Person = PERSONS.find((_, index: number, persons: Person[]) => index == 0);

