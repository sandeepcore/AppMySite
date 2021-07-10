export class CategoryModel {
        catName: string;
        orgId: string;
        subCat: SubCategory[]=[];
        _id:string;
        appId:string;
        __v:string;
}

export class SubCategory {
        subCategory: string;
        id: string;
        Items: ItemCategory[]=[];
}


export class ItemCategory {
        name: string;
        id: string;
}