import { StylisticDevice } from "../model/stylisticdevice.model"
import { InMemoryDbService } from "angular-in-memory-web-api";

export class MockService implements InMemoryDbService {
    createDb(){
        let stylisticDevice:StylisticDevice[] =[{id: 1, name: "Allégorie"},
                                                {id: 2, name: "Allitération"},
                                                {id: 3, name: "Anacoluthe"},
                                                {id: 4, name: "Anaphore"},
                                                {id: 5, name: "Antiphrase"},
                                                {id: 6, name: "Antithèse"},
                                                {id: 7, name: "Apostrophe"},
                                                {id: 8, name: "Assonance"},
                                                {id: 9, name: "Asyndète"},
                                                {id: 10, name: "Chiasme"},
                                                {id: 11, name: "Comparaison"},
                                                {id: 12, name: "Ellipse"},
                                                {id: 13, name: "Énumération"},
                                                {id: 14, name: "Euphémisme"},
                                                {id: 15, name: "Gradation"},
                                                {id: 16, name: "Hypallage"},
                                                {id: 17, name: "Hyperbole"},
                                                {id: 18, name: "Litote"},
                                                {id: 19, name: "Métaphore"},
                                                {id: 20, name: "Métonymie"},
                                                {id: 21, name: "Oxymore"},
                                                {id: 22, name: "Parallélisme"},
                                                {id: 23, name: "Paronomase"},
                                                {id: 24, name: "Périphrase"},
                                                {id: 25, name: "Personnification"},
                                                {id: 26, name: "Question rhétorique "},
                                                {id: 27, name: "Synecdoque"},
                                                {id: 28, name: "Zeugma"}]                                              
        return {stylisticDevice}
    }

    get(reqInfo?:RequestInfo){

    }
    post(reqInfo?:RequestInfo){

    }
}