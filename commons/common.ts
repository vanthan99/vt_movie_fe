export interface IProductGridItem {
    image?: string,
    rate?: number,
    title?:string,
    category?:string,
    view?: number,
    link:string,
}

type slidesToShowType = 1|3|4|5;

export interface IMovieCarousel {
    centerMode?:boolean,
    slidesToShow?:slidesToShowType,
    iCatalogInfo: ICatalogInfo
}

export interface ICatalogInfo {
    prevOnClick?:any,
    nextOnClick?:any,
    title: string,
    description: string,
}
export interface IMenuItem {
    title: string,
    link: string,
    parentLink?:string,
}
export interface IMenu {
    item: IMenuItem,
    subItems?: Array<IMenuItem>
}