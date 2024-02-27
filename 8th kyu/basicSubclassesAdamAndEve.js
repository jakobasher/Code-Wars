class Human {}
class Woman extends Human {}
class Man extends Human {}

class God {
  static create() {
    const Adam = new Man()
    const Eve = new Woman()
    return [Adam, Eve]
  }
}
