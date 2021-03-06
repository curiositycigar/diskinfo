# diskinfo

>Disk usage info on both *nix (via `df`) and Windows (via `WMIC`) systems

[![npm z][npm-image]][npm-url]
[![Build status][appveyor-image]][appveyor-url]

## Install

```sh
npm install @dropb/diskinfo
```

## Usage examples

```js
// JS example (Windows)

const { diskinfo } = require('@dropb/diskinfo');

diskinfo()
  .then(result => console.log(result))
  .catch(err => console.error(err.message));
/* OUTPUT:
[{
    fstype: '3',
    size: 189879426220032,
    used: 53218675523584,
    avail: 136660750696448,
    pcent: '29%',
    target: 'C:'
  },
  {
    fstype: '2',
    size: 16431471132672,
    used: 4540711567360,
    avail: 11890759565312,
    pcent: '28%',
    target: 'F:'
  },
  {
    fstype: '4',
    size: 110151046529024,
    used: 108627465601024,
    avail: 1523580928000,
    pcent: '99%',
    target: 'V:'
  }]
*/
```

```ts
// Typescript example (Ubuntu)

import { diskinfo, DiskInfo } from '@dropb/diskinfo';

async function run() {
  const result: DiskInfo = await diskinfo('./');
  console.log(result)
}
run();
/* OUTPUT:
{ fstype: '/dev/sda1',
  size: 47242534912,
  used: 21033943040,
  avail: 23785177088,
  pcent: '47%',
  target: '/' }
*/

```

## API

```ts
/**
 * @param file - get info of the filesystem containing the specified file or directory
 * @returns promise for an object with the info for the specified file or directory
 */
function diskinfo(file: string): Promise<DiskInfo>;

/**
 * @returns promise for an array with the info for all mounted filesystem
 */
function diskinfo(): Promise<DiskInfo[]>;

/**
 * Info of the filesystem
 */
interface DiskInfo {
    /**
     * POSIX - File system type
     *
     * Win32 - Win32_LogicalDisk DriveType(as `String`!):
     * - "0": Unknown
     * - "1": No Root Directory
     * - "2": Removable Disk
     * - "3": Local Disk
     * - "4": Network Drive
     * - "5": Compact Disc
     * - "6": RAM Disk
     */
    fstype: string;
    /**
     * Total size in bytes
     */
    size: number;
    /**
     * Used size in bytes
     */
    used: number;
    /**
     * Available size in bytes
     */
    avail: number;
    /**
     * Percentage of used divided by size
     */
    pcent: string;
    /**
     * Mount point
     */
    target: string;
}
```

## References

* [df](https://www.gnu.org/software/coreutils/manual/html_node/df-invocation.html)
* [Win32_LogicalDisk WMI class](https://msdn.microsoft.com/en-us/library/windows/desktop/aa394173(v=vs.85).aspx)

## License

[MIT](LICENSE)

[npm-image]: https://badge.fury.io/js/%40dropb%2Fdiskinfo.svg
[npm-url]: https://www.npmjs.com/package/@dropb/diskinfo
[appveyor-image]:https://ci.appveyor.com/api/projects/status/github/kukhariev/diskinfo
[appveyor-url]: https://ci.appveyor.com/project/kukhariev/diskinfo
