describe('Example', () => {
  beforeAll(async () => {
    console.log("RAN?")
    await device.launchApp();
    console.log("DONE")
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screeni', async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();
    await expect(element(by.text('Step OneI'))).toBeVisible();
  });

  it('should have welcome screen 2', async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();
    await expect(element(by.text('Step Onez'))).not.toBeVisible();
  });
});
