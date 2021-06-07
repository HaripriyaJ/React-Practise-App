export interface InputFieldProp {
    name:string;
    type: string;
    placeholder:string;
    onBlur: (event:any) => any;
    onChange: (event:any) => any;
    label?:string;
    width?: string;
    onKeyUp?: (event:any) => any;
}


export interface InputErrorProp {
    message: string;
}
