import lot from './data/card_d.json'

export class Card
{
  constructor(setNum) {
    this.name = lot[setNum]['Name']
    this.color = lot[setNum]['Colour']
    this.art = './'+ lot[setNum]['Card Art(Local)']
    this.setNum = setNum
    this.showing = false
  }
}

export class Digimon extends Card{
  constructor(setNum) {
    super(setNum)
    this.type = lot[setNum]['Type']
    this.playCost = parseInt(lot[setNum]['Play Cost'])
    this.dp = parseInt(lot[setNum]['DP'])
    this.level = parseInt(lot[setNum]['Level'])
    this.form = lot[setNum]['Form']
    this.attribute = lot[setNum]['Attribute']

    if (typeof lot[setNum]['Card Type'] !== 'undefined') {
      this.effect = lot[setNum]['Card Effect(s)']
    } else {
      this.effect = null
    }

    if (typeof lot[setNum]['Inherited Effect'] !== 'undefined') {
      this.inheritedEffect = lot[setNum]['Inherited Effect']
    } else {
      this.inheritedEffect = null
    }
    //digivolution conditions: [[0 - color, 1 - level, 2 - cost]]
    this.digivolultionConditions = lot[setNum]['Digivolution Conditions']
    this.isSuspended = false
    this.canAttack = false
  }

}


export class DigiEgg extends Card{
  constructor(setNum) {
    super(setNum)
    this.level = parseInt(lot[setNum]['Level'])
    this.form = lot[setNum]['Form']
    this.type = lot[setNum]['Type']
    this.inheritedEffect = lot[setNum]['Inherited Effect']
  }
}

export class Tamer extends Card{
  constructor(setNum) {
    super(setNum)
    this.playCost = parseInt(lot[setNum]['Play Cost'])
    this.effect = lot[setNum]['Card Effect(s)']
    this.securityEffect = lot[set_number]["Security Effect"]
  }
}

export class Option extends Card{
  constructor(setNum) {
    super(setNum)
    this.playCost = parseInt(lot[setNum]['Play Cost'])
    this.effect = lot[setNum]['Card Effect(s)']
    this.securityEffect = lot[set_number]["Security Effect"]
  }
}



export default function getCard(setNum) {

  var cType = lot[setNum]['Card Type']

  if (cType === "Digimon"){
    return new Digimon(setNum);
  } else if (cType == "Digi-Egg") { 
    return new DigiEgg(setNum);
  } else if (cType == "Tamer") {
    return new Tamer(setNum);
  } else {
    return new Option(setNum);
  }
}



//const c = new getCard('BT1-007')

//console.log(c);