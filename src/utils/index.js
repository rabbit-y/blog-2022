import store from '@/store';

export const getTypeName = (typeId)=>{
    const {types} = store.getState();
    const currentType = types.find(item=>(item.id == typeId));
    return currentType?currentType.name:'无分类';
}