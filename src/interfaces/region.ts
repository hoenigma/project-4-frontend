export interface IRegion{
    id: number,
    country: string,
    region_name: string,
    info: string,
    image: string,
areas: {
        names: string[];
        images: string[];
    }[];
    links: {
        links: string[];
    }[];
    threats: {
        threats: string[];
    }[];
    wildlife: {
        wildlife: string[];
    }[];

}