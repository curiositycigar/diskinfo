/**
 * Info of the filesystem
 * @public
 */
export interface DiskInfo {
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
/**
 * @param file - get info of the filesystem containing the specified file or directory
 * @returns promise for an object with the info for the specified file or directory
 * @public
 */
declare function diskinfo(file: string): Promise<DiskInfo>;
/**
 * @returns promise for an array with the info for all mounted filesystem
 * @public
 */
declare function diskinfo(): Promise<DiskInfo[]>;
export { diskinfo };
