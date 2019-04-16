import { $Jasonette, TemplateItem } from 'jasonette-types';

let fishes = [
    { color: 'red' }
    , { color: 'blue' }
    , { color: 'green' }
]

let TemplateItem : TemplateItem = {
    operator: "#each",
    name: "fishes",
    object: {
        type: "label",
        text: "${{this.color}}",
    }
};
  
const jasonette : $Jasonette = {
    $jason: {
        head: {
            title: "Sample App",
            data: { fishes },
            templates: {
                body: {
                    sections: [{
                        items: TemplateItem
                    }]
                }
            }
        }
    }
}

export default jasonette;