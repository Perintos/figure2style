import { StylisticDevice } from "../model/stylisticdevice.model"
import { InMemoryDbService } from "angular-in-memory-web-api";

export class MockService implements InMemoryDbService {
    createDb(){
        let stylisticDevice:StylisticDevice[] =[{id: 1, name: "métaphore"},
                                                {id: 2, name: "comparaison"},
                                                {id: 3, name: "allitéraation"},
                                                {id: 4, name: "oxymore"},
                                                {id: 5, name: "pléonasme"}]

        return {stylisticDevice}
    }

    get(reqInfo?:RequestInfo){

    }
    post(reqInfo?:RequestInfo){

    }
}