export interface ProductModalInterface {
    product: ProductInterface;
    handleClose: () => any;
    edit?: boolean;
    previusQuantity?: number;
    idToEdit?: string;
}