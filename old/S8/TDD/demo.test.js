import {demo} from './src/demo'

describe('Pack Démo', () => {

  it('should be 6', () => {
    const a = 2*3
    expect(a).toBe(6)
  })

  test('Démo somme', () => {
    const a= 2+2
    expect(a).toBe(4)
  })

  it("should cube itself", () => {
    const a = 5
    expect(demo(a)).toBe(125)
  })

})
