import spaceThousands from 'script/spaceThousands.js'

describe('Should space 1000', () => {
  it('input as string', () => {
    expect(spaceThousands(1000))
      .toBe('1 000')
  })

  it('input as number', () => {
    expect(spaceThousands('1000'))
      .toBe('1 000')
  })
})

it('Should space negative numbers', () => {
  expect(spaceThousands(-1000)).toBe('-1 000')
})

it('Should space decimal numbers', () => {
  expect(spaceThousands('1000.0000')).toBe('1 000.0000')
})

it('Should space a million', () => {
  expect(spaceThousands(1000000)).toBe('1 000 000')
})
