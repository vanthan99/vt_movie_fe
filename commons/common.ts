export interface IProductGridItem {
    image: string,
    rate: number,
    title:string,
    category:string,
    view: number,
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