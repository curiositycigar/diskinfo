export declare const posix: (file: string) => {
    exe: string;
    args: string[];
    parse: (stdout: string) => {
        fstype: string;
        size: number;
        used: number;
        avail: number;
        pcent: string;
        target: string;
    }[];
};
