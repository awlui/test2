describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Step OneI'))).toBeVisible();
  });

  it('should have welcome screen 2', async () => {
    await expect(element(by.text('Step Onez'))).not.toBeVisible();
  });
});
