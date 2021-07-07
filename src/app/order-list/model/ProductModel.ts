export class ProductModel{
        name:string;
        keywords:string;
        description:string;
        content:string;
        parentCatid:string;
        subCatid:string;
        childCatId:string;
        imageUrl:string[];
        price:string;
        tax:string;
        promotion:string[];
        IsAvailable:boolean;
        StockQty:string;
        colorAttributes:string[ ];
        sizeAttributes:string[];
        orgId:string;
        _id?:string;
        _v?:number;
}