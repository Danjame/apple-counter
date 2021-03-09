import { observable, action, computed } from 'mobx'

class Apples {
  @observable num = 0;
  @observable currentApples = [];
  @observable eatenApples = {
    num: 0,
    weight: 0
  }
  @action pick = () => {
    this.num ++
    this.currentApples.push({
      id: this.num,
      weight: 200 + Math.round(Math.random() * 100),
    })
  }
  @action eat = (index) => {
    const apple =  this.currentApples[index]
    this.currentApples.splice(index, 1)
    this.eatenApples.num ++
    this.eatenApples.weight += apple.weight
  }
  @computed get currentNum () {
    return this.currentApples.length
  }
  @computed get currentWeight () {
    return this.currentApples.reduce((total, current)=>
      total+=current.weight
    , 0)
  }
}

const apples = new Apples()

export default apples