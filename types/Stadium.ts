export type Data = {
    data: Teams;
}
  
export interface Teams {
    [name: string]: TeamInfo;
}

interface TeamInfo {
    name: string;
    address: string;
    crestUrl: string;
}