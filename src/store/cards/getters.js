export const getById = state => {
    return id => {
        if (state.items.length === 0) {
            return undefined;
        }
        return state.items.find(item => item.id === id);
    }
};

export const isCreating = state => state.actionCreateStatus === 'Request';
export const isUpdating = state => state.actionUpdateStatus === 'Request';
export const isCardLoading = state => state.actionGetStatus === 'Request';
export const isCardsLoading = state => state.actionAllStatus === 'Request';
