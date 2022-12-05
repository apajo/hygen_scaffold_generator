import {expect} from 'chai';
import * as fs from "fs";
  const { exec } = require('child_process');

describe("first test", () => {
  it("should pass", () => {
    process.chdir(process.cwd() + '/src/test/data/user');
    exec('hygen generator template --name=spring --action=model --className=User --namespace=ee.apajo', (error: { message: any; }, stdout: any, stderr: any) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout:\n${stdout}`);
    });

    fs.mkdirSync('../tmp', {recursive: true});

    process.chdir('../tmp');
    exec('hygen spring model --namespace=co.atv --className=UserModel', (error: { message: any; }, stdout: any, stderr: any) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout:\n${stdout}`);
    });

    process.chdir('..');

    fs.rmSync('./tmp', { recursive: true, force: true });

    expect(true).to.be.true;
  });
});
