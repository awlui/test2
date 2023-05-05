describe('Example', () => {
  beforeAll(async () => {
    console.log("RAN?")
    await device.launchApp();
    console.log("DONE")
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
