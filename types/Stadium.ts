export type Data = {
  data: Teams;
};

export interface Teams {
  [name: string]: TeamInfo;
}

export interface TeamInfo {
  name: string;
  address: string;
  crestUrl: string;
  id: number;
}
