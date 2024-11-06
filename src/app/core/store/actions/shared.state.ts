export interface SharedState {
    notificationType: string | null;
    notificationMessage: string | null;
    spinnerCounter: number;
}

export const initialState: SharedState = {
    notificationMessage: '',
    notificationType: '',
    spinnerCounter: 0
};
