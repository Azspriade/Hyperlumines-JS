class guerrier{
    constructor(name, PV, ATK, précision){
        this.name = name
        this.ATK = ATK
        this.PV = PV
        this.PRC = précision
    }

    Combat(PV){
        PV = this.PV -= this.ATK
    }

}

let Bob = new guerrier("Bob", 10, 1)

let Patrick = new guerrier ("Patrick", 8, 1.5)


console.log("3, 2, 1, FIGHT !")

    while(Bob.PV > 0 && Patrick.PV > 0) {
            console.log("Bob attaque !!!! Patrick se fait rétame !!")
        Bob.Combat(Patrick.PV)
            console.log(Patrick.PV, Bob.PV)
            console.log("Patrick contre attaque !! Bob est amoché !")
        Patrick.Combat(Bob.PV)
            console.log(Patrick.PV, Bob.PV)
    }

console.log("Bob est K.O. !!!")
