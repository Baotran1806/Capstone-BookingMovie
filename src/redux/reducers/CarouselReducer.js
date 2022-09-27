import { SET_CAROUSEL } from "../types/CarouselType";


const stateDefault = {
    arrImg: [
        {
            "maPhim":10548,
            "hinhAnh":"http://movienew.cybersoft.edu.vn/hinhanh/sinh-vat-huyen-bi-nhung-bi-mat-cua-dumbledore_gp01.jpg"
        }
    ],

}


export const CarouselReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case SET_CAROUSEL: {
            state.arrImg = action.arrImg;
            return {...state}
        }

        default: return { ...state }
    }

}