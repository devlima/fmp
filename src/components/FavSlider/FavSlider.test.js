import FavData from './data.js';

FavData.map((item) => {
  test('valid nav name', () => {
    expect(item.name).toBeDefined();
    expect(item.name).not.toHaveLength(0);
  })

  test('valid nav icon', () => {
    expect(item.icon).toBeDefined();
  })
})